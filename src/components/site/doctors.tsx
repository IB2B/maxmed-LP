import { Divider, Frame } from "@/components/site/frame";
import { DoctorForm } from "@/components/site/doctor-form";
import { GreenCheck } from "@/components/site/green-check";
import { DoctorReportsMockup } from "@/components/site/doctor-reports-mockup";
import { getDictionary, type Locale } from "@/i18n/config";

export function Doctors({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).doctors;
  return (
    <section id="doctors" className="scroll-mt-[68px]">
      <Frame>
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          <div className="bg-white px-5 py-16 sm:px-10 sm:py-20">
            <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[44px]">
              {t.title}
            </h2>
            <ul className="mt-10 space-y-6">
              {t.benefits.map((b) => (
                <li key={b.title} className="flex gap-3.5">
                  {/* mt-1 centres the 20px tick on the 28px title line. */}
                  <GreenCheck className="mt-1" />
                  <div>
                    <p className="text-base leading-7 font-semibold tracking-[-0.015em] text-ink">{b.title}</p>
                    <p className="text-[15px] leading-6 tracking-[-0.005em] text-body">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden place-items-center bg-[#eef3fb] p-10 lg:grid">
            <DoctorReportsMockup />
          </div>
        </div>
      </Frame>

      <Divider />
      <Frame className="px-5 py-10 sm:px-10">
        <p className="mb-6 text-xl leading-7 font-semibold tracking-[-0.02em] text-ink">
          {t.applyTitle}
        </p>
        <DoctorForm />
      </Frame>
      <Divider />
    </section>
  );
}
