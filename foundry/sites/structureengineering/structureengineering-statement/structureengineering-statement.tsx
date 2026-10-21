import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringMedia } from "@foundry/structureengineering-media";
import { StructureengineeringReveal } from "@foundry/structureengineering-reveal";

export interface StructureengineeringStatementProps {
  /** the huge white heading at the left */
  heading: string;
  /** the mono paragraphs at the right */
  paragraphs: string[];
  /** the full-bleed backdrop photo. Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

// A full-bleed darkened photo, 90% of the window tall at desktop, with a huge white heading
// stacked word by word at the left and calm white mono paragraphs at the right, both rising
// 48px as they come into view. Phones stack heading over text.
export function StructureengineeringStatement({ heading, paragraphs, media, className }: StructureengineeringStatementProps) {
  return (
    <section data-tone="dark" className={cn("relative isolate overflow-clip text-card dark:text-card-foreground lg:min-h-[90svh]", className)}>
      <StructureengineeringMedia media={media} tone="dark" veil className="absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-page gap-12 px-gutter pt-12 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-16 lg:pt-[4.5rem] lg:pb-section">
        <StructureengineeringReveal as="h2" className="max-w-[36rem] font-display text-[3.7rem] leading-none font-medium tracking-[-0.04em] lg:text-[5.1rem]">
          {heading}
        </StructureengineeringReveal>
        <StructureengineeringReveal step={1} className="space-y-6 font-mono text-base leading-[1.3]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </StructureengineeringReveal>
      </div>
    </section>
  );
}
