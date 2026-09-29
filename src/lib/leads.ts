import { getDictionary, hasLocale, type Locale } from "@/i18n/config";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/** The form's language (sent by the page), falling back to English. */
export const leadLang = (value: unknown): Locale =>
  typeof value === "string" && hasLocale(value) ? value : "en";

/** Validation messages in the visitor's language, the same ones the forms show. */
export const leadErrors = (lang: Locale) => getDictionary(lang).forms.errors;

const SEND_FAILED = {
  en: {
    demo: "We couldn't send your request. Please try again in a moment.",
    doctor: "We couldn't send your application. Please try again in a moment.",
  },
  it: {
    demo: "Non siamo riusciti a inviare la tua richiesta. Riprova tra qualche istante.",
    doctor: "Non siamo riusciti a inviare la tua candidatura. Riprova tra qualche istante.",
  },
};
export const sendFailed = (lang: Locale, type: "demo" | "doctor") => SEND_FAILED[lang][type];

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const clean = (value: unknown, max = 200) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/** Keeps only known UTM keys, trimmed. */
export function cleanUtm(input: unknown) {
  const utm = (input ?? {}) as Record<string, unknown>;
  return Object.fromEntries(
    UTM_KEYS.map((key) => [key, clean(utm[key], 120)]).filter(([, v]) => v)
  );
}

/**
 * Sends a lead to DEMO_WEBHOOK_URL (Zapier, Make, a CRM, your backend…).
 * Without it, the lead is only logged on the server.
 * Returns false if the webhook failed.
 */
export async function forwardLead(lead: Record<string, unknown> & { type: "demo" | "doctor" }) {
  const payload = { ...lead, submittedAt: new Date().toISOString() };
  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (!webhook) {
    console.info(`[lead:${lead.type}] new lead (set DEMO_WEBHOOK_URL to forward it):`, payload);
    return true;
  }
  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return true;
  } catch (err) {
    console.error(`[lead:${lead.type}] webhook failed`, err);
    return false;
  }
}
