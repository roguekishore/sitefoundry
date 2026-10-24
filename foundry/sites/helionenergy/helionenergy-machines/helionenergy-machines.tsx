import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HelionenergyArrowButton } from "@foundry/helionenergy-arrow-button";
import { HelionenergyEyebrow } from "@foundry/helionenergy-eyebrow";
import { HelionenergyHeading } from "@foundry/helionenergy-heading";
import { HelionenergyPlaceholder } from "@foundry/helionenergy-placeholder";

export interface HelionenergyMachine {
  /** the machine's name */
  name: ReactNode;
  /** one short line about it */
  summary: ReactNode;
  /** where its page is */
  href: string;
  /** the arrow button's label, for screen readers */
  linkLabel: string;
  /** the photo or film filling the card; empty, a placeholder */
  media?: ReactNode;
}

export interface HelionenergyMachinesProps {
  /** the small mono label over the heading */
  eyebrow: ReactNode;
  /** the heading's lines (broken on desktop only) */
  title: ReactNode[];
  /** two cards: the first is wide (about two thirds), the second narrow */
  machines: HelionenergyMachine[];
  className?: string;
}

/**
 * A near-black band: a centred mono eyebrow and uppercase heading over two 480px photo cards
 * (8px corners, a 40% dark scrim), the first about twice the width of the second; phones stack
 * them. Each card has its name and a short line top-left and a square arrow button bottom-left.
 * The photos settle from 110% as they arrive and a fill sweeps across each arrow button.
 */
export function HelionenergyMachines({ eyebrow, title, machines, className }: HelionenergyMachinesProps) {
  return (
    <section className={cn("dark bg-background px-gutter pt-section pb-[7rem] text-foreground lg:pb-[10rem]", className)}>
      <div className="mx-auto max-w-page">
        <div className="text-center">
          <HelionenergyEyebrow>{eyebrow}</HelionenergyEyebrow>
          <HelionenergyHeading lines={title} className="mt-4 lg:mt-6" />
        </div>

        <ul className="mt-[7rem] grid gap-5 lg:mt-[10rem] lg:grid-cols-[minmax(0,879fr)_minmax(0,429fr)]">
          {machines.map((machine, i) => (
            <li key={i} className="relative isolate h-[30rem] overflow-clip rounded-lg">
              <HelionenergyPlaceholder media={machine.media} tone="film" zoom className="absolute inset-0 -z-10" />
              <span aria-hidden className="absolute inset-0 -z-10 bg-background/40" />
              <div className="flex h-full flex-col items-start p-6 pt-[2.4rem] lg:p-8 lg:pt-[2.9rem]">
                <h3 className="text-[clamp(1.125rem,1.036rem+0.368vw,1.366rem)] leading-[1.3] tracking-[-0.01em]">{machine.name}</h3>
                <p className="mt-4 max-w-[10.5rem] text-[0.9375rem] leading-[1.35] tracking-[-0.01em] text-foreground/90 lg:mt-6">{machine.summary}</p>
                <HelionenergyArrowButton href={machine.href} label={machine.linkLabel} tone="strong" className="mt-auto" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
