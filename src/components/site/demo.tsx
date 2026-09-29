import { Divider, Frame } from "@/components/site/frame";
import { DemoForm } from "@/components/site/demo-form";
import { GreenCheck } from "@/components/site/green-check";
import { getDictionary, type Locale } from "@/i18n/config";

export function Demo({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).demo;
  return (
    <section id="demo" className="scroll-mt-[68px]">
      <Frame>
        <div className="grid gap-px bg-hairline lg:grid-cols-[1fr_1.1fr]">
          <div className="bg-white px-5 py-16 sm:px-10 sm:py-20">
            <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[44px]">
              {t.title}
            </h2>
            <p className="mt-5 max-w-[420px] text-[17px] leading-7 tracking-normal text-body">
              {t.subtitle}
            </p>
            <ul className="mt-10 space-y-4 border-t border-hairline pt-8">
              {t.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3.5 text-[15px] leading-6 tracking-[-0.005em] text-body">
                  {/* mt-0.5 centres the 20px tick on the 24px first line. */}
                  <GreenCheck className="mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-white px-5 py-16 sm:px-10 sm:py-20">
            <DemoForm />
          </div>
        </div>
      </Frame>
      <Divider />
    </section>
  );
}
