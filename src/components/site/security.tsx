import Image from "next/image";

import { Divider, Frame } from "@/components/site/frame";
import { securityPoints } from "@/data/security";
import { getDictionary, type Locale } from "@/i18n/config";

// Unconfirmed claims stay off the page until they're checked in src/data/security.ts.
const points = securityPoints.filter((point) => point.confirmed);

export function Security({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).security;
  return (
    <section id="security" className="scroll-mt-[68px]">
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-[560px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-7 tracking-normal text-balance text-body">
          {t.subtitle}
        </p>
      </Frame>

      <Divider />
      <Frame>
        <ul className="grid gap-px bg-hairline md:grid-cols-3">
          {points.map((point) => (
            <li key={point.icon} className="flex gap-4 bg-white px-5 py-6 sm:px-8">
              <Image
                src={`/icons/${point.icon}.svg`}
                alt=""
                width={52}
                height={52}
                className="-my-1.5 -ml-1.5 size-13 shrink-0"
              />
              <div>
                <h3 className="text-base leading-6 font-semibold tracking-[-0.01em] text-ink">
                  {point[lang].title}
                </h3>
                <p className="mt-1 text-[15px] leading-6 tracking-[-0.005em] text-body">{point[lang].text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Frame>
      <Divider />
    </section>
  );
}
