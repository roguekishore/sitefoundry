import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface RoveiaButtonProps {
  /** the label */
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: electric blue, lightens on hover · dark: ink pill that turns blue on hover */
  variant?: "primary" | "dark";
  /** sm: 40px (nav, card pills) · lg: 52px (hero and CTA) */
  size?: "sm" | "lg";
  /** arrow after the label: right (→, default), up-right (↗) or none */
  arrow?: "right" | "up-right" | "none";
  /** stretch to the container's width */
  block?: boolean;
  className?: string;
}

const sizes = {
  sm: "h-10 gap-3 px-3 text-base tracking-[-0.02em]",
  lg: "h-13 gap-4 px-10 text-base font-medium tracking-[-0.01em]",
};

const variants = {
  // the original lightens its blue a step on hover; on white that is 85% of the blue
  primary: "bg-primary text-primary-foreground duration-300 hover:bg-primary/85",
  dark: "bg-foreground text-background duration-500 hover:bg-primary hover:text-primary-foreground",
};

/** Roveia's pill button: blue or ink, with a small arrow. */
export function RoveiaButton({ children, href, variant = "primary", size = "lg", arrow = "right", block, className }: RoveiaButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full whitespace-nowrap transition-colors ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    block && "w-full",
    className,
  );
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      {arrow !== "none" && <Icon aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />}
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
