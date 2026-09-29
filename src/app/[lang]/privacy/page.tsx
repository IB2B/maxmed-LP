import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, hasLocale } from "@/i18n/config";
import { LegalPage } from "@/components/site/legal-page";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const meta = getDictionary(lang).legal.meta.privacy;
  return {
    title: `${meta.title} — MaxMed`,
    description: meta.description,
    alternates: { languages: { en: "/en/privacy", it: "/it/privacy" } },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LegalPage lang={lang} page="privacy" />;
}
