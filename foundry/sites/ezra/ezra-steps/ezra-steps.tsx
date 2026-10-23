import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EzraPlaceholder } from "@foundry/ezra-placeholder";
import "./ezra-steps.css";

export interface EzraStep {
  /** the tiny number above ("01") */
  number: string;
  /** the serif title */
  title: string;
  /** one to three lines */
  body: string;
  /** a 128px line icon (an <img> or svg); a placeholder when empty */
  icon?: ReactNode;
}

export interface EzraStepsProps {
  /** the plain start of the heading ("Every visit is built to") */
  title: string;
  /** italic endings typed one after another; the first shows without JavaScript */
  phrases: string[];
  /** the steps, three in a row on desktop */
  steps: EzraStep[];
  className?: string;
}

const TYPE_MS = 60;
const DELETE_MS = 30;
const HOLD_MS = 1600;

/** Types `phrases` in turn after mount; returns the visible text. */
function useTyped(phrases: string[]) {
  const [text, setText] = useState(phrases[0] ?? "");
  useEffect(() => {
    if (phrases.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let shown = phrases[0].length;
    let deleting = true;
    function tick() {
      let wait = TYPE_MS;
      if (deleting) {
        shown -= 1;
        if (shown === 0) {
          deleting = false;
          index = (index + 1) % phrases.length;
        } else {
          wait = DELETE_MS;
        }
      } else {
        shown += 1;
        if (shown === phrases[index].length) {
          deleting = true;
          wait = HOLD_MS;
        }
      }
      setText(phrases[index].slice(0, shown));
      timer = window.setTimeout(tick, wait);
    }
    let timer = window.setTimeout(tick, HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [phrases]);
  return text;
}

/** A heading with a typed italic ending over three numbered steps. */
export function EzraSteps({ title, phrases, steps, className }: EzraStepsProps) {
  const typed = useTyped(phrases);
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto box-content max-w-[75.25rem] px-gutter pt-[6.25rem] pb-12 lg:pt-27 lg:pb-[4.75rem]">
        <h2 className="mx-auto max-w-[22rem] text-center font-display text-[3rem] leading-[1.1] font-light tracking-[-0.01em] sm:max-w-none lg:text-[4rem]">
          <span className="sr-only">
            {title} {phrases.join(", ")}
          </span>
          <span aria-hidden>
            {title} <em>{typed}</em>
            {/* foundry-allow-text: the typing cursor */}
            <span className="ezra-steps-cursor ml-0.5 inline-block translate-y-[0.08em] text-[0.55em] font-extralight text-chart-2">|</span>
          </span>
        </h2>
        <ol className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <li key={step.number} className="lg:max-w-[23.75rem]">
              <p className="text-xs">{step.number}</p>
              <div className="mt-9 size-32 lg:mt-9">{step.icon ?? <EzraPlaceholder tone="icon" className="size-full rounded-lg" />}</div>
              <h3 className="mt-9 font-display text-[2rem] leading-[1.1] font-[350] tracking-[-0.01em] lg:text-[2.15rem]">{step.title}</h3>
              <p className="mt-2 text-base leading-[1.6] tracking-[0.01em]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
