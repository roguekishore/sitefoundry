import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface WildAgCarouselProps {
  /** the cards, in order */
  items: ReactNode[];
  /** a title, shown left of the arrows on phones and above the grid on desktop */
  title?: ReactNode;
  /** screen-reader labels of the arrow buttons */
  prevLabel: string;
  nextLabel: string;
  /** columns of the desktop grid */
  columns?: 2 | 3 | 4;
  className?: string;
}

const cols = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

const arrow =
  "flex size-[3.4rem] items-center justify-center rounded-full bg-background text-primary transition-colors duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] enabled:hover:bg-foreground enabled:hover:text-background disabled:opacity-50 motion-reduce:transition-none";

export function WildAgCarousel({ items, title, prevLabel, nextLabel, columns = 4, className }: WildAgCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const check = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={className}>
      <div className="mb-7 flex items-end justify-between gap-4 lg:mb-9">
        <div>{title}</div>
        <div className="flex shrink-0 gap-3 lg:hidden">
          <button type="button" aria-label={prevLabel} disabled={edge.start} onClick={() => step(-1)} className={arrow}>
            <ArrowLeft className="size-5" strokeWidth={1.5} aria-hidden />
          </button>
          <button type="button" aria-label={nextLabel} disabled={edge.end} onClick={() => step(1)} className={arrow}>
            <ArrowRight className="size-5" strokeWidth={1.5} aria-hidden />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        className={cn(
          "-mx-gutter flex snap-x snap-mandatory scroll-px-gutter gap-4 overflow-x-auto px-gutter [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "lg:mx-0 lg:grid lg:overflow-visible lg:px-0",
          cols[columns],
        )}
      >
        {items.map((item, i) => (
          <li key={i} className="w-[86%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
