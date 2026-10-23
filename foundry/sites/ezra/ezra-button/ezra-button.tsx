import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

const variants = {
  /** terracotta fill, midnight on hover */
  solid: "bg-primary px-6 font-medium text-primary-foreground hover:bg-foreground hover:text-background",
  /** white pill on a pale hairline that darkens on hover */
  outline: "border border-input bg-card px-6 font-semibold text-card-foreground hover:border-foreground",
} as const;

export interface EzraButtonProps {
  /** where it goes */
  href: string;
  /** the label */
  children: ReactNode;
  /** solid (terracotta) or outline (white with a hairline) */
  variant?: keyof typeof variants;
  /** a small icon before the label (e.g. a lucide Play) */
  icon?: ReactNode;
  className?: string;
}

/** The site's pill: 50px tall, fully rounded, 16px sans. */
export function EzraButton({ href, children, variant = "solid", icon, className }: EzraButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-12.5 items-center justify-center gap-2 rounded-full text-base whitespace-nowrap transition-colors duration-200 ease-out motion-reduce:transition-none",
        variants[variant],
        className,
      )}
    >
      {icon}
      {children}
    </a>
  );
}
