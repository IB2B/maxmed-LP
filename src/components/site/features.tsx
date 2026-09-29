import { Divider, Frame } from "@/components/site/frame";
import { FeatureShowcase } from "@/components/site/feature-showcase";
import { getDictionary, type Locale } from "@/i18n/config";

export function Features({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).features;
  return (
    <section id="platform" className="scroll-mt-[68px]">
      <Divider />
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-7 tracking-normal text-body">
          {t.subtitle}
        </p>
      </Frame>

      <Divider />
      <Frame>
        <FeatureShowcase />
      </Frame>
    </section>
  );
}
