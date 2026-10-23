import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UnitArrowCircle } from "@foundry/unit-arrow-circle";
import { UnitPlaceholder, type UnitPlaceholderTone } from "@foundry/unit-placeholder";

export interface UnitShowcaseCard {
  /** the company's name, set like a wordmark */
  company: string;
  /** what they built, one or two lines */
  description: string;
  /** where the card links to */
  href: string;
  /** the brand tile at the foot (295×199 on desktop); a coloured placeholder when empty */
  media?: ReactNode;
}

export interface UnitShowcaseProps {
  /** the heading at the left of the controls */
  heading: string;
  /** the cards, overflowing to the right */
  cards: UnitShowcaseCard[];
  /** screen-reader labels of the two arrows */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

const tiles: UnitPlaceholderTone[] = ["chart-4", "solid", "chart-5", "chart-2", "chart-1", "chart-3"];

/** A heading with round prev/next arrows over a sideways track of tinted company cards that runs off the right edge. */
export function UnitShowcase({ heading, cards, previousLabel, nextLabel, className }: UnitShowcaseProps) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 4 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const move = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section className={cn("overflow-x-clip bg-background font-sans text-foreground", className)}>
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-gutter pt-4 lg:pt-10">
        <h2 className="max-w-[22rem] font-display text-[1.640625rem] leading-[1.12] tracking-[-0.02em] lg:max-w-none lg:text-[2.5rem]">{heading}</h2>
        <div className="hidden shrink-0 gap-3 lg:flex">
          <UnitArrowCircle direction="left" size="md" label={previousLabel} onClick={() => move(-1)} disabled={edge.start} />
          <UnitArrowCircle direction="right" size="md" label={nextLabel} onClick={() => move(1)} disabled={edge.end} />
        </div>
      </div>

      <ul
        ref={track}
        className="mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-gutter pb-16 pl-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] [scrollbar-width:none] lg:mt-[4.5rem] lg:pb-36 [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: "max(var(--page-gutter), calc((100% - var(--page-width)) / 2 + var(--page-gutter)))" }}
      >
        {cards.map((c, i) => (
          <li key={c.company} className="w-[19.75rem] shrink-0 snap-start lg:w-[21.9375rem]">
            <a href={c.href} className="group/card flex h-full flex-col rounded-[0.25rem] bg-muted p-5 lg:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[1.375rem] leading-none font-bold tracking-[-0.03em] lg:text-[1.5rem]">{c.company}</span>
                <UnitArrowCircle />
              </div>
              <p className="mt-6 text-[1.09375rem] leading-[1.25] tracking-[-0.01em] lg:mt-7 lg:text-[1.375rem] lg:leading-[1.23]">{c.description}</p>
              <div className="mt-auto pt-12 lg:pt-14">
                <div className="aspect-[295/199] overflow-clip rounded-lg">
                  {c.media ?? <UnitPlaceholder tone={tiles[i % tiles.length]} className="size-full transition-transform duration-[1025ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] group-hover/card:scale-[1.03] motion-reduce:transition-none" />}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
