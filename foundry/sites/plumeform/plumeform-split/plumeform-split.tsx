import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformLink } from "@foundry/plumeform-link";
import { PlumeformPanel, type PlumeformPanelClouds } from "@foundry/plumeform-panel";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformSplitRow {
  /** small capitals above the title */
  eyebrow?: string;
  title: ReactNode;
  /** a paragraph, or several as your own <p>s; <code> renders as a dark chip */
  body?: ReactNode;
  /** a short list under the body: bold lead-in, then the rest */
  bullets?: { title: string; text: string }[];
  /** the panel's demo, picture or video; empty shows a placeholder of `aspect` */
  media?: ReactNode;
  /** the placeholder's width / height inside the panel, e.g. "390/400" */
  aspect?: string;
  /** cloud arrangement behind the panel */
  clouds?: PlumeformPanelClouds;
  /** which side the panel sits on at desktop widths */
  panelSide?: "start" | "end";
}

export interface PlumeformSplitProps {
  /** a centred line (and link) above the rows, e.g. right under the hero */
  intro?: { text: ReactNode; link?: { label: string; href: string } };
  /** the feature rows, one under another */
  rows: PlumeformSplitRow[];
  id?: string;
  className?: string;
}

/**
 * Feature rows on paper: copy in one half, a glass panel over drifting colour clouds in the
 * other, alternating sides, with very generous space between rows. Stacks on phones.
 */
export function PlumeformSplit({ intro, rows, id, className }: PlumeformSplitProps) {
  return (
    <section id={id} className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {intro && (
          <PlumeformReveal className="mx-auto mb-32 max-w-xl pt-6 text-center lg:mb-52 lg:pt-10">
            <p className="text-sm text-muted-foreground">{intro.text}</p>
            {intro.link && <PlumeformLink href={intro.link.href} className="mt-5 text-sm">{intro.link.label}</PlumeformLink>}
          </PlumeformReveal>
        )}

        <div className="space-y-32 lg:space-y-60">
          {rows.map((row, i) => {
            const panelFirst = row.panelSide === "start";
            return (
              <div key={i} className="grid items-start gap-14 lg:grid-cols-2 lg:gap-x-16">
                <PlumeformHeading
                  eyebrow={row.eyebrow}
                  title={row.title}
                  className={cn(
                    "max-w-md [&_code]:rounded-md [&_code]:bg-primary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.8125rem] [&_code]:font-bold [&_code]:text-primary-foreground",
                    panelFirst && "lg:order-2 lg:justify-self-end",
                  )}
                >
                  {row.body}
                  {row.bullets && (
                    <ul className="mt-8 space-y-3 text-sm leading-5">
                      {row.bullets.map((b) => (
                        <li key={b.title} className="relative pl-4 before:absolute before:top-[0.45rem] before:left-0 before:size-1.5 before:rounded-full before:bg-highlight">
                          <strong>{b.title}</strong> — {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </PlumeformHeading>
                <PlumeformReveal className={cn("w-full max-w-[18.75rem] justify-self-center sm:max-w-[28rem] lg:mt-6", panelFirst && "lg:order-1")}>
                  <PlumeformPanel media={row.media} aspect={row.aspect ?? "390/400"} clouds={row.clouds ?? (["a", "b", "c"] as const)[i % 3]} />
                </PlumeformReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
