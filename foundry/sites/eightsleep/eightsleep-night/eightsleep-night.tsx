import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepNightCard {
  /** the card title */
  title: ReactNode;
  /** one or two sentences */
  text: ReactNode;
  /** an app screen or still for the tile (274×158) */
  media?: ReactNode;
}

export interface EightsleepNightProps {
  title: ReactNode;
  sub?: ReactNode;
  /** four to six cards */
  cards: EightsleepNightCard[];
  /** which card starts in the middle */
  start?: number;
  /** tiny note under the arrows */
  footnote?: ReactNode;
  /** the night-sky background (cover); a black-to-navy gradient when empty */
  sky?: ReactNode;
  /** screen-reader labels for the arrows and dots */
  prevLabel?: string;
  nextLabel?: string;
  dotLabel?: (n: number) => string;
  className?: string;
}

export function EightsleepNight({ title, sub, cards, start = 0, footnote, sky, prevLabel, nextLabel, dotLabel, className }: EightsleepNightProps) {
  // The cards are drawn three times in a row so there is always a neighbour on each side.
  // `pos` counts cards from the start of that long row and normally points into the middle
  // copy; after a glide into the first or last copy it jumps back to the same card in the
  // middle one, with the transition switched off for that one frame.
  const n = cards.length;
  const [pos, setPos] = useState(n + start);
  const [snap, setSnap] = useState(false);
  const active = ((pos % n) + n) % n;
  const current = cards[active];
  const step = (by: number) => {
    setSnap(false);
    setPos((p) => p + by);
  };
  const go = (i: number) => step(i - active);
  const settle = () => {
    if (pos < n || pos >= 2 * n) {
      setSnap(true);
      setPos(n + active);
    }
  };
  // with reduced motion there is no transition (so no transitionend): settle right away
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) settle();
  });

  return (
    <section className={cn("dark relative isolate overflow-clip pt-section pb-[70px] text-foreground lg:pt-[120px] lg:pb-[110px]", className)}>
      <EightsleepMedia media={sky} tone="night" className="absolute inset-0 -z-10" />
      <div className="mx-auto max-w-page px-gutter">
        <EightsleepHeading title={title} sub={sub} />
      </div>

      {/* the track: its left edge sits at the middle of the band and shifts by one card + gap per step */}
      <div className="mt-12 lg:mt-14">
        <ul
          onTransitionEnd={(e) => e.target === e.currentTarget && settle()}
          className={cn(
            "relative left-1/2 flex w-max gap-(--gap) [--card:310px] [--gap:20px] lg:[--card:520px] lg:[--gap:138px]",
            !snap && "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
          )}
          style={{ transform: `translateX(calc(var(--card) / -2 - ${pos} * (var(--card) + var(--gap))))` } as CSSProperties}
        >
          {[...cards, ...cards, ...cards].map((card, i) => (
            <li
              key={i}
              aria-hidden={i !== pos || undefined}
              className={cn(
                "w-(--card) shrink-0 overflow-clip rounded-lg border border-border bg-foreground/12 backdrop-blur-md lg:rounded-xl lg:px-8 lg:pt-12 lg:pb-8",
                !snap && "transition-opacity duration-500",
                i === pos ? "opacity-100" : "opacity-45",
              )}
            >
              <EightsleepMedia
                media={card.media}
                tone="faint"
                className="aspect-[310/178] w-full bg-linear-to-br from-glow/25 to-transparent lg:mx-auto lg:aspect-[274/158] lg:w-[62%] lg:rounded-md lg:border lg:border-border"
              />
              <div className="mt-8 hidden text-center lg:block">
                <h3 className="text-[22px] leading-[1.2]">{card.title}</h3>
                <p className="mx-auto mt-3 max-w-[22rem] text-[13px] leading-[1.2] text-foreground/85">{card.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <div className="mt-7 max-w-[22rem] lg:hidden" aria-live="polite">
          <h3 className="text-[22px] leading-[1.2]">{current.title}</h3>
          <p className="mt-3 text-[13px] leading-[1.2] text-foreground/85">{current.text}</p>
        </div>
        <div className="mt-9 flex gap-1.5 lg:mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={dotLabel?.(i + 1)}
              aria-current={i === active || undefined}
              onClick={() => go(i)}
              className={cn("size-1.5 rounded-full transition-colors duration-300", i === active ? "bg-foreground" : "bg-foreground/40 hover:bg-foreground/70")}
            />
          ))}
        </div>
        <div className="mt-10 flex gap-6 lg:mt-12">
          <button type="button" aria-label={prevLabel} onClick={() => step(-1)} className="flex size-10 items-center justify-center rounded-full border border-foreground/60 transition-colors duration-200 hover:bg-foreground/10 lg:size-14">
            <ArrowLeft className="size-5" strokeWidth={1.25} />
          </button>
          <button type="button" aria-label={nextLabel} onClick={() => step(1)} className="flex size-10 items-center justify-center rounded-full border border-foreground/60 transition-colors duration-200 hover:bg-foreground/10 lg:size-14">
            <ArrowRight className="size-5" strokeWidth={1.25} />
          </button>
        </div>
        {footnote && <p className="mt-8 max-w-[17rem] text-[11px] leading-[1.3] text-foreground/85 lg:text-[12px]">{footnote}</p>}
      </div>
    </section>
  );
}
