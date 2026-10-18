import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface StripeButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: indigo fill · white: white fill with indigo text and a soft shadow ·
   * outline: hairline border with indigo text · ghost: hairline border in the text colour
   * (for dark bands) · link: plain indigo text
   */
  variant?: "primary" | "white" | "outline" | "ghost" | "link";
  /** sm: 40px tall, 14px text (headers) · md: 48px tall, 16px text */
  size?: "sm" | "md";
  /** the small chevron after the label that grows a stem on hover */
  arrow?: boolean;
  /** stretch to the full width on phones (as the original's CTAs do) */
  fullOnMobile?: boolean;
  /** label for screen readers when the visible label is not enough */
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklab,var(--primary)_85%,var(--foreground))]",
  white:
    "bg-background text-primary shadow-[0_3px_6px_0_color-mix(in_oklab,var(--foreground)_6%,transparent),0_15px_35px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)] hover:text-foreground",
  outline: "border border-primary/25 bg-background text-primary hover:border-primary/60",
  ghost: "border border-foreground/25 text-foreground hover:border-foreground/60",
  link: "h-auto! px-0! text-primary hover:text-foreground",
};

/** The chevron that grows a short stem and nudges right when its parent `.group` is hovered. */
export function HoverArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className={cn("ml-2 inline-block size-[0.55em] shrink-0 overflow-visible stroke-current", className)}
      fill="none"
      strokeWidth={1.7}
    >
      <path d="M0 5h7" className="opacity-0 transition-opacity duration-150 group-hover:opacity-100 motion-reduce:transition-none" />
      <path
        d="M1 1l4 4-4 4"
        className="transition-transform duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none"
      />
    </svg>
  );
}

export function StripeButton({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  fullOnMobile = false,
  ariaLabel,
  onClick,
  className,
}: StripeButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center rounded-md font-sans font-normal whitespace-nowrap",
    "transition-[background-color,color,border-color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    fullOnMobile && "w-full sm:w-auto",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <HoverArrow />}
    </>
  );
  return href ? (
    <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes} aria-label={ariaLabel} onClick={onClick}>
      {inner}
    </button>
  );
}
