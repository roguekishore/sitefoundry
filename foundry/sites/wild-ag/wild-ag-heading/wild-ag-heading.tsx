import type { ElementType, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgReveal } from "@foundry/wild-ag-reveal";

export interface WildAgHeadingProps {
  /** the title; the original's habit is one word and a full stop */
  children: ReactNode;
  /** gradient: brand gradient text on light surfaces; light: plain paper colour on gradient bands */
  tone?: "gradient" | "light";
  /** h2 by default */
  as?: ElementType;
  className?: string;
}

export function WildAgHeading({ children, tone = "gradient", as = "h2", className }: WildAgHeadingProps) {
  return (
    <WildAgReveal
      as={as}
      className={cn(
        // pr keeps the italic's last letter inside the painted gradient
        "w-fit pr-[0.12em] font-display text-[2.5rem] leading-[0.95] font-light uppercase italic lg:text-[3.22rem]",
        tone === "gradient"
          ? "bg-linear-15 from-primary to-highlight bg-clip-text text-transparent"
          : "text-primary-foreground",
        className,
      )}
    >
      {children}
    </WildAgReveal>
  );
}
