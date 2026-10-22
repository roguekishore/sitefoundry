import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RhoButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /** primary: mint fill · outline: hairline border, no fill · inverse: text-coloured fill (white on dark, ink on light) */
  variant?: "primary" | "outline" | "inverse";
  /** sm: 40px (header) · md: 44px (section CTAs) · lg: 48px (hero) */
  size?: "sm" | "md" | "lg";
  /** button type when no href is given */
  type?: "button" | "submit";
  className?: string;
}

const sizes = {
  sm: "h-10 px-5 text-[0.9375rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-5 text-[0.9375rem]",
};

// Hover: the mint deepens (lower lightness, more chroma) and the inverse one greys a little,
// as the original does; the outline takes the card tint.
const variants = {
  primary: "border-primary bg-primary text-primary-foreground hover:brightness-[0.93] hover:saturate-[1.6]",
  outline: "border-input bg-transparent text-foreground hover:bg-card",
  inverse: "border-foreground bg-foreground text-background hover:brightness-[0.94]",
};

export function RhoButton({ children, href, variant = "primary", size = "md", type = "button", className }: RhoButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md border font-sans font-normal whitespace-nowrap",
    "transition-[background-color,border-color,color,filter] duration-[160ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
    sizes[size],
    variants[variant],
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
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
