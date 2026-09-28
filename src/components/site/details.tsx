import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Divider, Frame } from "@/components/site/frame";

// Icons: OpenMoji (CC BY-SA 4.0, credit required on the page), served from /public/icons.
const details = [
  {
    icon: "microscope",
    title: "Medical equipment inventory",
    description: "Keep track of every device on site, with usage statistics.",
  },
  {
    icon: "health-worker",
    title: "Team skills directory",
    description: "Each operator lists their skills, so the right person takes each patient.",
  },
  {
    icon: "speech-balloon",
    title: "Messaging with doctors",
    description: "Chat with the doctor before or after a consultation.",
  },
  {
    icon: "graduation-cap",
    title: "Training courses",
    description: "Courses for operators, with attendance and progress tracked per lesson.",
  },
  {
    icon: "clipboard",
    title: "Quick patient registration",
    description: "Register a new patient straight from the dashboard, in one form.",
  },
  {
    icon: "compass",
    title: "Guided onboarding",
    description: "Your request is reviewed by our team, then a guided tour shows you around.",
  },
  {
    icon: "bar-chart",
    title: "Monthly reports",
    description: "Consultations and prescriptions per month, ready to download.",
  },
  {
    icon: "receipt",
    title: "Invoices in one place",
    description: "Subscription and service invoices, available to view or download any time.",
  },
  {
    icon: "tickets",
    title: "Coupons and scholarships",
    description: "Discount codes on subscriptions, and scholarships that cut the cost of courses.",
  },
  {
    icon: "flag-italy",
    title: "Built for Italian care teams",
    description: "The whole console is in Italian, from patient records to invoices.",
  },
];

export function Details() {
  return (
    <section id="details" className="scroll-mt-[68px]">
      <Divider />
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          The details
        </p>
        <h2 className="mx-auto mt-4 max-w-[520px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          More features your team will use every day
        </h2>
      </Frame>

      <Divider />
      <Frame>
        <ul className="grid gap-px bg-hairline md:grid-cols-2">
          {details.map((item) => (
            <li key={item.title} className="flex gap-4 bg-white px-5 py-6 sm:px-8">
              <Image
                src={`/icons/${item.icon}.svg`}
                alt=""
                width={52}
                height={52}
                className="-my-1.5 -ml-1.5 size-13 shrink-0"
              />
              <div>
                <h3 className="text-base leading-6 font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-[15px] leading-6 tracking-[-0.005em] text-body">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Frame>

      <Divider />
      <Frame className="flex flex-col gap-6 px-5 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl leading-7 font-semibold tracking-[-0.02em] text-ink">
            See it working with your own patients.
          </p>
          <p className="mt-1 text-[15px] tracking-normal text-body">
            We&apos;ll walk your team through the operator console, step by step.
          </p>
        </div>
        <Button
          className="h-12 shrink-0 rounded-full px-6 text-base"
          render={<a href="#demo" />}
          nativeButton={false}
        >
          Book a demo
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </Frame>
      <Divider />
    </section>
  );
}
