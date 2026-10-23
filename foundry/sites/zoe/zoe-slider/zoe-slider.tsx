import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ZoeSliderProps {
  /** the cards, in order */
  slides: ReactNode[];
  /** classes for each slide wrapper: its width (e.g. "w-[37.5rem]") */
  slideClassName?: string;
  /** screen-reader name of the row */
  label: string;
  /** screen-reader names of the two buttons */
  prevLabel: string;
  nextLabel: string;
  /** light: dark bar and white buttons, for white pages · band: translucent white, for coloured bands */
  tone?: "light" | "band";
  className?: string;
  /** extra classes for the scrolling row (side padding, gap, centring at a breakpoint) */
  trackClassName?: string;
  /** extra classes for the progress bar + buttons (e.g. "lg:hidden") */
  controlsClassName?: string;
}

/** A snapping card row with a progress bar and round arrows, like the site's sliders. */
export function ZoeSlider({
  slides,
  slideClassName,
  label,
  prevLabel,
  nextLabel,
  tone = "light",
  className,
  trackClassName,
  controlsClassName,
}: ZoeSliderProps) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  // where the row has to scroll to for card i to sit at its left padding
  const targetOf = useCallback((i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return 0;
    return card.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft || "0");
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (el.clientWidth === 0) return;
      const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < el.children.length; i++) {
        const d = Math.abs(targetOf(i) - el.scrollLeft);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      // the last cards can't reach the left edge: at the very end the last one counts as current
      if (end && el.scrollWidth > el.clientWidth) best = el.children.length - 1;
      setActive(best);
      setAtEnd(end);
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
  }, [targetOf]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: targetOf(Math.max(0, Math.min(slides.length - 1, i))), behavior: still ? "auto" : "smooth" });
  };

  const round = cn(
    "grid size-12 place-items-center rounded-full transition-opacity duration-300 disabled:opacity-40 motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    tone === "band"
      ? "bg-current/20"
      : "bg-background shadow-[0_0_10px_0_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
  );

  return (
    <div className={className}>
      <div
        ref={track}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring [&::-webkit-scrollbar]:hidden",
          trackClassName,
        )}
      >
        {slides.map((slide, i) => (
          <div key={i} className={cn("shrink-0 snap-start", slideClassName)}>
            {slide}
          </div>
        ))}
      </div>

      <div className={controlsClassName}>
        <div className={cn("relative h-px", tone === "band" ? "bg-current/40" : "bg-foreground/25")}>
          <div
            className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-current transition-[width] duration-300 ease-in-out motion-reduce:transition-none"
            style={{ width: `${((active + 1) / Math.max(1, slides.length)) * 100}%` }}
          />
        </div>
        <div className="mt-6 flex gap-2">
          <button type="button" aria-label={prevLabel} disabled={active === 0} onClick={() => go(active - 1)} className={round}>
            <ChevronLeft aria-hidden className="size-5" strokeWidth={1.5} />
          </button>
          <button type="button" aria-label={nextLabel} disabled={atEnd} onClick={() => go(active + 1)} className={round}>
            <ChevronRight aria-hidden className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
