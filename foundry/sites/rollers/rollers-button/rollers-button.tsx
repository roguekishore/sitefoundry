import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RollersButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /** primary: the orange 3px-cornered rectangle · pill: the charcoal pill · light: the white pill (for coloured bands) */
  variant?: "primary" | "pill" | "light";
  /** md: the 48px button of the page · wide: the equal-width pair of the hero card (desktop only) */
  size?: "md" | "wide";
  className?: string;
}

const variants = {
  primary: "rounded-lg bg-primary text-primary-foreground",
  pill: "rounded-full bg-secondary text-secondary-foreground",
  light: "rounded-full bg-background text-foreground hover:text-background",
};

const sizes = {
  md: "h-11 px-6.5 text-[0.875rem] md:h-12 md:px-[1.6875rem] md:text-[1.125rem]",
  wide: "h-12 flex-1 px-4 text-[1.125rem]",
};

/** The site's two button shapes: an orange rectangle with 3px corners for the main action,
    and pills (charcoal or white) for the quieter one. Both fade to the olive grey on hover
    over 0.45s, like the original. */
export function RollersButton({ children, href, variant = "primary", size = "md", className }: RollersButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center font-display leading-none whitespace-nowrap",
    "transition-colors duration-[450ms] ease-out hover:bg-muted-foreground focus-visible:bg-muted-foreground motion-reduce:transition-none",
    variants[variant],
    sizes[size],
    className,
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
