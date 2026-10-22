import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface IncreaseButtonProps {
  /** the label */
  children: ReactNode;
  href: string;
  /**
   * primary: the mint "contact sales" fill · outline: white with a grey border ·
   * dark: the navy "sign up" fill · ghost: grey text that tints on hover (nav)
   */
  variant?: "primary" | "outline" | "dark" | "ghost";
  /** md: 46px tall, 16px text (page CTAs) · sm: 36px tall, 14px text (the header) */
  size?: "md" | "sm";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:brightness-[0.92]",
  outline: "border border-input bg-card text-foreground hover:bg-muted",
  dark: "bg-foreground font-semibold text-background hover:bg-foreground/90",
  ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
};

const sizes = {
  md: "h-[2.875rem] px-4 text-base",
  sm: "h-9 px-2.5 text-sm",
};

/** Increase's buttons: square-ish 8px corners, no shadow, a quick 150ms colour change. */
export function IncreaseButton({ children, href, variant = "primary", size = "md", className }: IncreaseButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg whitespace-nowrap transition-[color,background-color,border-color,filter] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
