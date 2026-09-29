import { Divider, Frame } from "@/components/site/frame";
import { IS_SAMPLE, testimonials } from "@/data/testimonials";
import { getDictionary, type Locale } from "@/i18n/config";

type Testimonial = { name: string } & (typeof testimonials)[number]["en"];

function initials(name: string) {
  if (name.startsWith("[")) return "?";
  return name
    .replace(/^Dr\.?\s+/, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col rounded-xl border border-hairline bg-white p-6 sm:w-[380px]">
      <span aria-hidden className="font-serif text-4xl leading-none text-faint">
        &ldquo;
      </span>
      <blockquote className="mt-1 text-[16px] leading-7 tracking-[-0.01em] text-ink">{t.quote}</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-hairline-soft text-sm font-semibold text-body">
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-[15px] font-semibold tracking-[-0.01em] text-ink">{t.name}</span>
          <span className="block text-[13px] tracking-[-0.01em] text-mute">
            {t.role} · {t.facility}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** A row of cards that scrolls forever; the list is doubled so the loop is seamless. */
function Marquee({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className="marquee flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[...items, ...items].map((t, i) => (
          <div key={i} aria-hidden={i >= items.length || undefined}>
            <QuoteCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).testimonials;
  // Only real quotes are ever published: hidden in production until src/data/testimonials.ts
  // is filled in. Local dev previews the placeholders, tagged, so the layout can be reviewed.
  const isPreview = IS_SAMPLE && process.env.NODE_ENV === "development";
  if (IS_SAMPLE && !isPreview) return null;

  const items = testimonials.map((item) => ({ name: item.name, ...item[lang] }));
  const half = Math.ceil(items.length / 2);
  const rowA = items.slice(0, half);
  const rowB = items.slice(half);

  return (
    <section id="testimonials" className="scroll-mt-[68px]">
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-[560px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          {t.title}
        </h2>
      </Frame>

      <Divider />
      <Frame className="space-y-4 overflow-hidden bg-canvas py-10 sm:py-14">
        <Marquee items={rowA} />
        <Marquee items={rowB.length ? rowB : rowA} reverse />
      </Frame>
      <Divider />
    </section>
  );
}
