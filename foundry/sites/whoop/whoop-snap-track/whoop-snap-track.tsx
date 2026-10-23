import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WhoopSnapTrackProps {
  /** the cards, in order */
  slides: ReactNode[];
  /** classes for each slide wrapper: its width (e.g. "w-[20.8rem]") */
  slideClassName?: string;
  /** start: cards snap to the page column's left edge · center: cards snap to the middle (neighbours peek both sides) */
  align?: "start" | "center";
  /** the card shown first (scrolled to once the page runs) */
  start?: number;
  /** screen-reader name of the track */
  label: string;
  /** screen-reader name of each dot, followed by its number ("Show card" → "Show card 2") */
  dotLabel: string;
  /** light: black dots for white bands · dark: white dots for black bands */
  tone?: "light" | "dark";
  /** show the dots under the track (default true) */
  showDots?: boolean;
  /** told whenever the current card changes */
  onActiveChange?: (index: number) => void;
  className?: string;
  /** extra classes for the scrolling row (gap, or a grid at a breakpoint) */
  trackClassName?: string;
  /** extra classes for the dots row (e.g. "lg:hidden") */
  dotsClassName?: string;
}

// Side padding that lines the first card up with the page column (max-w-page px-gutter),
// however wide the window is.
const edge =
  "px-[max(var(--page-gutter),calc((100%_-_var(--page-width))/2_+_var(--page-gutter)))] scroll-px-[max(var(--page-gutter),calc((100%_-_var(--page-width))/2_+_var(--page-gutter)))]";

/** A snapping card track with dots that follow it. */
export function WhoopSnapTrack({
  slides,
  slideClassName,
  align = "start",
  start = 0,
  label,
  dotLabel,
  tone = "light",
  showDots = true,
  onActiveChange,
  className,
  trackClassName,
  dotsClassName,
}: WhoopSnapTrackProps) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // where the track has to scroll to for card i to sit at its snap point
  const targetOf = useCallback(
    (i: number) => {
      const el = track.current;
      const card = el?.children[i] as HTMLElement | undefined;
      if (!el || !card) return 0;
      if (align === "center") return card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2;
      return card.offsetLeft - parseFloat(getComputedStyle(el).scrollPaddingLeft || "0");
    },
    [align],
  );

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (start > 0) el.scrollLeft = targetOf(start);
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (el.clientWidth === 0) return; // hidden at this breakpoint
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < el.children.length; i++) {
        const d = Math.abs(targetOf(i) - el.scrollLeft);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      // the last cards can't reach the start edge: at the very end the last one is current
      if (atEnd && align === "start" && el.scrollWidth > el.clientWidth) best = el.children.length - 1;
      setActive(best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [start, targetOf, align]);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: targetOf(i), behavior: still ? "auto" : "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={track}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "relative flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring [&::-webkit-scrollbar]:hidden",
          edge,
          trackClassName,
        )}
      >
        {slides.map((slide, i) => (
          <div key={i} className={cn("shrink-0", align === "center" ? "snap-center" : "snap-start", slideClassName)}>
            {slide}
          </div>
        ))}
      </div>
      {showDots && slides.length > 1 && (
        <div className={cn("mt-10 flex justify-center gap-2.5", dotsClassName)}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${dotLabel} ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
              className={cn(
                "size-2.5 rounded-full transition-colors duration-300 ease-out motion-reduce:transition-none",
                tone === "light"
                  ? i === active
                    ? "bg-foreground"
                    : "bg-foreground/10 hover:bg-foreground/30"
                  : i === active
                    ? "bg-background dark:bg-foreground"
                    : "bg-background/25 hover:bg-background/50 dark:bg-foreground/25",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
