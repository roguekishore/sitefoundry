import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LedupButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /** solid: taupe pill with white text · outline: thin ink outline that fills on hover */
  variant?: "solid" | "outline";
  /** show the small up-right arrow after the label */
  arrow?: boolean;
  className?: string;
}

const variants = {
  solid: "bg-primary/90 text-primary-foreground backdrop-blur-md hover:bg-foreground/85",
  outline: "border border-foreground text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
};

export function LedupButton({ children, href, variant = "solid", arrow = true, className }: LedupButtonProps) {
  const classes = cn(
    "inline-flex h-9 shrink-0 items-center gap-3 rounded-full px-5 text-sm leading-none whitespace-nowrap transition-colors duration-[120ms] ease-in-out motion-reduce:transition-none",
    variant === "solid" ? "font-medium" : "font-normal",
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-3.5" />}
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes}>
      {inner}
    </button>
  );
}
