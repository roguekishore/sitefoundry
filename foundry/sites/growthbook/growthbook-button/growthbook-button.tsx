import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookButtonProps {
  /** the label */
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: solid brand violet · outline: hairline border, transparent fill */
  variant?: "primary" | "outline";
  /** sm: 44px tall, 14px (header) · md: 58px, 14px · lg: 58px, 16px, wide (hero) */
  size?: "sm" | "md" | "lg";
  /** a right arrow after the label */
  arrow?: boolean;
  /** full width below the md breakpoint (the original's phone buttons) */
  blockOnMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-11 px-3 text-sm",
  md: "h-[3.625rem] px-4 text-sm",
  lg: "h-[3.625rem] px-11 text-base",
};

const variants = {
  // hover: the violet darkened a step, as on the original
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-[color-mix(in_oklab,var(--primary)_82%,black)] hover:bg-[color-mix(in_oklab,var(--primary)_82%,black)]",
  outline: "border-input bg-transparent text-foreground hover:border-foreground",
};

export function GrowthbookButton({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow,
  blockOnMobile,
  onClick,
  className,
}: GrowthbookButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-3 rounded-sm border font-sans font-normal whitespace-nowrap",
    "transition-[background-color,border-color,color] duration-250 ease-[ease] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    blockOnMobile && "w-full md:w-auto",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-5 shrink-0" strokeWidth={1.75} />}
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
