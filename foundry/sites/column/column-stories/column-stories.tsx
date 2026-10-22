import { useState, type ReactNode } from "react";
import { Quote } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { toneStyle, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-stories.css";

export interface ColumnStoryTag {
  /** a small line icon (lucide works well) */
  icon?: ReactNode;
  label: string;
}

export interface ColumnStory {
  /** the customer's name: the tab label and the wordmark over the phone art */
  name: string;
  /** the customer's accent: the active tab fill and the art wash */
  tone: ColumnTone;
  /** the statement, e.g. what they run on you */
  title: string;
  /** small grey chips under the statement (products they use) */
  tags: ColumnStoryTag[];
  /** the pull quote */
  quote: string;
  /** who said it */
  author: string;
  /** the story's art; empty: a placeholder */
  media?: ReactNode;
}

export interface ColumnStoriesProps {
  /** the customers; four fill the tab row */
  stories: ColumnStory[];
  /** which story starts selected (desktop) */
  initial?: number;
  className?: string;
}

/** Placeholder art: a soft wash and dot grid in the story's accent, and a plain card frame. */
function Art({ story }: { story: ColumnStory }) {
  if (story.media) return <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{story.media}</div>;
  return (
    <div className="absolute inset-0" style={toneStyle(story.tone)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_60%_60%,color-mix(in_oklab,var(--tone)_12%,transparent),transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--tone)_45%,transparent)_1.2px,transparent_1.7px)] bg-size-[8px_8px] [mask-image:radial-gradient(ellipse_55%_55%_at_70%_75%,black,transparent_85%)]" />
      <div className="column-stories-art absolute top-[30%] left-[18%] aspect-[1.45] w-[64%] rounded-lg bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_14px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:top-[30%] lg:left-[20%] lg:w-[58%]" />
    </div>
  );
}

function Copy({ story, large }: { story: ColumnStory; large?: boolean }) {
  return (
    <>
      <h3 className={cn("font-display font-medium tracking-[-0.02em] text-foreground", large ? "max-w-[20.5rem] text-[1.75rem]/[1.12]" : "text-2xl/[1.15]")}>{story.title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {story.tags.map((t) => (
          <li key={t.label} className="flex h-7 items-center gap-2 rounded-md bg-muted px-2.5 text-[0.8125rem] font-medium text-foreground/85 [&_svg]:size-3.5 [&_svg]:text-muted-foreground">
            {t.icon}
            {t.label}
          </li>
        ))}
      </ul>
      <figure className={cn(large ? "mt-auto pt-10" : "mt-12")}>
        <Quote aria-hidden className="size-6 fill-muted-foreground/40 text-transparent" />
        <blockquote className={cn("mt-4 text-foreground", large ? "max-w-[22.5rem] text-xl/[1.3]" : "text-lg/[1.35]")}>{story.quote}</blockquote>
        <figcaption className={cn("mt-6 text-muted-foreground", large ? "text-base" : "text-[0.9375rem]")}>{story.author}</figcaption>
      </figure>
    </>
  );
}

export function ColumnStories({ stories, initial = 0, className }: ColumnStoriesProps) {
  const [active, setActive] = useState(initial);
  const story = stories[active] ?? stories[0];

  return (
    <section className={cn("bg-background pt-24 pb-12 text-foreground lg:pt-36 lg:pb-0", className)}>
      {/* Phones: a swipeable row of cards. */}
      <ul className="flex snap-x snap-mandatory scroll-px-gutter gap-5 overflow-x-auto px-gutter [scrollbar-width:none] lg:hidden">
        {stories.map((s) => (
          <li key={s.name} className="flex w-[min(20.375rem,85vw)] shrink-0 snap-start flex-col overflow-clip rounded-xl bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_1px_3px_color-mix(in_oklab,var(--foreground)_5%,transparent)]">
            <div className="relative h-[22.5rem] overflow-clip rounded-t-xl">
              <Art story={s} />
              <p className="absolute top-6 left-6 font-display text-2xl font-bold tracking-[-0.04em] text-foreground">{s.name}</p>
            </div>
            <div className="flex flex-1 flex-col px-6 pt-6 pb-24">
              <Copy story={s} />
            </div>
          </li>
        ))}
      </ul>

      {/* Desktop: one card with tabs. */}
      <div className="mx-auto hidden max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter lg:block">
        <div className="overflow-clip rounded-xl bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_1px_3px_color-mix(in_oklab,var(--foreground)_4%,transparent)]">
          <div role="tablist" className="grid gap-6 p-6" style={{ gridTemplateColumns: `repeat(${stories.length}, minmax(0, 1fr))` }}>
            {stories.map((s, i) => (
              <button
                key={s.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                style={toneStyle(s.tone)}
                className={cn(
                  "flex h-12 items-center justify-center rounded-md font-display text-xl font-bold tracking-[-0.04em] transition-[background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none",
                  i === active
                    ? "bg-[var(--tone)] text-primary-foreground shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_15%,transparent),inset_0_1px_0_color-mix(in_oklab,var(--primary-foreground)_25%,transparent)]"
                    : "text-foreground/85 hover:bg-muted",
                )}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div key={active} role="tabpanel" className="column-stories-swap grid h-[40.5rem] grid-cols-[29.75rem_1fr]">
            <div className="flex flex-col pt-[3.25rem] pb-[4.25rem] pl-[4.5rem]">
              <Copy story={story} large />
            </div>
            <div className="relative">
              <Art story={story} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
