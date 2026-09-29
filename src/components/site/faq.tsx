"use client";

import { useId, useState } from "react";
import { PlusIcon } from "lucide-react";

import { Divider, Frame } from "@/components/site/frame";
import { useI18n } from "@/i18n/provider";

/** Hand-drawn chat bubble with a white sticker edge, matching the details icons. */
function ChatSticker() {
  return (
    <svg
      viewBox="0 0 96 80"
      aria-hidden
      className="mt-9 w-[88px] -rotate-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
    >
      <path
        d="M20 8h54c9 0 16 7 16 16v18c0 9-7 16-16 16H40L22 72c-2 2-5 0-4-3l3-11c-8-1-15-8-15-16V24C6 15 12 8 20 8Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M20 8h54c9 0 16 7 16 16v18c0 9-7 16-16 16H40L22 72c-2 2-5 0-4-3l3-11c-8-1-15-8-15-16V24C6 15 12 8 20 8Z"
        fill="#c9b8f7"
        stroke="#1a1a1a"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="31" cy="33" r="4.5" fill="#1a1a1a" />
      <circle cx="48" cy="33" r="4.5" fill="#1a1a1a" />
      <circle cx="65" cy="33" r="4.5" fill="#1a1a1a" />
    </svg>
  );
}

export function Faq() {
  const t = useI18n().dict.faq;
  const { bookDemo } = useI18n().dict.common;
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-[68px]">
      <Frame>
        <div className="grid gap-px bg-hairline lg:grid-cols-[430px_1fr]">
          <div className="bg-white px-5 py-14 sm:px-10 sm:py-16">
            {/* Stays in view while the questions scroll past. */}
            <div className="lg:sticky lg:top-[124px]">
              <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
                {t.eyebrow}
              </p>
              <h2 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[44px]">
                {t.title}
              </h2>
              <p className="mt-4 text-base leading-7 tracking-[-0.005em] text-body">
                {t.anythingElse}{" "}
                <a
                  href="#demo"
                  className="text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:decoration-ink"
                >
                  {bookDemo}
                </a>{" "}
                {t.andAsk}
              </p>
              <ChatSticker />
            </div>
          </div>

          <div className="bg-white">
            <ul>
              {t.items.map((item, i) => {
                const expanded = open === i;
                const panelId = `${baseId}-panel-${i}`;
                const buttonId = `${baseId}-button-${i}`;
                return (
                  <li key={item.q} className="border-b border-hairline last:border-b-0">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => setOpen(expanded ? null : i)}
                        className="group flex w-full items-center justify-between gap-6 px-5 py-6 text-left outline-none focus-visible:bg-hairline-soft sm:px-10"
                      >
                        <span className="text-base leading-7 font-semibold tracking-[-0.015em] text-ink">
                          {item.q}
                        </span>
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-hairline-soft text-ink transition-colors group-hover:bg-hairline">
                          <PlusIcon className="size-4 transition-transform duration-200 group-aria-expanded:rotate-45" strokeWidth={2.25} />
                        </span>
                      </button>
                    </h3>
                    {/* grid-rows 0fr -> 1fr animates height with CSS alone. */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      inert={!expanded}
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[620px] px-5 pb-6 text-[15px] leading-6 tracking-[-0.005em] text-body sm:px-10">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Frame>
      <Divider />
    </section>
  );
}
