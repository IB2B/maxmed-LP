import { NextResponse, type NextRequest } from "next/server";

import { LOCALE_COOKIE, defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config";

/** First supported language in the browser's Accept-Language header, by preference. */
function fromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q.split("=")[1]) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((r) => hasLocale(r.lang))?.lang as Locale | undefined;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Files from /public (e.g. /icons/x.svg, /favicon.ico) are served as they are.
  if (pathname.includes(".")) return;
  const current = locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  // Already on a language: remember it, so "/" brings the visitor back to it next time.
  if (current) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== current) {
      response.cookies.set(LOCALE_COOKIE, current, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return response;
  }

  // No language in the URL: last choice, then the browser's language, then English.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const lang =
    (saved && hasLocale(saved) ? saved : undefined) ??
    fromAcceptLanguage(request.headers.get("accept-language")) ??
    defaultLocale;

  // Keeps the query string, so UTM parameters from the emails survive the redirect.
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except API routes and Next internals.
  matcher: ["/((?!api|_next).*)"],
};
