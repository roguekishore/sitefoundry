import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RailwayButtonProps {
  children: ReactNode;
  /** renders a link when set, a button otherwise */
  href?: string;
  /**
   * primary: muted violet with a lighter violet hairline · dark: near-black with a hairline ·
   * outline: faint fill and a brighter hairline · ghost: no fill until hovered ·
   * glow: a radial gradient from the glow colour to chart-1 with a soft glow that doubles on hover
   */
  variant?: "primary" | "dark" | "outline" | "ghost" | "glow";
  /** sm: 36px nav-sized · md: 44px · lg: 58px hero-sized with 20px text */
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const sizes = {
  sm: "h-9 rounded-md px-3 text-sm",
  md: "h-11 rounded-md px-4 text-base",
  lg: "h-[3.625rem] rounded-lg px-6 text-xl",
};

const variants = {
  primary: "border border-ring/70 bg-primary text-primary-foreground hover:brightness-110",
  dark: "border border-foreground/20 bg-secondary/90 text-secondary-foreground hover:bg-secondary",
  outline: "border border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10",
  ghost: "text-foreground hover:bg-foreground/5",
  // the original's radial gradient: glow at the top centre fading to chart-1 at the edges
  glow:
    "bg-[radial-gradient(73%_138%_at_50%_0%,var(--glow)_50%,var(--chart-1)_100%)] text-primary-foreground shadow-[0_0_6px_0_color-mix(in_oklab,var(--glow)_25%,transparent),0_0_16px_0_color-mix(in_oklab,var(--chart-1)_25%,transparent)] hover:shadow-[0_0_12px_0_color-mix(in_oklab,var(--glow)_50%,transparent),0_0_32px_0_color-mix(in_oklab,var(--chart-1)_50%,transparent)]",
};

/** Railway-style button: small radii, hairline borders, quick 150ms colour changes. */
export function RailwayButton({ children, href, variant = "primary", size = "md", onClick, className }: RailwayButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap",
    "transition-[background-color,color,box-shadow,filter] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    sizes[size],
    variants[variant],
    variant === "glow" && "duration-250",
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
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
