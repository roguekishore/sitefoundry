import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookV2ButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: filled brand colour · outline: hairline border, transparent fill */
  variant?: "primary" | "outline";
  /** sm: 40px (header) · md: 58px, tight padding (section CTAs) · lg: 58px, wide padding (hero) */
  size?: "sm" | "md" | "lg";
  /** show a small arrow after the label */
  arrow?: boolean;
  /** stretch to the container's width below 1024px (as the original does on phones) */
  fullOnMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-10 gap-2 px-3 text-sm",
  md: "h-[3.625rem] gap-3 px-4 text-sm",
  lg: "h-[3.625rem] gap-3 px-11 text-base",
};

const variants = {
  // hover goes from the brand violet to a deeper one, about a fifth of the way towards the text colour
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-[color-mix(in_oklab,var(--primary)_80%,var(--foreground))] hover:bg-[color-mix(in_oklab,var(--primary)_80%,var(--foreground))]",
  outline: "border-input bg-transparent text-foreground hover:border-foreground",
};

export function GrowthbookV2Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow,
  fullOnMobile,
  onClick,
  className,
}: GrowthbookV2ButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center rounded-lg border font-sans font-normal whitespace-nowrap",
    "transition-[background-color,border-color,color] duration-250 ease-out motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    fullOnMobile && "w-full lg:w-auto",
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
