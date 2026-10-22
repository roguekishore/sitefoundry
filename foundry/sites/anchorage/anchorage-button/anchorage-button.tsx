import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface AnchorageButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: cobalt fill · inverse: text-coloured fill (white on dark), for coloured bands · outline: 2px frame that fills lilac on hover */
  variant?: "primary" | "inverse" | "outline";
  /** sm: 42px tall (header, bands) · md: 44px tall (forms) */
  size?: "sm" | "md";
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-[2.625rem] px-4 text-base",
  md: "h-11 px-6 text-base",
};

const variants = {
  primary: "bg-primary font-display font-bold text-primary-foreground hover:bg-primary/70",
  inverse: "bg-foreground text-sm font-medium text-background hover:bg-foreground/85",
  outline: "border-2 border-foreground font-medium text-foreground hover:border-highlight hover:bg-highlight hover:text-highlight-foreground",
};

/** Anchorage's button: small radius, no shadow, a colour change on hover (0.3s ease). */
export function AnchorageButton({ children, href, variant = "primary", size = "sm", type = "button", className }: AnchorageButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-sm whitespace-nowrap transition-all duration-300 ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
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
