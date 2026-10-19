import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HalodentalSonnetButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: orange fill · light: foreground-coloured fill, for dark panels · quiet: a faint
   * translucent square (language switch, icon buttons) · outline: thin hairline, no fill
   */
  variant?: "primary" | "light" | "quiet" | "outline";
  /** sm: 32px tall · md: 40px tall · lg: 44px tall (the play button) */
  size?: "sm" | "md" | "lg";
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  /** greys it out and blocks clicks (a form button before the form is filled in) */
  disabled?: boolean;
  /** screen-reader name, for buttons that hold only an icon */
  label?: string;
  className?: string;
}

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-11 gap-3 px-4 text-base",
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_85%,var(--foreground))]",
  light: "bg-foreground text-background hover:bg-foreground/85",
  quiet: "bg-foreground/10 text-foreground hover:bg-foreground/20",
  outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
};

/** The button: 4px corners, regular weight, nothing but a colour change on hover. */
export function HalodentalSonnetButton({ children, href, variant = "primary", size = "md", type = "button", disabled, label, className }: HalodentalSonnetButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-sm whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    disabled && "pointer-events-none opacity-30",
    className,
  );
  return href && !disabled ? (
    <a href={href} aria-label={label} className={classes}>
      {children}
    </a>
  ) : (
    <button type={type} aria-label={label} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
