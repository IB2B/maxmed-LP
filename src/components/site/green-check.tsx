import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/** Plain green tick for benefit lists. */
export function GreenCheck({ className }: { className?: string }) {
  return (
    <CheckIcon
      aria-hidden
      className={cn("size-5 shrink-0 text-emerald-600", className)}
      strokeWidth={2.5}
    />
  );
}
