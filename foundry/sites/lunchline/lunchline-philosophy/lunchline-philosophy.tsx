import type { CSSProperties } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineLetterRise } from "@foundry/lunchline-letter-rise";
import { LunchlineDrawRule } from "@foundry/lunchline-draw-rule";
import "./lunchline-philosophy.css";

export interface LunchlinePrinciple {
  /** the principle, set bold (quotes included if you want them) */
  title: string;
  /** what it means in practice, shown when the row is opened */
  body: string;
}

export interface LunchlinePhilosophyProps {
  /** the small tracked label above the heading */
  eyebrow: string;
  /** the light heading; its letters rise in as it scrolls into view */
  heading: string;
  /** the numbered principles (01, 02… are added) */
  items: LunchlinePrinciple[];
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] motion-reduce:transition-none";

export function LunchlinePhilosophy({ eyebrow, heading, items, id, className }: LunchlinePhilosophyProps) {
  return (
    <section id={id} className={cn("relative overflow-x-clip bg-background py-section text-foreground lg:pb-[7rem]", className)}>
      <LunchlineDrawRule />
      <div className="mx-auto max-w-page px-gutter">
        <p className="text-sm leading-none font-bold tracking-[0.08em] uppercase lg:text-base">{eyebrow}</p>
        <LunchlineLetterRise
          text={heading}
          className="mt-[1.2rem] max-w-[62rem] font-display text-2xl leading-[1.2] font-light tracking-[-0.01em] lg:mt-6 lg:text-[3.5rem]"
        />

        <ol className="mt-7 lg:mt-[5.6rem] lg:ml-[25%]">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="lunchline-philosophy-row border-b border-border last:border-b-0"
              style={{ "--lunchline-philosophy-i": i } as CSSProperties}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-3 py-[1.35rem] lg:items-center lg:gap-6 lg:py-[1.8rem] [&::-webkit-details-marker]:hidden">
                  <span className="w-6 shrink-0 pt-1 text-lg leading-none text-muted-foreground tabular-nums lg:pt-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[1.375rem] leading-[1.3] font-bold tracking-[-0.015em] lg:text-[1.75rem]">{item.title}</span>
                  <Plus className={cn("mt-0.5 size-6 shrink-0 transition-transform group-open:rotate-45 lg:mt-0 lg:mr-1.5", ease)} strokeWidth={1.75} />
                </summary>
                <p className="max-w-[46rem] pb-7 pl-9 text-lg leading-[1.4] font-light lg:pl-12 lg:text-[1.3125rem]">{item.body}</p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
