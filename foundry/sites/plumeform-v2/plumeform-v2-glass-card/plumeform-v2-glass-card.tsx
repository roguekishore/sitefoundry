import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2GlassCardProps {
  children?: ReactNode;
  /** the element to render (div by default; li inside lists) */
  as?: ElementType;
  /** stagger position when cards sit in a row */
  step?: number;
  className?: string;
}

export function PlumeformV2GlassCard({ children, as = "div", step = 0, className }: PlumeformV2GlassCardProps) {
  return (
    <PlumeformV2Reveal
      as={as}
      step={step}
      className={cn(
        "relative rounded-2xl border border-foreground/10 text-card-foreground backdrop-blur-md",
        "bg-[linear-gradient(color-mix(in_oklab,var(--foreground)_7%,transparent),color-mix(in_oklab,var(--foreground)_3%,transparent))]",
        "shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_12%,transparent),0_20px_50px_-30px_color-mix(in_oklab,var(--background)_90%,transparent)]",
        className,
      )}
    >
      {children}
    </PlumeformV2Reveal>
  );
}
