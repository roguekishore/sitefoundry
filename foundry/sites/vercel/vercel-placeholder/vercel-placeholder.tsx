import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VercelPlaceholderProps {
  /** window: ringed grey frame fading out at the bottom · haze: soft grey glow in the middle ·
   *  wash: light-to-bright blue · side: grey panel fading out to the left */
  tone?: "window" | "haze" | "wash" | "side";
  /** what the slot will hold, read to screen readers (e.g. "Product screenshot") */
  label?: string;
  /** real media to show inside the frame instead of the empty surface */
  children?: ReactNode;
  className?: string;
}

const tones = {
  window:
    "rounded-t-lg bg-muted shadow-xs shadow-foreground/5 ring-1 ring-foreground/8 mask-b-from-55% mask-b-to-100%",
  haze: "bg-radial-[closest-side] from-foreground/12 to-transparent",
  wash: "bg-linear-to-br from-glow/60 to-highlight",
  side: "bg-muted mask-l-from-40% mask-l-to-100%",
};

/** Stands in for media: a plain surface in the theme's colours, no drawing. */
export function VercelPlaceholder({ tone = "window", label, children, className }: VercelPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full overflow-clip", tones[tone], className)}
    >
      {children}
    </div>
  );
}
