import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface OnEnergyButtonProps {
  /** the label, set in the mono face */
  children: ReactNode;
  /** where the button goes */
  href?: string;
  /**
   * glass: translucent foreground over media or dark sections ·
   * solid: background-coloured block (black on the light sections) ·
   * ink: primary-foreground block with primary text (black and yellow, for yellow sections)
   */
  variant?: "glass" | "solid" | "ink";
  className?: string;
}

/**
 * The 40px mono button. On hover a primary (yellow) fill slides in from the left with an
 * expo-out ease while the label turns primary-foreground and a soft primary glow appears.
 */
export function OnEnergyButton({ children, href = "#", variant = "glass", className }: OnEnergyButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/button relative inline-flex h-10 items-center overflow-clip rounded-md px-6 font-mono text-xs tracking-[-0.02em] whitespace-nowrap",
        "transition-[box-shadow,color] duration-600 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none",
        variant === "glass" && "bg-foreground/20 text-foreground backdrop-blur-md hover:text-primary-foreground hover:shadow-[0_0_20px] hover:shadow-primary/30",
        variant === "solid" && "bg-background text-foreground hover:text-primary-foreground hover:shadow-[0_0_20px] hover:shadow-primary/30",
        variant === "ink" && "bg-primary-foreground text-primary hover:text-primary-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -translate-x-full transition-transform duration-600 ease-[cubic-bezier(.16,1,.3,1)] group-hover/button:translate-x-0 motion-reduce:transition-none",
          variant === "ink" ? "bg-highlight" : "bg-primary",
        )}
      />
      <span className="relative">{children}</span>
    </a>
  );
}
