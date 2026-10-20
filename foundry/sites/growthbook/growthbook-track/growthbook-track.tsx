import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookTrackProps {
  /** the slides, in order */
  items: ReactNode[];
  /** width of each slide, e.g. "w-[18.75rem] lg:w-[25rem]" */
  slideClassName?: string;
  /** move to the next slide every n milliseconds (wraps to the first at the end) */
  autoplay?: number;
  /** slides other than the front one fade to 45% */
  dimInactive?: boolean;
  /** labels for the round previous / next buttons; the buttons show only when both are set */
  prevLabel?: string;
  nextLabel?: string;
  /** accessible name of the carousel */
  label?: string;
  /** classes for the arrow row (e.g. alignment, margin) */
  arrowsClassName?: string;
  /** classes for the scrolling row itself (gap, padding) */
  trackClassName?: string;
  className?: string;
}

export function GrowthbookTrack({
  items,
  slideClassName,
  autoplay,
  dimInactive,
  prevLabel,
  nextLabel,
  label,
  arrowsClassName,
  trackClassName,
  className,
}: GrowthbookTrackProps) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  // which slide is in front: the one whose left edge is nearest the row's scroll position
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const slides = Array.from(el.children) as HTMLElement[];
      const start = el.scrollLeft + slides[0]?.offsetLeft;
      let best = 0;
      slides.forEach((s, i) => {
        if (Math.abs(s.offsetLeft - start) < Math.abs(slides[best].offsetLeft - start)) best = i;
      });
      // at the far end the last slides can't reach the front: count the last one as front
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) best = slides.length - 1;
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const n = (i + slides.length) % slides.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: slides[n].offsetLeft - slides[0].offsetLeft, behavior: reduce ? "auto" : "smooth" });
  };

  useEffect(() => {
    if (!autoplay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const el = track.current;
      if (!el || paused.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      go(atEnd ? 0 : active + 1);
    }, autoplay);
    return () => window.clearInterval(id);
  }, [autoplay, active]);

  const pause = (p: boolean) => () => {
    paused.current = p;
  };

  const arrow = "grid size-[3.25rem] place-items-center rounded-full border border-foreground/40 text-foreground transition-colors duration-250 hover:border-foreground hover:bg-foreground/10 motion-reduce:transition-none";

  return (
    <div
      className={cn("min-w-0", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={pause(true)}
      onPointerLeave={pause(false)}
      onFocus={pause(true)}
      onBlur={pause(false)}
    >
      {prevLabel && nextLabel && (
        <div className={cn("flex justify-end gap-2", arrowsClassName)}>
          <button type="button" aria-label={prevLabel} className={arrow} onClick={() => go(active - 1)}>
            <ArrowLeft aria-hidden className="size-5" strokeWidth={1.5} />
          </button>
          <button type="button" aria-label={nextLabel} className={arrow} onClick={() => go(active + 1)}>
            <ArrowRight aria-hidden className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      )}
      <ul
        ref={track}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          trackClassName,
        )}
      >
        {items.map((item, i) => (
          <li
            key={i}
            data-active={i === active}
            className={cn(
              "shrink-0 snap-start",
              dimInactive && "transition-opacity duration-400 data-[active=false]:opacity-45 motion-reduce:transition-none",
              slideClassName,
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
