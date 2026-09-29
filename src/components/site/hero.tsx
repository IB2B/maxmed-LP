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
import { getDictionary, type Locale } from "@/i18n/config";

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

const ICONS: Record<string, { icon: LucideIcon; className: string; tilt: string }> = {
  doctors: { icon: StethoscopeIcon, className: "border-[#cfe0ff] bg-[#eaf2ff] text-link", tilt: "-rotate-6" },
  patients: { icon: ClipboardListIcon, className: "border-[#ffe1b3] bg-[#fff4e0] text-[#ab570a]", tilt: "rotate-3" },
  visits: { icon: VideoIcon, className: "border-[#ddd0f5] bg-[#f3edfc] text-violet", tilt: "-rotate-3" },
  one: { icon: SquareCheckBigIcon, className: "border-[#bfe8d3] bg-[#e6f7ee] text-emerald-700", tilt: "rotate-2" },
};

export function Hero({ lang }: { lang: Locale }) {
  const { hero: t, common } = getDictionary(lang);
  return (
    <section>
      <Frame className="px-5 pt-16 pb-16 sm:px-10 sm:pt-24 sm:pb-20">
        <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.05em] text-ink sm:text-[56px] lg:text-[64px]">
          {t.title.map((word, i) => {
            const style = word.icon ? ICONS[word.icon] : undefined;
            return (
              <span key={i}>
                {i > 0 && " "}
                {style ? (
                  <IconWord icon={style.icon} className={style.className} tilt={style.tilt}>
                    {word.text}
                  </IconWord>
                ) : (
                  word.text
                )}
              </span>
            );
          })}
        </h1>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-24 lg:items-center lg:justify-between">
          <p className="max-w-[440px] text-lg leading-8 tracking-normal text-body">{t.intro}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="h-12 rounded-full px-6 text-base"
              render={<a href="#demo" />}
              nativeButton={false}
            >
              {common.bookDemo}
            </Button>
            <Button
              variant="secondary"
              className="h-12 rounded-full bg-hairline-soft px-6 text-base hover:bg-hairline"
              render={<a href="#doctors" />}
              nativeButton={false}
            >
              {common.joinDoctor}
            </Button>
          </div>
        </div>
      </Frame>

      <Divider />
      <Frame className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-4 text-center">
        <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider text-white uppercase">
          {t.watch}
        </span>
        <span className="text-sm tracking-normal text-body">{t.watchText}</span>
        <a
          href="#platform"
          className="text-sm font-medium tracking-normal text-ink underline underline-offset-4"
        >
          {t.seeFeatures}
        </a>
      </Frame>
      <Divider />

      <Frame>
        <VideoPlayer videoId="PjUmslHJsHk" title={t.videoTitle} />
      </Frame>
    </section>
  );
}
