import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RhoHeading } from "@foundry/rho-heading";
import { RhoRail } from "@foundry/rho-rail";
import { RhoReveal } from "@foundry/rho-reveal";

export interface RhoStory {
  /** the customer's company, shown over the video */
  company: string;
  /** the short quote */
  quote: string;
  /** who said it */
  name: string;
  /** their role */
  role: string;
  /** the 16:9 video or image; empty: a placeholder */
  media?: ReactNode;
}

export interface RhoStoriesProps {
  /** the heading */
  title: string;
  /** the story cards */
  stories: RhoStory[];
  /** screen-reader labels for the arrows */
  prevLabel: string;
  nextLabel: string;
  /** dark or light section */
  tone?: "dark" | "light";
  className?: string;
}

function StoryCard({ story }: { story: RhoStory }) {
  return (
    <article className="flex h-full flex-col overflow-clip rounded-lg border border-border bg-card text-card-foreground">
      <div className="relative aspect-video bg-muted">
        {story.media}
        <p className="absolute top-4 left-4 text-lg font-medium tracking-[-0.02em] lg:top-6 lg:left-5 lg:text-xl">{story.company}</p>
      </div>
      <div className="flex flex-1 flex-col p-5 lg:p-7">
        <p className="text-2xl leading-[1.15] tracking-[-0.01em] lg:text-[1.75rem] lg:leading-none">{story.quote}</p>
        <p className="mt-6 text-[0.8125rem] leading-[1.3] font-medium">{story.name}</p>
        <p className="mt-1 text-[0.8125rem] leading-[1.3] text-muted-foreground">{story.role}</p>
      </div>
    </article>
  );
}

export function RhoStories({ title, stories, prevLabel, nextLabel, tone = "light", className }: RhoStoriesProps) {
  return (
    <section data-rho-tone={tone} className={cn(tone === "dark" && "dark", "bg-background py-14 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RhoHeading text={title} className="max-w-[22rem] lg:max-w-none" />
      </div>
      <RhoReveal className="mt-10 lg:mt-14">
        <RhoRail
          items={stories.map((s) => <StoryCard key={s.company} story={s} />)}
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          itemClassName="w-[85%] sm:w-[24rem] lg:w-[39.875rem]"
          trackClassName="lg:gap-6"
        />
      </RhoReveal>
    </section>
  );
}
