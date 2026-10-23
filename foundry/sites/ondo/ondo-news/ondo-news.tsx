import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { OndoButton } from "@foundry/ondo-button";
import { OndoPlaceholder } from "@foundry/ondo-placeholder";
import "./ondo-news.css";

export interface OndoNewsItem {
  /** e.g. "Announcement" */
  category: string;
  /** the date as shown */
  date: string;
  /** the headline */
  title: string;
  /** two or three lines of serif summary */
  excerpt: string;
  /** where "read more" goes */
  href: string;
  /** the 570×347 image. A plain surface when empty */
  media?: ReactNode;
}

export interface OndoNewsProps {
  /** a heading for screen readers (the original shows none) */
  heading: string;
  /** the slides */
  items: OndoNewsItem[];
  /** the button text on each slide */
  readMoreLabel: string;
  /** headlines for the two phone tickers (the slide titles when empty) */
  headlines?: string[];
  /** seconds per slide */
  interval?: number;
  /** screen-reader labels for the side peeks */
  labels?: { prev: string; next: string };
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";

/** Announcement carousel: one wide charcoal card, timed by a filling ring. */
export function OndoNews({ heading, items, readMoreLabel, headlines, interval = 6, labels, className }: OndoNewsProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const count = items.length;
  const item = items[index];
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  useEffect(() => {
    if (reduce || count < 2) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), interval * 1000);
    return () => clearTimeout(timer);
  }, [index, reduce, count, interval]);

  const ticker = headlines?.length ? headlines : items.map((i) => i.title);

  const ring = (
    <svg key={`ring-${index}`} aria-hidden viewBox="0 0 16 16" className="size-3.5 -rotate-90 text-muted-foreground">
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" pathLength={1} strokeDasharray="1" className="ondo-news-ring" />
    </svg>
  );

  return (
    <section className={cn("bg-background pt-12 lg:pt-[18rem]", className)} style={{ ["--ondo-news-time" as string]: `${interval}s` }}>
      <h2 className="sr-only">{heading}</h2>
      <div className="px-gutter lg:px-[calc(var(--page-gutter)*2.75)]">
        <div className="mx-auto flex max-w-[84.5rem] items-stretch gap-5">
          <button
            type="button"
            aria-label={labels?.prev}
            onClick={() => go(-1)}
            className="hidden w-12 shrink-0 rounded-3xl bg-muted transition-colors duration-200 hover:bg-accent motion-reduce:transition-none lg:block"
          />
          <article className="dark relative min-w-0 flex-1 rounded-3xl bg-secondary p-4 text-foreground lg:grid lg:grid-cols-[570fr_582fr] lg:gap-4 lg:p-6">
            <div key={`media-${index}`} className="ondo-news-in aspect-[570/347] overflow-clip rounded-2xl">
              {item.media ?? <OndoPlaceholder tone="muted" className="bg-background" />}
            </div>
            <div key={`text-${index}`} className="ondo-news-in flex min-h-[11rem] flex-col pt-6 lg:min-h-0 lg:pt-0">
              <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span>{item.category}</span>
                <span aria-hidden className="size-1 rounded-full bg-muted-foreground" />
                <span>{item.date}</span>
              </p>
              <h3 className="mt-2 font-display text-xl leading-[1.05] font-medium tracking-[-0.02em] text-foreground lg:mt-4 lg:pr-10 lg:text-[1.75rem]">{item.title}</h3>
              <p className={cn("mt-8 line-clamp-3 hidden text-base leading-[1.32] text-foreground/75 lg:block lg:pr-4", serif)}>{item.excerpt}</p>
              <OndoButton href={item.href} variant="soft" className="mt-auto self-start">
                {readMoreLabel}
              </OndoButton>
            </div>
            <div className="absolute right-4 bottom-4 lg:top-6 lg:right-6 lg:bottom-auto">{ring}</div>
          </article>
          <button
            type="button"
            aria-label={labels?.next}
            onClick={() => go(1)}
            className="hidden w-12 shrink-0 rounded-3xl bg-muted transition-colors duration-200 hover:bg-accent motion-reduce:transition-none lg:block"
          />
        </div>
        <div aria-hidden className="mt-4 flex flex-col gap-4 lg:hidden">
          {[ticker, [...ticker].reverse()].map((row, r) => (
            <div
              key={r}
              /* foundry-allow-colour: the mask only fades the edges */
              className="h-10 overflow-clip rounded-xl bg-muted [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]"
            >
              <div
                className="ondo-news-ticker flex h-full w-max items-center"
                style={{ ["--ondo-news-loop" as string]: r === 0 ? "20s" : "15s" }}
              >
                {[...row, ...row].map((line, i) => (
                  <span key={i} className="pl-12 text-sm font-medium whitespace-nowrap text-foreground/25">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
