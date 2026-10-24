import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseHeading, type SupabaseHeadingPart } from "@foundry/supabase-heading";
import { SupabasePlaceholder } from "@foundry/supabase-placeholder";
import "./supabase-stories.css";

export interface SupabaseStory {
  /** the customer's name, shown in the open card and read to screen readers */
  name: string;
  /** the customer's mark (32px, shown in every state) */
  logo: ReactNode;
  /** one grey line under the name */
  tagline: string;
  /** the quote, large, at the bottom of the open card */
  quote: string;
  /** who said it */
  person: { name: string; avatar?: ReactNode };
  /** the link at the very bottom */
  link: { label: string; href: string };
  /** the card's colour: sunset (pink→orange gradient), ink, deep (teal), night (near black), glow (blue) */
  tone?: "sunset" | "ink" | "deep" | "night" | "glow";
}

export interface SupabaseStoriesProps {
  /** the two-tone title (grey phrase, then ink) */
  title: SupabaseHeadingPart[];
  /** the underlined link beside (desktop) or under (phones) the title */
  link?: { label: string; href: string };
  /** the stories; the first is open until another is hovered or focused (five fill the row) */
  stories: SupabaseStory[];
  className?: string;
}

// every tone is a dark scope, so text and borders inside use the theme's dark tokens
const tones = {
  sunset: "bg-linear-to-b from-chart-4 to-chart-5",
  ink: "bg-background",
  deep: "bg-secondary",
  night: "bg-card",
  glow: "bg-linear-to-bl from-glow/80 to-glow",
};

/** Customer stories as a row of colour strips: one open card with a big quote, the rest narrow; hover opens another. */
export function SupabaseStories({ title, link, stories, className }: SupabaseStoriesProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-page px-gutter py-section lg:py-24">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-8">
          <SupabaseHeading parts={title} stack="always" />
          {link && (
            <a href={link.href} className="mt-4 inline-block text-sm text-foreground/80 underline underline-offset-2 transition-colors duration-150 hover:text-foreground lg:mt-0 lg:shrink-0">
              {link.label}
            </a>
          )}
        </div>

        <ul className="supabase-stories-row mt-16 flex h-[39.875rem] flex-col gap-2 lg:h-[30rem] lg:flex-row">
          {stories.map((story, i) => (
            <li
              key={story.name}
              data-open={i === 0 ? "" : undefined}
              className={cn("supabase-stories-item dark relative min-h-0 min-w-0 overflow-clip rounded-md text-foreground", tones[story.tone ?? "ink"])}
            >
              <div className="flex h-full w-[min(42rem,calc(100vw-3rem))] flex-col px-5 py-4 lg:w-[45rem] lg:p-[1.375rem] lg:pt-8">
                <span className="flex size-8 shrink-0 items-center justify-center [&_svg]:size-8" role="img" aria-label={story.name}>
                  {story.logo}
                </span>
                <div className="supabase-stories-body flex flex-1 flex-col lg:px-2.5">
                  <p className="mt-2 text-sm font-medium lg:mt-6">{story.name}</p>
                  <p className="mt-0.5 text-xs leading-4 text-foreground/65 lg:mt-2">{story.tagline}</p>
                  <blockquote className="mt-2 max-w-[33rem] font-display text-lg leading-[1.36] font-medium lg:mt-auto lg:text-[1.375rem]">{story.quote}</blockquote>
                  <p className="mt-4 flex items-center gap-2.5 text-xs text-foreground/70 lg:mt-4">
                    <span className="size-6 shrink-0 lg:size-7">{story.person.avatar ?? <SupabasePlaceholder tone="avatar" />}</span>
                    {story.person.name}
                  </p>
                  <a href={story.link.href} className="mt-6 self-start text-xs text-foreground/75 underline underline-offset-2 transition-colors duration-150 hover:text-foreground lg:mt-10 lg:mb-6">
                    {story.link.label}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
