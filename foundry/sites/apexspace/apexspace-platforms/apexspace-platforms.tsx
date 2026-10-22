import { useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ApexspaceBusCard, type ApexspaceBusCardProps } from "@foundry/apexspace-bus-card";
import { ApexspaceButton } from "@foundry/apexspace-button";
import { ApexspaceHeading } from "@foundry/apexspace-heading";

export interface ApexspacePlatformsProps {
  /** the heading at the top left; a \n starts a new line */
  title: string;
  /** the paragraph at the top right */
  text: string;
  /** the small mono badge under the paragraph */
  badge: { icon: ReactNode; label: string };
  /** the product cards, three in a row on desktop */
  cards: ApexspaceBusCardProps[];
  /** the centred link under the cards */
  compare: { label: string; href: string };
  /** screen-reader labels for the phone arrows */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

const toneTab = { 1: "border-chart-1 bg-chart-1/25", 2: "border-chart-2 bg-chart-2/25", 3: "border-chart-3 bg-chart-3/25", 4: "border-chart-4 bg-chart-4/25" };

/** Black band of outlined product cards; a swipe track with tabs on phones. */
export function ApexspacePlatforms({ title, text, badge, cards, compare, previousLabel, nextLabel, className }: ApexspacePlatformsProps) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Where card i starts inside the track, minus the track's side padding.
  const offsetOf = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return 0;
    return card.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft);
  };

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(cards.length - 1, i));
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: offsetOf(next), behavior: smooth ? "smooth" : "auto" });
    setActive(next);
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    let best = 0;
    cards.forEach((_, i) => {
      if (Math.abs(offsetOf(i) - el.scrollLeft) < Math.abs(offsetOf(best) - el.scrollLeft)) best = i;
    });
    setActive(best);
  };

  return (
    <section className={cn("bg-card pt-section pb-20 text-card-foreground", className)}>
      <div className="flex flex-col gap-5 px-gutter lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <ApexspaceHeading text={title} />
        <div className="lg:w-[30rem] lg:shrink-0">
          <p className="text-[length:clamp(0.875rem,0.82rem_+_0.19vw,1rem)] leading-[1.4]">{text}</p>
          <p className="mt-6 flex items-center gap-3 font-mono text-[0.75rem] leading-none tracking-[0.06em] uppercase">
            <span aria-hidden className="flex size-3 items-center [&>svg]:size-full">
              {badge.icon}
            </span>
            {badge.label}
          </p>
        </div>
      </div>

      <div
        ref={track}
        onScroll={onScroll}
        className="relative mt-[4.25rem] flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter py-1.5 [scrollbar-width:none] lg:mt-[7.4rem] lg:grid lg:grid-cols-3 lg:gap-0 lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((c, i) => (
          <ApexspaceBusCard key={c.name} {...c} className={cn("w-[calc(100vw-2.5rem)] max-w-[24rem] shrink-0 snap-start lg:w-auto lg:max-w-none", i % 3 !== 0 && "lg:-ml-px", c.className)} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 px-gutter lg:hidden">
        <button type="button" aria-label={previousLabel} onClick={() => go(active - 1)} className="flex size-5 items-center justify-center bg-foreground/15 transition-colors hover:bg-foreground/30">
          <ArrowLeft aria-hidden className="size-3" strokeWidth={1.5} />
        </button>
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          {cards.map((c, i) => (
            <button key={c.name} type="button" aria-current={i === active} onClick={() => go(i)} className="flex items-center gap-1.5">
              <span aria-hidden className={cn("flex size-[1.125rem] rotate-45 items-center justify-center border transition-colors duration-300", i === active ? toneTab[c.tone] : "border-foreground/40")}>
                <span className="-rotate-45 font-mono text-[0.625rem] leading-none">{c.name.charAt(0)}</span>
              </span>
              <span className={cn("font-display text-[1rem] leading-none font-medium tracking-[0.04em] uppercase transition-opacity duration-300", i === active ? "opacity-100" : "opacity-60")}>{c.name}</span>
            </button>
          ))}
        </div>
        <button type="button" aria-label={nextLabel} onClick={() => go(active + 1)} className="flex size-5 items-center justify-center bg-foreground/15 transition-colors hover:bg-foreground/30">
          <ArrowRight aria-hidden className="size-3" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-[5.5rem] flex justify-center px-gutter lg:mt-[7.4rem]">
        <ApexspaceButton {...compare} variant="line" className="lg:w-[23.75rem]" />
      </div>
    </section>
  );
}
