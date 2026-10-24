import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MymindEyebrow } from "@foundry/mymind-eyebrow";
import { MymindMedia } from "@foundry/mymind-media";
import "./mymind-use-cases.css";

/** pastel surface of the card */
export type MymindUseCaseTone = "beige" | "blue" | "sage" | "teal" | "rose" | "peach" | "grey";

const tones: Record<MymindUseCaseTone, string> = {
  beige: "bg-secondary",
  blue: "bg-muted",
  sage: "bg-highlight/20",
  teal: "bg-[color-mix(in_oklab,var(--highlight)_16%,var(--muted))]",
  rose: "bg-chart-2/15",
  peach: "bg-primary/10",
  grey: "bg-muted-foreground/15",
};

export interface MymindUseCase {
  /** tab name, e.g. "Writers" */
  label: string;
  /** small capitals on the card */
  eyebrow: string;
  /** first headline line */
  title: string;
  /** second headline line, set in italic */
  italic: string;
  /** card colour */
  tone: MymindUseCaseTone;
  /** the picture band in the card's lower half; empty shows a placeholder */
  media?: ReactNode;
}

export interface MymindUseCasesProps {
  /** tangerine spaced capitals */
  eyebrow: string;
  /** the headline */
  title: string;
  /** the audiences */
  cases: MymindUseCase[];
  /** screen-reader labels of the phone arrows and the phone play button */
  labels: { previous: string; next: string; play: string };
  /** where the phone play button goes */
  playHref: string;
  className?: string;
}

/** Audience tabs over a tinted card with a serif/italic headline. */
export function MymindUseCases({ eyebrow, title, cases, labels, playHref, className }: MymindUseCasesProps) {
  const [active, setActive] = useState(0);
  const current = cases[active];
  const step = (d: number) => setActive((active + d + cases.length) % cases.length);
  return (
    <section className={cn("bg-accent pt-20 pb-16 text-foreground lg:pt-[2.5rem] lg:pb-[6rem]", className)}>
      <div className="mx-auto flex max-w-[81.25rem] flex-col items-center px-gutter text-center lg:px-0">
        <MymindEyebrow tone="primary">{eyebrow}</MymindEyebrow>
        <h2 className="mt-5 max-w-[20rem] font-display text-[3rem] leading-[1.06] font-[350] tracking-[-0.045em] lg:mt-4 lg:max-w-none lg:text-[5.25rem] lg:leading-none">{title}</h2>

        <div className="mt-8 flex items-center gap-7 lg:hidden">
          <button type="button" aria-label={labels.previous} onClick={() => step(-1)} className="text-primary [&_svg]:size-6">
            <ArrowLeft strokeWidth={1.75} />
          </button>
          <span className="min-w-[7rem] text-[1.375rem] text-primary">{current.label}</span>
          <button type="button" aria-label={labels.next} onClick={() => step(1)} className="text-primary [&_svg]:size-6">
            <ArrowRight strokeWidth={1.75} />
          </button>
        </div>
        <div role="tablist" className="mt-8 hidden gap-[3.75rem] lg:flex">
          {cases.map((c, i) => (
            <button
              key={c.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative pb-3 text-lg transition-colors duration-200 ease-linear",
                i === active ? "text-primary" : "text-muted-foreground/80 hover:text-foreground",
              )}
            >
              {c.label}
              <span aria-hidden className={cn("absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary transition-opacity duration-200", i === active ? "opacity-100" : "opacity-0")} />
            </button>
          ))}
        </div>

        <div role="tabpanel" className={cn("relative mt-10 flex h-[24.375rem] w-full flex-col items-center overflow-clip rounded-lg transition-colors duration-500 lg:mt-12 lg:h-[51.25rem]", tones[current.tone])}>
          <a href={playHref} aria-label={labels.play} className="mt-[3.75rem] grid size-[3.75rem] place-items-center rounded-full bg-foreground text-background lg:hidden [&_svg]:size-6">
            <Play className="ml-1 fill-current" strokeWidth={0} />
          </a>
          <div className="mymind-use-cases-rise mt-9 lg:mt-[5.5rem]">
            <MymindEyebrow className="hidden text-[0.9375rem] lg:block">{current.eyebrow}</MymindEyebrow>
            <h3 className="font-display text-[1.75rem] leading-[1.15] tracking-[-0.04em] lg:mt-4 lg:text-[4.5rem] lg:leading-[1]">
              <span className="block">{current.title}</span>
              <span className="block italic">{current.italic}</span>
            </h3>
          </div>
          <MymindMedia key={current.label} className="absolute inset-x-3 bottom-0 h-[8rem] rounded-t-[4px] lg:inset-x-[3.125rem] lg:h-[29.25rem]">
            {current.media}
          </MymindMedia>
        </div>
      </div>
    </section>
  );
}
