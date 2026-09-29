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
import { format } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Key = "name" | "email" | "phone" | "specialty";

function validate(v: Record<string, string>, errors: Dictionary["forms"]["errors"]) {
  const e: Partial<Record<Key, string>> = {};
  if (v.name.trim().length < 2) e.name = errors.name;
  if (!EMAIL_RE.test(v.email.trim())) e.email = errors.email;
  if (v.phone.replace(/\D/g, "").length < 6) e.phone = errors.phone;
  if (v.specialty.trim().length < 2) e.specialty = errors.specialty;
  return e;
}

const P = "doc-";

export function DoctorForm() {
  const f = useI18n().dict.forms;
  const t = f.doctor;
  const { errors, formError, sending, sent, reset, onSubmit, onInput, invalid } = useLeadForm<Key>(
    "/api/doctors",
    (values) => validate(values, f.errors),
    P
  );

  if (sent) {
    return (
      <SuccessMessage
        title={format(t.thanks, { name: sent.name.trim().split(" ").at(-1) ?? "" })}
        onReset={reset}
        resetLabel={t.another}
      >
        {format(t.body, { email: sent.email.trim() })}
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} onInput={onInput} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Field id={`${P}name`} label={f.fullName} error={errors.name}>
          <input id={`${P}name`} name="name" autoComplete="name" className={inputClass} {...invalid("name")} />
        </Field>
        <Field id={`${P}email`} label={f.email} error={errors.email}>
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
        <Field id={`${P}phone`} label={f.phone} error={errors.phone}>
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
        <Field id={`${P}specialty`} label={t.specialty} error={errors.specialty}>
          <input
            id={`${P}specialty`}
            name="specialty"
            placeholder={t.specialtyPlaceholder}
            className={inputClass}
            {...invalid("specialty")}
          />
        </Field>
      </div>

      <Honeypot idPrefix={P} />
      <FormError message={formError} />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-5 tracking-[-0.01em] text-mute">
          {t.privacy}
        </p>
        <Button
          type="submit"
          disabled={sending}
          className="h-12 w-full rounded-full px-6 text-base sm:w-auto"
        >
          {sending ? f.sending : t.submit}
          {!sending && <ArrowRightIcon data-icon="inline-end" />}
        </Button>
      </div>
    </form>
  );
}
