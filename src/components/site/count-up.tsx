"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1600;

/** Splits "9,400+" into its number (9400) and the text around it ("", "+"). */
function parse(value: string) {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2].replace(/,/g, "")), suffix: match[3] };
}

/**
 * Counts up to `value` the first time it scrolls into view.
 * Renders the final value on the server and for reduced-motion visitors.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Park at zero while off screen, ready to count.
          setCurrent((c) => (c === null ? 0 : c));
          return;
        }
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(parsed.target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // The value is static per render; re-running on every parse is unnecessary.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!parsed) return <span className={className}>{value}</span>;

  const shown = current === null ? parsed.target : current;
  return (
    <span ref={ref} className={className} aria-label={value}>
      {parsed.prefix}
      {shown.toLocaleString("en-US")}
      {parsed.suffix}
    </span>
  );
}
