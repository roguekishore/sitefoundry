import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface FramerPlaceholderProps {
  /** well: muted surface (media inside cards) · panel: card surface (windows, side panels) ·
   *  glow: card surface with a soft blue rim of light */
  tone?: "well" | "panel" | "glow";
  /** fade into the page towards one edge, as the original's cropped UI shots do */
  fade?: "none" | "right" | "bottom" | "both";
  /** what the slot will hold, read to screen readers (e.g. "Product video") */
  label?: string;
  /** real media to show instead of the empty surface */
  children?: ReactNode;
  className?: string;
}

const tones = {
  well: "bg-muted",
  panel: "bg-card",
  glow: "bg-card ring-1 ring-glow/70 shadow-[0_0_2.5rem_0.25rem_color-mix(in_oklab,var(--glow)_45%,transparent),inset_0_0_1.5rem_color-mix(in_oklab,var(--glow)_25%,transparent)]",
};

const fades = {
  none: "",
  right: "mask-r-from-55% mask-r-to-100%",
  bottom: "mask-b-from-55% mask-b-to-100%",
  both: "mask-r-from-60% mask-r-to-100% mask-b-from-60% mask-b-to-100%",
};

/** Stands in for media: a plain surface in the theme's colours. */
export function FramerPlaceholder({ tone = "well", fade = "none", label, children, className }: FramerPlaceholderProps) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full overflow-clip", tones[tone], fades[fade], className)}
    >
      {children}
    </div>
  );
}
