import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceButton } from "@foundry/k2space-button";
import "./k2space-news.css";

export interface K2spaceNewsItem {
  /** the publication's name (set as bold text, never a logo) */
  publication: string;
  /** the date as shown */
  date: string;
  /** the headline */
  title: string;
  /** the article */
  href: string;
}

export interface K2spaceNewsProps {
  /** the section title */
  title: string;
  /** the cards, newest first */
  items: K2spaceNewsItem[];
  /** the link text inside each card */
  readLabel: string;
  /** accessible names of the arrow buttons */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

/** A title with arrows over a scroll-snap row of near-black press cards. */
export function K2spaceNews({ title, items, readLabel, previousLabel, nextLabel, className }: K2spaceNewsProps) {
  const track = useRef<HTMLDivElement>(null);
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      className={cn("bg-background pt-[170px] pb-5 text-foreground [font-stretch:var(--k2space-stretch,100%)] lg:pt-[14.6vw] lg:pb-[1.45vw]", className)}
    >
      <div className="flex items-start justify-between gap-6 px-gutter">
        <h2 className="k2space-news-in font-display text-[34px]/none font-[560] lg:text-[3.307vw]/none">{title}</h2>
        <div className="flex shrink-0 gap-1 max-lg:hidden">
          <K2spaceButton variant="arrow" direction="left" ariaLabel={previousLabel} onClick={() => step(-1)} />
          <K2spaceButton variant="arrow" ariaLabel={nextLabel} onClick={() => step(1)} />
        </div>
      </div>

      <div
        ref={track}
        className="mt-8 flex snap-x snap-mandatory scroll-px-gutter gap-5 overflow-x-auto overscroll-x-contain px-gutter [scrollbar-width:none] lg:mt-[4.2vw] lg:gap-[1.32vw] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="group flex h-[225px] w-[75.6vw] max-w-[420px] shrink-0 snap-start flex-col rounded-sm bg-card p-[18px] text-card-foreground lg:h-[25.7vw] lg:w-[41.5vw] lg:max-w-none lg:p-[1.74vw] lg:pt-[1.6vw]"
          >
            <span className="flex items-start justify-between gap-4">
              <span className="font-display text-2xl/none font-bold tracking-[-0.02em] lg:text-[2.2vw]/none">{item.publication}</span>
              <span className="pt-1 text-xs/none font-[560] text-card-foreground/60 lg:pt-[0.4vw] lg:text-[max(0.75rem,0.926vw)]/none">{item.date}</span>
            </span>
            <span className="mt-auto text-base/none font-[560] lg:text-[1.852vw]/none">{item.title}</span>
            <span className="mt-[22px] inline-flex items-center gap-1.5 text-base/none font-[560] text-muted-foreground transition-colors duration-200 ease-[ease] group-hover:text-foreground motion-reduce:transition-none lg:mt-[2.4vw] lg:text-[max(1rem,1.3227vw)]/none">
              {readLabel}
              <ArrowRight aria-hidden strokeWidth={1.75} className="size-[0.9em]" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
