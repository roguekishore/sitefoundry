import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CornerDownRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";
import { ZettaJouleStatement } from "@foundry/zetta-joule-statement";

export interface ZettaJouleSector {
  /** the sector name next to the dot */
  tag: string;
  /** the card heading */
  title: string;
  /** the card paragraph */
  text: string;
  /** the link at the bottom of the card */
  linkLabel: string;
  /** where the link goes */
  href: string;
  /** the photo (cropped like object-fit: cover); empty shows a placeholder */
  image?: ReactNode;
}

export interface ZettaJouleSectorsProps {
  /** small label ("\n" starts a new line) */
  label: string;
  /** the statement */
  statement: string;
  /** one slide per sector: a photo and a warm-grey text card */
  slides: ZettaJouleSector[];
  /** accessible names of the arrow buttons */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

const arrow = "grid place-items-center rounded-sm bg-primary text-primary-foreground transition-opacity duration-200 disabled:opacity-40";

export function ZettaJouleSectors({ label, statement, slides, prevLabel, nextLabel, className }: ZettaJouleSectorsProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };
  useEffect(update, []);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={cn("dark bg-background pt-16 pb-20 text-foreground lg:pt-40 lg:pb-[12.5rem]", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter lg:px-10">
        <ZettaJouleStatement label={label} statement={statement} />
      </div>
      <ZettaJouleReveal distance={32} className="relative mt-[4.5rem] lg:mt-20">
        <ul
          ref={track}
          onScroll={update}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 px-gutter [scrollbar-width:none] lg:scroll-pl-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s) => (
            <li key={s.title} className="flex w-[calc(100%-2rem)] shrink-0 snap-start flex-col gap-4 sm:w-[22rem] lg:w-[64.1875rem] lg:flex-row">
              <div className="aspect-[326/229] overflow-clip rounded-sm lg:aspect-auto lg:h-[40.125rem] lg:w-[28.0625rem] lg:shrink-0 [&>*]:size-full [&>*]:object-cover">
                {s.image ?? <ZettaJoulePlaceholder tone="wash" className="size-full" />}
              </div>
              <div className="-mt-4 flex flex-1 flex-col rounded-b-sm bg-card p-4 text-card-foreground lg:mt-0 lg:h-[40.125rem] lg:rounded-sm lg:p-10">
                <p className="flex items-center gap-3 pt-2 text-base leading-none tracking-[-0.01em] lg:pt-0 lg:text-lg">
                  <span aria-hidden className="size-3 rounded-full bg-primary" />
                  {s.tag}
                </p>
                <h3 className="mt-8 max-w-[24rem] font-display text-2xl leading-[1.2] font-[250] tracking-[-0.03em] lg:mt-16 lg:max-w-none lg:text-[2rem]">{s.title}</h3>
                <p className="mt-6 max-w-[24rem] text-base leading-[1.3] tracking-[-0.01em] text-muted-foreground lg:mt-8 lg:text-xl">{s.text}</p>
                <a href={s.href} className="mt-8 flex items-center gap-3 border-t border-border pt-3 text-sm font-medium tracking-[-0.01em] transition-opacity duration-200 hover:opacity-70 lg:mt-auto">
                  <CornerDownRight aria-hidden className="size-5" strokeWidth={1.25} />
                  {s.linkLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
        {/* phones: both arrows under the cards */}
        <div className="mt-12 flex justify-center gap-14 lg:hidden">
          <button type="button" aria-label={prevLabel} disabled={atStart} onClick={() => go(-1)} className={cn(arrow, "size-10")}>
            <ArrowLeft className="size-5" strokeWidth={1.25} />
          </button>
          <button type="button" aria-label={nextLabel} disabled={atEnd} onClick={() => go(1)} className={cn(arrow, "size-10")}>
            <ArrowRight className="size-5" strokeWidth={1.25} />
          </button>
        </div>
        {/* desktop: arrows float over the photos at the middle of the cards */}
        <button type="button" aria-label={nextLabel} disabled={atEnd} onClick={() => go(1)} className={cn(arrow, "absolute top-[20rem] right-20 hidden size-12 lg:grid")}>
          <ArrowRight className="size-5" strokeWidth={1.25} />
        </button>
        <button type="button" aria-label={prevLabel} disabled={atStart} onClick={() => go(-1)} className={cn(arrow, "absolute top-[20rem] left-14 hidden size-12 lg:grid", atStart && "lg:hidden")}>
          <ArrowLeft className="size-5" strokeWidth={1.25} />
        </button>
      </ZettaJouleReveal>
    </section>
  );
}
