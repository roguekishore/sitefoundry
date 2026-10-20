import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Badge } from "@foundry/plumeform-v2-badge";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Eyebrow, PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Panel } from "@foundry/plumeform-v2-panel";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2Destination {
  /** a line icon before the name */
  icon?: ReactNode;
  name: string;
  badge?: string;
  /** a quiet detail at the right of the card */
  detail?: string;
  /** a line under the name */
  status: string;
  /** set the status line in the mono face (e.g. an API call) */
  mono?: boolean;
}

export interface PlumeformV2ChipRow {
  label: string;
  chips: { label: string; badge?: string }[];
}

export interface PlumeformV2IntegrationsProps {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  link?: { label: string; href: string };
  /** what the source panel holds; empty shows a placeholder */
  source?: ReactNode;
  /** height of the empty source placeholder (CSS length) */
  sourceHeight?: string;
  destinations: PlumeformV2Destination[];
  /** rows of small pills under the diagram */
  chipRows?: PlumeformV2ChipRow[];
  id?: string;
  className?: string;
}

export function PlumeformV2Integrations({
  eyebrow,
  title,
  body,
  link,
  source,
  sourceHeight = "22rem",
  destinations,
  chipRows,
  id,
  className,
}: PlumeformV2IntegrationsProps) {
  const n = destinations.length;
  return (
    <section id={id} className={cn("overflow-x-clip bg-background px-gutter py-[calc(var(--section-y)*0.8)] text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-x-16">
          <PlumeformV2Heading eyebrow={eyebrow} title={title} className="max-w-xl" />
          <PlumeformV2Reveal step={1} className="max-w-md text-base leading-[1.65] text-muted-foreground lg:text-[1.0625rem]">
            <div>{body}</div>
            {link && (
              <PlumeformV2Button variant="link" href={link.href} arrow className="mt-8">
                {link.label}
              </PlumeformV2Button>
            )}
          </PlumeformV2Reveal>
        </div>

        <div className="mt-20 grid items-center gap-6 lg:mt-24 lg:grid-cols-[18.5rem_1fr_23.75rem] lg:gap-0 lg:px-8">
          <PlumeformV2Reveal className="mx-5 sm:mx-0">
            <PlumeformV2Panel fog="warm" placeholderHeight={sourceHeight}>
              {source}
            </PlumeformV2Panel>
          </PlumeformV2Reveal>

          {/* dashed curves from the panel to each card (desktop only) */}
          <div aria-hidden className="relative hidden h-full text-primary/45 lg:block">
            <span className="absolute top-1/2 left-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
              {destinations.map((_, i) => {
                const y = ((i + 0.5) / n) * 100;
                return (
                  <path
                    key={i}
                    d={`M0 50 C 45 50, 55 ${y}, 100 ${y}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeDasharray="3 4"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>
          </div>

          <ul className="grid gap-3.5">
            {destinations.map((d, i) => (
              <PlumeformV2Reveal
                as="li"
                key={d.name}
                step={i}
                className="min-h-[7.25rem] rounded-lg border border-card/70 bg-card/75 px-4 py-3.5 shadow-[inset_1px_1px_0_color-mix(in_oklab,var(--card)_85%,transparent),0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_20px_46px_-30px_color-mix(in_oklab,var(--foreground)_45%,transparent)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2.5 [&_svg]:size-4 [&_svg]:text-muted-foreground">
                  {d.icon}
                  <span className="text-[0.9375rem] font-bold">{d.name}</span>
                  {d.badge && <PlumeformV2Badge>{d.badge}</PlumeformV2Badge>}
                  {d.detail && <span className="ml-auto text-[0.6875rem] text-muted-foreground">{d.detail}</span>}
                </div>
                <p className={cn("mt-3 text-xs text-muted-foreground", d.mono && "font-mono text-[0.6875rem] text-foreground")}>{d.status}</p>
              </PlumeformV2Reveal>
            ))}
          </ul>
        </div>

        {chipRows && (
          <PlumeformV2Reveal className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {chipRows.map((row) => (
              <div key={row.label} className="flex flex-wrap items-center gap-2">
                <PlumeformV2Eyebrow className="mr-2 text-[0.625rem] font-bold tracking-[0.2em]">{row.label}</PlumeformV2Eyebrow>
                {row.chips.map((c) => (
                  <span key={c.label} className="flex h-7 items-center gap-2 rounded-full bg-muted px-3 text-xs text-foreground/80">
                    {c.label}
                    {c.badge && <PlumeformV2Badge>{c.badge}</PlumeformV2Badge>}
                  </span>
                ))}
              </div>
            ))}
          </PlumeformV2Reveal>
        )}
      </div>
    </section>
  );
}
