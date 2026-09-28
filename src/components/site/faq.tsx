"use client";

import { useId, useState } from "react";
import { PlusIcon } from "lucide-react";

import { Divider, Frame } from "@/components/site/frame";

const faqs = [
  {
    q: "What do we need to get started?",
    a: "Send us a request with a few details about your facility. Our team reviews it, then you sign your contract online with a one-time code sent by SMS or email. Once it's signed, your operators can log in and register patients.",
  },
  {
    q: "Who are the doctors, and how do they join a consultation?",
    a: "Doctors on MaxMed set their availability in the platform. When you start a consultation, the patient goes into the queue, an available doctor is assigned and joins on video. Each doctor sees the patients assigned to them and the history of their consultations.",
  },
  {
    q: "What happens in an emergency?",
    a: "Your operator raises an emergency from the console in one tap. It's marked by priority, a doctor is alerted straight away, and it stays open until the doctor resolves it with notes. Call recordings are kept, so you can play them back later.",
  },
  {
    q: "How do prescriptions work?",
    a: "The doctor issues the prescription during the consultation. It's linked to the patient and shows up in your prescriptions list, with pending deliveries highlighted. You can also download a monthly prescriptions report.",
  },
  {
    q: "How does billing work?",
    a: "Your facility pays a subscription. Your invoices and subscription status are kept in one place in the console, ready to view or download at any time. Discount coupons can be applied to subscriptions.",
  },
  {
    q: "Can we follow our team's activity?",
    a: "Yes. The console has statistics you can filter by date, a calendar with every consultation, and a monthly count of consultations per patient that you can download.",
  },
  {
    q: "Do you offer training for our staff?",
    a: "Yes. MaxMed runs training courses for operators, with attendance and progress tracked lesson by lesson. Scholarships are available to reduce the cost of courses.",
  },
  {
    q: "Can we manage our medical devices in MaxMed?",
    a: "Yes. The equipment section keeps an inventory of your medical devices, with details and usage statistics, next to your patients and consultations.",
  },
  {
    q: "Is the platform in Italian?",
    a: "Yes. The whole console is in Italian, from patient records and consultations to contracts and invoices.",
  },
];

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
                FAQ
              </p>
              <h2 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[44px]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-7 tracking-[-0.005em] text-body">
                Anything else?{" "}
                <a
                  href="#demo"
                  className="text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:decoration-ink"
                >
                  Book a demo
                </a>{" "}
                and ask us.
              </p>
              <ChatSticker />
            </div>
          </div>

          <div className="bg-white">
            <ul>
              {faqs.map((item, i) => {
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
