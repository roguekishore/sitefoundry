import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./paxos-logos.css";

export interface PaxosLogosProps {
  /** the small grey label on the left (desktop only) */
  label: ReactNode;
  /** customer names or logos, in order */
  items: ReactNode[];
  className?: string;
}

/** Thin row of customer names drifting left forever. */
export function PaxosLogos({ label, items, className }: PaxosLogosProps) {
  const list = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className={cn("flex shrink-0 items-center gap-14 pr-14 lg:gap-28 lg:pr-28", copy && "paxos-logos-copy")}>
      {items.map((item, i) => (
        <li key={i} className="font-display text-lg font-semibold tracking-[-0.02em] whitespace-nowrap text-foreground/75 lg:text-xl">
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <section className={cn("bg-background px-gutter", className)}>
      <div className="mx-auto flex h-[4.625rem] max-w-page items-center gap-10 lg:px-11">
        <p className="hidden w-36 shrink-0 text-xs text-muted-foreground lg:block">{label}</p>
        <div className="min-w-0 flex-1 overflow-clip mask-x-from-85% mask-x-to-100%">
          <div className="paxos-logos-track flex w-max">
            {list(false)}
            {list(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
