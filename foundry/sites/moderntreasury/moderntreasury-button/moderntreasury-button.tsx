import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: ink fill · outline: 1px ink ring on the page colour · link: bold text, no box */
  variant?: "solid" | "outline" | "link";
  /** xs: 32px, 13px bold (inside cards) · sm: 32px, 14px (header) · md: 40px, 16px (hero, forms) */
  size?: "xs" | "sm" | "md";
  /** a small arrow after the label that moves right on hover */
  arrow?: boolean;
  /** the button's type when it isn't a link (e.g. "submit" inside a form) */
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const sizes = {
  xs: "h-8 px-3 text-[0.8125rem] font-bold",
  sm: "h-8 px-3 text-sm font-medium",
  md: "h-10 px-3.5 text-base font-semibold",
};

const variants = {
  solid: "rounded-[calc(var(--radius)/4)] bg-primary text-primary-foreground hover:bg-primary/85",
  outline: "rounded-[calc(var(--radius)/4)] bg-background text-foreground ring-1 ring-foreground ring-inset hover:bg-foreground/5",
  link: "h-auto! px-0! text-sm font-semibold text-foreground hover:text-highlight",
};

/** Modern Treasury's button: square corners, a fill or an inset ring, an arrow that nudges on hover. */
export function ModerntreasuryButton({ children, href, variant = "solid", size = "md", arrow, type = "button", onClick, className }: ModerntreasuryButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-[1.05em] transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:transition-none"
          strokeWidth={2.25}
        />
      )}
    </>
  );
  return href ? (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
