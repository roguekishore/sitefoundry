import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ReckonerV2ButtonProps {
  /** the label */
  children: ReactNode;
  /** a link target; without it the button is a <button> */
  href?: string;
  /**
   * sand: sand fill that turns primary on hover (light surfaces).
   * outline / tint / light: for the primary surface: a hairline outline, a faint tint, or a
   * solid primary-foreground fill.
   */
  variant?: "sand" | "outline" | "tint" | "light";
  /** sm: 42px (header), md: 46px, lg: 55px with 16px text (next to a form field) */
  size?: "sm" | "md" | "lg";
  /** for a <button>: submit inside forms */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  sand: "border-secondary bg-secondary text-secondary-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
  outline:
    "border-primary-foreground/15 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary",
  tint: "border-transparent bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
  light: "border-primary-foreground bg-primary-foreground text-primary hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
};

const sizes = {
  sm: "h-[2.625rem] px-5 text-sm",
  md: "h-[2.875rem] px-6 text-sm",
  lg: "h-[3.4375rem] px-6 text-base font-semibold",
};

/** A square, flat button whose colours change over 0.5s. */
export function ReckonerV2Button({ children, href, variant = "sand", size = "md", type = "button", className }: ReckonerV2ButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-none border font-medium whitespace-nowrap",
    "transition-[background-color,border-color,color] duration-500 ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
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
