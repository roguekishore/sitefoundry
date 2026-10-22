import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface PrenuvoButtonProps {
  /** the label */
  children: ReactNode;
  /** where it goes; without it the button is a <button> */
  href?: string;
  /**
   * gradient: green to teal (the main CTA) · ocean: green to blue · outline: translucent pill with
   * a light rim (on dark) · soft: teal-tinted pill with a thin ink rim (on light)
   */
  variant?: "gradient" | "ocean" | "outline" | "soft";
  /** sm: 40px tall (phone header) · md: 48px · lg: 54px */
  size?: "sm" | "md" | "lg";
  /** stretch to the width of its container */
  block?: boolean;
  /** for a <button>: the form button type */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-[3.375rem] px-8 text-sm lg:text-base",
};

export function PrenuvoButton({ children, href, variant = "gradient", size = "md", block = false, type = "button", className }: PrenuvoButtonProps) {
  const filled = variant === "gradient" || variant === "ocean";
  const classes = cn(
    "group/btn relative isolate inline-flex shrink-0 items-center justify-center overflow-clip rounded-full border font-display font-bold whitespace-nowrap",
    "transition-[background-color,color,border-color] duration-200 ease-[ease] motion-reduce:transition-none",
    filled && "border-transparent text-primary-foreground hover:border-primary-foreground",
    variant === "gradient" && "bg-[linear-gradient(101deg,var(--primary),var(--chart-4))]",
    variant === "ocean" && "bg-[linear-gradient(101deg,var(--primary),var(--glow))]",
    variant === "outline" && "border-foreground/90 bg-foreground/15 text-foreground hover:bg-foreground hover:text-background",
    variant === "soft" && "border-foreground/60 bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background",
    sizes[size],
    block && "w-full",
    className,
  );

  const inner = (
    <>
      {/* the hover tint over the gradient (a background colour can't show through a gradient) */}
      {filled && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-highlight/75 opacity-0 transition-opacity duration-200 ease-[ease] group-hover/btn:opacity-100 motion-reduce:transition-none"
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes}>
      {inner}
    </button>
  );
}
