import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";
import { BasepowercompanyTape } from "@foundry/basepowercompany-tape";

export interface BasepowercompanyGridState {
  /** the heading for this state */
  title: string;
  /** a sentence or two under it */
  body: string;
  /** the illustration for this state (contained in its frame) */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
}

export interface BasepowercompanyGridSwitchProps {
  /** the torn-tape label above the heading */
  tape?: string;
  /** the section heading */
  title: string;
  /** a line under the heading */
  subtitle?: string;
  /** the word before the switch, e.g. "Grid" */
  switchLabel: string;
  /** the words inside the switch */
  onLabel: string;
  offLabel: string;
  /** what the card shows with the switch on, and with it off */
  on: BasepowercompanyGridState;
  off: BasepowercompanyGridState;
  className?: string;
}

const show = "transition-[opacity,visibility] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

/*
 * "How it works": a centred heading, then a big grey card with an illustration and a pill
 * switch. Flipping the switch crossfades the illustration and the text between two states.
 * Pure CSS: a checkbox and :has() selectors, no JavaScript.
 */
export function BasepowercompanyGridSwitch({ tape, title, subtitle, switchLabel, onLabel, offLabel, on, off, className }: BasepowercompanyGridSwitchProps) {
  const states = [
    { s: on, cls: "visible opacity-100 group-has-[input:not(:checked)]:invisible group-has-[input:not(:checked)]:opacity-0" },
    { s: off, cls: "invisible opacity-0 group-has-[input:not(:checked)]:visible group-has-[input:not(:checked)]:opacity-100" },
  ];
  return (
    <section className={cn("bg-background px-gutter pt-10 pb-12 text-foreground lg:pt-[4.25rem] lg:pb-24", className)}>
      <div className="mx-auto max-w-[44rem] text-center">
        {tape && <BasepowercompanyTape>{tape}</BasepowercompanyTape>}
        <h2 className="mt-3 font-display text-[2rem] leading-[1.2] font-bold tracking-[-0.025em] text-primary lg:text-[2.5rem] lg:leading-[1.1]">{title}</h2>
        {subtitle && <p className="mt-4 text-base leading-6 tracking-[-0.005em] text-muted-foreground/85 lg:mt-6">{subtitle}</p>}
      </div>

      <div className="group mx-auto mt-10 grid max-w-[calc(var(--page-width)-var(--page-gutter)*4)] overflow-clip rounded-[calc(var(--radius)*3)] bg-muted lg:mt-12 lg:h-[37.1875rem] lg:grid-cols-[minmax(0,1fr)_24.5rem] lg:gap-x-12">
        <div className="grid aspect-[1.47] lg:aspect-auto lg:h-full">
          {states.map(({ s, cls }, i) => (
            <BasepowercompanyMedia key={i} media={s.media} fit="contain" label={s.mediaLabel} className={cn("[grid-area:1/1]", show, cls)} />
          ))}
        </div>

        <div className="px-8 pt-8 pb-10 lg:px-0 lg:pt-12 lg:pr-12">
          <label className="inline-flex cursor-pointer items-center gap-4 rounded-full bg-background py-2 pr-2 pl-5 select-none">
            <span className="text-base font-bold">{switchLabel}</span>
            <input type="checkbox" defaultChecked className="peer sr-only" />
            <span className="relative flex h-11 w-24 items-center rounded-full bg-muted-foreground/40 px-3.5 text-base font-bold text-primary-foreground transition-colors duration-300 peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-ring motion-reduce:transition-none">
              <span className="ml-auto group-has-[input:checked]:hidden">{offLabel}</span>
              <span className="hidden group-has-[input:checked]:block">{onLabel}</span>
              <span
                aria-hidden
                className="absolute top-1.5 left-1.5 size-8 rounded-full bg-card transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-has-[input:checked]:translate-x-[3.25rem] motion-reduce:transition-none"
              />
            </span>
          </label>

          <div className="mt-7 grid lg:mt-10">
            {states.map(({ s, cls }, i) => (
              <div key={i} className={cn("[grid-area:1/1]", show, cls)}>
                <h3 className="font-display text-xl leading-[1.35] font-bold tracking-[-0.025em] lg:text-[2rem] lg:leading-[1.2]">{s.title}</h3>
                <p className="mt-5 text-base leading-6 tracking-[-0.005em] text-muted-foreground lg:mt-9">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
