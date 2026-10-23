import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import "./ondo-beliefs.css";

export interface OndoBelief {
  /** the conviction, in ink */
  title: string;
  /** a supporting line, in grey */
  text: string;
}

export interface OndoBeliefsProps {
  /** the small label (the section's heading) */
  label: string;
  /** the statements, shown one at a time */
  items: OndoBelief[];
  /** seconds per statement */
  interval?: number;
  className?: string;
}

/** Three convictions, one at a time, with numbered circles. */
export function OndoBeliefs({ label, items, interval = 6, className }: OndoBeliefsProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const count = items.length;

  useEffect(() => {
    if (reduce || count < 2) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), interval * 1000);
    return () => clearTimeout(timer);
  }, [index, reduce, count, interval]);

  const item = items[index];

  return (
    <section className={cn("bg-background py-section lg:py-[3.75rem]", className)}>
      <div className="mx-auto flex min-h-[34rem] max-w-page flex-col px-gutter lg:min-h-[48.75rem] lg:px-[calc(var(--page-gutter)*2.75)]">
        <h2 className="text-sm font-medium text-foreground/70 lg:text-base">{label}</h2>
        <div className="my-auto py-12" aria-live="polite">
          <p key={index} className="ondo-beliefs-in max-w-[60rem] font-display text-[2rem] leading-[1.08] font-medium tracking-[-0.03em] lg:text-[3rem] lg:leading-[1.05]">
            <span className="block text-foreground">{item.title}</span>
            <span className="block text-foreground/50">{item.text}</span>
          </p>
        </div>
        <div className="flex justify-center gap-2 lg:justify-end">
          {items.map((belief, i) => (
            <button
              key={belief.title}
              type="button"
              aria-label={belief.title}
              aria-current={i === index || undefined}
              onClick={() => setIndex(i)}
              className={cn(
                "grid size-9 place-items-center rounded-full text-sm text-muted-foreground transition-colors duration-300 ease-out motion-reduce:transition-none",
                i === index ? "bg-accent" : "shadow-[inset_0_0_0_3px_color-mix(in_oklab,var(--foreground)_10%,transparent)] hover:bg-muted",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
