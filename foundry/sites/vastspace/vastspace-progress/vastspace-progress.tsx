import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VastspaceArrows } from "@foundry/vastspace-arrows";
import { VastspacePlaceholder } from "@foundry/vastspace-placeholder";
import { VastspaceSectionHeading } from "@foundry/vastspace-section-heading";

export interface VastspaceProgressSlide {
  /** the mono label on the caption card, e.g. "Test rig fit check" */
  label: string;
  /** the sentence under it */
  text: string;
  /** the photo (an <img> or any node that fills its box); empty shows a placeholder */
  image?: ReactNode;
}

export interface VastspaceProgressProps {
  /** the section title */
  title: string;
  /** the slides */
  slides: VastspaceProgressSlide[];
  /** the mono caption under the strip, left (desktop only) */
  caption: string;
  /** screen-reader label of the previous arrow */
  prevLabel: string;
  /** screen-reader label of the next arrow */
  nextLabel: string;
  className?: string;
}

export function VastspaceProgress({ title, slides, caption, prevLabel, nextLabel, className }: VastspaceProgressProps) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const step = useCallback(() => {
    const el = track.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const s = step();
      if (s) setActive(Math.min(slides.length - 1, Math.max(0, Math.round(el.scrollLeft / s))));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [slides.length, step]);

  const goTo = (i: number) => track.current?.scrollTo({ left: i * step(), behavior: "smooth" });

  return (
    <section className={cn("bg-background pt-[3.875rem] pb-[4.5rem] text-foreground md:pt-10 md:pb-[7.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <VastspaceSectionHeading title={title} className="[&>h2]:max-w-[11em] md:[&>h2]:max-w-none" />
      </div>
      <div
        ref={track}
        className="mt-24 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-gutter [scrollbar-width:none] md:mt-[4.875rem] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingInline: "var(--page-gutter)" }}
      >
        {slides.map((s) => (
          <article key={s.label} className="relative h-[37.5rem] w-[calc(100vw-2.875rem)] shrink-0 snap-start overflow-clip md:aspect-[1084/701] md:h-auto md:w-[75.3vw]">
            <div className="size-full [&>*]:size-full [&>*]:object-cover">{s.image ?? <VastspacePlaceholder className="size-full" />}</div>
            <div className="absolute inset-x-4 bottom-4 flex h-[10.625rem] flex-col justify-between bg-linear-to-b from-foreground/40 to-foreground/80 p-5 text-highlight-foreground backdrop-blur-[2px] md:inset-x-auto md:bottom-5 md:left-5 md:h-[13.375rem] md:w-[21.25rem]">
              <p className="flex items-center gap-2 font-mono text-xs/3 font-medium tracking-[0.02em] uppercase">
                <span aria-hidden className="size-3 bg-highlight-foreground" />
                {s.label}
              </p>
              <p className="text-base/[1.375]">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-8 grid max-w-page grid-cols-1 items-start px-gutter md:grid-cols-[1fr_auto_1fr]">
        <p className="hidden max-w-[16rem] font-mono text-xs/3 tracking-[0.02em] uppercase md:block">{caption}</p>
        <ul className="mx-auto flex items-center gap-3 md:mt-1" aria-label={title}>
          {slides.map((s, i) => {
            const d = Math.abs(i - active);
            return (
              <li key={s.label}>
                <button type="button" aria-label={s.label} aria-current={i === active} onClick={() => goTo(i)} className="flex h-7 w-3 items-center justify-center">
                  {i === active ? (
                    <span className="size-3 bg-highlight" />
                  ) : (
                    <span className="w-px bg-muted-foreground/70" style={{ height: Math.max(12, 28 - 6 * (d - 1)) }} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <VastspaceArrows
          prevLabel={prevLabel}
          nextLabel={nextLabel}
          onPrev={() => goTo(Math.max(0, active - 1))}
          onNext={() => goTo(Math.min(slides.length - 1, active + 1))}
          prevDisabled={active === 0}
          nextDisabled={active === slides.length - 1}
          className="hidden justify-self-end md:flex"
        />
      </div>
    </section>
  );
}
