import { Divider, Frame } from "@/components/site/frame";
import { Tag } from "@/components/site/feature-illustrations";
import { IS_SAMPLE, testimonials } from "@/data/testimonials";

function initials(name: string) {
  if (name.startsWith("[")) return "?";
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-[68px]">
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <div className="flex items-center justify-center gap-3">
          <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
            In their words
          </p>
          {IS_SAMPLE && <Tag tone="amber">Sample</Tag>}
        </div>
        <h2 className="mx-auto mt-4 max-w-[560px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          What care teams say about MaxMed
        </h2>
      </Frame>

      <Divider />
      <Frame>
        <ul className="grid gap-px bg-hairline md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.quote} className="flex flex-col bg-white px-6 py-8 sm:px-8 sm:py-10">
              <span aria-hidden className="font-serif text-5xl leading-none text-faint">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-[17px] leading-7 tracking-[-0.01em] text-ink">
                {t.quote}
              </blockquote>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-hairline-soft text-sm font-semibold text-body">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{t.name}</p>
                  <p className="text-[13px] tracking-[-0.01em] text-mute">
                    {t.role} · {t.facility}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Frame>
      <Divider />
    </section>
  );
}
