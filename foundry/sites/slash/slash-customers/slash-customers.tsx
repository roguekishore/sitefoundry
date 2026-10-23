import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";
import { SlashPlaceholder } from "@foundry/slash-placeholder";
import "./slash-customers.css";

export interface SlashCustomerStory {
  /** the person in the video */
  name: string;
  /** their role and company */
  role: string;
  /** their portrait (small circle); a dim circle stands in when empty */
  avatar?: ReactNode;
  /** the video or still filling the tile; a dim surface stands in when empty */
  media?: ReactNode;
  /** two or three figures shown under the tile ("24/7" over "live support") */
  stats: { value: string; label: string }[];
  /** the industry chip ("Retail · Homeware") */
  tag: string;
  /** the link to the full story */
  link: { label: string; href: string };
}

export interface SlashCustomersProps {
  /** the heading, as runs; `{ italic: "8,000+" }` sets a run in italic */
  heading: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** the stories, two to four; the first starts large */
  stories: SlashCustomerStory[];
  className?: string;
}

/** Customer video tiles in a row: one large, the rest narrow and dimmed; hovering a tile grows it. */
export function SlashCustomers({ heading, sub, stories, className }: SlashCustomersProps) {
  return (
    <section className={cn("overflow-x-clip bg-background pt-section text-foreground lg:pt-[8.75rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <SlashHeading parts={heading} sub={sub} size="md" align="left" />
        <ul className="slash-customers-row -mx-gutter mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-gutter px-gutter [scrollbar-width:none] lg:mx-0 lg:mt-16 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-[4.5rem]">
          {stories.map((story) => (
            <li key={story.name} className="slash-customers-item relative w-full shrink-0 snap-start lg:w-auto lg:min-w-0 lg:shrink">
              <a href={story.link.href} className="group relative block aspect-[350/197] overflow-clip rounded-xl bg-muted lg:aspect-auto lg:h-[21.875rem]">
                {story.media ?? <SlashPlaceholder tone="dim" className="absolute inset-0" />}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background/95 via-background/70 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 lg:inset-x-5 lg:bottom-5 lg:gap-3">
                  <span className="relative size-8 shrink-0 overflow-clip rounded-full">
                    {story.avatar ?? <SlashPlaceholder tone="chip" className="absolute inset-0 rounded-full" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.9375rem] leading-tight font-medium tracking-[-0.02em] transition-colors duration-150 group-hover:text-muted-foreground">{story.name}</span>
                    <span className="block text-[0.8125rem] leading-tight tracking-[-0.01em] text-foreground/85">{story.role}</span>
                  </span>
                  <span className="shrink-0 text-sm font-medium tracking-[-0.02em] lg:hidden">{story.link.label}</span>
                </div>
              </a>
              <div className="slash-customers-meta mt-4 flex flex-wrap items-end gap-x-7 gap-y-3 lg:absolute lg:top-full lg:left-0 lg:mt-5 lg:w-[36rem] lg:flex-nowrap">
                {story.stats.map((stat) => (
                  <p key={stat.label} className="whitespace-nowrap">
                    <span className="block font-display text-2xl leading-none lg:text-[1.75rem]">{stat.value}</span>
                    <span className="mt-1 block text-[0.8125rem] tracking-[-0.01em] text-muted-foreground">{stat.label}</span>
                  </p>
                ))}
                <span className="ml-auto hidden items-center gap-4 lg:flex">
                  <span className="rounded-full border border-foreground/15 px-3 py-1 text-[0.8125rem] whitespace-nowrap text-muted-foreground">{story.tag}</span>
                  <a href={story.link.href} className="text-[0.9375rem] font-medium tracking-[-0.02em] whitespace-nowrap text-foreground/85 transition-colors duration-150 hover:text-foreground">
                    {story.link.label}
                  </a>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
