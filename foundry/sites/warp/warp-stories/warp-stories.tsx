import type { ReactNode } from "react";
import { WarpButton } from "@foundry/warp-button";
import { WarpMedia } from "@foundry/warp-media";
import { WarpSection } from "@foundry/warp-section";

export interface WarpStory {
  headline: string;
  text: string;
  /** the square photo; a placeholder when empty */
  media?: ReactNode;
  /** what the photo shows, for screen readers */
  mediaLabel?: string;
  cta: { label: string; href: string };
}

export interface WarpStoriesProps {
  id?: string;
  /** the typed label above the title */
  tag?: string;
  /** shown in brackets after the tag */
  status?: string;
  title: string;
  lead?: string;
  /** two stories in the original */
  stories: WarpStory[];
  className?: string;
}

/** Two square-photo story cards under a section heading. */
export function WarpStories({ id, tag, status, title, lead, stories, className }: WarpStoriesProps) {
  return (
    <WarpSection id={id} tag={tag} status={status} title={title} lead={lead} className={className}>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-4">
        {stories.map((s) => (
          <article key={s.headline} className="group flex flex-col">
            <div className="overflow-clip border border-border">
              <WarpMedia
                label={s.mediaLabel}
                className="aspect-square transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
              >
                {s.media}
              </WarpMedia>
            </div>
            <h3 className="mt-5 max-w-[30rem] font-display text-[1.0625rem] leading-[1.35] font-bold tracking-[-0.015em] text-balance">{s.headline}</h3>
            <p className="mt-2 text-[0.8125rem] leading-[1.6] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-muted-foreground">{s.text}</p>
            <WarpButton href={s.cta.href} variant="outline" className="mt-4 self-start">
              {s.cta.label}
            </WarpButton>
          </article>
        ))}
      </div>
    </WarpSection>
  );
}
