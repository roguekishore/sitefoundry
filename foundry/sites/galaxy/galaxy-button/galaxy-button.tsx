import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export type GalaxyTone = "highlight" | "chart-1" | "chart-2";

export interface GalaxyButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: primary fill with a trailing arrow · outline: a 1px coloured ring, no arrow */
  variant?: "solid" | "outline";
  /** the outline's colour: highlight (green), chart-1 (orange) or chart-2 (blue) */
  tone?: GalaxyTone;
  /** show the trailing arrow on a solid button (on by default) */
  arrow?: boolean;
  /** called on click (only when it renders a button) */
  onClick?: () => void;
  className?: string;
}

const outlineTones: Record<GalaxyTone, string> = {
  highlight: "border-highlight hover:bg-highlight/15",
  "chart-1": "border-chart-1 hover:bg-chart-1/15",
  "chart-2": "border-chart-2 hover:bg-chart-2/15",
};

/** The site's pill: 40px tall, 16px text set solid, 24px side padding. */
export function GalaxyButton({ children, href, variant = "solid", tone = "chart-2", arrow = true, onClick, className }: GalaxyButtonProps) {
  const classes = cn(
    "group inline-flex h-10 shrink-0 items-center justify-center gap-4 rounded-full px-6 font-sans text-base leading-none whitespace-nowrap",
    "transition-[background-color,color,opacity] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variant === "solid" ? "bg-primary text-primary-foreground hover:bg-primary/85" : cn("border text-foreground", outlineTones[tone]),
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {variant === "solid" && arrow && (
        <ArrowRight
          aria-hidden
          className="-mr-0.5 size-[1.125rem] transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover:translate-x-1/2 motion-reduce:transition-none"
          strokeWidth={2}
        />
      )}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
