import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureButton } from "@foundry/storeyarchitecture-button";
import { StoreyarchitectureSlideBars } from "@foundry/storeyarchitecture-slide-bars";
import "./storeyarchitecture-hero.css";

export interface StoreyarchitectureHeroSlide {
  /** the photo or video (object-cover); empty shows a placeholder */
  media?: ReactNode;
}

export interface StoreyarchitectureHeroProps {
  /** the photos, one per slide (one progress bar each) */
  slides: StoreyarchitectureHeroSlide[];
  /** the short statement at the bottom-left */
  statement: string;
  /** the wide white button */
  cta: { label: string; href: string };
  /** screen-reader label of each progress bar; the slide number is added */
  slideLabel: string;
  /** how long each slide stays, in ms */
  interval?: number;
  className?: string;
}

const stagger = (step: number) => ({ "--storeyarchitecture-hero-step": step }) as CSSProperties;

export function StoreyarchitectureHero({ slides, statement, cta, slideLabel, interval = 6000, className }: StoreyarchitectureHeroProps) {
  const [active, setActive] = useState(0);

  // advance one slide per interval (not under reduced motion)
  useEffect(() => {
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % slides.length), interval);
    return () => window.clearTimeout(id);
  }, [active, interval, slides.length]);

  return (
    <section
      className={cn(
        "storeyarchitecture-hero relative h-[110svh] overflow-clip font-[450] bg-foreground text-background dark:bg-background dark:text-foreground",
        className,
      )}
    >
      <div className="storeyarchitecture-hero-media absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-[opacity,scale] duration-[1200ms,1800ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
              i % 2 ? "bg-glow/85" : "bg-glow",
              i === active ? "scale-100 opacity-100" : "scale-110 opacity-0",
              i === 0 && "storeyarchitecture-hero-first",
            )}
          >
            {slide.media}
          </div>
        ))}
        {/* the original's scrims: a light shade at the top, a deep gradient at the bottom */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-foreground/20 to-transparent dark:from-background/20" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-foreground/55 dark:to-background/55" />
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-6 gap-x-gutter px-gutter pb-[calc(10svh+4.3vw)] sm:grid-cols-12 sm:pb-[calc(10svh+1.5vw)]">
        <StoreyarchitectureSlideBars
          count={slides.length}
          active={active}
          duration={interval}
          onSelect={setActive}
          label={slideLabel}
          className="storeyarchitecture-hero-copy col-span-6"
        />
        <p
          className="storeyarchitecture-hero-copy col-span-6 mt-[4vw] text-[4.3vw] leading-[1.2] tracking-[-0.02em] sm:col-span-3 sm:col-start-1 sm:row-start-2 sm:mt-[1.6vw] sm:text-[1.6vw]"
          style={stagger(1)}
        >
          {statement}
        </p>
        <div
          className="storeyarchitecture-hero-copy col-span-6 mt-[5vw] sm:col-span-2 sm:col-start-5 sm:row-start-2 sm:mt-0 sm:self-end sm:justify-self-end"
          style={stagger(2)}
        >
          <StoreyarchitectureButton href={cta.href} variant="light">
            {cta.label}
          </StoreyarchitectureButton>
        </div>
      </div>
    </section>
  );
}
