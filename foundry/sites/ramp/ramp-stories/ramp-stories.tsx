import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";
import { RampHeading } from "@foundry/ramp-heading";

export interface RampStory {
  /** the row heading's first clause, in ink */
  lead: string;
  /** the rest, in grey */
  rest?: string;
  /** the arrow link under the heading */
  link?: { label: string; href: string };
  /** the film or photo; empty shows a placeholder frame */
  media?: ReactNode;
  /** the label of the frosted pill on the frame (leave out to hide it) */
  watchLabel?: string;
  /** where the pill goes */
  watchHref?: string;
  /** the customer's words, without quote marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  /** the arrow link under the quote */
  storyLink?: { label: string; href: string };
}

export interface RampStoriesProps {
  /** the statement's first sentence, in ink */
  lead: string;
  /** the second sentence, in grey on its own line */
  rest?: string;
  /** the acid-lime button under it */
  cta?: { label: string; href: string };
  /** rows alternate: frame on the right, then on the left */
  stories: RampStory[];
  className?: string;
}

/** Ramp's intelligence statement and its alternating customer-story rows. */
export function RampStories({ lead, rest, cta, stories, className }: RampStoriesProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter py-section lg:px-[calc(var(--page-gutter)*4)] lg:py-[calc(var(--section-y)*1.5)]">
        <RampHeading align="center" lead={lead} rest={rest} breakBeforeRest className="mx-auto max-w-[66rem]" />
        {cta && (
          <div className="mt-8 flex justify-center">
            <RampButton href={cta.href}>{cta.label}</RampButton>
          </div>
        )}

        <div className="mt-24 grid gap-28 lg:mt-32 lg:gap-32">
          {stories.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.lead}
                className={cn(
                  "grid grid-cols-1 gap-y-8 [grid-template-areas:'head'_'media'_'quote'] lg:gap-x-10 lg:gap-y-0",
                  flip
                    ? "lg:grid-cols-[1.46fr_1fr] lg:[grid-template-areas:'media_head'_'media_quote']"
                    : "lg:grid-cols-[1fr_1.46fr] lg:[grid-template-areas:'head_media'_'quote_media']",
                )}
              >
                <div className="[grid-area:head]">
                  <RampHeading as="h3" size="row" lead={s.lead} rest={s.rest} className="max-w-[33rem]" />
                  {s.link && (
                    <RampButton variant="link" href={s.link.href} className="mt-6 lg:mt-8">
                      {s.link.label}
                    </RampButton>
                  )}
                </div>

                <div className="group relative aspect-square overflow-clip rounded-lg bg-muted [grid-area:media]">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none">
                    {s.media ?? <div aria-hidden className="size-full bg-gradient-to-br from-muted via-accent to-muted-foreground/30" />}
                  </div>
                  {s.watchLabel && (
                    <RampButton variant="glass" size="lg" href={s.watchHref} className="absolute right-4 bottom-4 lg:right-5 lg:bottom-5">
                      {s.watchLabel}
                    </RampButton>
                  )}
                </div>

                <figure className="self-end [grid-area:quote] lg:pb-1">
                  <blockquote className="text-base/[1.4] text-foreground [text-indent:-0.4em]">“{s.quote}”</blockquote>
                  <figcaption className="mt-6 lg:mt-8">
                    <span className="block text-base">{s.name}</span>
                    <span className="block text-sm text-muted-foreground">{s.role}</span>
                  </figcaption>
                  {s.storyLink && (
                    <RampButton variant="link" href={s.storyLink.href} className="mt-6 lg:mt-8">
                      {s.storyLink.label}
                    </RampButton>
                  )}
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
