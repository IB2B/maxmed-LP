"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, VideoIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Divider, Frame } from "@/components/site/frame";
import { Keycap, RiskMark, Tag, panel } from "@/components/site/feature-illustrations";
import { DemoCursor } from "@/components/site/demo-cursor";
import { useI18n } from "@/i18n/provider";

/* Timeline (ms from the start of each loop). Each step starts where the last ends. */
const STEP_START = [0, 2000, 4200];
const LOOP = 8500;
// When the cursor clicks in each step (ms from the start of the loop).
const CLICK = { send: 1750, code: STEP_START[1] + 500, start: STEP_START[2] + 800 };

function delay(ms: number) {
  return { "--d": `${ms}ms` } as React.CSSProperties;
}

/** Text that appears as if typed, character by character. */
function Typed({ text, at, duration = 700 }: { text: string; at: number; duration?: number }) {
  return (
    <span
      className="anim-type inline-block"
      style={{ ...delay(at), "--dur": `${duration}ms`, "--steps": text.length } as React.CSSProperties}
    >
      {text}
    </span>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[13px] tracking-[-0.01em] text-mute">{label}</p>
      <p className="mt-1 h-[34px] rounded-md border border-hairline px-2.5 py-1.5 text-[15px] tracking-[-0.01em] text-ink">
        {children}
      </p>
    </div>
  );
}

function RequestMockup() {
  const m = useI18n().dict.mock;
  const t = STEP_START[0];
  return (
    <div className={cn(panel, "max-w-[280px]")}>
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{m.requestAccess}</span>
        <span className="anim-in" style={delay(CLICK.send + 200)}>
          <Tag tone="amber">{m.inReview}</Tag>
        </span>
      </div>
      <div className="space-y-3 px-4 py-3.5">
        <Field label={m.facility}>
          <Typed text="RSA Villa Serena" at={t + 300} duration={800} />
        </Field>
        <Field label={m.city}>
          <Typed text="Bologna" at={t + 1150} duration={450} />
        </Field>
        <span
          data-cursor="send"
          className="flex h-9 items-center justify-center rounded-md bg-ink text-[15px] font-medium tracking-[-0.01em] text-white transition-colors data-hovered:bg-[#333]"
        >
          {m.sendRequest}
        </span>
      </div>
    </div>
  );
}

function SignMockup() {
  const m = useI18n().dict.mock;
  return (
    <div className={cn(panel, "max-w-[280px]")}>
      <div className="border-b border-hairline px-4 py-2.5">
        <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{m.serviceContract}</span>
      </div>
      <div className="px-4 py-3.5">
        <p className="text-[13px] tracking-[-0.01em] text-mute">{m.codeBySms}</p>
        <div className="mt-2 flex gap-1.5">
          {["4", "8", "1", "9", "2", "7"].map((digit, i) => (
            <span
              key={i}
              data-cursor={i === 0 ? "code" : undefined}
              className="grid h-9 flex-1 place-items-center rounded-md border border-hairline font-mono text-[15px] font-medium text-ink transition-colors data-hovered:border-ink"
            >
              <span className="anim-in" style={delay(CLICK.code + 200 + i * 170)}>
                {digit}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div
        className="anim-in flex items-center justify-between border-t border-hairline bg-hairline-soft px-4 py-2.5"
        style={delay(CLICK.code + 1400)}
      >
        <span className="text-[15px] tracking-[-0.01em] text-ink">{m.signed}</span>
        <Tag tone="green">
          <CheckIcon className="size-3" strokeWidth={2.5} /> {m.verified}
        </Tag>
      </div>
    </div>
  );
}

function StartMockup() {
  const m = useI18n().dict.mock;
  const t = STEP_START[2];
  return (
    <div className={cn(panel, "max-w-[280px]")}>
      <div className="border-b border-hairline px-4 py-2.5">
        <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{m.firstPatient}</span>
      </div>
      <div className="anim-in flex items-center gap-2.5 px-4 py-3" style={delay(t + 100)}>
        <RiskMark tone="yellow" />
        <span className="text-[15px] tracking-[-0.01em] text-ink">A. Marino</span>
        <span className="text-[15px] tracking-[-0.01em] text-mute">58</span>
        <span className="ml-auto text-[13px] tracking-[-0.01em] text-body">{m.highFever}</span>
      </div>
      <div className="px-4 pb-3">
        <span
          data-cursor="start"
          className="anim-press flex h-9 items-center justify-center gap-2 rounded-md bg-ink text-[15px] font-medium tracking-[-0.01em] text-white transition-colors data-hovered:bg-[#333]"
          style={delay(CLICK.start)}
        >
          <VideoIcon className="size-4" /> {m.startConsultation}
        </span>
      </div>
      <div
        className="anim-in flex items-center justify-between border-t border-hairline bg-hairline-soft px-4 py-2.5"
        style={delay(CLICK.start + 450)}
      >
        <span className="text-[15px] tracking-[-0.01em] text-ink">{m.drJoined}</span>
        <Tag tone="green">
          <span className="size-1.5 rounded-full bg-emerald-500" /> {m.live}
        </Tag>
      </div>
    </div>
  );
}

// Visuals for each step, in the same order as how.steps in the dictionaries.
const stepVisuals = [
  {
    panel: "bg-[#fbf3e1]",
    Mockup: RequestMockup,
  },
  {
    panel: "bg-[#f1effa]",
    Mockup: SignMockup,
  },
  {
    panel: "bg-[#ebf6ef]",
    Mockup: StartMockup,
  },
];

export function HowItWorks() {
  const t = useI18n().dict.how;
  const steps = t.steps.map((copy, i) => ({ ...copy, ...stepVisuals[i] }));
  const listRef = useRef<HTMLOListElement>(null);
  const [inView, setInView] = useState(false);
  const [run, setRun] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // While visible: highlight each step in turn, then restart the loop.
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers = STEP_START.map((ms, i) => setTimeout(() => setActiveStep(i), ms));
    timers.push(setTimeout(() => setActiveStep(-1), STEP_START[2] + 2200));
    timers.push(setTimeout(() => setRun((r) => r + 1), LOOP));
    return () => timers.forEach(clearTimeout);
  }, [inView, run]);

  return (
    <section id="how-it-works" className="scroll-mt-[68px]">
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
      <Frame className="relative">
        <ol ref={listRef} className="grid gap-px bg-hairline md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col bg-white">
              <div
                className={cn(
                  "grid h-[300px] place-items-center px-6",
                  step.panel,
                  !inView && "anim-paused"
                )}
              >
                <step.Mockup key={`${run}-${inView}`} />
              </div>
              <div className="border-t border-hairline px-6 py-7 sm:px-8">
                <div className="flex items-center gap-3">
                  <Keycap
                    className={cn(
                      "transition-colors duration-300",
                      activeStep === i && "border-ink border-b-ink bg-ink text-white"
                    )}
                  >
                    {i + 1}
                  </Keycap>
                  <h3 className="text-lg leading-7 font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-6 tracking-[-0.005em] text-body">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        {inView && (
          <DemoCursor
            key={run}
            className="hidden md:block"
            steps={[
              { target: "send", at: CLICK.send },
              { target: "code", at: CLICK.code },
              { target: "start", at: CLICK.start },
            ]}
          />
        )}
      </Frame>
      <Divider />
    </section>
  );
}
