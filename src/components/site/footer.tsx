import Link from "next/link";

import { Divider, Frame } from "@/components/site/frame";
import { Logo } from "@/components/site/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "The details", href: "#details" },
      { label: "How it works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Book a demo", href: "#demo" },
      { label: "Join as a doctor", href: "#doctors" },
      { label: "Log in", href: "/login" },
    ],
  },
  {
    // TODO: these pages don't exist yet. Needed for GDPR before the campaign.
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <Frame className="grid gap-12 px-5 pt-16 pb-14 sm:px-10 lg:grid-cols-[1fr_auto] lg:gap-24">
        <div className="max-w-[320px]">
          <Link href="/" aria-label="MaxMed, home">
            <Logo />
          </Link>
          <p className="mt-4 text-[15px] leading-6 tracking-[-0.005em] text-body">
            Telemedicine for care facilities. Triage, video consultations, emergencies and
            prescriptions in one console.
          </p>
          <a
            href="#demo"
            className="mt-6 inline-flex text-[15px] font-medium tracking-[-0.01em] text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink"
          >
            Get in touch
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
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
        </nav>
      </Frame>

      <Divider />
      <Frame className="flex flex-col gap-2 px-5 py-6 text-[13px] tracking-[-0.01em] text-mute sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} MaxMed Telemedicina. All rights reserved.</p>
        <p>
          Emoji graphics by{" "}
          <a
            href="https://openmoji.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-2 hover:text-body"
          >
            OpenMoji
          </a>
          , licensed under{" "}
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
