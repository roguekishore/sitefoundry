import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { EzraPlaceholder } from "@foundry/ezra-placeholder";

export interface EzraStory {
  /** the short pull quote, in quotation marks */
  quote: string;
  /** the longer story under it */
  story: string;
  /** the member's name and age ("Dana · 41") */
  name: string;
  /** the member's photo (an <img> filling its box, object-cover); a placeholder when empty */
  media?: ReactNode;
}

export interface EzraStoriesProps {
  /** the serif heading over the slider */
  title: string;
  /** the slides, one shown at a time */
  stories: EzraStory[];
  /** accessible names of the arrow buttons */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

const arrowClass =
  "grid size-12 place-items-center rounded-full bg-muted-foreground text-background transition-colors duration-200 hover:bg-foreground motion-reduce:transition-none";

/** A dark band of member stories: photo + cream quote panel, one slide at a time. */
export function EzraStories({ title, stories, previousLabel, nextLabel, className }: EzraStoriesProps) {
  const [index, setIndex] = useState(0);
  const count = stories.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <section className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-page px-gutter pt-16 pb-16 lg:pt-[5.5rem] lg:pb-22">
        <h2 className="max-w-[33rem] font-display text-[2rem] leading-[1.25] font-light tracking-[-0.01em] lg:text-[2.15rem] lg:leading-[1.17]">
          {title}
        </h2>
        <div className="mt-4 overflow-clip lg:mt-7">
          <ul
            className="flex transition-transform duration-500 ease-[ease] motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {stories.map((story, i) => (
              <li
                key={story.name}
                aria-hidden={i !== index}
                inert={i !== index}
                className="flex w-full shrink-0 flex-col lg:flex-row"
              >
                <div className="relative aspect-[351/238] bg-background lg:aspect-auto lg:min-h-[33.6rem] lg:w-[63%]">
                  {story.media ?? <EzraPlaceholder className="absolute inset-0" />}
                </div>
                <div className="flex flex-1 flex-col justify-center bg-foreground px-6 py-10 text-background lg:px-8 lg:py-12">
                  <p className="text-lg leading-[1.5] font-medium lg:px-0.5 lg:leading-[1.67]">{story.quote}</p>
                  <p className="mt-10 text-xs leading-[1.83] lg:mt-12">{story.story}</p>
                  <p className="mt-10 text-sm lg:mt-12">{story.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {count > 1 && (
          <div className="mt-4 flex gap-4 lg:mt-8.5">
            <button type="button" aria-label={previousLabel} onClick={() => go(-1)} className={arrowClass}>
              <ChevronLeft aria-hidden className="size-5" strokeWidth={2.5} />
            </button>
            <button type="button" aria-label={nextLabel} onClick={() => go(1)} className={arrowClass}>
              <ChevronRight aria-hidden className="size-5" strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
