import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";
import { BasepowercompanyRating, type BasepowercompanyRatingProps } from "@foundry/basepowercompany-rating";

export interface BasepowercompanyReview {
  /** a written review: white card */
  kind: "review";
  /** the review text (clamped to five lines) */
  quote: string;
  /** who wrote it */
  author: string;
  /** one letter for the review site's disc */
  sourceInitial: string;
  /** how many stars */
  stars?: number;
}

export interface BasepowercompanyStory {
  /** a member story: wide photo card */
  kind: "story";
  /** a short pull quote */
  quote: string;
  /** name and place */
  byline: string;
  /** the lime link to the full story */
  link: { label: string; href: string };
  /** the photo behind (under a dark scrim) */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface BasepowercompanyReviewsProps {
  /** the section heading */
  title: string;
  /** the score row under the heading */
  rating: BasepowercompanyRatingProps;
  /** the link beside the score */
  link?: { label: string; href: string };
  /** reviews and stories, in order along the track */
  items: (BasepowercompanyReview | BasepowercompanyStory)[];
  /** screen-reader labels for the arrow buttons */
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

const cardBase = "h-[17.5rem] shrink-0 snap-start overflow-clip rounded-[calc(var(--radius)*2.5)]";

/*
 * Social proof: a heading with the score, then a sideways track mixing white review cards and
 * wider dark photo cards for member stories. Swipe it, or step through with the arrows.
 */
export function BasepowercompanyReviews({ title, rating, link, items, prevLabel = "Previous", nextLabel = "Next", className }: BasepowercompanyReviewsProps) {
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.querySelector("li");
    const by = first ? first.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * by, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={cn("overflow-x-clip bg-background py-12 text-foreground lg:pt-[5.5rem] lg:pb-16", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="max-w-[20ch] font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] lg:max-w-none lg:text-[2.5rem] lg:leading-[1.1]">{title}</h2>
        <div className="mt-4 flex flex-col gap-3 lg:mt-3 lg:flex-row lg:items-center lg:gap-3.5">
          <BasepowercompanyRating {...rating} />
          {link && (
            <a
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none"
            >
              {link.label}
              <ChevronRight aria-hidden className="size-4 stroke-2" />
            </a>
          )}
        </div>
      </div>

      <ul
        ref={track}
        className="mt-8 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 [scrollbar-width:none] lg:mt-11 lg:scroll-px-[calc(var(--page-gutter)+0.25rem)] lg:px-[calc(var(--page-gutter)+0.25rem)] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it, i) =>
          it.kind === "review" ? (
            <li key={i} className={cn(cardBase, "flex w-[calc(100vw-3rem)] max-w-[23.75rem] flex-col bg-card p-6 text-card-foreground")}>
              <div className="flex gap-1" role="img" aria-label={`${it.stars ?? 5} / 5`}>
                {Array.from({ length: it.stars ?? 5 }, (_, s) => (
                  <Star key={s} aria-hidden className="size-[1.125rem] fill-chart-4 text-chart-4" strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="mt-4 line-clamp-6 text-base leading-6 tracking-[-0.005em]">{it.quote}</blockquote>
              <p className="mt-auto flex items-center gap-2.5 text-xs font-bold">
                <span aria-hidden className="flex size-4 items-center justify-center rounded-full text-[0.625rem] font-bold text-primary ring-1 ring-border">
                  {it.sourceInitial}
                </span>
                {it.author}
              </p>
            </li>
          ) : (
            <li key={i} className={cn(cardBase, "dark relative isolate flex w-[calc(100vw-3rem)] max-w-[35rem] flex-col justify-center bg-background px-8 text-foreground")}>
              <BasepowercompanyMedia media={it.media} tone="photo" label={it.mediaLabel} className="absolute inset-0 -z-10" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-background/55" />
              <blockquote className="font-display text-xl leading-[1.35] font-bold tracking-[-0.025em]">{it.quote}</blockquote>
              <p className="mt-3 text-sm leading-[1.5] font-semibold text-foreground/85">{it.byline}</p>
              <a
                href={it.link.href}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-bold text-accent transition-opacity duration-150 hover:opacity-80 motion-reduce:transition-none"
              >
                {it.link.label}
                <ChevronRight aria-hidden className="size-4 stroke-2" />
              </a>
            </li>
          ),
        )}
      </ul>

      <div className="mx-auto mt-10 flex max-w-page justify-center gap-3 px-gutter lg:justify-start">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            type="button"
            aria-label={d < 0 ? prevLabel : nextLabel}
            onClick={() => step(d)}
            className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-card-foreground transition-colors duration-150 hover:bg-accent/40 motion-reduce:transition-none"
          >
            {d < 0 ? <ChevronLeft aria-hidden className="size-5 stroke-[1.5]" /> : <ChevronRight aria-hidden className="size-5 stroke-[1.5]" />}
          </button>
        ))}
      </div>
    </section>
  );
}
