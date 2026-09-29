"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronDownIcon, DownloadIcon, PlayIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/site/feature-illustrations";
import { DemoCursor, useReducedMotion } from "@/components/site/demo-cursor";
import { useI18n } from "@/i18n/provider";

/* A doctor's day: start a shift, check the month, download a report, pick a payout method. */
const T = { start: 1000, open: 2300, paid: 3100, download: 4400, stripe: 5700, loop: 8500 };

// Month names are in mock.reportMonths, in the same order.
const reportHours = ["62h 30m", "58h 10m", "64h 05m"];

function formatClock(total: number) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;
}

function delay(ms: number) {
  return { "--d": `${ms}ms` } as React.CSSProperties;
}

type Payout = "bank" | "stripe";

export function DoctorReportsMockup() {
  const m = useI18n().dict.mock;
  const reports = m.reportMonths.map((month, i) => ({ month, hours: reportHours[i] }));
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [run, setRun] = useState(0);
  const [onShift, setOnShift] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [septOpen, setSeptOpen] = useState(false);
  const [paid, setPaid] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [payout, setPayout] = useState<Payout>("bank");

  const animate = !useReducedMotion();

  const reset = () => {
    setOnShift(false);
    setSeconds(0);
    setSeptOpen(false);
    setPaid(false);
    setDownloaded(false);
    setPayout("bank");
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting) reset();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Shift clock, once the shift has started.
  useEffect(() => {
    if (!onShift || !inView || !animate) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [onShift, inView, animate]);

  // September gets paid while the doctor looks at it; then the loop restarts.
  useEffect(() => {
    if (!inView || !animate) return;
    const paidTimer = setTimeout(() => setPaid(true), T.paid);
    const loopTimer = setTimeout(() => {
      reset();
      setRun((r) => r + 1);
    }, T.loop);
    return () => {
      clearTimeout(paidTimer);
      clearTimeout(loopTimer);
    };
  }, [inView, animate, run]);

  const septemberPaid = paid || !animate;

  return (
    // Fixed height, so rows opening never make the block jump.
    <div ref={ref} className="relative flex h-[440px] w-full max-w-[440px] flex-col gap-3">
      <Card size="sm" className="h-[66px] flex-row items-center justify-between px-4 py-0">
        {onShift ? (
          <>
            <div className="anim-in">
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{m.shiftInProgress}</p>
              <p className="text-[13px] tracking-[-0.01em] text-mute">{m.hoursTracked}</p>
            </div>
            <span className="anim-in flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-ink tabular-nums">
              <span className="size-2 rounded-full bg-emerald-500" />
              {formatClock(seconds)}
            </span>
          </>
        ) : (
          <>
            <div>
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{m.offShift}</p>
              <p className="text-[13px] tracking-[-0.01em] text-mute">{m.ready}</p>
            </div>
            <span
              data-cursor="start"
              className="flex items-center gap-1.5 rounded-md bg-ink px-3 py-1.5 text-[13px] font-medium tracking-[-0.01em] text-white transition-colors data-hovered:bg-[#333]"
            >
              <PlayIcon className="size-3 fill-current" /> {m.startShift}
            </span>
          </>
        )}
      </Card>

      <Card className="gap-0 py-0">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{m.paymentReports}</span>
          <span className="text-[13px] tracking-[-0.01em] text-mute">Dr. L. Bianchi</span>
        </div>
        <div key={`${run}-${inView}`} className={cn(!inView && "anim-paused")}>
          {reports.map((r, i) => {
            const isSeptember = i === 0;
            const isAugust = i === 1;
            return (
              <div
                key={r.month}
                className="anim-in border-b border-hairline"
                style={delay(150 + i * 200)}
              >
                <div
                  data-cursor={isSeptember ? "september" : undefined}
                  className="flex items-center px-4 py-3 transition-colors data-hovered:bg-hairline-soft"
                >
                  {isSeptember && (
                    <ChevronDownIcon
                      className={cn(
                        "mr-1.5 -ml-1 size-4 text-mute transition-transform",
                        !septOpen && "-rotate-90"
                      )}
                    />
                  )}
                  <span className="text-[15px] tracking-[-0.01em] text-ink">{r.month}</span>
                  <span className="mr-4 ml-auto text-[13px] tracking-[-0.01em] text-body tabular-nums">
                    {r.hours}
                  </span>
                  {isSeptember && !septemberPaid ? (
                    <Tag tone="amber">{m.processing}</Tag>
                  ) : (
                    <span key={isSeptember ? "paid-now" : "paid"} className={isSeptember ? "anim-in" : undefined}>
                      <Tag tone="green">
                        {isSeptember && <CheckIcon className="size-3" strokeWidth={2.75} />}
                        {m.paid}
                      </Tag>
                    </span>
                  )}
                  <span
                    data-cursor={isAugust ? "download" : undefined}
                    className="relative ml-3 grid size-7 place-items-center rounded-md border border-transparent text-mute transition-colors data-hovered:border-hairline data-hovered:bg-hairline-soft data-hovered:text-ink"
                  >
                    {isAugust && downloaded ? (
                      <CheckIcon className="anim-in size-4 text-emerald-600" strokeWidth={2.5} />
                    ) : (
                      <DownloadIcon className="size-4" />
                    )}
                  </span>
                </div>
                {isSeptember && septOpen && (
                  <div className="anim-in flex gap-6 bg-hairline-soft/60 px-4 pb-3 pl-10 text-[13px] tracking-[-0.01em] text-body">
                    <span>
                      <span className="text-ink">48</span> {m.consultations}
                    </span>
                    <span>
                      <span className="text-ink">3</span> {m.emergencies}
                    </span>
                    <span>
                      <span className="text-ink">21</span> {m.shifts}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="text-[13px] tracking-[-0.01em] text-mute">{m.payoutMethod}</span>
          <div className="relative flex rounded-md bg-hairline-soft p-0.5 text-[13px] font-medium tracking-[-0.01em]">
            <span
              aria-hidden
              className={cn(
                "absolute inset-y-0.5 w-[calc(50%-2px)] rounded-[5px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-transform duration-300",
                payout === "stripe" ? "translate-x-full" : "translate-x-0"
              )}
            />
            <span
              className={cn(
                "relative z-10 w-28 py-1 text-center transition-colors",
                payout === "bank" ? "text-ink" : "text-mute"
              )}
            >
              {m.bankTransfer}
            </span>
            <span
              data-cursor="stripe"
              className={cn(
                "relative z-10 w-28 py-1 text-center transition-colors data-hovered:text-ink",
                payout === "stripe" ? "text-ink" : "text-mute"
              )}
            >
              Stripe Connect
            </span>
          </div>
        </div>
      </Card>

      {downloaded && (
        <span className="anim-in flex items-center gap-1.5 self-end rounded-md bg-ink px-2.5 py-1.5 text-[13px] font-medium tracking-[-0.01em] text-white">
          <CheckIcon className="size-3.5 text-emerald-400" strokeWidth={2.75} />
          {m.reportDownloaded}
        </span>
      )}

      {inView && (
        <DemoCursor
          key={run}
          steps={[
            { target: "start", at: T.start, onClick: () => setOnShift(true) },
            { target: "september", at: T.open, onClick: () => setSeptOpen(true) },
            { target: "download", at: T.download, onClick: () => setDownloaded(true) },
            { target: "stripe", at: T.stripe, onClick: () => setPayout("stripe") },
          ]}
        />
      )}
    </div>
  );
}
