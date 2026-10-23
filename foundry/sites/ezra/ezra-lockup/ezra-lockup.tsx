import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface EzraLockupProps {
  /** the brand's name, set heavier in lowercase */
  name: string;
  /** a partner name shown first, light, with a hairline between */
  partner?: string;
  /** a small mark before the first name (e.g. a lucide icon) */
  mark?: ReactNode;
  /** text size and colour (the lockup scales with font-size) */
  className?: string;
}

/** "mark Partner | brand": the co-brand wordmark used in the header, hero card and footer. */
export function EzraLockup({ name, partner, mark, className }: EzraLockupProps) {
  return (
    <span className={cn("inline-flex items-center gap-[0.55em] text-[1.5rem] leading-none", className)}>
      {partner && (
        <>
          <span className="inline-flex items-center gap-[0.3em] font-light tracking-[-0.01em]">
            {mark}
            {partner}
          </span>
          <span aria-hidden className="h-[1.3em] w-px bg-current opacity-60" />
        </>
      )}
      {!partner && mark}
      <span className="font-semibold tracking-[0.01em] lowercase">{name}</span>
    </span>
  );
}
