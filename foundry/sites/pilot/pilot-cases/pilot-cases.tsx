import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { PilotBrushNote } from "@foundry/pilot-brush-note";
import { PilotButton } from "@foundry/pilot-button";
import { PilotLines } from "@foundry/pilot-heading";
import { PilotPlaceholder } from "@foundry/pilot-placeholder";

export interface PilotCaseStep {
  /** the small uppercase label, e.g. "The problem" */
  label: string;
  /** the text under it */
  text: string;
}

export interface PilotCase {
  /** the card's title */
  title: string;
  /** the problem and what was built */
  steps: PilotCaseStep[];
  /** the last step: the customer's words, set larger, with a violet dot and label */
  result: PilotCaseStep;
  /** the violet pill */
  story: { label: string; href: string };
  /** the outlined pill with a play icon; leave out to hide it */
  video?: { label: string; href: string };
  /** the customer's name on the photo */
  customer: string;
  /** the photo beside the panel; a placeholder when empty */
  media?: ReactNode;
}

export interface PilotCasesProps {
  /** the small uppercase line above the heading */
  eyebrow?: string;
  /** the heading; \n sets the desktop line break */
  title: string;
  /** the cards, in order along the track */
  cases: PilotCase[];
  /** the white closing statement */
  note?: string;
  /** screen-reader labels for the arrow buttons */
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

/** Pilot's case-study carousel: timeline cards with a photo, on the aubergine band. */
export function PilotCases({ eyebrow, title, cases, note, prevLabel = "Previous", nextLabel = "Next", className }: PilotCasesProps) {
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const by = first ? first.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * by, behavior: reduce ? "auto" : "smooth" });
  };

  const arrows = (
    <div className="flex gap-2">
      {([-1, 1] as const).map((d) => (
        <button
          key={d}
          type="button"
          aria-label={d < 0 ? prevLabel : nextLabel}
          onClick={() => step(d)}
          className="flex size-10 items-center justify-center rounded-full border border-secondary-foreground transition-colors duration-100 hover:bg-secondary-foreground hover:text-secondary motion-reduce:transition-none"
        >
          {d < 0 ? <ChevronLeft aria-hidden className="size-5" strokeWidth={1.5} /> : <ChevronRight aria-hidden className="size-5" strokeWidth={1.5} />}
        </button>
      ))}
    </div>
  );

  return (
    <section className={cn("overflow-x-clip bg-secondary text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page border-secondary-foreground/10 pt-16 pb-16 lg:border-x lg:pt-[7.5rem] lg:pb-28">
        <div className="flex items-end justify-between gap-8 px-gutter lg:px-[1.5625rem] lg:pr-20">
          <div>
            {eyebrow && <p className="mb-4 text-xs leading-[1.5] font-bold tracking-[0.1em] uppercase">{eyebrow}</p>}
            <h2 className="font-display text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] lg:text-[2.5rem]">
              <PilotLines text={title} />
            </h2>
          </div>
          <div className="hidden shrink-0 lg:block">{arrows}</div>
        </div>

        <ul
          ref={track}
          className="mt-14 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 [scrollbar-width:none] lg:mt-20 lg:mr-[calc((100vw-min(100vw,var(--page-width)))/-2)] lg:scroll-px-0 lg:gap-14 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {cases.map((c) => (
            <li key={c.title} className="flex w-[calc(100vw-3.75rem)] max-w-[22rem] shrink-0 snap-start lg:w-[66.5rem] lg:max-w-none">
              <div className="relative flex flex-1 flex-col bg-card px-6 pt-6 pb-6 text-card-foreground lg:min-h-[44.75rem] lg:px-14 lg:pt-14 lg:pb-14">
                <span aria-hidden className="absolute top-[8rem] bottom-0 left-[1.875rem] w-px bg-card-foreground lg:top-[8.5rem] lg:left-[3.875rem]" />
                <h3 className="font-display text-[1.75rem] leading-[1.05] font-medium lg:max-w-[32rem] lg:text-[2rem]">{c.title}</h3>
                <ol className="mt-10 grid gap-7 pl-[1.875rem] lg:max-w-[28.5rem]">
                  {[...c.steps, c.result].map((s, i, all) => {
                    const last = i === all.length - 1;
                    return (
                      <li key={s.label} className="relative">
                        <span
                          aria-hidden
                          className={cn(
                            "absolute top-1 -left-[1.8125rem] size-2.5 rounded-full",
                            last ? "bg-primary" : "bg-card-foreground",
                          )}
                        />
                        <p className={cn("text-xs leading-[1.5] font-bold tracking-[0.12em] uppercase", last ? "text-primary" : "text-muted-foreground")}>{s.label}</p>
                        <p className={cn("mt-2.5", last ? "text-lg leading-[1.55] font-medium lg:text-xl lg:leading-[1.3]" : "text-base leading-6")}>{s.text}</p>
                      </li>
                    );
                  })}
                </ol>
                <div className="mt-auto flex flex-col gap-2.5 pt-14 pl-[1.875rem] sm:flex-row sm:gap-4">
                  <PilotButton href={c.story.href} variant="solid" size="sm">
                    {c.story.label}
                  </PilotButton>
                  {c.video && (
                    <PilotButton href={c.video.href} variant="outline" size="sm" icon={<Play aria-hidden className="fill-current" />}>
                      {c.video.label}
                    </PilotButton>
                  )}
                </div>
              </div>
              <div className="relative hidden w-[22.5rem] shrink-0 items-center justify-center lg:flex">
                {c.media ?? <PilotPlaceholder tone="photo" className="absolute inset-0 bg-secondary from-primary/45 via-secondary/60 to-glow/25" />}
                <div aria-hidden className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
                <p className="relative font-display text-[2rem] font-semibold tracking-[-0.02em] text-primary-foreground">{c.customer}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center lg:hidden">{arrows}</div>

        {note && <PilotBrushNote stroke="primary" text={note} className="mx-auto mt-12 max-w-[47rem] px-gutter lg:mt-24" />}
      </div>
    </section>
  );
}
