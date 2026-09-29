"use client";

import { createContext, useContext } from "react";

import type { Dictionary } from "./dictionaries/en";
import type { Locale } from "./config";

const I18nContext = createContext<{ lang: Locale; dict: Dictionary } | null>(null);

/** Gives client components the current language's dictionary (only that one reaches the browser). */
export function I18nProvider({ lang, dict, children }: { lang: Locale; dict: Dictionary; children: React.ReactNode }) {
  return <I18nContext.Provider value={{ lang, dict }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
