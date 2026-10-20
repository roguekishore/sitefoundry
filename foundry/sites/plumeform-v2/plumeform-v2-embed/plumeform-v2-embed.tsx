import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Panel } from "@foundry/plumeform-v2-panel";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2EmbedPanel {
  /** the label at the left of the panel's top strip (an address, an app name) */
  label: string;
  /** the label at the right of the strip */
  note?: string;
  /** browser: three dots before the label and capitals at the right; app: a status dot before the note */
  chrome?: "browser" | "app";
  /** the panel's body; empty shows a placeholder */
  media?: ReactNode;
}

export interface PlumeformV2EmbedProps {
  eyebrow?: string;
  title: ReactNode;
  /** the explanation at the right */
  body: ReactNode;
  /** a bold line under the explanation */
  emphasis?: string;
  link?: { label: string; href: string };
  /** the two panels, left then right */
  panels: [PlumeformV2EmbedPanel, PlumeformV2EmbedPanel];
  /** height of the empty panel placeholders (CSS length) */
  panelHeight?: string;
  /** a small centred line under the panels */
  caption?: string;
  id?: string;
  className?: string;
}

function Strip({ panel }: { panel: PlumeformV2EmbedPanel }) {
  const browser = panel.chrome !== "app";
  return (
    <div className="flex items-center justify-between gap-3 border-b border-foreground/8 px-4 py-3.5 text-[0.6875rem] sm:px-6">
      <span className={cn("flex min-w-0 items-center gap-3", browser ? "text-muted-foreground" : "text-sm font-bold text-foreground")}>
        {browser && (
          <span aria-hidden className="flex gap-1">
            {[0, 1, 2].map((d) => (
              <span key={d} className="size-1.5 rounded-full bg-foreground/20" />
            ))}
          </span>
        )}
        <span className="truncate">{panel.label}</span>
      </span>
      {panel.note && (
        <span className={cn("flex shrink-0 items-center gap-1.5", browser ? "font-semibold tracking-[0.14em] text-muted-foreground uppercase" : "text-primary")}>
          {!browser && <span aria-hidden className="size-1.5 rounded-full bg-primary" />}
          {panel.note}
        </span>
      )}
    </div>
  );
}

export function PlumeformV2Embed({ eyebrow, title, body, emphasis, link, panels, panelHeight = "33rem", caption, id, className }: PlumeformV2EmbedProps) {
  return (
    <section id={id} className={cn("overflow-x-clip bg-background px-gutter py-[calc(var(--section-y)*0.8)] text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-x-16">
          <PlumeformV2Heading eyebrow={eyebrow} title={title} className="max-w-xl" />
          <PlumeformV2Reveal step={1} className="max-w-md text-base leading-[1.65] text-muted-foreground lg:text-[1.0625rem]">
            <div>{body}</div>
            {emphasis && <p className="mt-4 text-[0.9375rem] font-semibold text-foreground">{emphasis}</p>}
            {link && (
              <PlumeformV2Button variant="link" href={link.href} arrow className="mt-8">
                {link.label}
              </PlumeformV2Button>
            )}
          </PlumeformV2Reveal>
        </div>

        <div className="mt-20 grid items-center gap-6 lg:mt-24 lg:grid-cols-[1fr_auto_1fr] lg:gap-2 lg:px-8">
          {panels.map((panel, i) => (
            <PlumeformV2Reveal key={panel.label} step={i} className={cn(i === 1 && "lg:order-3")}>
              <PlumeformV2Panel header={<Strip panel={panel} />} placeholderHeight={panelHeight} fog={i === 0 ? "cool" : "warm"} padding="md">
                {panel.media}
              </PlumeformV2Panel>
            </PlumeformV2Reveal>
          ))}
          <span aria-hidden className="flex justify-center text-primary lg:order-2 lg:px-1">
            <span className="h-px w-0 bg-primary/50 lg:w-10" />
            <ArrowRight className="-ml-1 size-4 rotate-90 lg:rotate-0" strokeWidth={1.75} />
          </span>
        </div>

        {caption && (
          <PlumeformV2Reveal className="mt-14 text-center text-xs text-muted-foreground">
            <p>{caption}</p>
          </PlumeformV2Reveal>
        )}
      </div>
    </section>
  );
}
