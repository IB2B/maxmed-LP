"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

/**
 * A fake mouse pointer for product mockups.
 *
 * Place it inside a `position: relative` container and mark targets in that
 * container with `data-cursor="name"`. The cursor starts when the container
 * scrolls into view, glides to each target in turn, "clicks" it, then leaves.
 * While hovering, the target gets `data-hovered`, so it can style itself
 * (`data-hovered:bg-…`).
 */

export type CursorStep = {
  /** `data-cursor` value of the element to point at. */
  target: string;
  /** Time (ms after start) the cursor arrives. */
  at: number;
  /**
   * What to do on arrival. "click" (default) presses and releases; "hover"
   * just points; "down" presses and holds (start of a drag); "up" releases
   * (end of a drag).
   */
  action?: "click" | "hover" | "down" | "up";
  /** @deprecated use `action: "hover"`. */
  click?: boolean;
  /** Called when the action completes, for mockups that react with state. */
  onClick?: () => void;
  /** On "down": a chip shown under the cursor while dragging. */
  carry?: { label: string; className: string };
};

const TRAVEL = 650;
const PRESS = 140;
const OFFSET = { x: 70, y: 60 };

const REDUCED = "(prefers-reduced-motion: reduce)";
function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
export function useReducedMotion() {
  return useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
}

type Point = { x: number; y: number };

export function DemoCursor({ steps, className }: { steps: CursorStep[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [instant, setInstant] = useState(true);
  const [carry, setCarry] = useState<CursorStep["carry"] | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = ref.current?.parentElement;
    if (!container) return;

    // Without motion, jump straight to each step's end state.
    if (reduced) {
      steps.forEach((s) => s.onClick?.());
      return;
    }

    const find = (name: string) => container.querySelector<HTMLElement>(`[data-cursor="${name}"]`);
    const centre = (el: HTMLElement): Point => {
      const box = container.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      // The arrow's tip sits ~3px in from the svg's top-left.
      return { x: r.left - box.left + r.width / 2 - 3, y: r.top - box.top + r.height / 2 - 2 };
    };

    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, Math.max(0, ms)));
    let hovered: HTMLElement | null = null;
    const hover = (el: HTMLElement | null) => {
      hovered?.removeAttribute("data-hovered");
      el?.setAttribute("data-hovered", "");
      hovered = el;
    };

    const start = () => {
      const first = steps[0];
      const last = steps[steps.length - 1];

      // Fade in a little below-right of the first target.
      at(first.at - TRAVEL - 300, () => {
        const el = find(first.target);
        if (!el) return;
        const c = centre(el);
        setInstant(true);
        setPos({ x: c.x + OFFSET.x, y: c.y + OFFSET.y });
        // Let the jump render first, so the cursor fades in place instead of sliding in.
        at(first.at - TRAVEL - 260, () => {
          setInstant(false);
          setVisible(true);
        });
      });

      for (const step of steps) {
        at(step.at - TRAVEL, () => {
          hover(null);
          const el = find(step.target);
          if (el) setPos(centre(el));
        });
        at(step.at - 120, () => hover(find(step.target)));
        const action = step.action ?? (step.click === false ? "hover" : "click");
        if (action === "click") {
          at(step.at, () => setPressed(true));
          at(step.at + PRESS, () => {
            setPressed(false);
            step.onClick?.();
          });
        } else if (action === "down") {
          at(step.at, () => setPressed(true));
          at(step.at + PRESS, () => {
            setCarry(step.carry ?? null);
            step.onClick?.();
          });
        } else if (action === "up") {
          at(step.at, () => {
            setPressed(false);
            setCarry(null);
            step.onClick?.();
          });
        } else if (step.onClick) {
          at(step.at, step.onClick);
        }
      }

      // Drift away and fade out.
      at(last.at + 1100, () => {
        hover(null);
        setPos((p) => ({ x: p.x + OFFSET.x, y: p.y + OFFSET.y }));
        setVisible(false);
      });
    };

    // Only play once the mockup is actually on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(container);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      hover(null);
    };
    // Steps are defined inline by callers; restart by remounting (key) instead.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-0 left-0 z-30",
        !instant && "transition-[transform,opacity] duration-[650ms] ease-[cubic-bezier(0.45,0,0.2,1)]",
        className
      )}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, opacity: visible ? 1 : 0 }}
    >
      <svg
        viewBox="0 0 20 22"
        className={cn(
          "w-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-transform duration-100",
          pressed && "scale-[0.82]"
        )}
      >
        <path
          d="M2 1.5v16.2l4.3-4.1 2.8 6.4 3-1.3-2.8-6.3h6.1L2 1.5Z"
          fill="#171717"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {carry && (
        <span
          className={cn(
            "anim-in absolute top-4 left-3 rounded-[4px] border-l-2 px-1.5 py-1 text-[13px] font-medium tracking-[-0.01em] whitespace-nowrap shadow-[0_6px_16px_-6px_rgba(0,0,0,0.3)]",
            carry.className
          )}
        >
          {carry.label}
        </span>
      )}
    </div>
  );
}
