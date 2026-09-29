import { en } from "./dictionaries/en";
import { it } from "./dictionaries/it";

export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Cookie that remembers the language a visitor last used (set by src/proxy.ts). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

const dictionaries = { en, it };
export const getDictionary = (lang: Locale) => dictionaries[lang];

/** Fills `{key}` placeholders, e.g. format("Hi {name}", { name: "Ada" }). */
export function format(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

/** Link to a section of the home page that works from any page, e.g. /it#demo. */
export const homeHash = (lang: Locale, hash: string) => `/${lang}#${hash}`;
