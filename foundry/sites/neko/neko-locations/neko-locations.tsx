import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NekoSectionLabel } from "@foundry/neko-section-label";
import { NekoSlot } from "@foundry/neko-slot";
import "./neko-locations.css";

export interface NekoLocation {
  /** the small frosted chip at the top (e.g. the city) */
  city: string;
  /** the clinic's name, in serif */
  name: string;
  /** the street address */
  address: string;
  href?: string;
  /** the photo; empty shows a placeholder */
  media?: ReactNode;
}

export interface NekoLocationsProps {
  /** the divider row above the heading */
  label?: string;
  title: string;
  locations: NekoLocation[];
  /** labels of the arrow buttons, for screen readers */
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

export function NekoLocations({ label, title, locations, prevLabel = "Previous", nextLabel = "Next", className }: NekoLocationsProps) {
  const track = useRef<HTMLUListElement>(null);
  // how far along the row is (0–1) and how much of it is in view (0–1)
  const [pos, setPos] = useState({ at: 0, seen: 0.4 });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setPos({ at: max > 0 ? el.scrollLeft / max : 0, seen: Math.min(1, el.clientWidth / el.scrollWidth) });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 16), behavior: "smooth" });
  };

  return (
    <section className={cn("neko-locations overflow-x-clip bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {label && <NekoSectionLabel label={label} className="pt-section" />}
        <h2 className="mt-section font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:text-[4.25rem] lg:leading-[1.18]">{title}</h2>
      </div>

      {/* the row starts on the page's left edge but runs on to the window's right edge */}
      <ul
        ref={track}
        className="neko-locations-track mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] scroll-px-[max(var(--page-gutter),calc((100%-var(--page-width))/2+var(--page-gutter)))] lg:mt-24 lg:gap-6"
      >
        {locations.map((l) => (
          <li key={l.name} className="w-[18.4rem] shrink-0 snap-start lg:w-[20.125rem]">
            <a href={l.href} className="group block">
              <NekoSlot media={l.media} tone="slate" className="aspect-[322/474] rounded-[1.25rem] lg:rounded-[1.8rem]">
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--foreground)_32%,transparent)_10%,transparent_60%)] dark:bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_70%,transparent)_10%,transparent_60%)]" />
                <span className="absolute top-6 left-6 flex h-10 items-center rounded-full bg-background/75 px-4 text-sm text-foreground backdrop-blur-sm lg:text-base">{l.city}</span>
                <div className="neko-locations-caption absolute inset-x-6 bottom-6 text-background dark:text-foreground">
                  <p className="font-display text-[1.75rem] leading-8 tracking-[-0.02em] lg:text-[2rem] lg:leading-10">{l.name}</p>
                  <p className="mt-1 text-sm leading-5 lg:text-base">{l.address}</p>
                </div>
              </NekoSlot>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-6 lg:mt-14">
        <button type="button" aria-label={prevLabel} onClick={() => step(-1)} disabled={pos.at <= 0.001} className="text-foreground transition-colors duration-150 disabled:text-muted-foreground/50">
          <ArrowLeft aria-hidden className="size-5" strokeWidth={1.5} />
        </button>
        <div aria-hidden className="relative h-0.5 w-[12.75rem] overflow-clip bg-border/60 lg:w-[11.75rem]">
          <span
            className="absolute inset-y-0 left-0 bg-foreground transition-[translate] duration-150"
            style={{ width: `${pos.seen * 100}%`, translate: `${pos.at * (1 / pos.seen - 1) * 100}% 0` }}
          />
        </div>
        <button type="button" aria-label={nextLabel} onClick={() => step(1)} disabled={pos.at >= 0.999} className="text-foreground transition-colors duration-150 disabled:text-muted-foreground/50">
          <ArrowRight aria-hidden className="size-5" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
