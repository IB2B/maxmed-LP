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
import { format } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import type { Dictionary } from "@/i18n/dictionaries/en";

// Must match FACILITY_TYPES in src/app/api/demo/route.ts; labels are in the dictionaries.
const facilityTypes = ["care-home", "clinic", "pharmacy", "home-care", "other"] as const;

type Key = "name" | "facility" | "email" | "phone" | "facilityType";

function validate(v: Record<string, string>, errors: Dictionary["forms"]["errors"]) {
  const e: Partial<Record<Key, string>> = {};
  if (v.name.trim().length < 2) e.name = errors.name;
  if (v.facility.trim().length < 2) e.facility = errors.facility;
  if (!EMAIL_RE.test(v.email.trim())) e.email = errors.email;
  if (v.phone.replace(/\D/g, "").length < 6) e.phone = errors.phone;
  if (!v.facilityType) e.facilityType = errors.facilityType;
  return e;
}

export function DemoForm() {
  const f = useI18n().dict.forms;
  const t = f.demo;
  const { errors, formError, sending, sent, reset, onSubmit, onInput, invalid } = useLeadForm<Key>(
    "/api/demo",
    (values) => validate(values, f.errors)
  );

  if (sent) {
    return (
      <SuccessMessage
        title={format(t.thanks, { name: sent.name.trim().split(" ")[0] })}
        onReset={reset}
        resetLabel={t.another}
      >
        {format(t.body, { email: sent.email.trim() })}
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} onInput={onInput} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={f.fullName} error={errors.name}>
          <input id="name" name="name" autoComplete="name" className={inputClass} {...invalid("name")} />
        </Field>
        <Field id="facility" label={t.facility} error={errors.facility}>
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
        <Field id="email" label={t.workEmail} error={errors.email}>
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
        <Field id="phone" label={f.phone} error={errors.phone}>
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
      <Field id="facilityType" label={t.facilityType} error={errors.facilityType}>
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
              {t.choose}
            </option>
            {facilityTypes.map((type) => (
              <option key={type} value={type} className="text-ink">
                {t.types[type]}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-mute" />
        </div>
      </Field>

      <Honeypot />
      <FormError message={formError} />

      <Button type="submit" disabled={sending} className="h-12 w-full rounded-full px-6 text-base">
        {sending ? f.sending : t.submit}
        {!sending && <ArrowRightIcon data-icon="inline-end" />}
      </Button>
      <p className="text-center text-[13px] leading-5 tracking-[-0.01em] text-mute">
        {t.privacy}
      </p>
    </form>
  );
}
