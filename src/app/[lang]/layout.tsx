import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

import { getDictionary, hasLocale, locales } from "@/i18n/config";
import { I18nProvider } from "@/i18n/provider";

// Only /en and /it exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { languages: { en: "/en", it: "/it" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider lang={lang} dict={getDictionary(lang)}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
