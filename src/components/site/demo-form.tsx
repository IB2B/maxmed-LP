"use client";

import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  EMAIL_RE,
  Field,
  FormError,
  Honeypot,
  SuccessMessage,
  inputClass,
  useLeadForm,
} from "@/components/site/lead-form";

const facilityTypes = [
  { value: "care-home", label: "Care home (RSA)" },
  { value: "clinic", label: "Clinic or medical centre" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "home-care", label: "Home care service" },
  { value: "other", label: "Other" },
];

type Key = "name" | "facility" | "email" | "phone" | "facilityType";

function validate(v: Record<string, string>) {
  const e: Partial<Record<Key, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (v.facility.trim().length < 2) e.facility = "Please enter your facility's name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (v.phone.replace(/\D/g, "").length < 6) e.phone = "Please enter a valid phone number.";
  if (!v.facilityType) e.facilityType = "Please choose a facility type.";
  return e;
}

export function DemoForm() {
  const { errors, formError, sending, sent, reset, onSubmit, onInput, invalid } = useLeadForm<Key>(
    "/api/demo",
    validate
  );

  if (sent) {
    return (
      <SuccessMessage
        title={`Thanks, ${sent.name.trim().split(" ")[0]}. Your request is in.`}
        onReset={reset}
        resetLabel="Send another request"
      >
        Our team will contact you at <span className="text-ink">{sent.email.trim()}</span> to set up
        your demo.
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} onInput={onInput} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" className={inputClass} {...invalid("name")} />
        </Field>
        <Field id="facility" label="Facility name" error={errors.facility}>
          <input
            id="facility"
            name="facility"
            autoComplete="organization"
            className={inputClass}
            {...invalid("facility")}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Work email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={inputClass}
            {...invalid("email")}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+39"
            className={inputClass}
            {...invalid("phone")}
          />
        </Field>
      </div>
      <Field id="facilityType" label="Type of facility" error={errors.facilityType}>
        <div className="relative">
          <select
            id="facilityType"
            name="facilityType"
            defaultValue=""
            className={cn(inputClass, "appearance-none pr-10 invalid:text-faint")}
            required
            {...invalid("facilityType")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {facilityTypes.map((type) => (
              <option key={type.value} value={type.value} className="text-ink">
                {type.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-mute" />
        </div>
      </Field>

      <Honeypot />
      <FormError message={formError} />

      <Button type="submit" disabled={sending} className="h-12 w-full rounded-full px-6 text-base">
        {sending ? "Sending…" : "Book my demo"}
        {!sending && <ArrowRightIcon data-icon="inline-end" />}
      </Button>
      <p className="text-center text-[13px] leading-5 tracking-[-0.01em] text-mute">
        We only use these details to contact you about MaxMed.
      </p>
    </form>
  );
}
