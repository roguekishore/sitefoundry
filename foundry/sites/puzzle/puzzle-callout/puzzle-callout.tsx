import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";

export interface PuzzleCalloutProps {
  eyebrow?: string;
  /** the headline; may hold <br /> */
  title: ReactNode;
  /** the paragraph or small print */
  text?: ReactNode;
  cta: { label: string; href: string };
  /** lg: a 36px statement · md: a 28px line under an eyebrow */
  size?: "lg" | "md";
  className?: string;
}

/** A pale violet banner with one button. */
export function PuzzleCallout({ eyebrow, title, text, cta, size = "lg", className }: PuzzleCalloutProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[78.5rem] px-gutter py-10 lg:py-[3.375rem]">
        <div className="flex flex-col gap-4 rounded-lg border border-secondary/45 bg-accent px-6 pt-6 pb-6 text-accent-foreground lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8 lg:pt-8 lg:pb-8">
          <div className={cn(size === "lg" ? "lg:max-w-[56rem]" : "lg:max-w-[41rem]")}>
            {eyebrow && <p className="mb-2 font-mono text-sm/5 tracking-[0.06em] text-muted-foreground uppercase lg:mb-1">{eyebrow}</p>}
            <h2
              className={cn(
                "font-display font-medium text-balance",
                size === "lg" ? "text-[1.875rem]/[1.1] lg:max-w-[33rem] lg:text-4xl/[1.25]" : "text-2xl/[1.25] lg:text-[1.75rem]/[1.3]",
              )}
            >
              {title}
            </h2>
            {text && <p className={cn("text-[0.9375rem]/[1.55] text-accent-foreground/90 lg:leading-[1.65]", size === "lg" ? "mt-3 lg:mt-2" : "mt-3")}>{text}</p>}
          </div>
          <PuzzleButton
            href={cta.href}
            variant="card"
            size="lg"
            className={cn("h-11 w-full text-[0.9375rem] lg:w-auto lg:text-lg", size === "md" ? "lg:h-[5.125rem] lg:max-w-[18rem] lg:px-16 lg:text-center lg:whitespace-normal" : "lg:h-14")}
          >
            {cta.label}
          </PuzzleButton>
        </div>
      </div>
    </section>
  );
}
