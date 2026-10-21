import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringMedia } from "@foundry/structureengineering-media";
import { StructureengineeringReveal } from "@foundry/structureengineering-reveal";

export interface StructureengineeringPrincipleProps {
  /** the huge two-line heading at the top right */
  heading: string;
  /** the larger sans paragraph under it */
  lead: string;
  /** the mono paragraphs after the lead */
  paragraphs: string[];
  /** the drawing or image at the lower left. Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

// A white section: the right column holds a huge heading, a long gap, a 20px lead and mono
// paragraphs; the left column holds an image sitting at the bottom. Each part rises 48px as it
// comes into view. Phones stack heading, lead, text, image.
export function StructureengineeringPrinciple({ heading, lead, paragraphs, media, className }: StructureengineeringPrincipleProps) {
  return (
    <section className={cn("bg-card text-card-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter pt-section pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,27.5rem)] lg:gap-16 lg:pt-[4.5rem] lg:pb-[5.5rem]">
        <div className="lg:col-start-2 lg:row-start-1">
          <StructureengineeringReveal as="h2" className="font-display text-[3.7rem] leading-none font-medium tracking-[-0.04em] lg:text-[5.1rem]">
            {heading}
          </StructureengineeringReveal>
          <StructureengineeringReveal as="p" step={1} className="mt-10 text-xl leading-[1.25] font-medium tracking-tight lg:mt-52">
            {lead}
          </StructureengineeringReveal>
          <StructureengineeringReveal step={2} className="mt-10 space-y-6 font-mono text-base leading-[1.3]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </StructureengineeringReveal>
        </div>
        <StructureengineeringReveal className="lg:col-start-1 lg:row-start-1 lg:self-end lg:max-w-[30rem]">
          <StructureengineeringMedia media={media} className="aspect-[478/317]" />
        </StructureengineeringReveal>
      </div>
    </section>
  );
}
