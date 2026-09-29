"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

/** Same page in another language: /en/privacy -> /it/privacy. */
function swapLocale(pathname: string, lang: Locale) {
  const rest = pathname.replace(/^\/(en|it)(?=\/|$)/, "");
  return `/${lang}${rest}`;
}

/** EN | IT toggle. Keeps the page, the section (#hash) and the query string (UTM) when switching. */
export function LanguageSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const { lang: current, dict } = useI18n();

  return (
    <div
      role="group"
      aria-label={dict.common.language}
      className={cn("flex h-9 items-center rounded-full border border-hairline p-0.5", className)}
    >
      {locales.map((lang) => {
        const active = lang === current;
        const href = swapLocale(pathname, lang);
        return (
          <a
            key={lang}
            href={href}
            hrefLang={lang}
            lang={lang}
            aria-current={active ? "true" : undefined}
            aria-label={lang === "en" ? "English" : "Italiano"}
            onClick={(event) => {
              if (active) return event.preventDefault();
              event.preventDefault();
              window.location.assign(href + window.location.search + window.location.hash);
            }}
            className={cn(
              "grid h-full min-w-9 place-items-center rounded-full px-2 font-mono text-xs font-medium tracking-wider uppercase transition-colors",
              active ? "bg-ink text-white" : "text-mute hover:text-ink"
            )}
          >
            {lang}
          </a>
        );
      })}
    </div>
  );
}
