import { NextResponse } from "next/server";

import { EMAIL_RE, clean, cleanUtm, forwardLead, leadErrors, leadLang, sendFailed } from "@/lib/leads";

const FACILITY_TYPES = ["care-home", "clinic", "pharmacy", "home-care", "other"];

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
    facility: clean(body.facility, 160),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 40),
    facilityType: clean(body.facilityType),
    utm: cleanUtm(body.utm),
    referrer: clean(body.referrer, 500),
    lang,
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = msg.name;
  if (data.facility.length < 2) errors.facility = msg.facility;
  if (!EMAIL_RE.test(data.email)) errors.email = msg.email;
  if (data.phone.replace(/\D/g, "").length < 6) errors.phone = msg.phone;
  if (!FACILITY_TYPES.includes(data.facilityType)) errors.facilityType = msg.facilityType;
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  if (!(await forwardLead({ type: "demo", ...data }))) {
    return NextResponse.json(
      { error: sendFailed(lang, "demo") },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
