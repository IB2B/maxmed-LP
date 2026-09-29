import Link from "next/link";

import { Divider, Frame } from "@/components/site/frame";
import { Logo } from "@/components/site/logo";
import { getDictionary, homeHash, type Locale } from "@/i18n/config";
import { LOGIN_URL } from "@/lib/links";

export function Footer({ lang }: { lang: Locale }) {
  const { footer: t, common } = getDictionary(lang);
  const columns = [
    {
      title: t.product,
      links: [
        { label: t.links.platform, href: homeHash(lang, "platform") },
        { label: t.links.details, href: homeHash(lang, "details") },
        { label: t.links.howItWorks, href: homeHash(lang, "how-it-works") },
        { label: t.links.faq, href: homeHash(lang, "faq") },
      ],
    },
    {
      title: t.getStarted,
      links: [
        { label: common.bookDemo, href: homeHash(lang, "demo") },
        { label: common.joinDoctor, href: homeHash(lang, "doctors") },
        { label: common.logIn, href: LOGIN_URL },
      ],
    },
    {
      title: t.legal,
      links: [
        { label: t.links.privacy, href: `/${lang}/privacy` },
        { label: t.links.terms, href: `/${lang}/terms` },
        { label: t.links.cookies, href: `/${lang}/cookies` },
      ],
    },
  ];
  const contact = [
    { label: "info@maxmed.it", href: "mailto:info@maxmed.it" },
    { label: "+39 0350510059", href: "tel:+390350510059" },
    {
      label: t.address,
      href: "https://www.google.com/maps/search/?api=1&query=Via+Giorgio+Oprandi+1,+24065+Lovere+BG",
      external: true,
    },
  ];

  return (
    <footer>
      <Frame className="grid gap-12 px-5 pt-16 pb-14 sm:px-10 lg:grid-cols-[minmax(260px,1fr)_auto] lg:gap-16">
        <div className="max-w-[320px]">
          <Link href={`/${lang}`} aria-label={common.home}>
            <Logo />
          </Link>
          <p className="mt-4 text-[15px] leading-6 tracking-[-0.005em] text-body">
            {t.tagline}
          </p>
          <a
            href={homeHash(lang, "demo")}
            className="mt-6 inline-flex text-[15px] font-medium tracking-[-0.01em] text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink"
          >
            {t.getInTouch}
          </a>
        </div>

        <nav aria-label={t.nav} className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs font-medium tracking-wider text-mute uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] tracking-[-0.01em] text-body transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-xs font-medium tracking-wider text-mute uppercase">{t.contact}</p>
            <address className="mt-4 space-y-3 not-italic">
              {contact.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="block text-[15px] tracking-[-0.01em] whitespace-pre-line text-body transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </address>
          </div>
        </nav>
      </Frame>

      <Divider />
      <Frame className="flex flex-col gap-2 px-5 py-6 text-[13px] tracking-[-0.01em] text-mute sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} MaxMed Telemedicina. {t.rights}</p>
        <p>
          {t.emojiBy}{" "}
          <a
            href="https://openmoji.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-2 hover:text-body"
          >
            OpenMoji
          </a>
          , {t.licensedUnder}{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-2 hover:text-body"
          >
            CC BY-SA 4.0
          </a>
          .
        </p>
      </Frame>
    </footer>
  );
}
