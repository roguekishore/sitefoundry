import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleHeading } from "@foundry/puzzle-heading";
import { PuzzlePlaceholder } from "@foundry/puzzle-placeholder";

export interface PuzzleStory {
  /** the small caps tag, e.g. "Agency" */
  tag: string;
  /** the story's headline */
  title: string;
  href: string;
  /** the photo; empty shows a placeholder */
  media?: ReactNode;
}

export interface PuzzleStoriesProps {
  title: string;
  /** the line under the headline */
  text?: string;
  stories: PuzzleStory[];
  /** the link opposite the arrows */
  link?: { label: string; href: string };
  /** screen-reader labels for the two arrows */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

/** Tall photo cards in a sideways row with arrow buttons. */
export function PuzzleStories({ title, text, stories, link, prevLabel, nextLabel, className }: PuzzleStoriesProps) {
  const track = useRef<HTMLUListElement>(null);

  function slide(dir: 1 | -1) {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: reduce ? "auto" : "smooth" });
  }

  const arrow = "flex size-10 items-center justify-center rounded-full transition-colors duration-300 hover:text-highlight motion-reduce:transition-none";

  return (
    <section className={cn("overflow-x-clip bg-background py-14 text-foreground lg:pt-[4.25rem] lg:pb-24", className)}>
      <PuzzleHeading title={title} className="max-w-[24rem] px-gutter sm:max-w-[48rem] lg:max-w-none" />
      {text && <p className="mt-4 px-gutter text-center text-base/[1.5] lg:mt-5">{text}</p>}

      <ul
        ref={track}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-gutter pl-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] [scrollbar-width:none] lg:mt-10 [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInlineStart: "max(var(--page-gutter), calc((100% - var(--page-width)) / 2 + var(--page-gutter)))" }}
      >
        {stories.map((s) => (
          <li key={s.title} className="w-[14.5rem] shrink-0 snap-start lg:w-[18.6875rem]">
            <a href={s.href} className="group relative block aspect-[0.64] overflow-clip rounded-[calc(var(--radius)*0.9)] lg:aspect-[0.79] lg:rounded-[calc(var(--radius)+2px)]">
              <div className="absolute inset-0 transition-transform duration-400 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                {s.media ?? <PuzzlePlaceholder tone="photo" className="size-full" />}
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-foreground/30 p-5 text-background lg:px-[1.6875rem] lg:pb-7 dark:bg-background/45 dark:text-foreground">
                <p className="font-mono text-sm/none tracking-[0.02em] uppercase">{s.tag}</p>
                <p className="mt-4 text-lg/[1.75] font-medium lg:text-lg/[1.65]">{s.title}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 flex max-w-page flex-col items-center gap-4 px-gutter lg:mt-12 lg:flex-row lg:justify-between">
        <div className="flex gap-4 lg:-ml-2.5 lg:gap-5">
          <button type="button" aria-label={prevLabel} onClick={() => slide(-1)} className={arrow}>
            <ArrowLeft aria-hidden className="size-5 lg:size-6" strokeWidth={1.5} />
          </button>
          <button type="button" aria-label={nextLabel} onClick={() => slide(1)} className={arrow}>
            <ArrowRight aria-hidden className="size-5 lg:size-6" strokeWidth={1.5} />
          </button>
        </div>
        {link && (
          <a href={link.href} className="group inline-flex items-center gap-4 text-base font-medium transition-colors duration-300 hover:text-highlight motion-reduce:transition-none lg:mr-6">
            {link.label}
            <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none lg:size-6" strokeWidth={1.5} />
          </a>
        )}
      </div>
    </section>
  );
}
