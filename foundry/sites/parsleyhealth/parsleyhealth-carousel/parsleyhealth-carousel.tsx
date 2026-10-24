import { useCallback, useEffect, useState, type RefObject } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface ParsleyhealthArrowProps {
  /** which way it points */
  direction: "prev" | "next";
  /** screen-reader label (e.g. "Previous") */
  label: string;
  /** ring: 48px clover outline, sage arrow · solid: 48px forest disc · dot: 30px sage disc */
  variant?: "ring" | "solid" | "dot";
  /** greyed out (at the end of the track) */
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const variants = {
  ring: "size-12 border border-border text-ring hover:border-ring hover:bg-ring/6",
  solid: "size-12 bg-primary text-primary-foreground hover:bg-primary/88",
  dot: "size-[1.875rem] bg-secondary text-secondary-foreground hover:bg-secondary/88",
};

/** A round arrow button. */
export function ParsleyhealthArrow({ direction, label, variant = "ring", disabled, onClick, className }: ParsleyhealthArrowProps) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid shrink-0 cursor-pointer place-items-center rounded-full transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] disabled:cursor-default disabled:opacity-40 motion-reduce:transition-none",
        variants[variant],
        className,
      )}
    >
      <Icon aria-hidden className={variant === "dot" ? "size-3.5" : "size-6"} strokeWidth={1.5} />
    </button>
  );
}

export interface ParsleyhealthCarouselState {
  /** scroll one card back */
  prev: () => void;
  /** scroll one card on */
  next: () => void;
  /** the track is scrolled to its start */
  atStart: boolean;
  /** the track is scrolled to its end */
  atEnd: boolean;
  /** the card nearest the track's snap point */
  index: number;
}

/** Drives a horizontal scroll-snap track (its children are the cards). */
export function useParsleyhealthCarousel(track: RefObject<HTMLElement | null>): ParsleyhealthCarouselState {
  const [state, setState] = useState({ atStart: true, atEnd: false, index: 0 });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const cards = Array.from(el.children) as HTMLElement[];
      const box = el.getBoundingClientRect();
      // the snap point: the centre on phones (centred cards), the padded start otherwise
      const centred = getComputedStyle(cards[0] ?? el).scrollSnapAlign.includes("center");
      const anchor = centred ? box.left + box.width / 2 : box.left + parseFloat(getComputedStyle(el).scrollPaddingLeft || "0");
      let index = 0;
      let best = Infinity;
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs((centred ? r.left + r.width / 2 : r.left) - anchor);
        if (d < best) {
          best = d;
          index = i;
        }
      });
      setState({ atStart: el.scrollLeft <= 2, atEnd: el.scrollLeft >= max - 2, index });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [track]);

  const step = useCallback(
    (dir: 1 | -1) => {
      const el = track.current;
      if (!el) return;
      const [a, b] = Array.from(el.children) as HTMLElement[];
      const width = a && b ? b.offsetLeft - a.offsetLeft : el.clientWidth * 0.8;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollBy({ left: dir * width, behavior: reduce ? "auto" : "smooth" });
    },
    [track],
  );

  return { prev: () => step(-1), next: () => step(1), ...state };
}
