import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";
import { SlashPlaceholder } from "@foundry/slash-placeholder";

export interface SlashArticle {
  /** the category, in the warm accent */
  category: string;
  /** the date, set in small caps */
  date: string;
  /** the headline (two lines at most) */
  title: string;
  /** the reading time line ("≈ 4 minute read") */
  readTime: string;
  /** where it links */
  href: string;
  /** the 16:9 thumbnail; a dim surface stands in when empty */
  image?: ReactNode;
}

export interface SlashInsightsProps {
  /** the heading, as runs; `{ italic: "modern" }` sets a run in italic */
  heading: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** the articles in the track */
  articles: SlashArticle[];
  /** accessible names of the arrow buttons */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

/** A serif heading with round arrow buttons over a sideways track of article cards that runs out to the window edge. */
export function SlashInsights({ heading, sub, articles, prevLabel, nextLabel, className }: SlashInsightsProps) {
  const track = useRef<HTMLUListElement>(null);
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 32), behavior: reduce ? "auto" : "smooth" });
  };
  const arrow = "grid size-9 place-items-center rounded-full bg-secondary text-foreground transition-colors duration-150 hover:bg-accent lg:size-9";

  return (
    <section className={cn("bg-background pt-section pb-24 text-foreground lg:pt-[calc(var(--section-y)*2.4)] lg:pb-56", className)}>
      <div className="mx-auto flex max-w-page items-end justify-between gap-8 px-gutter">
        <SlashHeading parts={heading} sub={sub} size="md" align="left" headingClassName="max-w-[16rem] lg:max-w-none" />
        <div className="mb-14 hidden gap-5 lg:flex">
          <button type="button" aria-label={prevLabel} onClick={() => step(-1)} className={cn(arrow, "opacity-50")}>
            <ChevronLeft aria-hidden className="size-4" strokeWidth={1.75} />
          </button>
          <button type="button" aria-label={nextLabel} onClick={() => step(1)} className={arrow}>
            <ChevronRight aria-hidden className="size-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        className="mt-6 flex snap-x snap-mandatory gap-8 overflow-x-auto pr-gutter [scrollbar-width:none] lg:mt-10 [&::-webkit-scrollbar]:hidden"
        style={{
          paddingLeft: "max(var(--page-gutter), calc((100% - var(--page-width)) / 2 + var(--page-gutter)))",
          scrollPaddingLeft: "max(var(--page-gutter), calc((100% - var(--page-width)) / 2 + var(--page-gutter)))",
        }}
      >
        {articles.map((article) => (
          <li key={article.title} className="w-[20rem] shrink-0 snap-start lg:w-[21.25rem]">
            <a href={article.href} className="group block">
              <span className="relative block aspect-[340/192] overflow-clip rounded-md">
                <span className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none">
                  {article.image ?? <SlashPlaceholder tone="dim" className="absolute inset-0" />}
                </span>
              </span>
              <span className="mt-4 flex items-center gap-2 text-[0.8125rem] font-medium tracking-[0.01em]">
                <span className="text-glow">{article.category}</span>
                <span aria-hidden className="size-1 rounded-full bg-muted-foreground" />
                <span className="tracking-[0.04em] text-muted-foreground uppercase">{article.date}</span>
              </span>
              <span className="mt-2.5 line-clamp-2 text-xl leading-[1.4] tracking-[-0.03em] transition-colors duration-150 group-hover:text-foreground/80">{article.title}</span>
              <span className="mt-3 block text-sm tracking-[-0.01em] text-muted-foreground">{article.readTime}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-6 flex max-w-page justify-end gap-5 px-gutter lg:hidden">
        <button type="button" aria-label={prevLabel} onClick={() => step(-1)} className={cn(arrow, "opacity-50")}>
          <ChevronLeft aria-hidden className="size-4" strokeWidth={1.75} />
        </button>
        <button type="button" aria-label={nextLabel} onClick={() => step(1)} className={arrow}>
          <ChevronRight aria-hidden className="size-4" strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}
