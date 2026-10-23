import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface OndoButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: primary fill · soft: a translucent ink wash (secondary actions) */
  variant?: "solid" | "soft";
  /** sm: 36px tall (nav, cards) · md: 44px (section actions) · lg: 48px (full-width on phones) */
  size?: "sm" | "md" | "lg";
  /** called on click (only when it renders a button) */
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-5 text-lg",
};

/** The site's flat button: medium weight, 8px corners, the fill dims on hover. */
export function OndoButton({ children, href, variant = "solid", size = "sm", onClick, className }: OndoButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium tracking-[-0.01em] whitespace-nowrap",
    "transition-[background-color,opacity] duration-200 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/80"
      : "bg-foreground/25 text-foreground hover:bg-foreground/35",
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
