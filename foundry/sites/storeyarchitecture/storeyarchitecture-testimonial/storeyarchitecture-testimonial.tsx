import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureRise } from "@foundry/storeyarchitecture-rise";
import { StoreyarchitectureSlideBars } from "@foundry/storeyarchitecture-slide-bars";
import "./storeyarchitecture-testimonial.css";

export interface StoreyarchitectureTestimonialSlide {
  /** the client's words */
  quote: string;
  /** the client's name */
  name: string;
  /** the company or project line, set in mono capitals */
  company: string;
  /** the 4:3 photo (object-cover); empty shows a placeholder */
  media?: ReactNode;
  /** the small square thumbnail; empty shows a placeholder */
  thumb?: ReactNode;
}

export interface StoreyarchitectureTestimonialProps {
  /** one slide per client */
  slides: StoreyarchitectureTestimonialSlide[];
  /** two paragraphs side by side at the top-right */
  paragraphs: string[];
  /** screen-reader label of each progress bar; the slide number is added */
  slideLabel: string;
  /** how long each slide stays, in ms */
  interval?: number;
  className?: string;
}

const cover = "[&>*]:size-full [&>*]:object-cover";

export function StoreyarchitectureTestimonial({ slides, paragraphs, slideLabel, interval = 7000, className }: StoreyarchitectureTestimonialProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % slides.length), interval);
    return () => window.clearTimeout(id);
  }, [active, interval, slides.length]);

  const current = slides[active];
  const fade = (on: boolean) =>
    cn("transition-[opacity,scale] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none", on ? "scale-100 opacity-100" : "scale-105 opacity-0");

  return (
    <section
      className={cn(
        "storeyarchitecture-testimonial grid grid-cols-6 font-[450] gap-x-gutter bg-foreground px-gutter pt-gutter pb-[30vw] text-background tracking-[-0.02em] sm:grid-cols-12 sm:pt-[0.9vw] sm:pb-[55vw]",
        className,
      )}
    >
      <div className="col-span-6 sm:row-start-1 sm:mt-[5vw]">
        <div className="relative aspect-[4/3] overflow-clip">
          {slides.map((slide, i) => (
            <div key={i} aria-hidden={i !== active} className={cn("absolute inset-0 bg-background/15", cover, fade(i === active))}>
              {slide.media}
            </div>
          ))}
        </div>
        <StoreyarchitectureSlideBars count={slides.length} active={active} duration={interval} onSelect={setActive} label={slideLabel} className="mt-[4vw] sm:mt-[1.4vw]" />

        <figure key={active} className="mt-[4vw] grid grid-cols-6 gap-x-gutter sm:mt-[1.6vw]">
          <blockquote className="col-span-3 text-[4.3vw] leading-[1.2] sm:text-[1.6vw]">
            <p>{current?.quote}</p>
          </blockquote>
          <figcaption className="col-span-3 flex items-start gap-[3vw] sm:ml-[2.3vw] sm:gap-[1.4vw]">
            <span className={cn("size-[12vw] shrink-0 overflow-clip bg-background/15 grayscale sm:size-[4.5vw]", cover)}>{current?.thumb}</span>
            <span className="hidden flex-col gap-[0.5vw] pt-[0.4vw] text-[1.1vw] leading-none sm:flex">
              <span className="text-background/70">{current?.name}</span>
              <span className="font-mono tracking-[-0.06em] text-background/70 uppercase">{current?.company}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="storeyarchitecture-testimonial-lag col-span-6 mt-[50vw] grid grid-cols-6 gap-x-gutter gap-y-[6vw] text-[4.3vw] leading-[1.2] sm:col-start-7 sm:row-start-1 sm:mt-0 sm:text-[1.6vw]">
        {paragraphs.map((text, i) => (
          <StoreyarchitectureRise key={text} step={i} className="col-span-6 sm:col-span-3">
            <p>{text}</p>
          </StoreyarchitectureRise>
        ))}
      </div>
    </section>
  );
}
