import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Divider, Frame } from "@/components/site/frame";
import { getDictionary, type Locale } from "@/i18n/config";

/** OpenMoji icon with a white sticker edge and a soft drop shadow. */
function Sticker({ icon, className }: { icon: string; className?: string }) {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      alt=""
      width={112}
      height={112}
      aria-hidden
      className={cn(
        "pointer-events-none absolute hidden size-28 md:block",
        "[filter:drop-shadow(3px_0_0_#fff)_drop-shadow(-3px_0_0_#fff)_drop-shadow(0_3px_0_#fff)_drop-shadow(0_-3px_0_#fff)_drop-shadow(0_6px_8px_rgba(0,0,0,0.14))]",
        className
      )}
    />
  );
}

export function FinalCta({ lang }: { lang: Locale }) {
  const { finalCta: t, common } = getDictionary(lang);
  return (
    <section aria-labelledby="final-cta-title">
      <Frame className="relative overflow-hidden px-5 py-24 text-center sm:px-10 sm:py-28">
        <Sticker icon="hospital" className="top-10 left-12 -rotate-12" />
        <Sticker icon="check-mark" className="right-14 bottom-10 rotate-6" />

        <h2
          id="final-cta-title"
          className="mx-auto max-w-[560px] text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[52px]"
        >
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[460px] text-[17px] leading-7 tracking-normal text-body">
          {t.subtitle}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
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
      </Frame>
      <Divider />
    </section>
  );
}
