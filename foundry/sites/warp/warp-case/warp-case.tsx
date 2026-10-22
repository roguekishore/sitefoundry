import type { ReactNode } from "react";
import { WarpButton } from "@foundry/warp-button";
import { WarpMedia } from "@foundry/warp-media";
import { WarpSection } from "@foundry/warp-section";

export interface WarpCaseProps {
  id?: string;
  /** the small label above the headline, shown after a "#" */
  tag?: string;
  headline: string;
  text: string;
  /** the white button */
  cta: { label: string; href: string };
  /** the chart or screenshot at the right; a pale plate when empty */
  media?: ReactNode;
  /** what the media shows, for screen readers */
  mediaLabel?: string;
  className?: string;
}

/** A brand-blue band: case study text and button beside a 16:10 image. */
export function WarpCase({ id, tag, headline, text, cta, media, mediaLabel, className }: WarpCaseProps) {
  return (
    <WarpSection id={id} tone="brand" marks={false} className={className} contentClassName="py-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-9">
        <div className="min-w-0">
          {tag && (
            <p className="font-mono text-xs leading-none font-semibold tracking-[calc(0.11em_-_var(--warp-squeeze,0em))] text-primary-foreground/85 uppercase">
              <span aria-hidden>#</span> {tag}
            </p>
          )}
          <h2 className="mt-5 font-display text-[1.75rem] leading-[1.65] font-bold tracking-[-0.025em] lg:mt-3.5">{headline}</h2>
          <p className="mt-3 max-w-[34rem] text-sm leading-[1.6] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-primary-foreground/85">{text}</p>
          <WarpButton href={cta.href} variant="inverse" className="mt-7">
            {cta.label}
          </WarpButton>
        </div>
        <WarpMedia label={mediaLabel} className="aspect-[1.6/1] bg-secondary">
          {media}
        </WarpMedia>
      </div>
    </WarpSection>
  );
}
