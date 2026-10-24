import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HermeusButton } from "@foundry/hermeus-button";
import { HermeusMedia } from "@foundry/hermeus-media";
import { HermeusReveal } from "@foundry/hermeus-reveal";
import { HermeusSectionLabel } from "@foundry/hermeus-section-label";

export interface HermeusNewsFeatureProps {
  /** the section's number, e.g. "03" */
  index: string;
  /** the section's name in the label row */
  label: string;
  /** the story's 16:9 image; empty: a grey placeholder */
  media?: ReactNode;
  /** what the image shows, for screen readers while it is empty */
  mediaLabel?: string;
  /** the story's headline (bold, wraps to about two lines on desktop) */
  title: string;
  /** a one-paragraph summary */
  body: string;
  /** the button under the summary */
  action: { label: string; href: string };
  className?: string;
}

/** the gap between the stacked parts: 18px on phones to 45px at 1440 */
const gap = "mt-[clamp(1.125rem,0.5rem+2.57vw,2.8rem)]";

/** One lead story: label, wide image, bold headline, summary and button. */
export function HermeusNewsFeature({ index, label, media, mediaLabel, title, body, action, className }: HermeusNewsFeatureProps) {
  return (
    <section className={cn("bg-background pt-section pb-[calc(var(--section-y)*0.8)] text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <HermeusSectionLabel index={index} label={label} />
        <HermeusReveal className="mt-[clamp(1.94rem,1.24rem+2.86vw,3.81rem)] max-lg:-mx-gutter">
          <HermeusMedia media={media} label={mediaLabel} className="aspect-video w-full" />
        </HermeusReveal>
        <HermeusReveal className={gap}>
          <h3 className="max-w-[26em] text-[clamp(0.92rem,0.704rem+0.884vw,1.5rem)]/[1.3] font-bold text-pretty">{title}</h3>
        </HermeusReveal>
        <HermeusReveal className={gap}>
          <p className="text-[clamp(0.79rem,0.667rem+0.509vw,1.125rem)]/[1.33] text-pretty">{body}</p>
        </HermeusReveal>
        <HermeusReveal className={gap}>
          <HermeusButton label={action.label} href={action.href} />
        </HermeusReveal>
      </div>
    </section>
  );
}
