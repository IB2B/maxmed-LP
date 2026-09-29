"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "lucide-react";

import { useI18n } from "@/i18n/provider";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const inputClass =
  "h-11 w-full rounded-md border border-hairline bg-white px-3 text-base tracking-[-0.01em] text-ink transition-colors outline-none placeholder:text-faint hover:border-[#d6d6d6] focus:border-primary focus:ring-3 focus:ring-primary/20 aria-invalid:border-error aria-invalid:ring-error/10";

export function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium tracking-[-0.01em] text-ink">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] tracking-[-0.01em] text-error">
          {error}
        </p>
      )}
    </div>
  );
}

/** Hidden from people and screen readers; bots fill it and get silently dropped. */
export function Honeypot({ idPrefix = "" }: { idPrefix?: string }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor={`${idPrefix}website`}>Website</label>
      <input id={`${idPrefix}website`} name="website" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="rounded-md border border-error/20 bg-error/[0.05] px-3 py-2.5 text-sm text-[#c50000]">
      {message}
    </p>
  );
}

export function SuccessMessage({
  title,
  children,
  onReset,
  resetLabel,
}: {
  title: string;
  children: React.ReactNode;
  onReset: () => void;
  resetLabel: string;
}) {
  return (
    <div className="anim-in flex h-full flex-col items-center justify-center py-6 text-center" role="status">
      <span className="grid size-14 place-items-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
        <span className="grid size-10 place-items-center rounded-full bg-emerald-500 text-white">
          <CheckIcon className="size-5" strokeWidth={3} />
        </span>
      </span>
      <h3 className="mt-7 text-2xl leading-8 font-semibold tracking-[-0.03em] text-balance text-ink">
        {title}
      </h3>
      <p className="mt-2 max-w-[380px] text-[15px] leading-6 tracking-[-0.005em] text-body">{children}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 text-sm font-medium tracking-[-0.01em] text-ink underline underline-offset-4 hover:text-body"
      >
        {resetLabel}
      </button>
    </div>
  );
}

type Values = Record<string, string>;

/**
 * Shared submit logic for lead forms: client validation, UTM capture,
 * POST to `endpoint`, server errors and the success state.
 */
export function useLeadForm<K extends string>(
  endpoint: string,
  validate: (values: Values) => Partial<Record<K, string>>,
  /** Prefix for element ids, when several forms share a page. */
  idPrefix = ""
) {
  const { lang, dict } = useI18n();
  const utm = useRef<Record<string, string>>({});
  const [errors, setErrors] = useState<Partial<Record<K, string>>>({});
  const [formError, setFormError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<Values | null>(null);

  // Remember which campaign link brought the visitor here.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = params.get(key);
      if (value) utm.current[key] = value;
    }
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Values;
    const clientErrors = validate(values);
    setErrors(clientErrors);
    setFormError("");
    const firstInvalid = Object.keys(clientErrors)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setSending(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, lang, utm: utm.current, referrer: document.referrer }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) setSent(values);
      else if (json.errors) setErrors(json.errors);
      else setFormError(json.error ?? dict.forms.errors.generic);
    } catch {
      setFormError(dict.forms.errors.offline);
    } finally {
      setSending(false);
    }
  };

  // Clear a field's error as soon as the visitor edits it.
  const onInput = (event: React.FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name as K;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const invalid = (key: K) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${idPrefix}${key}-error` : undefined,
  });

  return { errors, formError, sending, sent, reset: () => setSent(null), onSubmit, onInput, invalid };
}
