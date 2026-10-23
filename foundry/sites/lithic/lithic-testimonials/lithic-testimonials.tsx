import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LithicPlaceholder } from "@foundry/lithic-placeholder";
import { LithicTextmark, type LithicTextmarkStyle } from "@foundry/lithic-textmark";

export interface LithicTestimonial {
  /** the customer's name, set as a text mark at the top */
  company: string;
  companyVariant?: LithicTextmarkStyle;
  /** the quote, without quotation marks */
  quote: string;
  /** who said it */
  name: string;
  role: string;
  /** their photo (48px circle). A placeholder when empty */
  avatar?: ReactNode;
}

export interface LithicTestimonialsProps {
  /** the intro headline */
  title: string;
  /** the intro paragraph */
  text: string;
  testimonials: LithicTestimonial[];
  /** accessible names of the arrow buttons */
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

// Offset of the page column from the section's edge: the gutter on phones, centred 1184px on desktop.
const edge = "max(var(--page-gutter), calc((100% - var(--page-width)) / 2 + var(--page-gutter)))";
// The same offset measured from the window, for boxes narrower than the section.
const edgeVw = "max(var(--page-gutter), calc((100vw - var(--page-width)) / 2 + var(--page-gutter)))";

/** Client quotes: an intro beside a sliding row of cards. */
export function LithicTestimonials({ title, text, testimonials, previousLabel, nextLabel, className }: LithicTestimonialsProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };
  useEffect(update, []);

  const slide = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 64), behavior: reduce ? "auto" : "smooth" });
  };

  const arrow = "grid size-8 place-items-center transition-colors duration-200 disabled:text-muted-foreground/40 enabled:hover:text-primary motion-reduce:transition-none";

  return (
    <section className={cn("overflow-clip bg-background pt-20 pb-24 text-foreground lg:pt-40 lg:pb-[9.25rem]", className)} style={{ paddingLeft: edge }}>
      <div className="flex items-start">
        <div className="w-[11.9rem] shrink-0 pt-[3.4rem] lg:w-[17.6rem] lg:pt-14">
          <h2 className="font-display text-2xl/[1.2] font-semibold tracking-[-0.02em] lg:text-[2rem]/[1.2]">{title}</h2>
          <p className="mt-6 text-sm/[1.4] tracking-[0.01em] lg:mt-8">{text}</p>
        </div>
        <div className="ml-[6.1rem] min-w-0 flex-1 lg:ml-[9.4rem]">
          <ul
            ref={track}
            onScroll={update}
            className="flex snap-x snap-mandatory gap-16 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ paddingRight: edgeVw }}
          >
            {testimonials.map((t) => (
              <li key={t.name} className="flex h-[25rem] w-[18.75rem] shrink-0 snap-start flex-col rounded-lg bg-muted p-8 lg:h-96 lg:w-[36rem] lg:p-10">
                <LithicTextmark name={t.company} variant={t.companyVariant} className="text-2xl" />
                <blockquote className="mt-10 pl-[0.45em] -indent-[0.45em] text-base/[1.4] lg:mt-[3.75rem] lg:text-xl/[1.4]">
                  “{t.quote}”
                </blockquote>
                <div className="mt-auto flex items-center gap-6">
                  <div className="size-12 shrink-0 overflow-clip rounded-full">{t.avatar ?? <LithicPlaceholder tone="dim" className="size-full rounded-full" />}</div>
                  <div className="text-sm/[1.6]">
                    <p className="font-semibold tracking-[0.01em]">{t.name}</p>
                    <p>{t.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-6 lg:mt-12" style={{ paddingRight: edgeVw }}>
        <button type="button" aria-label={previousLabel} className={arrow} disabled={atStart} onClick={() => slide(-1)}>
          <ArrowLeft aria-hidden className="size-6" strokeWidth={2} />
        </button>
        <button type="button" aria-label={nextLabel} className={arrow} disabled={atEnd} onClick={() => slide(1)}>
          <ArrowRight aria-hidden className="size-6" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
