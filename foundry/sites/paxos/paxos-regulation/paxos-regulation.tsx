import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PaxosPlaceholder } from "@foundry/paxos-placeholder";

export interface PaxosMilestone {
  /** the grey year (or date) above the hairline */
  year: string;
  /** the milestone's title */
  title: ReactNode;
  /** a short paragraph */
  body: ReactNode;
}

export interface PaxosRegulationProps {
  /** small grey label above the title (desktop) */
  eyebrow?: ReactNode;
  /** the section title */
  title: ReactNode;
  /** grey lead under the title */
  lead?: ReactNode;
  /** the image on the right; a soft coloured placeholder when empty */
  media?: ReactNode;
  /** the timeline entries (three on the original) */
  milestones: PaxosMilestone[];
  className?: string;
}

/** Split title/image opener and a hairlined year timeline. */
export function PaxosRegulation({ eyebrow, title, lead, media, milestones, className }: PaxosRegulationProps) {
  return (
    <section className={cn("bg-background px-gutter py-16 lg:pt-10 lg:pb-[3.25rem]", className)}>
      <div className="mx-auto max-w-page">
        <div className="grid gap-[1.6rem] lg:grid-cols-[1fr_34.9rem] lg:items-center lg:gap-10">
          <div>
            {eyebrow ? <p className="mb-5 hidden text-base tracking-[-0.01em] text-muted-foreground lg:block">{eyebrow}</p> : null}
            <h2 className="max-w-[28rem] font-display text-[1.75rem]/[1.2] font-normal tracking-[-0.02em] text-foreground lg:text-5xl/[1.125]">
              {title}
            </h2>
            {lead ? (
              <p className="mt-2.5 max-w-[32rem] text-[0.9rem]/[1.4] tracking-[-0.01em] text-muted-foreground lg:mt-8 lg:text-base/[1.45]">{lead}</p>
            ) : null}
          </div>
          <div className="aspect-[350/180] overflow-clip rounded-lg lg:aspect-[559/400]">{media ?? <PaxosPlaceholder tone="field" />}</div>
        </div>
        <ol className="mt-12 grid gap-10 lg:mt-[5.6rem] lg:grid-cols-3 lg:gap-[7.6rem]">
          {milestones.map((m) => (
            <li key={m.year}>
              <p className="border-b border-border pb-[0.85rem] text-[0.8rem] tracking-[-0.01em] text-muted-foreground lg:pb-[1.15rem] lg:text-base">
                {m.year}
              </p>
              <h3 className="mt-5 font-display text-xl/[1.2] font-normal tracking-[-0.02em] text-foreground lg:mt-6 lg:text-2xl/[1.25]">{m.title}</h3>
              <p className="mt-5 text-[0.85rem]/[1.45] tracking-[-0.01em] text-muted-foreground lg:mt-6 lg:text-base/[1.45]">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
