import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CursorButtonProps {
  /** the label (an icon may follow it) */
  children: ReactNode;
  href: string;
  /** primary: the ink pill · secondary: the pale grey pill · outline: a hairline pill (header) */
  variant?: "primary" | "secondary" | "outline";
  /** sm: 28px, 14px text (header) · lg: 44px, 16px text (hero and closing call) */
  size?: "sm" | "lg";
  className?: string;
}

const variants = {
  // hover: one step lighter ink (the original goes from its ink to a slightly paler ink)
  primary:
    "border border-primary bg-primary text-primary-foreground hover:border-[color-mix(in_oklab,var(--primary)_88%,var(--background))] hover:bg-[color-mix(in_oklab,var(--primary)_88%,var(--background))]",
  secondary: "border border-transparent bg-secondary text-secondary-foreground hover:bg-accent",
  outline: "border border-foreground/15 text-foreground hover:bg-card",
};

const sizes = {
  sm: "h-7 gap-1 px-2.5 text-sm",
  lg: "h-11 gap-1.5 px-[1.375rem] text-base",
};

/** Cursor's pills: fully round, regular weight, a quick one-step colour change on hover. */
export function CursorButton({ children, href, variant = "primary", size = "lg", className }: CursorButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full whitespace-nowrap transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none [&_svg]:size-[1em]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
