import { cn } from "@/lib/utils";

/** Centered column with hairline side rails that run the length of the page. */
export function Frame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-[1080px] border-x border-hairline", className)}>
      {children}
    </div>
  );
}

/** Full-bleed hairline with small markers where it crosses the frame rails. */
export function Divider() {
  return (
    <div className="relative h-px bg-hairline" aria-hidden>
      <div className="relative mx-auto h-px max-w-[1080px]">
        <span className="absolute top-1/2 left-0 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hairline bg-white" />
        <span className="absolute top-1/2 right-0 size-[7px] translate-x-1/2 -translate-y-1/2 rounded-full border border-hairline bg-white" />
      </div>
    </div>
  );
}
