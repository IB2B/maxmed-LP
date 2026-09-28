"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcwIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  CalendarIllustration,
  ContractIllustration,
  EmergencyIllustration,
  Keycap,
  PrescriptionIllustration,
  QueueIllustration,
  VideoIllustration,
} from "@/components/site/feature-illustrations";

const DURATION = 7000;

const items = [
  {
    title: "Live video consultations",
    description:
      "Start a consultation from the patient record. A doctor joins on video and the status updates live on both sides.",
    panel: "bg-[#eef3fb]",
    Illustration: VideoIllustration,
  },
  {
    title: "Triage patients by risk code",
    description:
      "Red, yellow and green codes keep the most urgent patients at the top. Waiting patients are assigned to available doctors.",
    panel: "bg-[#fbf3e1]",
    Illustration: QueueIllustration,
  },
  {
    title: "Raise emergencies in real time",
    description:
      "One tap alerts a doctor straight away. Every emergency is resolved with notes, and the call recording is kept.",
    panel: "bg-[#fcefee]",
    Illustration: EmergencyIllustration,
  },
  {
    title: "Digital prescriptions",
    description:
      "Doctors issue prescriptions during the visit, linked to the patient. Pending deliveries are highlighted for your team.",
    panel: "bg-[#ebf6ef]",
    Illustration: PrescriptionIllustration,
  },
  {
    title: "Book around doctor availability",
    description:
      "One calendar for every visit, with doctors' availability visible before you book. Doctor shifts are tracked automatically.",
    panel: "bg-[#f1effa]",
    Illustration: CalendarIllustration,
  },
  {
    title: "Sign up and sign online",
    description:
      "Sign your contract with a one-time code by SMS or email. Invoices, subscription and monthly reports live in one place.",
    panel: "bg-[#fdf1e7]",
    Illustration: ContractIllustration,
  },
];

export function FeatureShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    return () => io.disconnect();
  }, []);

  const select = (index: number) => {
    setActive(index);
    setRun((r) => r + 1);
  };
  const next = () => select((active + 1) % items.length);

  const current = items[active];
  // Remount the illustration on every change so its animation restarts.
  const illustration = <current.Illustration key={`${active}-${run}-${inView}`} />;

  return (
    <div ref={rootRef} className="grid lg:grid-cols-[450px_1fr]">
      <div className="lg:border-r lg:border-hairline">
        {items.map((item, i) => {
          const open = i === active;
          return (
            <div key={item.title} className="relative border-b border-hairline last:border-b-0">
              <button
                type="button"
                onClick={() => select(i)}
                aria-expanded={open}
                className="group flex w-full items-center gap-4 px-5 pt-6 pb-6 text-left sm:px-9 data-[open=true]:pb-3"
                data-open={open}
              >
                <Keycap>{i + 1}</Keycap>
                <span
                  className={cn(
                    "text-[20px] leading-7 font-semibold tracking-[-0.03em] transition-colors sm:text-[22px]",
                    open ? "text-ink" : "text-faint group-hover:text-mute"
                  )}
                >
                  {item.title}
                </span>
              </button>

              {open && (
                <div className="anim-in px-5 pb-6 sm:px-9">
                  <p className="pl-11 text-[15px] leading-6 tracking-normal text-body">
                    {item.description}
                  </p>
                  <div
                    className={cn(
                      "mt-6 grid min-h-[340px] place-items-center rounded-lg p-5 lg:hidden",
                      item.panel
                    )}
                  >
                    {illustration}
                  </div>
                </div>
              )}

              {open && !reducedMotion && (
                <span
                  key={`${active}-${run}`}
                  aria-hidden
                  onAnimationEnd={next}
                  className="absolute inset-x-0 -bottom-px z-10 h-0.5 origin-left bg-ink"
                  style={{
                    animation: `fill-x ${DURATION}ms linear forwards`,
                    animationPlayState: inView ? "running" : "paused",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          "relative hidden min-h-[600px] place-items-center p-10 transition-colors duration-500 lg:grid",
          current.panel
        )}
      >
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white/80 px-3 py-1.5 text-[13px] tracking-normal text-body transition-colors hover:bg-white hover:text-ink"
        >
          <RotateCcwIcon className="size-3.5" />
          Replay
        </button>
        {illustration}
      </div>
    </div>
  );
}
