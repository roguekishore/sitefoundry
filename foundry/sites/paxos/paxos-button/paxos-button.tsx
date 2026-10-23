import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PaxosButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: slate fill · outline: a 1px ink ring on a clear ground · bold: taller, heavier solid (forms) */
  variant?: "solid" | "outline" | "bold";
  /** button type when it renders a button */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  solid: "h-8 px-3.5 text-sm bg-primary text-primary-foreground hover:bg-primary/85",
  outline: "h-[2.125rem] px-3.5 text-sm border border-foreground text-foreground hover:bg-foreground/5",
  bold: "h-[2.375rem] px-6 text-[0.8125rem] font-semibold tracking-[0.01em] bg-primary text-primary-foreground hover:bg-primary/85",
};

/** The site's pill: round ends, regular-weight 14px label, quiet hover. */
export function PaxosButton({ children, href, variant = "solid", type = "button", className }: PaxosButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full whitespace-nowrap tracking-[-0.01em]",
    "transition-colors duration-150 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    className,
  );
  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
