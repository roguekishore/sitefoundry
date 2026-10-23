import type { ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface UnitButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** solid: filled pill in the primary colour · outline: hairline pill on the page */
  variant?: "solid" | "outline";
  /** md: 36px on phones, 42px from desktop (section CTAs) · sm: 40px at every width (header) */
  size?: "sm" | "md";
  /** the button's type when it isn't a link */
  type?: "button" | "submit";
  className?: string;
}

const ease = "duration-[425ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";

const sizes = {
  sm: "h-10 gap-2.5 pr-4 pl-4 text-sm",
  md: "h-9 gap-2.5 pr-3.5 pl-3.5 text-[0.8125rem] lg:h-[2.625rem] lg:pr-5 lg:pl-5 lg:text-sm",
};

/** The pill button: a chevron at rest that hands over to an arrow sliding in from the left on hover. */
export function UnitButton({ children, href, variant = "solid", size = "md", type = "button", className }: UnitButtonProps) {
  const classes = cn(
    "group/btn inline-flex shrink-0 items-center justify-center rounded-full leading-none whitespace-nowrap",
    "transition-[background-color,border-color]",
    ease,
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/80"
      : "border border-input bg-transparent text-foreground hover:border-foreground/60 hover:bg-background/20",
    sizes[size],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="relative inline-flex size-3 items-center justify-center">
        <ChevronRight className={cn("absolute size-3 transition-[opacity,transform] group-hover/btn:translate-x-1 group-hover/btn:opacity-0", ease)} strokeWidth={2} />
        <ArrowRight className={cn("absolute size-3 -translate-x-2 opacity-0 transition-[opacity,transform] group-hover/btn:translate-x-0 group-hover/btn:opacity-100", ease)} strokeWidth={2} />
      </span>
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
