import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RadiantnuclearButton } from "@foundry/radiantnuclear-button";
import { RadiantnuclearSlot } from "@foundry/radiantnuclear-slot";

export interface RadiantnuclearStory {
  /** the bold all-caps heading (two or three short lines) */
  title: string;
  /** a sentence or two about the film */
  body: string;
  /** the button under it, e.g. a link to the full film */
  cta?: { label: string; href: string };
  /** the 16:9 video or still; empty shows a placeholder */
  media?: ReactNode;
}

export interface RadiantnuclearStoriesProps {
  /** the opening paragraph above the first film */
  lead?: string;
  /** the film stories, in order */
  stories: RadiantnuclearStory[];
  id?: string;
  className?: string;
}

export function RadiantnuclearStories({ lead, stories, id, className }: RadiantnuclearStoriesProps) {
  return (
    <section id={id} className={cn("bg-secondary pt-section pb-[calc(var(--section-y)*1.05)] font-sans text-secondary-foreground", className)}>
      {lead && (
        <div className="mx-auto max-w-page px-gutter">
          <p className="max-w-[46rem] text-lg leading-[1.27] font-medium lg:text-2xl lg:leading-[1.35]">{lead}</p>
        </div>
      )}

      <div className={cn("mx-auto flex max-w-page flex-col", lead && "mt-11 lg:mt-20")}>
        {stories.map((s, i) => (
          <article key={s.title} className="lg:grid lg:grid-cols-2 lg:items-center">
            <RadiantnuclearSlot
              media={s.media}
              tone="night"
              shade="soft"
              className={cn("aspect-[16/9] w-full", i % 2 === 1 && "lg:order-2")}
            />
            <div className={cn("px-gutter pt-14 pb-14 lg:px-[12%] lg:py-16", i === stories.length - 1 && "pb-0 lg:pb-16")}>
              <h2 className="max-w-[24rem] text-[1.875rem] leading-none font-bold uppercase lg:max-w-[34rem] lg:text-[2.75rem] lg:leading-[1.02]">{s.title}</h2>
              <p className="mt-4 max-w-[34rem] text-base leading-[1.375] lg:mt-6 lg:text-lg lg:leading-[1.45]">{s.body}</p>
              {s.cta && (
                <RadiantnuclearButton href={s.cta.href} className="mt-6 lg:mt-8">
                  {s.cta.label}
                </RadiantnuclearButton>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
