import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Divider, Frame } from "@/components/site/frame";
import { getDictionary, type Locale } from "@/i18n/config";

// Icons: OpenMoji (CC BY-SA 4.0, credit required on the page), served from /public/icons.
// In the same order as details.items in the dictionaries.
const icons = [
  "microscope",
  "health-worker",
  "speech-balloon",
  "graduation-cap",
  "clipboard",
  "compass",
  "bar-chart",
  "receipt",
  "tickets",
  "flag-italy",
];

export function Details({ lang }: { lang: Locale }) {
  const { details: t, common } = getDictionary(lang);
  return (
    <section id="details" className="scroll-mt-[68px]">
      <Divider />
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-[520px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          {t.title}
        </h2>
      </Frame>

      <Divider />
      <Frame>
        <ul className="grid gap-px bg-hairline md:grid-cols-2">
          {t.items.map((item, i) => (
            <li key={item.title} className="flex gap-4 bg-white px-5 py-6 sm:px-8">
              <Image
                src={`/icons/${icons[i]}.svg`}
                alt=""
                width={52}
                height={52}
                className="-my-1.5 -ml-1.5 size-13 shrink-0"
              />
              <div>
                <h3 className="text-base leading-6 font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-[15px] leading-6 tracking-[-0.005em] text-body">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Frame>

      <Divider />
      <Frame className="flex flex-col gap-6 px-5 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl leading-7 font-semibold tracking-[-0.02em] text-ink">
            {t.ctaTitle}
          </p>
          <p className="mt-1 text-[15px] tracking-normal text-body">
            {t.ctaText}
          </p>
        </div>
        <Button
          className="h-12 shrink-0 rounded-full px-6 text-base"
          render={<a href="#demo" />}
          nativeButton={false}
        >
          {common.bookDemo}
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </Frame>
      <Divider />
    </section>
  );
}
