import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BrexHeading } from "@foundry/brex-heading";
import { BrexPlaceholder } from "@foundry/brex-placeholder";

export interface BrexArticle {
  title: string;
  /** one to three short lines */
  text: string;
  href: string;
  /** the picture. A placeholder when empty */
  media?: ReactNode;
}

export interface BrexJournalProps {
  title: string;
  articles: BrexArticle[];
  /** screen-reader labels for the two arrow buttons */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

/** Article carousel with native scroll-snap and two arrow buttons. */
export function BrexJournal({ title, articles, prevLabel, nextLabel, className }: BrexJournalProps) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: calm ? "auto" : "smooth" });
  };

  const arrow =
    "flex size-[3.125rem] items-center justify-center rounded-full bg-muted text-foreground transition-opacity duration-150 ease-linear hover:bg-accent disabled:pointer-events-none disabled:text-muted-foreground disabled:opacity-60 motion-reduce:transition-none";

  return (
    <section className={cn("bg-background pt-16 pb-14 lg:pt-20 lg:pb-20", className)}>
      <BrexHeading title={title} className="max-w-[40rem] px-gutter lg:max-w-[56rem]" />
      <ul
        ref={track}
        onScroll={measure}
        className="mt-16 flex snap-x snap-mandatory scroll-px-gutter gap-6 overflow-x-auto px-gutter [scrollbar-width:none] lg:mt-20 lg:scroll-px-[calc(var(--page-gutter)*3)] lg:gap-20 lg:px-[calc(var(--page-gutter)*3)] [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((a) => (
          <li key={a.title} className="w-[15.375rem] shrink-0 snap-start lg:w-[19.75rem]">
            <a href={a.href} className="group block">
              {a.media ?? <BrexPlaceholder tone="photo" className="aspect-[316/178] w-full rounded-[calc(var(--radius)-6px)]" />}
              <h3 className="mt-6 font-display text-2xl/[1.8125rem] font-medium tracking-[-0.02em] text-foreground">{a.title}</h3>
              <p className="mt-3 text-sm/[1.3125rem] text-foreground">{a.text}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-14 flex justify-center gap-6 px-gutter lg:mt-20 lg:justify-start lg:px-[calc(var(--page-gutter)*3)]">
        <button type="button" aria-label={prevLabel} disabled={edge.start} onClick={() => step(-1)} className={arrow}>
          <ArrowLeft aria-hidden className="size-4" strokeWidth={1.75} />
        </button>
        <button type="button" aria-label={nextLabel} disabled={edge.end} onClick={() => step(1)} className={arrow}>
          <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}
