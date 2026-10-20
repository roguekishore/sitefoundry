import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface RoveiaV2ButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: brand-blue pill · ink: black pill that turns blue on hover */
  variant?: "primary" | "ink";
  /** sm: 40px tall (nav) · md: 52px tall (sections) */
  size?: "sm" | "md";
  /** show the small arrow after the label (on by default) */
  arrow?: boolean;
  /** stretch to the container's width (phones) */
  block?: boolean;
  className?: string;
}

const sizes = {
  sm: "h-10 gap-3 pl-3 pr-3.5 text-base tracking-[-0.03em]",
  md: "h-[3.25rem] gap-4 px-10 text-base tracking-[-0.02em]",
};

const variants = {
  // the original: background-color all 0.3s ease, blue → a lighter blue
  primary: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_82%,var(--background))] duration-300",
  // the original: 0.5s ease, ink → brand blue
  ink: "bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-500",
};

export function RoveiaV2Button({ children, href, variant = "primary", size = "md", arrow = true, block, className }: RoveiaV2ButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap",
    "transition-colors ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    block && "w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-4" strokeWidth={2} />}
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
