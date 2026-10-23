import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ThirdwayCarouselProps {
  /** the slides; each is wrapped in a snapping list item */
  children: ReactNode;
  /** content at the left of the controls row on tablets and up (a count pill and a word) */
  label?: ReactNode;
  /** accessible names of the two round buttons */
  prevLabel: string;
  nextLabel: string;
  /** classes for each slide's list item (a width, usually); a function gets the slide's index */
  itemClassName?: string | ((index: number) => string);
  /** extra classes for the scrolling track, e.g. to turn it into a grid from `lg:` up */
  trackClassName?: string;
  /** extra classes for the controls row, e.g. `lg:hidden` */
  controlsClassName?: string;
  className?: string;
}

const button =
  "flex h-5 w-[1.875rem] items-center justify-center rounded-full border-2 border-foreground text-foreground transition-opacity duration-150 disabled:opacity-40 motion-reduce:transition-none";

/**
 * A horizontal scroll-snap track with a pair of round arrow buttons. The controls sit under the
 * track on phones and above it from `md:` up. Place it full width: it pads its own sides.
 */
export function ThirdwayCarousel({ children, label, prevLabel, nextLabel, itemClassName, trackClassName, controlsClassName, className }: ThirdwayCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={cn("flex flex-col-reverse gap-6 md:flex-col md:gap-4", className)}>
      <div className={cn("flex items-center justify-between px-gutter md:px-[calc(var(--page-gutter)*2)]", controlsClassName)}>
        <div className="hidden items-center gap-2 text-sm font-[560] tracking-[-0.02em] md:flex">{label}</div>
        <div className="flex items-center gap-3">
          <button type="button" aria-label={prevLabel} disabled={edge.start} onClick={() => step(-1)} className={button}>
            <ArrowLeft className="size-3" strokeWidth={2.5} />
          </button>
          <button type="button" aria-label={nextLabel} disabled={edge.end} onClick={() => step(1)} className={button}>
            <ArrowRight className="size-3" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        onScroll={measure}
        className={cn(
          "flex snap-x snap-mandatory gap-3 overflow-x-auto px-gutter [scrollbar-width:none] md:gap-4 md:px-[calc(var(--page-gutter)*2)] [&::-webkit-scrollbar]:hidden",
          "scroll-px-4 md:scroll-px-8",
          trackClassName,
        )}
      >
        {Children.toArray(children).map((child, i) => (
          <li key={i} className={cn("shrink-0 snap-start", typeof itemClassName === "function" ? itemClassName(i) : itemClassName)}>
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
}
