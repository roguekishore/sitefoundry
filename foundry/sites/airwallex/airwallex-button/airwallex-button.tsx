import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AirwallexButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: violet fill · outline: white with a hairline and violet text · text: a bare violet link */
  variant?: "primary" | "outline" | "text";
  /** sm: 32px (phone header) · md: 40px · lg: 44px (inside the hero's email field) */
  size?: "sm" | "md" | "lg";
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-glow",
  outline: "border border-input bg-card text-primary hover:bg-primary/4",
  text: "text-primary hover:text-glow",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-11 px-4 text-base",
};

/** The site's button: 6px corners, semibold label, a quick colour ease on hover. */
export function AirwallexButton({ children, href, variant = "primary", size = "md", type = "button", className }: AirwallexButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap",
    "transition-colors duration-250 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    variant === "text" && "h-auto px-0",
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
