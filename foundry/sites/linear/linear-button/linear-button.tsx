import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LinearButtonProps {
  /** the label */
  children: ReactNode;
  href: string;
  /**
   * primary: the pale "sign up" pill · secondary: a dark pill with a hairline ·
   * ghost: grey text that gets a faint pill on hover (nav links)
   */
  variant?: "primary" | "secondary" | "ghost";
  /** sm: 32px, 13px text (header) · md: 40px, 15px text · lg: 44px, 16px text (closing CTA) */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-foreground",
  secondary: "border border-border bg-secondary text-secondary-foreground hover:bg-accent",
  ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
};

const sizes = {
  sm: "h-8 px-3 text-[0.8125rem]",
  md: "h-10 px-4 text-[0.9375rem]",
  lg: "h-11 px-5 text-base",
};

/** Linear's buttons: fully rounded pills, medium weight, quick colour changes, no shadow. */
export function LinearButton({ children, href, variant = "primary", size = "md", className }: LinearButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-[510] whitespace-nowrap transition-[color,background-color,border-color] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none",
        variant === "ghost" ? "duration-100" : "duration-150",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
