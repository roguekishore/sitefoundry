import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BrexHeading } from "@foundry/brex-heading";

export interface BrexLogosProps {
  /** the headline above the grid */
  title: string;
  /** the customers, in reading order: plain names or small logo nodes (12 fills the grid) */
  logos: ReactNode[];
  className?: string;
}

/** The grey "trusted by" band. */
export function BrexLogos({ title, logos, className }: BrexLogosProps) {
  return (
    <section className={cn("bg-muted px-gutter pt-16 pb-14 lg:pb-20", className)}>
      <BrexHeading title={title} className="max-w-[40rem] lg:max-w-[56rem]" />
      <ul className="mx-auto mt-6 grid max-w-[67.5rem] auto-rows-[1.875rem] grid-cols-4 items-center justify-items-center gap-x-2 text-sm font-semibold tracking-[-0.03em] text-muted-foreground/70 lg:mt-8 lg:auto-rows-14 lg:grid-cols-6 lg:text-xl">
        {logos.map((logo, i) => (
          <li key={i} className="whitespace-nowrap">
            {logo}
          </li>
        ))}
      </ul>
    </section>
  );
}
