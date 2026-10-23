import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

const variants = {
  /** white pill with dark text; greys a little on hover */
  solid: "bg-primary text-primary-foreground hover:bg-primary/80",
  /** hairline pill; the line brightens on hover */
  outline: "border border-input text-foreground hover:border-muted-foreground",
} as const;

const sizes = {
  /** the header's compact pill */
  sm: "h-8 px-3.5 text-[0.9375rem]",
  /** the pricing buttons */
  md: "h-11 px-6 text-[0.9375rem]",
} as const;

export interface SlashButtonProps {
  /** where it goes */
  href: string;
  /** label */
  children: ReactNode;
  /** look */
  variant?: keyof typeof variants;
  /** height step */
  size?: keyof typeof sizes;
  className?: string;
}

/** A pill link: solid white or hairline outline, 150ms colour transitions. */
export function SlashButton({ href, children, variant = "solid", size = "md", className }: SlashButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tracking-[-0.02em] whitespace-nowrap transition-colors duration-150 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
