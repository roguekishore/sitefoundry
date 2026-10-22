import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WarpButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * ink: solid ink fill · outline: hairline border on the page · citron: highlight fill with an
   * ink border · blue: brand-coloured outline · inverse: white fill with brand text (on brand bands)
   */
  variant?: "ink" | "outline" | "citron" | "blue" | "inverse";
  /** sm: 32px (header) · md: 34px (sections) · lg: 40px, normal case (product cards) */
  size?: "sm" | "md" | "lg";
  /** a small arrow after the label that nudges right on hover */
  arrow?: boolean;
  /** an icon after the label (e.g. a chevron for a menu) */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-8 px-4 text-[0.8125rem] tracking-[calc(0.1em_-_var(--warp-squeeze,0em))] uppercase",
  md: "min-h-[2.125rem] px-4 py-1.5 text-[0.8125rem] tracking-[calc(0.1em_-_var(--warp-squeeze,0em))] uppercase",
  lg: "h-10 px-4 text-[0.9375rem] tracking-[calc(0.04em_-_var(--warp-squeeze,0em))]",
};

const variants = {
  ink: "border border-foreground bg-foreground font-semibold text-background hover:border-primary hover:bg-primary hover:text-primary-foreground",
  outline: "border border-border bg-card font-medium text-foreground hover:border-primary hover:text-primary",
  citron: "border border-foreground/10 bg-highlight font-medium text-highlight-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
  blue: "border border-primary bg-card font-medium text-primary hover:bg-primary hover:text-primary-foreground",
  inverse: "border border-primary-foreground bg-primary-foreground font-medium text-primary hover:bg-transparent hover:text-primary-foreground",
};

/** Warp's square button: uppercase mono, wide tracking, turns blue on hover. */
export function WarpButton({ children, href, variant = "ink", size = "md", arrow, icon, onClick, className }: WarpButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center gap-2 rounded-[calc(var(--radius)/2)] text-left leading-[1.55] transition-colors duration-150 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {icon}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-[1.1em] transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={2}
        />
      )}
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
