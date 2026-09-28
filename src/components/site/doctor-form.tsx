"use client";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  EMAIL_RE,
  Field,
  FormError,
  Honeypot,
  SuccessMessage,
  inputClass,
  useLeadForm,
} from "@/components/site/lead-form";

type Key = "name" | "email" | "phone" | "specialty";

function validate(v: Record<string, string>) {
  const e: Partial<Record<Key, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (v.phone.replace(/\D/g, "").length < 6) e.phone = "Please enter a valid phone number.";
  if (v.specialty.trim().length < 2) e.specialty = "Please enter your specialty.";
  return e;
}

const P = "doc-";

export function DoctorForm() {
  const { errors, formError, sending, sent, reset, onSubmit, onInput, invalid } = useLeadForm<Key>(
    "/api/doctors",
    validate,
    P
  );

  if (sent) {
    return (
      <SuccessMessage
        title={`Thanks, Dr. ${sent.name.trim().split(" ").at(-1)}. Your application is in.`}
        onReset={reset}
        resetLabel="Send another application"
      >
        We&apos;ll review it and contact you at <span className="text-ink">{sent.email.trim()}</span>.
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} onInput={onInput} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Field id={`${P}name`} label="Full name" error={errors.name}>
          <input id={`${P}name`} name="name" autoComplete="name" className={inputClass} {...invalid("name")} />
        </Field>
        <Field id={`${P}email`} label="Email" error={errors.email}>
          <input
            id={`${P}email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={inputClass}
            {...invalid("email")}
          />
        </Field>
        <Field id={`${P}phone`} label="Phone" error={errors.phone}>
          <input
            id={`${P}phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+39"
            className={inputClass}
            {...invalid("phone")}
          />
        </Field>
        <Field id={`${P}specialty`} label="Specialty" error={errors.specialty}>
          <input
            id={`${P}specialty`}
            name="specialty"
            placeholder="e.g. General medicine"
            className={inputClass}
            {...invalid("specialty")}
          />
        </Field>
      </div>

      <Honeypot idPrefix={P} />
      <FormError message={formError} />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-5 tracking-[-0.01em] text-mute">
          We only use these details to review your application.
        </p>
        <Button
          type="submit"
          disabled={sending}
          className="h-12 w-full rounded-full px-6 text-base sm:w-auto"
        >
          {sending ? "Sending…" : "Apply to join"}
          {!sending && <ArrowRightIcon data-icon="inline-end" />}
        </Button>
      </div>
    </form>
  );
}
