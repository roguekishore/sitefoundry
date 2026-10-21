import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringMedia } from "@foundry/structureengineering-media";
import { StructureengineeringTags, type StructureengineeringTag } from "@foundry/structureengineering-tags";
import "./structureengineering-hero.css";

export interface StructureengineeringHeroCard {
  /** the small mono line at the top right (the sector) */
  category: string;
  /** the project name at the bottom right */
  title: string;
  /** where the card goes */
  href: string;
  /** the thumbnail at the left. Empty: a placeholder */
  media?: ReactNode;
}

export interface StructureengineeringHeroProps {
  /** the big statement over the photos */
  heading: string;
  /** the small label over the tag row ("see our work") */
  exploreLabel: string;
  /** the sector tags under it */
  tags: StructureengineeringTag[];
  /** the small label over the cards ("latest work") */
  latestLabel: string;
  /** the project cards along the bottom (three at desktop) */
  cards: StructureengineeringHeroCard[];
  /** the full-bleed slideshow images. Empty: placeholders */
  slides?: ReactNode[];
  /** how many placeholder slides to show when slides is empty */
  placeholderSlides?: number;
  /** seconds each slide stays before the next slides in */
  interval?: number;
  className?: string;
}

const onMedia = "text-card dark:text-card-foreground";

// A full-bleed photo slideshow a little taller than the window, darkened, with a huge white
// statement over its lower half and, along the bottom, a tag column and a row of small white
// project cards. On load the photos settle from 92% scale and the text rises 80px; every few
// seconds the next photo slides in from the right.
export function StructureengineeringHero({
  heading,
  exploreLabel,
  tags,
  latestLabel,
  cards,
  slides,
  placeholderSlides = 3,
  interval = 5,
  className,
}: StructureengineeringHeroProps) {
  const frames: (ReactNode | undefined)[] = slides && slides.length > 0 ? slides : Array.from({ length: placeholderSlides }, () => undefined);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (frames.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % frames.length), interval * 1000);
    return () => window.clearInterval(id);
  }, [frames.length, interval]);

  return (
    <section data-tone="dark" className={cn("relative isolate flex min-h-[calc(100svh_+_5.75rem)] flex-col overflow-clip lg:min-h-[calc(100svh_+_3.625rem)]", onMedia, className)}>
      {/* the slideshow */}
      <div className="structureengineering-hero-media absolute inset-0 -z-10">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {frames.map((slide, i) => (
            <StructureengineeringMedia key={i} media={slide} tone="dark" veil className={cn("h-full w-full shrink-0", !slide && i % 2 === 1 && "opacity-90")} />
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-gutter pt-40 pb-6 lg:pb-7">
        <h1 className="structureengineering-hero-rise max-w-[54rem] font-display text-[3.7rem] leading-none font-medium tracking-[-0.04em] text-balance lg:text-[5.1rem]">
          {heading}
        </h1>

        <div className="structureengineering-hero-rise mt-16 grid gap-7 [animation-delay:0.45s] lg:mt-24 lg:grid-cols-[23.5rem_minmax(0,1fr)] lg:gap-4">
          <div>
            <p className="border-b border-current pb-1 font-mono text-base leading-tight uppercase">{exploreLabel}</p>
            <StructureengineeringTags tags={tags} tone="media" className="mt-2.5" />
          </div>
          <div className="min-w-0 min-[87.5rem]:-mr-[3.4rem]">
            <p className="border-b border-current pb-1 font-mono text-base leading-tight uppercase">{latestLabel}</p>
            <ul className="-mx-gutter mt-3.5 flex snap-x snap-mandatory gap-1.5 overflow-x-auto px-gutter [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-2 lg:overflow-visible lg:px-0">
              {cards.map((card) => (
                <li key={card.title} className="w-[80%] shrink-0 snap-start lg:w-auto">
                  <a
                    href={card.href}
                    className="group flex h-[8.9rem] gap-3 rounded-sm bg-card p-1 text-card-foreground transition-colors duration-250 ease-out hover:bg-foreground hover:text-background motion-reduce:transition-none lg:h-[8.5rem]"
                  >
                    <StructureengineeringMedia media={card.media} className="aspect-[146/128] h-full shrink-0" />
                    <div className="flex min-w-0 flex-col justify-between py-2 pr-2">
                      <span className="font-mono text-[0.9rem] leading-tight uppercase">{card.category}</span>
                      <span className="text-base leading-tight font-medium tracking-tight">{card.title}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
