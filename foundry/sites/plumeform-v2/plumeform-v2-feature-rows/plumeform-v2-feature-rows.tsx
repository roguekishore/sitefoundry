import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Panel } from "@foundry/plumeform-v2-panel";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2FeatureRow {
  /** small capitals above the heading */
  eyebrow?: string;
  title: ReactNode;
  /** one or more paragraphs */
  body: ReactNode;
  /** a short list under the body: a bold lead-in and its explanation */
  bullets?: { title: string; text: string }[];
  /** a link under the text */
  link?: { label: string; href: string };
  /** what the glass panel holds; empty shows a placeholder */
  panel?: ReactNode;
  /** height of the empty panel placeholder (CSS length) */
  panelHeight?: string;
  /** colours of the fog around the panel */
  fog?: "cool" | "warm" | "mint";
}

export interface PlumeformV2FeatureRowsProps {
  /** a centred line above the rows */
  intro?: string;
  /** an underlined link under the intro line */
  introLink?: { label: string; href: string };
  rows: PlumeformV2FeatureRow[];
  /** whether the first row starts with its text or its panel on the left */
  startWith?: "text" | "panel";
  id?: string;
  className?: string;
}

export function PlumeformV2FeatureRows({ intro, introLink, rows, startWith = "text", id, className }: PlumeformV2FeatureRowsProps) {
  return (
    <section id={id} className={cn("overflow-x-clip bg-background px-gutter pt-20 pb-[calc(var(--section-y)*0.9)] text-foreground lg:pt-[5.25rem]", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        {intro && (
          <PlumeformV2Reveal className="mb-[9.5rem] text-center lg:mb-[13.5rem]">
            <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>
            {introLink && (
              <PlumeformV2Button variant="link" href={introLink.href} arrow className="mt-5">
                {introLink.label}
              </PlumeformV2Button>
            )}
          </PlumeformV2Reveal>
        )}
        <div className={cn("grid gap-y-40 lg:gap-y-60", !intro && "pt-[calc(var(--section-y)*0.4)]")}>
          {rows.map((row, i) => {
            const panelFirst = (i % 2 === 1) !== (startWith === "panel");
            return (
              <div key={i} className="grid items-start gap-y-16 lg:grid-cols-2 lg:gap-x-24">
                <div className={cn("max-w-md", panelFirst && "lg:order-2 lg:pl-[3.25rem]")}>
                  <PlumeformV2Heading eyebrow={row.eyebrow} title={row.title} body={row.body} />
                  {row.bullets && (
                    <PlumeformV2Reveal as="ul" step={1} className="mt-10 space-y-3.5 text-sm leading-relaxed text-muted-foreground">
                      {row.bullets.map((b) => (
                        <li key={b.title} className="relative pl-4">
                          <span aria-hidden className="absolute top-[0.55em] left-0 size-1 rounded-full bg-primary" />
                          <strong className="font-semibold text-foreground">{b.title}</strong> — {b.text}
                        </li>
                      ))}
                    </PlumeformV2Reveal>
                  )}
                  {row.link && (
                    <PlumeformV2Reveal step={1} className="mt-8">
                      <PlumeformV2Button variant="link" href={row.link.href} arrow>
                        {row.link.label}
                      </PlumeformV2Button>
                    </PlumeformV2Reveal>
                  )}
                </div>
                <PlumeformV2Reveal step={1} className={cn("mx-5 sm:mx-0 lg:pt-6", panelFirst && "lg:order-1")}>
                  <PlumeformV2Panel className="mx-auto w-full max-w-[28rem]" placeholderHeight={row.panelHeight} fog={row.fog}>
                    {row.panel}
                  </PlumeformV2Panel>
                </PlumeformV2Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
