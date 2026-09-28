import { NextResponse } from "next/server";

import { EMAIL_RE, clean, cleanUtm, forwardLead } from "@/lib/leads";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    specialty: clean(body.specialty, 120),
    utm: cleanUtm(body.utm),
    referrer: clean(body.referrer, 500),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email.";
  if (data.phone.replace(/\D/g, "").length < 6) errors.phone = "Please enter a valid phone number.";
  if (data.specialty.length < 2) errors.specialty = "Please enter your specialty.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  if (!(await forwardLead({ type: "doctor", ...data }))) {
    return NextResponse.json(
      { error: "We couldn't send your application. Please try again in a moment." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
