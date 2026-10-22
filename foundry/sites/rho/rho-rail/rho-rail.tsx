import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./rho-rail.css";

export interface RhoRailProps {
  /** the cards, in order */
  items: ReactNode[];
  /** screen-reader label for the left arrow */
  prevLabel: string;
  /** screen-reader label for the right arrow */
  nextLabel: string;
  /** extra classes for each card's slot (set its width here, e.g. "w-[85%] lg:w-[40rem]") */
  itemClassName?: string | ((index: number) => string);
  /** extra classes for the scrolling row, e.g. "lg:grid lg:grid-cols-3" to become a grid */
  trackClassName?: string;
  /** true when trackClassName turns the row into a grid from 1024px up (re-enables card reveals there) */
  gridOnDesktop?: boolean;
  /** extra classes for the arrow pair, e.g. "lg:hidden" */
  arrowsClassName?: string;
  className?: string;
}

export function RhoRail({
  items,
  prevLabel,
  nextLabel,
  itemClassName,
  trackClassName,
  gridOnDesktop = false,
  arrowsClassName,
  className,
}: RhoRailProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const distance = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * distance, behavior: smooth ? "smooth" : "auto" });
  };

  const arrow =
    "grid size-11 place-items-center rounded-md text-foreground transition-opacity duration-[160ms] disabled:opacity-30 enabled:hover:bg-card motion-reduce:transition-none";

  return (
    <div className={className}>
      <ul
        ref={track}
        className={cn(
          "rho-rail-track flex gap-5 overflow-x-auto overscroll-x-contain",
          // the first card lines up with the page column; the row bleeds off the right edge
          "px-gutter [scroll-padding-inline:var(--page-gutter)]",
          "lg:px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] lg:[scroll-padding-inline:max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))]",
          gridOnDesktop && "rho-rail-grid-lg",
          trackClassName,
        )}
      >
        {items.map((item, i) => (
          <li key={i} className={cn("shrink-0", typeof itemClassName === "function" ? itemClassName(i) : itemClassName)}>
            {item}
          </li>
        ))}
      </ul>
      <div className={cn("mt-8 flex justify-center gap-2 lg:mt-10", arrowsClassName)}>
        <button type="button" className={arrow} onClick={() => step(-1)} disabled={atStart} aria-label={prevLabel}>
          <ChevronLeft className="size-5" strokeWidth={1.5} />
        </button>
        <button type="button" className={arrow} onClick={() => step(1)} disabled={atEnd} aria-label={nextLabel}>
          <ChevronRight className="size-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
