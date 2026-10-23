import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PilotButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * sun: yellow fill → violet on hover · solid: violet fill → darker ·
   * outline-light: light outline on dark bands → light fill · outline: violet outline → violet fill
   */
  variant?: "sun" | "solid" | "outline-light" | "outline";
  /** sm: 42px (cards) · md: 44px (header) · lg: 48px (hero) */
  size?: "sm" | "md" | "lg";
  /** a small icon before the label (e.g. a play triangle) */
  icon?: ReactNode;
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  sun: "border-highlight bg-highlight text-highlight-foreground duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground",
  solid: "border-primary bg-primary text-primary-foreground duration-100 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
  "outline-light":
    "border-secondary-foreground bg-transparent text-secondary-foreground duration-100 hover:bg-secondary-foreground hover:text-secondary",
  outline: "border-primary bg-transparent text-primary duration-100 hover:bg-primary hover:text-primary-foreground",
};

const sizes = {
  sm: "h-[2.625rem] px-5 text-base",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

/** Pilot's pill: uppercase Space Mono, a flat fill or 1px outline, colours swap on hover. */
export function PilotButton({ children, href, variant = "solid", size = "md", icon, type = "button", className }: PilotButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border font-mono leading-none whitespace-nowrap uppercase",
    "transition-colors ease-in-out motion-reduce:transition-none [&_svg]:size-3.5",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      {icon}
      {children}
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
