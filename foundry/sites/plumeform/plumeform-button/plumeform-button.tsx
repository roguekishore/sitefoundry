import type { ReactNode } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PlumeformButtonProps {
  /** the label */
  children: ReactNode;
  href?: string;
  /**
   * solid: ink on paper pages, paper on dark bands · plume: the teal brand fill ·
   * soft: a quiet outlined pill · light: paper fill wherever it sits (e.g. on a teal card)
   */
  variant?: "solid" | "plume" | "soft" | "light";
  size?: "sm" | "md" | "lg";
  /** shows a thin arrow after the label */
  arrow?: boolean;
  /** stretches to the width of its container */
  block?: boolean;
  /** renders a <button> instead of a link */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground",
  plume: "bg-highlight text-highlight-foreground hover:bg-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground",
  soft: "border border-border bg-secondary text-secondary-foreground hover:border-highlight/40 hover:bg-accent",
  light: "bg-primary-foreground text-primary hover:bg-accent dark:bg-primary dark:text-primary-foreground",
};

const sizes = {
  sm: "h-8 px-4 text-[0.8125rem]",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-8 text-[0.9375rem]",
};

/** Plumeform's pill button: lifts 1px and changes fill on hover (0.2s). */
export function PlumeformButton({ children, href, variant = "solid", size = "md", arrow, block, type, className }: PlumeformButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full font-semibold whitespace-nowrap",
    "transition-[background-color,color,transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-px",
    "motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <MoveRight aria-hidden className="size-4" strokeWidth={1.75} />}
    </>
  );
  if (type) {
    return (
      <button type={type} className={classes}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}
