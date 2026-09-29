"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Divider, Frame } from "@/components/site/frame";
import { format } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

const DURATION = 6000;

// Real screenshots of the console (test data), in the same order as screens.items in the dictionaries.
const files = [
  "patients",
  "new-patient-alert",
  "scheduled-queue",
  "consultations",
  "calendar",
  "prescriptions",
  "doctor-dashboard",
];

export function Screens() {
  const t = useI18n().dict.screens;
  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    return () => io.disconnect();
  }, []);

  // Keep the active tab visible in the scrollable tab row on small screens.
  useEffect(() => {
    const tab = tabsRef.current?.children[active] as HTMLElement | undefined;
    const row = tabsRef.current;
    if (tab && row) row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const count = t.items.length;
  const select = (index: number) => {
    setActive((index + count) % count);
    setRun((r) => r + 1);
  };

  const current = t.items[active];
  const playing = inView && !hovered;

  return (
    <section id="screens" className="scroll-mt-[68px]">
      <Divider />
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">{t.eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-[600px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-7 tracking-normal text-balance text-body">
          {t.subtitle}
        </p>
      </Frame>

      <Divider />
      <Frame>
        <div ref={rootRef} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div
            ref={tabsRef}
            role="tablist"
            aria-label={t.eyebrow}
            className="flex overflow-x-auto border-b border-hairline [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {t.items.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.tab}
                  type="button"
                  role="tab"
                  id={`screen-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="screen-panel"
                  onClick={() => select(i)}
                  className={cn(
                    "relative shrink-0 border-r border-hairline px-5 py-4 text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors last:border-r-0 sm:flex-1 sm:px-4",
                    selected ? "bg-white text-ink" : "bg-canvas text-mute hover:text-ink"
                  )}
                >
                  {item.tab}
                  {selected && !reducedMotion && (
                    <span
                      key={run}
                      aria-hidden
                      onAnimationEnd={() => select(active + 1)}
                      className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-ink"
                      style={{
                        animation: `fill-x ${DURATION}ms linear forwards`,
                        animationPlayState: playing ? "running" : "paused",
                      }}
                    />
                  )}
                  {selected && reducedMotion && <span aria-hidden className="absolute inset-x-0 -bottom-px h-0.5 bg-ink" />}
                </button>
              );
            })}
          </div>

          <div
            id="screen-panel"
            role="tabpanel"
            aria-labelledby={`screen-tab-${active}`}
            className="bg-canvas px-4 pt-8 pb-6 sm:px-10 sm:pt-12 sm:pb-8"
          >
            {/* Browser window around the screenshot. */}
            <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_24px_48px_-24px_rgba(0,0,0,0.25)]">
              <div className="flex h-9 items-center gap-1.5 border-b border-hairline bg-white px-3.5">
                <span className="size-2.5 rounded-full bg-hairline" />
                <span className="size-2.5 rounded-full bg-hairline" />
                <span className="size-2.5 rounded-full bg-hairline" />
                <span className="ml-3 truncate font-mono text-xs text-mute">MaxMed · {current.tab}</span>
              </div>
              <div className="relative aspect-[2000/928] bg-white">
                {files.map((file, i) => (
                  <Image
                    key={file}
                    src={`/images/console/maxmed-${file}.webp`}
                    alt={t.items[i].alt}
                    fill
                    sizes="(min-width: 1080px) 1000px, 100vw"
                    className={cn(
                      "object-cover object-top transition-opacity duration-500",
                      i === active ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden={i !== active || undefined}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
              <div key={active} className="anim-in max-w-[620px]">
                <h3 className="text-xl leading-7 font-semibold tracking-[-0.02em] text-ink">{current.title}</h3>
                <p className="mt-1.5 text-[15px] leading-6 tracking-[-0.005em] text-body">{current.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="font-mono text-xs text-mute tabular-nums">
                  {format(t.counter, { current: active + 1, total: count })}
                </span>
                <button
                  type="button"
                  onClick={() => select(active - 1)}
                  aria-label={t.previous}
                  className="grid size-9 place-items-center rounded-full border border-hairline bg-white text-ink transition-colors hover:bg-hairline-soft"
                >
                  <ArrowLeftIcon className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => select(active + 1)}
                  aria-label={t.next}
                  className="grid size-9 place-items-center rounded-full border border-hairline bg-white text-ink transition-colors hover:bg-hairline-soft"
                >
                  <ArrowRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
