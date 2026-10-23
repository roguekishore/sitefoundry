import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CircleArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlaidPlaceholder } from "@foundry/plaid-placeholder";

export interface PlaidStory {
  /** the story's headline */
  title: string;
  /** where it links to */
  href: string;
  /** the photo. A placeholder when empty */
  media?: ReactNode;
}

export interface PlaidStoriesProps {
  /** the heading */
  title: string;
  /** the stories */
  stories: PlaidStory[];
  /** the link under each card */
  linkLabel: string;
  /** screen-reader labels of the arrow buttons */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

const arrow =
  "grid size-[2.875rem] place-items-center rounded-full border border-chart-3 text-chart-1 transition-colors duration-150 ease-out hover:bg-chart-3/15 motion-reduce:transition-none lg:size-[3.375rem]";

/** Plaid's story carousel: a snapping row slid by two round arrows. */
export function PlaidStories({ title, stories, linkLabel, previousLabel, nextLabel, className }: PlaidStoriesProps) {
  const track = useRef<HTMLUListElement>(null);
  const slide = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <section className={cn("bg-background bg-linear-to-b from-background from-60% to-secondary pb-[19rem] text-foreground lg:pb-[22rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col gap-5 px-gutter lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-display text-2xl font-medium tracking-[-0.05em] lg:text-5xl lg:tracking-[-0.04em]">{title}</h2>
        <div className="flex gap-4">
          <button type="button" aria-label={previousLabel} onClick={() => slide(-1)} className={arrow}>
            <ArrowLeft aria-hidden className="size-6 lg:size-7" strokeWidth={1.75} />
          </button>
          <button type="button" aria-label={nextLabel} onClick={() => slide(1)} className={arrow}>
            <ArrowRight aria-hidden className="size-6 lg:size-7" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] scroll-px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] pb-4 [scrollbar-width:none] lg:mt-12 lg:gap-10 [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((s) => (
          <li key={s.title} className="w-[15.625rem] shrink-0 snap-start lg:w-[26.25rem]">
            <a href={s.href} className="group block">
              <span className="block aspect-[420/250] overflow-clip rounded-[1.25rem]">
                <span className="block size-full transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none">
                  {s.media ?? <PlaidPlaceholder tone="photo" className="size-full" />}
                </span>
              </span>
              <span className="mt-4 block font-display text-lg/[1.4] tracking-[-0.03em] lg:mt-8 lg:text-[1.875rem]/[1.2]">{s.title}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-base text-primary lg:mt-8 lg:text-xl">
                <CircleArrowRight aria-hidden className="size-5 text-chart-1 transition-colors duration-300 group-hover:fill-chart-3/25 lg:size-6" strokeWidth={1.5} />
                {linkLabel}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
