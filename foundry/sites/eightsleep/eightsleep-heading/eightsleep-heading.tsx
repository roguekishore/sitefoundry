import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepReveal } from "@foundry/eightsleep-reveal";

export interface EightsleepHeadingProps {
  /** small mono line above the title, set in caps */
  eyebrow?: ReactNode;
  /** the section title; may hold line breaks */
  title: ReactNode;
  /** one or two sentences under the title */
  sub?: ReactNode;
  /** an underlined text link under the sub-line */
  link?: { label: ReactNode; href: string };
  /** center (default) or start */
  align?: "center" | "start";
  /** h2 by default */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function EightsleepHeading({ eyebrow, title, sub, link, align = "center", as: Tag = "h2", className }: EightsleepHeadingProps) {
  let step = 0;
  return (
    <div className={cn("flex flex-col gap-3 lg:gap-4", align === "center" ? "items-center text-center" : "items-start text-start", className)}>
      {eyebrow && (
        <EightsleepReveal step={step++} className="font-mono text-[12px] tracking-[0.12em] text-foreground uppercase lg:text-[13px]">
          {eyebrow}
        </EightsleepReveal>
      )}
      <EightsleepReveal step={step++}>
        <Tag className="max-w-[26ch] font-display text-[32px] leading-[1.1] font-normal tracking-[-0.01em] text-balance text-foreground lg:text-[44px]">
          {title}
        </Tag>
      </EightsleepReveal>
      {sub && (
        <EightsleepReveal step={step++} className="max-w-[46rem] text-[15px] leading-[1.35] text-muted-foreground lg:text-[18px] lg:leading-[1.4]">
          {sub}
        </EightsleepReveal>
      )}
      {link && (
        <EightsleepReveal step={step++}>
          <a href={link.href} className="text-[15px] font-medium text-foreground underline decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-70 lg:text-[16px]">
            {link.label}
          </a>
        </EightsleepReveal>
      )}
    </div>
  );
}
