import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";

export interface FunctionhealthStory {
  /** semibold line, e.g. "Marcus, 52" */
  name: string;
  /** one-line story under the name */
  text: string;
  /** poster image or video; empty shows a dark placeholder */
  media?: ReactNode;
  /** where the play button leads (a video page or an on-page player) */
  href?: string;
  /** screen-reader label for the play button */
  playLabel: string;
}

export interface FunctionhealthStoriesProps {
  title: HeadingPart[];
  stories: FunctionhealthStory[];
  className?: string;
}

export function FunctionhealthStories({ title, stories, className }: FunctionhealthStoriesProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} />
      </div>
      <div className="mx-auto mt-10 max-w-page lg:mt-[4.25rem] lg:px-gutter">
        <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-[var(--page-gutter)] px-gutter pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {stories.map((s) => (
            <li key={s.name} className="relative isolate flex aspect-[9/16] w-[16.5rem] shrink-0 snap-start flex-col justify-end overflow-clip rounded-xl bg-foreground p-5 text-background lg:w-auto">
              <div
                aria-hidden={s.media ? undefined : true}
                className={cn("absolute inset-0 -z-20 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover", !s.media && "bg-linear-to-br from-muted-foreground to-foreground")}
              >
                {s.media}
              </div>
              <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-60% to-foreground/85" />
              <a
                href={s.href ?? "#"}
                aria-label={s.playLabel}
                className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-[60%] place-items-center rounded-full bg-foreground/55 text-background backdrop-blur-sm transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-foreground/70 motion-reduce:transition-none"
              >
                <Play className="size-8 fill-current" strokeWidth={0} />
              </a>
              <p className="text-base leading-snug font-semibold">{s.name}</p>
              <p className="text-base leading-snug font-light">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
