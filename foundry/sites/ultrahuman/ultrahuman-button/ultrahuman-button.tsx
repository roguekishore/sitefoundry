import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface UltrahumanButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: the blue buy button · light: white fill, dark text (on photos) ·
   * glass: translucent white over a photo, turns solid ink on hover ·
   * ink: solid foreground · outline: hairline border, faint fill on hover
   */
  variant?: "primary" | "light" | "glass" | "ink" | "outline";
  /** md: 37px tall (40px on phones), 140px wide at least · lg: 42px tall, 143px wide at least */
  size?: "md" | "lg";
  /** called on click (only when it renders a button) */
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-92",
  light: "bg-background text-foreground hover:opacity-92",
  glass: "border border-background/40 bg-background/30 text-foreground backdrop-blur-sm hover:border-foreground hover:bg-foreground hover:text-background",
  ink: "bg-foreground text-background hover:opacity-85",
  outline: "border border-foreground/15 text-foreground hover:bg-foreground/5",
};

const sizes = {
  md: "h-10 min-w-[8.75rem] px-6 text-[0.9375rem] lg:h-[2.3125rem] lg:text-sm",
  lg: "h-[2.625rem] min-w-[8.9375rem] px-6 text-[0.9375rem]",
};

/** The site's pill button: fully round, regular weight, tight tracking. */
export function UltrahumanButton({ children, href, variant = "primary", size = "md", onClick, className }: UltrahumanButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full tracking-[-0.01em] whitespace-nowrap",
    "transition-[background-color,border-color,color,opacity] duration-[275ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
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
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
