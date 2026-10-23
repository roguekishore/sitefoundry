import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { VastspacePlaceholder } from "@foundry/vastspace-placeholder";
import "./vastspace-station.css";

export interface VastspaceSpec {
  /** the row label, e.g. "Crew" */
  label: string;
  /** the value, e.g. "4" */
  value: string;
}

export interface VastspaceStationProps {
  /** the giant pale word behind the dial (the product name) */
  word: string;
  /** the small label top-left (dark) */
  eyebrow: string;
  /** the second small label top-left (orange), e.g. the launch year */
  status: string;
  /** the spec table at the top right (desktop only) */
  specs: VastspaceSpec[];
  /** the headline bottom-left */
  tagline: string;
  /** the link under the headline */
  link: { label: string; href: string };
  /** the object in the middle of the dial: a transparent PNG, canvas or 3D view, about 3:4; empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function VastspaceStation({ word, eyebrow, status, specs, tagline, link, media, className }: VastspaceStationProps) {
  return (
    <section className={cn("relative h-[56.25rem] overflow-clip bg-background text-foreground", className)}>
      <p
        aria-hidden
        className="absolute inset-x-0 top-16 text-center font-display text-[6.09rem]/none font-semibold tracking-[-0.05em] text-card select-none md:top-1/2 md:-translate-y-1/2 md:text-[20.7rem]/none"
      >
        {word}
      </p>

      <div className="absolute top-[52%] left-1/2 aspect-square w-[min(21.9rem,calc(100%-2.5rem))] -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:w-[37.75rem]">
        <div aria-hidden className="vastspace-station-dial absolute inset-0 text-foreground/60" />
        <div aria-hidden className="absolute top-0 left-1/2 h-[3%] w-px -translate-x-1/2 bg-highlight md:h-[12.4%]" />
        <div className="absolute top-1/2 left-1/2 aspect-[3/4] w-[72%] -translate-x-1/2 -translate-y-1/2 md:w-[45%] [&>*]:size-full [&>*]:object-contain">
          {media ?? <VastspacePlaceholder className="size-full bg-muted/60" />}
        </div>
      </div>

      <div className="absolute top-[12.4rem] left-gutter font-mono text-xs/3 tracking-[0.02em] uppercase md:top-[6.1rem] md:left-[calc(var(--page-gutter)+2.5rem)]">
        <p>{eyebrow}</p>
        <p className="text-highlight">{status}</p>
      </div>

      <dl className="absolute top-[6.1rem] right-[calc(var(--page-gutter)+2.5rem)] hidden grid-cols-[auto_auto] gap-x-4 font-mono text-[0.625rem]/3 tracking-[0.01em] uppercase md:grid">
        {specs.map((s) => (
          <div key={s.label} className="contents">
            <dt className="text-right text-muted-foreground">{s.label}:</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="absolute bottom-16 left-gutter md:bottom-24 md:left-[calc(var(--page-gutter)+2.5rem)]">
        <p className="font-display text-[2rem]/[0.96] font-[560] tracking-[-0.01em] md:max-w-[11em] md:text-xl/[1]">{tagline}</p>
        <a href={link.href} className="mt-8 inline-flex items-center gap-2 text-base md:mt-9">
          <ChevronRight className="vastspace-station-chevron size-4" strokeWidth={1.25} />
          {link.label}
        </a>
      </div>
    </section>
  );
}
