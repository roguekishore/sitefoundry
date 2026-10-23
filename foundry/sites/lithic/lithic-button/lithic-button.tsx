import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LithicButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: orange · dark: ink fill (the header's "Dashboard") · glass: white/25 on dark panels · light: white on tinted bands */
  variant?: "primary" | "dark" | "glass" | "light";
  /** show the trailing arrow (default true) */
  arrow?: boolean;
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/85",
  dark: "bg-foreground text-background hover:bg-foreground/80",
  glass: "bg-foreground/25 text-foreground hover:text-primary",
  light: "bg-card text-accent-foreground hover:bg-card/70",
};

/** Lithic's pill: 32px tall, 14px medium type, fully rounded, an arrow after the label. */
export function LithicButton({ children, href, variant = "primary", arrow = true, type = "button", className }: LithicButtonProps) {
  const classes = cn(
    "inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold whitespace-nowrap",
    "transition-colors duration-200 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
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
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
