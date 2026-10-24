import { useRef, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceButton } from "@foundry/k2space-button";
import { K2spaceLineReveal } from "@foundry/k2space-line-reveal";
import { K2spaceMedia } from "@foundry/k2space-media";

export interface K2spaceSlide {
  /** the caption title */
  title: string;
  /** one short paragraph under it */
  body: string;
  /** the photo or video */
  media?: ReactNode;
}

export interface K2spaceSliderProps {
  /** the section title */
  title: string;
  /** the slides, in order */
  slides: K2spaceSlide[];
  /** accessible names of the arrow buttons */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

/**
 * A title with arrow buttons over a scroll-snap row of large photo slides that touch edge to
 * edge. Photos settle from 115% and blurred to sharp as the row scrolls into view.
 */
export function K2spaceSlider({ title, slides, previousLabel, nextLabel, className }: K2spaceSliderProps) {
  const track = useRef<HTMLDivElement>(null);
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const slide = el?.firstElementChild as HTMLElement | null;
    if (!el || !slide) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * slide.offsetWidth, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={cn("bg-background text-foreground [font-stretch:var(--k2space-stretch,100%)]", className)}>
      <div className="flex items-start justify-between gap-6 px-gutter">
        <K2spaceLineReveal text={title} className="font-display text-[34px]/none font-[560] lg:text-[3.307vw]/none" />
        <div className="flex shrink-0 gap-1 max-lg:hidden">
          <K2spaceButton variant="arrow" direction="left" ariaLabel={previousLabel} onClick={() => step(-1)} />
          <K2spaceButton variant="arrow" ariaLabel={nextLabel} onClick={() => step(1)} />
        </div>
      </div>

      <div className="mt-16 [view-timeline:--k2space-slider_block] lg:mt-[4.03vw]">
        <div
          ref={track}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <article
              key={i}
              className="dark relative flex h-[170vw] w-[85vw] shrink-0 snap-start flex-col justify-end text-foreground sm:h-[75vw] sm:w-[60vw] lg:h-[40vw] lg:w-[75vw]"
            >
              <K2spaceMedia media={slide.media} scrub timeline="--k2space-slider" className="absolute inset-0" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background/70 to-transparent" />
              <div className="relative p-6 lg:p-[2.64vw] lg:pb-[3vw]">
                <h3 className="font-display text-2xl/none font-[560] lg:text-[2.249vw]/none">{slide.title}</h3>
                <p className="mt-5 max-w-[270px] text-base/none font-[560] lg:mt-[1.25vw] lg:max-w-[25vw] lg:text-[max(1rem,1.3227vw)]/none">
                  {slide.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

