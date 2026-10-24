import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CastelionLines } from "@foundry/castelion-lines";
import { CastelionPlaceholder } from "@foundry/castelion-placeholder";
import "./castelion-feature-card.css";

export interface CastelionFeatureCardProps {
  /** the card's title, one entry per desktop line */
  title: string[];
  /** the justified lead beside the title */
  lead: string;
  /** the photo that fills the card (empty: a sky wash) */
  media?: ReactNode;
  /** what the photo shows, for screen readers while the slot is empty */
  mediaLabel?: string;
  className?: string;
}

/** Page-wide photo card with title and lead set on the picture, over the start of a navy band. */
export function CastelionFeatureCard({ title, lead, media, mediaLabel, className }: CastelionFeatureCardProps) {
  return (
    <section className={cn("relative bg-background pb-5 lg:pb-[4.5rem]", className)}>
      {/* the navy band behind the card's foot, opened by two page-colour hairlines */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[7.625rem] bg-secondary lg:h-[16.625rem]">
        <span className="absolute inset-x-0 top-[3px] h-px bg-background" />
        <span className="absolute inset-x-0 top-[13px] h-px bg-background" />
      </div>

      <div className="relative mx-auto max-w-page px-gutter">
        <div className="castelion-feature-card-card dark relative isolate aspect-[0.6] overflow-clip rounded-lg text-foreground sm:aspect-[1.1] lg:aspect-[1.168]">
          <CastelionPlaceholder media={media} tone="sky" label={mediaLabel} className="absolute inset-0 -z-10" />
          <div className="grid gap-3.5 p-6 lg:grid-cols-[1fr_23.75rem] lg:gap-10 lg:pt-[4.75rem] lg:pr-[5.5rem] lg:pl-[4.5rem]">
            <CastelionLines
              as="h2"
              lines={title}
              className="font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.29] font-bold tracking-[0.02em]"
            />
            <p className="castelion-feature-card-lead text-justify text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-medium">
              {lead}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
