"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckIcon,
  MicOffIcon,
  FileSignatureIcon,
  MicIcon,
  PhoneOffIcon,
  PlusIcon,
  SirenIcon,
  VideoIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { DemoCursor } from "@/components/site/demo-cursor";

/* Shared building blocks. Kept deliberately crisp: small radii, real type sizes. */

export function Keycap({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "inline-grid h-7 min-w-7 place-items-center rounded-md border border-b-2 border-[#e2e2e2] border-b-[#cfcfcf] bg-white px-1.5 font-sans text-xs font-semibold text-ink shadow-[0_1px_1px_rgba(0,0,0,0.04)]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

function In({
  delay = 0,
  className,
  style,
  children,
}: {
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("anim-in", className)}
      style={{ ...style, "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export const panel =
  "w-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_12px_28px_-14px_rgba(0,0,0,0.2)]";

function PanelHeader({
  title,
  meta,
}: {
  title: string;
  meta?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
        {title}
      </span>
      {meta && (
        <span className="text-[13px] tracking-[-0.01em] text-mute">{meta}</span>
      )}
    </div>
  );
}

export function Tag({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "red" | "amber" | "green";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[5px] border px-1.5 py-0.5 text-[13px] font-medium tracking-[-0.01em]",
        tone === "neutral" && "border-hairline bg-hairline-soft text-body",
        tone === "red" && "border-error/20 bg-error/[0.06] text-[#c50000]",
        tone === "amber" && "border-warning/30 bg-warning-soft text-[#8a4a06]",
        tone === "green" &&
          "border-emerald-600/20 bg-emerald-50 text-emerald-700",
      )}
    >
      {children}
    </span>
  );
}

export function RiskMark({ tone }: { tone: "red" | "yellow" | "green" }) {
  return (
    <span
      className={cn(
        "h-4 w-1 shrink-0 rounded-[1px]",
        tone === "red" && "bg-error",
        tone === "yellow" && "bg-warning",
        tone === "green" && "bg-emerald-500",
      )}
    />
  );
}

/* 1. Video consultation, using a real frame from the MaxMed video. */
export function VideoIllustration() {
  const [muted, setMuted] = useState(false);
  return (
    <div className="relative w-full max-w-[520px]">
      <div className={panel}>
        <PanelHeader
          title="Consultation · G. Rossi, 72"
          meta={
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-error" /> REC 04:12
            </span>
          }
        />
        <div className="relative aspect-video bg-[#111]">
          <Image
            src="/images/doctor-call.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover"
          />
          <In
            delay={500}
            className="absolute top-3 right-3 w-28 overflow-hidden rounded-md border border-white/20 bg-[#2a2a2a]"
          >
            <div className="grid aspect-video place-items-center text-xs tracking-[-0.01em] text-white/70">
              G. Rossi
            </div>
          </In>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/45 px-3 py-2.5">
            <div>
              <p className="text-[15px] font-medium text-white">
                Dr. L. Bianchi
              </p>
              <p className="text-[13px] tracking-[-0.01em] text-white/70">
                General medicine
              </p>
            </div>
            <div className="flex gap-1.5">
              <span
                data-cursor="mic"
                className={cn(
                  "grid size-7 place-items-center rounded-md transition-colors",
                  muted
                    ? "bg-white text-ink"
                    : "bg-white/15 text-white data-hovered:bg-white/30",
                )}
              >
                {muted ? (
                  <MicOffIcon className="size-3.5" />
                ) : (
                  <MicIcon className="size-3.5" />
                )}
              </span>
              <span className="grid size-7 place-items-center rounded-md bg-white/15 text-white">
                <VideoIcon className="size-3.5" />
              </span>
              <span className="grid size-7 place-items-center rounded-md bg-error text-white">
                <PhoneOffIcon className="size-3.5" />
              </span>
            </div>
          </div>
        </div>
        <In
          delay={1000}
          className="flex items-center justify-between px-4 py-2.5"
        >
          <span className="text-[15px] tracking-[-0.01em] text-body">
            Doctor joined the call
          </span>
          <span className="text-[13px] tracking-[-0.01em] text-mute">
            10:02
          </span>
        </In>
      </div>
      <DemoCursor
        steps={[{ target: "mic", at: 1500, onClick: () => setMuted(true) }]}
      />
    </div>
  );
}

/* 2. Triage and queue */
const queue = [
  { name: "G. Rossi", age: 72, note: "Chest pain", tone: "red", wait: "0:48" },
  {
    name: "A. Marino",
    age: 58,
    note: "High fever",
    tone: "yellow",
    wait: "6:10",
  },
  {
    name: "F. Esposito",
    age: 66,
    note: "Follow-up",
    tone: "yellow",
    wait: "9:32",
  },
  {
    name: "L. Conti",
    age: 41,
    note: "Skin rash",
    tone: "green",
    wait: "14:05",
  },
] as const;

export function QueueIllustration() {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className={panel}>
        <PanelHeader title="Patient queue" meta="4 waiting" />
        <div className="grid grid-cols-[1fr_auto_auto] border-b border-hairline px-4 py-2 text-xs tracking-[0.04em] text-mute uppercase">
          <span>Patient</span>
          <span className="w-28">Reason</span>
          <span className="w-14 text-right">Wait</span>
        </div>
        {queue.map((p, i) => (
          <In key={p.name} delay={150 + i * 200}>
            <div
              data-cursor={i === 0 ? "first-patient" : undefined}
              className="grid grid-cols-[1fr_auto_auto] items-center border-b border-hairline px-4 py-2.5 transition-colors data-hovered:bg-hairline-soft"
            >
              <span className="flex items-center gap-2.5 text-[15px] tracking-[-0.01em] text-ink">
                <RiskMark tone={p.tone} />
                {p.name}
                <span className="text-mute">{p.age}</span>
              </span>
              <span className="w-28 text-[15px] tracking-[-0.01em] text-body">
                {p.note}
              </span>
              <span className="w-14 text-right text-[13px] tracking-[-0.01em] text-mute">
                {p.wait}
              </span>
            </div>
          </In>
        ))}
        <In
          delay={1300}
          className="flex items-center justify-between bg-hairline-soft px-4 py-2.5"
        >
          <span className="text-[15px] tracking-[-0.01em] text-ink">
            G. Rossi → Dr. Bianchi
          </span>
          <Tag tone="green">
            <CheckIcon className="size-3" strokeWidth={2.5} /> Assigned
          </Tag>
        </In>
      </div>
      <DemoCursor steps={[{ target: "first-patient", at: 1100 }]} />
    </div>
  );
}

/* 3. Emergencies */
const timeline = [
  { step: "Emergency raised by operator", time: "10:14:02" },
  { step: "Dr. Bianchi alerted", time: "10:14:03" },
  { step: "Doctor joined the call", time: "10:14:41" },
  { step: "Resolved, notes attached", time: "10:26:18" },
];

export function EmergencyIllustration() {
  return (
    <div className="relative w-full max-w-[500px]">
      <div className={panel}>
        <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
          <span
            data-cursor="siren"
            className="grid size-8 shrink-0 place-items-center rounded-md bg-error text-white transition-[filter] data-hovered:brightness-110"
          >
            <SirenIcon className="size-4" />
          </span>
          <div className="flex-1">
            <p className="text-[15px] font-semibold text-ink">
              Emergency · G. Rossi, 72
            </p>
            <p className="text-[13px] tracking-[-0.01em] text-mute">EM-2291</p>
          </div>
          <Tag tone="red">Red code</Tag>
        </div>
        <ol className="px-4 py-3">
          {timeline.map((t, i) => (
            <In key={t.step} delay={1250 + i * 450}>
              <li className="relative flex items-center justify-between py-1.5 pl-6">
                <span className="absolute top-1/2 left-0 grid size-3.5 -translate-y-1/2 place-items-center rounded-[3px] bg-ink text-white">
                  <CheckIcon className="size-2.5" strokeWidth={3} />
                </span>
                <span className="text-[15px] tracking-[-0.01em] text-body">
                  {t.step}
                </span>
                <span className="text-[13px] tracking-[-0.01em] text-mute">
                  {t.time}
                </span>
              </li>
            </In>
          ))}
        </ol>
      </div>
      <DemoCursor steps={[{ target: "siren", at: 1000 }]} />
    </div>
  );
}

/* 4. Prescriptions: the cursor writes, signs and sends a prescription. */
const medicines = [
  { drug: "Paracetamol 1 g", dose: "1 tab · 3× day · 5 days" },
  { drug: "Omeprazole 20 mg", dose: "1 cap · 1× day · 14 days" },
];
const RX = { add1: 1000, add2: 2100, sign: 3300, send: 4400, look: 5300 };

export function PrescriptionIllustration() {
  const [added, setAdded] = useState(0);
  const [signed, setSigned] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <div className="relative w-full max-w-[500px]">
      <div className={panel}>
        <PanelHeader title="Prescription" meta="RX-10482" />
        <div className="flex items-center justify-between px-4 pt-3">
          <span className="text-[15px] tracking-[-0.01em] text-body">
            Patient <span className="text-ink">G. Rossi, 72</span>
          </span>
          <span data-cursor="status">
            {sent ? (
              <span className="anim-in inline-block">
                <Tag tone="amber">Pending delivery</Tag>
              </span>
            ) : (
              <Tag>Draft</Tag>
            )}
          </span>
        </div>

        {/* Fixed height, so the card doesn't jump as medicines are added. */}
        <div className="mx-4 mt-3 h-[134px] border-t border-hairline">
          {medicines.slice(0, added).map((line) => (
            <div
              key={line.drug}
              className="anim-in flex items-center justify-between border-b border-hairline py-2.5"
            >
              <span className="text-[15px] font-medium tracking-[-0.01em] text-ink">{line.drug}</span>
              <span className="text-[13px] tracking-[-0.01em] text-mute">{line.dose}</span>
            </div>
          ))}
          {!signed && added < medicines.length && (
            <span
              data-cursor="add"
              className="mt-2.5 flex h-9 items-center gap-1.5 rounded-md border border-dashed border-[#d6d6d6] px-3 text-[13px] font-medium tracking-[-0.01em] text-body transition-colors data-hovered:border-ink data-hovered:text-ink"
            >
              <PlusIcon className="size-3.5" strokeWidth={2.5} /> Add medicine
            </span>
          )}
        </div>

        <div className="flex h-[52px] items-center justify-between border-t border-hairline px-4">
          <span className="text-[15px] tracking-[-0.01em] text-body">Dr. L. Bianchi</span>
          {signed ? (
            <span className="flex items-center gap-3">
              <span className="anim-in flex items-center gap-1.5 text-[13px] font-medium tracking-[-0.01em] text-ink">
                <CheckIcon className="size-3.5 text-emerald-600" strokeWidth={2.5} /> Signed 10:31
              </span>
              <span
                data-cursor="send"
                className={cn(
                  "anim-in rounded-md border px-3 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-colors",
                  sent
                    ? "border-hairline bg-hairline-soft text-mute"
                    : "border-hairline bg-white text-ink data-hovered:bg-hairline-soft"
                )}
              >
                {sent ? "Sent" : "Send"}
              </span>
            </span>
          ) : (
            <span
              data-cursor="sign"
              className={cn(
                "rounded-md px-3 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-colors",
                added === medicines.length
                  ? "bg-ink text-white data-hovered:bg-[#333]"
                  : "bg-hairline-soft text-faint"
              )}
            >
              Sign
            </span>
          )}
        </div>
      </div>
      <DemoCursor
        steps={[
          { target: "add", at: RX.add1, onClick: () => setAdded(1) },
          { target: "add", at: RX.add2, onClick: () => setAdded(2) },
          { target: "sign", at: RX.sign, onClick: () => setSigned(true) },
          { target: "send", at: RX.send, onClick: () => setSent(true) },
          { target: "status", at: RX.look, click: false },
        ]}
      />
    </div>
  );
}

/* 5. Calendar: check availability, book a visit, then drag another one. */
const days = ["Mon 28", "Tue 29", "Wed 30", "Thu 1", "Fri 2"];
const hours = ["9", "10", "11", "12"];
const tones = {
  blue: "bg-[#e8efff] border-[#3b6fe0] text-[#1e3f8a]",
  violet: "bg-[#f1ebfb] border-[#7c4dcc] text-[#4c2889]",
  green: "bg-[#e6f5ec] border-[#1f9254] text-[#14532d]",
  red: "bg-[#fde8e8] border-[#e5484d] text-[#8a1c1f]",
};
const fixedEvents = [
  { day: 0, row: 0, title: "Triage", tone: tones.blue },
  { day: 2, row: 0, title: "Triage", tone: tones.blue },
  { day: 4, row: 0, title: "Triage", tone: tones.blue },
  { day: 2, row: 3, title: "Follow-up", tone: tones.red },
];
// Dr. Bianchi is free on Thursday from 10 to 13.
const AVAILABLE = { day: 3, rows: [1, 2, 3] };
const CAL = { avail: 900, slot: 1900, book: 3000, grab: 4100, drop: 5100 };

export function CalendarIllustration() {
  const [showAvail, setShowAvail] = useState(false);
  const [draft, setDraft] = useState(false);
  const [booked, setBooked] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [moved, setMoved] = useState(false);

  const visit = { day: moved ? 2 : 1, row: 1 };

  return (
    <div className="relative w-full max-w-[580px]">
      <div className={panel}>
        <PanelHeader title="September 2026" meta="Week" />
        <div className="grid grid-cols-[32px_repeat(5,1fr)] px-3 pb-3">
          <div />
          {days.map((d, i) => (
            <div
              key={d}
              data-cursor={i === AVAILABLE.day ? "thu" : undefined}
              className={cn(
                "flex items-center gap-1.5 border-l border-hairline px-1.5 py-2 text-[13px] tracking-[-0.01em] transition-colors data-hovered:bg-hairline-soft",
                i === 0 ? "font-medium text-error" : "text-body"
              )}
            >
              {d}
              {i === AVAILABLE.day && showAvail && (
                <span className="anim-in size-1.5 rounded-full bg-emerald-500" />
              )}
            </div>
          ))}
          {hours.map((h, row) => (
            <div key={h} className="contents">
              <div className="pt-1 pr-1.5 text-right text-xs tracking-[-0.01em] text-mute">{h}</div>
              {days.map((d, day) => {
                const fixed = fixedEvents.find((e) => e.day === day && e.row === row);
                const isVisit = visit.day === day && visit.row === row;
                const isFree = showAvail && day === AVAILABLE.day && AVAILABLE.rows.includes(row);
                const isSlot = day === AVAILABLE.day && row === 2;
                const cursorName = isSlot ? "slot" : day === 2 && row === 1 ? "drop" : undefined;
                return (
                  <div
                    key={d}
                    data-cursor={cursorName}
                    className={cn(
                      "relative h-10 border-t border-l border-hairline transition-colors data-hovered:bg-hairline-soft",
                      isFree && "bg-emerald-50/80"
                    )}
                  >
                    {isFree && row === 1 && (
                      <span className="anim-in absolute inset-x-1.5 top-1.5 truncate text-xs font-medium tracking-[-0.01em] text-emerald-700">
                        Dr. Bianchi free
                      </span>
                    )}
                    {fixed && (
                      <In
                        delay={150 + (row * 5 + day) * 50}
                        className={cn(
                          "absolute inset-x-1 top-1 bottom-1 z-10 truncate rounded-[4px] border-l-2 px-1.5 py-1 text-[13px] font-medium tracking-[-0.01em]",
                          fixed.tone
                        )}
                      >
                        {fixed.title}
                      </In>
                    )}
                    {isVisit && (
                      <div
                        key={moved ? "moved" : "original"}
                        data-cursor={moved ? undefined : "visit"}
                        className={cn(
                          "absolute inset-x-1 top-1 bottom-1 z-10 truncate rounded-[4px] border-l-2 px-1.5 py-1 text-[13px] font-medium tracking-[-0.01em] transition-opacity",
                          tones.violet,
                          "anim-in",
                          dragging && "opacity-35"
                        )}
                      >
                        Video visit
                      </div>
                    )}
                    {isSlot && (draft || booked) && (
                      <div
                        className={cn(
                          "anim-in absolute inset-x-1 top-1 bottom-1 z-10 truncate rounded-[4px] px-1.5 py-1 text-[13px] font-medium tracking-[-0.01em]",
                          booked
                            ? cn("border-l-2", tones.green)
                            : "border border-dashed border-[#1f9254] bg-white text-[#14532d]"
                        )}
                      >
                        {booked ? "G. Rossi" : "New visit"}
                      </div>
                    )}
                    {isSlot && draft && !booked && (
                      <div className="anim-in absolute -top-11 right-full z-20 mr-2 w-[200px] rounded-lg border border-black/10 bg-white p-3 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.25)]">
                        <p className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Video visit</p>
                        <p className="mt-0.5 text-xs tracking-[-0.01em] text-body">G. Rossi, 72 · Dr. Bianchi</p>
                        <p className="text-xs tracking-[-0.01em] text-mute">Thu 1 · 11:00 – 12:00</p>
                        <span
                          data-cursor="book"
                          className="mt-2.5 flex h-7 items-center justify-center rounded-md bg-ink text-xs font-medium tracking-[-0.01em] text-white transition-colors data-hovered:bg-[#333]"
                        >
                          Book
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <DemoCursor
        steps={[
          { target: "thu", at: CAL.avail, action: "hover", onClick: () => setShowAvail(true) },
          { target: "slot", at: CAL.slot, onClick: () => setDraft(true) },
          { target: "book", at: CAL.book, onClick: () => setBooked(true) },
          {
            target: "visit",
            at: CAL.grab,
            action: "down",
            carry: { label: "Video visit", className: tones.violet },
            onClick: () => setDragging(true),
          },
          {
            target: "drop",
            at: CAL.drop,
            action: "up",
            onClick: () => {
              setDragging(false);
              setMoved(true);
            },
          },
        ]}
      />
    </div>
  );
}

/* 6. Contract signing with a one-time code */
export function ContractIllustration() {
  const code = ["4", "8", "1", "9", "2", "7"];
  return (
    <div className="relative w-full max-w-[480px]">
      <div className={panel}>
        <div className="flex items-center gap-2.5 border-b border-hairline px-4 py-2.5">
          <FileSignatureIcon className="size-4 text-mute" />
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
            Service contract
          </span>
          <span className="ml-auto text-[13px] tracking-[-0.01em] text-mute">
            CT-0317
          </span>
        </div>
        <div className="px-4 py-4">
          <p className="text-[15px] tracking-[-0.01em] text-body">
            Code sent by SMS to{" "}
            <span className="text-ink">+39 ••• ••• 4821</span>
          </p>
          <div className="mt-3 flex gap-1.5">
            {code.map((digit, i) => (
              <div
                key={i}
                data-cursor={i === 0 ? "code" : undefined}
                className="grid h-10 flex-1 place-items-center rounded-md border border-hairline font-mono text-base font-medium text-ink transition-colors data-hovered:border-ink"
              >
                <In delay={1250 + i * 170}>{digit}</In>
              </div>
            ))}
          </div>
        </div>
        <In
          delay={2600}
          className="flex items-center justify-between border-t border-hairline bg-hairline-soft px-4 py-2.5"
        >
          <span className="text-[15px] tracking-[-0.01em] text-ink">
            Contract signed
          </span>
          <Tag tone="green">
            <CheckIcon className="size-3" strokeWidth={2.5} /> Verified
          </Tag>
        </In>
      </div>
      <DemoCursor steps={[{ target: "code", at: 1000 }]} />
    </div>
  );
}
