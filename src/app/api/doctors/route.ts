import { NextResponse } from "next/server";

import { EMAIL_RE, clean, cleanUtm, forwardLead, leadErrors, leadLang, sendFailed } from "@/lib/leads";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const lang = leadLang(body.lang);
  const msg = leadErrors(lang);
  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    specialty: clean(body.specialty, 120),
    utm: cleanUtm(body.utm),
    referrer: clean(body.referrer, 500),
    lang,
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = msg.name;
  if (!EMAIL_RE.test(data.email)) errors.email = msg.email;
  if (data.phone.replace(/\D/g, "").length < 6) errors.phone = msg.phone;
  if (data.specialty.length < 2) errors.specialty = msg.specialty;
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  if (!(await forwardLead({ type: "doctor", ...data }))) {
    return NextResponse.json(
      { error: sendFailed(lang, "doctor") },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
