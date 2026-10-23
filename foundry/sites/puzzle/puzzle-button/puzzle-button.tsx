import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface PuzzleButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * ink: near-black fill · violet: soft violet fill · card: the dark fill used inside cards ·
   * light: white fill (on violet bands) · outline: ink hairline · outline-on-dark: white hairline
   */
  variant?: "ink" | "violet" | "card" | "light" | "outline" | "outline-on-dark";
  /** sm: 34px (header) · md: 50px (hero, bands) · lg: 56px (inside cards) */
  size?: "sm" | "md" | "lg";
  /** adds a trailing arrow that nudges right on hover */
  arrow?: boolean;
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  ink: "bg-foreground text-background hover:bg-primary hover:text-primary-foreground duration-200",
  violet: "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground duration-200",
  card: "bg-foreground/90 text-background hover:bg-primary hover:text-primary-foreground duration-400",
  light: "border border-foreground/20 bg-card text-card-foreground hover:bg-accent duration-200",
  outline: "border border-foreground text-foreground hover:bg-foreground/10 duration-200",
  "outline-on-dark": "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 duration-200",
};

const sizes = {
  sm: "h-[2.125rem] rounded-[calc(var(--radius)*0.375)] px-[1.875rem] text-sm",
  md: "h-[3.125rem] rounded-[calc(var(--radius)*0.375)] px-[1.875rem] text-base",
  lg: "h-14 rounded-[calc(var(--radius)/2)] px-8 text-lg",
};

/** Puzzle's buttons: regular weight, no shadow, the fill eases to the deep violet on hover. */
export function PuzzleButton({ children, href, variant = "ink", size = "md", arrow, type = "button", className }: PuzzleButtonProps) {
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center justify-center gap-3 font-sans font-medium whitespace-nowrap",
    "transition-colors ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-5 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transition-none"
          strokeWidth={1.75}
        />
      )}
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
