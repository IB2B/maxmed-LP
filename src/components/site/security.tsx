import Image from "next/image";

import { Divider, Frame } from "@/components/site/frame";
import { Tag } from "@/components/site/feature-illustrations";
import { securityPoints } from "@/data/security";

export function Security() {
  return (
    <section id="security" className="scroll-mt-[68px]">
      <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
        <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
          Security &amp; privacy
        </p>
        <h2 className="mx-auto mt-4 max-w-[560px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
          Built to handle patient data
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-7 tracking-normal text-balance text-body">
          How MaxMed protects your patients, your team and your payments.
        </p>
      </Frame>

      <Divider />
      <Frame>
        <ul className="grid gap-px bg-hairline md:grid-cols-2">
          {securityPoints.map((point) => (
            <li key={point.title} className="flex gap-4 bg-white px-5 py-6 sm:px-8">
              <Image
                src={`/icons/${point.icon}.svg`}
                alt=""
                width={52}
                height={52}
                className="-my-1.5 -ml-1.5 size-13 shrink-0"
              />
              <div>
                <h3 className="flex flex-wrap items-center gap-2 text-base leading-6 font-semibold tracking-[-0.01em] text-ink">
                  {point.title}
                  {!point.confirmed && <Tag tone="amber">To confirm</Tag>}
                </h3>
                <p className="mt-1 text-[15px] leading-6 tracking-[-0.005em] text-body">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Frame>
      <Divider />
    </section>
  );
}
