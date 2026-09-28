import type { LucideIcon } from "lucide-react";
import {
  ClipboardListIcon,
  SquareCheckBigIcon,
  StethoscopeIcon,
  VideoIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Divider, Frame } from "@/components/site/frame";
import { VideoPlayer } from "@/components/site/video-player";

/** Icon tile glued to the word after it, so a line never ends on an icon. */
function IconWord({
  icon: Icon,
  className,
  tilt,
  children,
}: {
  icon: LucideIcon;
  className: string;
  tilt: string;
  children: React.ReactNode;
}) {
  return (
    <span className="whitespace-nowrap">
      <span
        aria-hidden
        className={`mr-[0.2em] inline-grid size-[0.82em] translate-y-[-0.06em] place-items-center rounded-[0.2em] border align-middle ${className} ${tilt}`}
      >
        <Icon className="size-[0.5em]" strokeWidth={2.25} />
      </span>
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section>
      <Frame className="px-5 pt-16 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
        <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.05em] text-ink sm:text-[56px] lg:text-[64px]">
          <IconWord icon={StethoscopeIcon} className="border-[#cfe0ff] bg-[#eaf2ff] text-link" tilt="-rotate-6">
            Doctors,
          </IconWord>{" "}
          <IconWord icon={ClipboardListIcon} className="border-[#ffe1b3] bg-[#fff4e0] text-[#ab570a]" tilt="rotate-3">
            patients
          </IconWord>{" "}
          and{" "}
          <IconWord icon={VideoIcon} className="border-[#ddd0f5] bg-[#f3edfc] text-violet" tilt="-rotate-3">
            visits,
          </IconWord>{" "}
          all in{" "}
          <IconWord icon={SquareCheckBigIcon} className="border-[#bfe8d3] bg-[#e6f7ee] text-emerald-700" tilt="rotate-2">
            one
          </IconWord>{" "}
          place.
        </h1>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-24 lg:items-center lg:justify-between">
          <p className="max-w-[440px] text-lg leading-8 tracking-normal text-body">
            MaxMed connects your care facility to a network of doctors. Triage
            patients by risk code, book video consultations and raise
            emergencies in real time.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="h-12 rounded-full px-6 text-base"
              render={<a href="#demo" />}
              nativeButton={false}
            >
              Book a demo
            </Button>
            <Button
              variant="secondary"
              className="h-12 rounded-full bg-hairline-soft px-6 text-base hover:bg-hairline"
              render={<a href="#doctors" />}
              nativeButton={false}
            >
              Join as a doctor
            </Button>
          </div>
        </div>
      </Frame>

      <Divider />
      <Frame className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-4 text-center">
        <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider text-white uppercase">
          Watch
        </span>
        <span className="text-sm tracking-normal text-body">
          See how MaxMed works, from triage to video consultation.
        </span>
        <a
          href="#platform"
          className="text-sm font-medium tracking-normal text-ink underline underline-offset-4"
        >
          See features
        </a>
      </Frame>
      <Divider />

      <Frame>
        <VideoPlayer
          videoId="PjUmslHJsHk"
          title="MaxMed, telemedicine platform for care providers"
        />
      </Frame>
    </section>
  );
}
