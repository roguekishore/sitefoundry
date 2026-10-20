import { useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBadge } from "@foundry/plumeform-badge";
import { PlumeformBand } from "@foundry/plumeform-band";
import { PlumeformGlassCard } from "@foundry/plumeform-glass-card";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformLink } from "@foundry/plumeform-link";
import { PlumeformReveal, plumeformSwapIn } from "@foundry/plumeform-reveal";

/** theme colours a swatch can show */
export type PlumeformSwatchColour = "primary" | "highlight" | "glow" | "accent" | "muted" | "foreground" | "chart-1" | "chart-2" | "chart-3" | "chart-4" | "chart-5";

const swatchClass: Record<PlumeformSwatchColour, string> = {
  primary: "bg-primary",
  highlight: "bg-highlight",
  glow: "bg-glow",
  accent: "bg-accent",
  muted: "bg-muted",
  foreground: "bg-foreground",
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
};

export interface PlumeformLooksLayout {
  /** name in the list */
  name: string;
  /** a small line icon in the list */
  icon?: ReactNode;
  /** tier word beside it, e.g. "Free" or "Plus" (the first one is shown in mint) */
  tag?: string;
  /** what the preview card says about it */
  text: string;
  bullets?: string[];
  /** a picture of the layout; empty shows a placeholder */
  media?: ReactNode;
}

export interface PlumeformLooksProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  /** the list on the left; choosing one swaps the preview card */
  layouts: PlumeformLooksLayout[];
  /** the big-number card: a small label, the number, a line of text */
  stat?: { label: string; value: string; text: ReactNode };
  /** the wide card: a title, text and named colour swatches */
  themes?: { title: string; text: ReactNode; swatches: { name: string; colours: PlumeformSwatchColour[] }[] };
  /** short cards in a row: mint capitals and a sentence */
  notes?: { eyebrow: string; text: ReactNode }[];
  link?: { label: string; href: string };
  /** art behind the band (the original's WebGL fluted glass); empty shows a soft glow */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

/**
 * A dark "make it yours" band: a wide heading, a selectable list of layouts beside a preview
 * card that swaps in when you pick one, then a bento of a giant gradient number, a swatch
 * card and three short notes.
 */
export function PlumeformLooks({ eyebrow, title, body, layouts, stat, themes, notes, link, backdrop, id, className }: PlumeformLooksProps) {
  const [active, setActive] = useState(0);
  const current = layouts[active] ?? layouts[0];

  return (
    <PlumeformBand id={id} backdrop={backdrop} className={cn("py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <PlumeformHeading eyebrow={eyebrow} title={title} className="max-w-[46rem]">
          {body}
        </PlumeformHeading>

        <PlumeformReveal step={1} className="mt-12 grid gap-4 lg:grid-cols-[17rem_1fr]">
          <PlumeformGlassCard as="div" className="p-3">
            <ul role="tablist" className="grid gap-0.5">
              {layouts.map((layout, i) => (
                <li key={layout.name}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex h-10 w-full items-center gap-3 rounded-xl px-3 text-left text-[0.9375rem] font-semibold transition-colors duration-200 motion-reduce:transition-none [&_svg]:size-4.5 [&_svg]:stroke-[1.5] [&_svg]:text-muted-foreground",
                      i === active ? "bg-foreground/10 text-foreground" : "text-foreground/85 hover:bg-foreground/5",
                    )}
                  >
                    {layout.icon}
                    <span className="flex-1">{layout.name}</span>
                    {layout.tag && <PlumeformBadge variant="text" className={i === 0 ? undefined : "text-muted-foreground"}>{layout.tag}</PlumeformBadge>}
                  </button>
                </li>
              ))}
            </ul>
          </PlumeformGlassCard>

          <PlumeformGlassCard className="p-6 lg:p-8">
            <div key={active} className={cn(plumeformSwapIn, "grid gap-6 md:grid-cols-[18.5rem_1fr] md:gap-6")}>
              <div className="overflow-clip rounded-xl border border-border bg-muted/60 [&>*]:size-full [&>*]:object-cover" style={{ aspectRatio: "295/212" } as CSSProperties}>
                {current.media}
              </div>
              <div className="md:pt-2">
                <h3 className="text-xl font-bold tracking-[-0.02em]">{current.name}</h3>
                <p className="mt-3 max-w-[21rem] text-base leading-[1.625] text-muted-foreground">{current.text}</p>
                {current.bullets && (
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {current.bullets.map((b) => (
                      <li key={b} className="relative pl-4 before:absolute before:top-[0.5rem] before:left-0 before:size-1 before:rounded-full before:bg-highlight">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </PlumeformGlassCard>
        </PlumeformReveal>

        {(stat || themes) && (
          <div className="mt-24 grid gap-4 lg:mt-20 lg:grid-cols-3">
            {stat && (
              <PlumeformReveal>
                <PlumeformGlassCard className="flex h-full flex-col px-8 py-8">
                  <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 bg-linear-to-b from-foreground to-highlight bg-clip-text font-display text-[7.5rem] leading-none font-extrabold tracking-[-0.04em] text-transparent">
                    {stat.value}
                  </p>
                  <div className="mt-10 text-[0.9375rem] leading-6 text-muted-foreground">{stat.text}</div>
                </PlumeformGlassCard>
              </PlumeformReveal>
            )}
            {themes && (
              <PlumeformReveal step={1} className="lg:col-span-2">
                <PlumeformGlassCard className="h-full px-8 py-8">
                  <h3 className="text-xl font-bold tracking-[-0.02em]">{themes.title}</h3>
                  <div className="mt-3 text-[0.9375rem] leading-6 text-muted-foreground">{themes.text}</div>
                  <ul className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {themes.swatches.map((s) => (
                      <li key={s.name} className="flex h-10 items-center gap-2.5 rounded-[calc(var(--radius)/2)] border border-foreground/25 px-1.5 text-[0.8125rem] font-semibold">
                        <span aria-hidden className="flex h-7 w-10 overflow-clip rounded-md">
                          {s.colours.map((c, i) => (
                            <span key={i} className={cn("flex-1", swatchClass[c])} />
                          ))}
                        </span>
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </PlumeformGlassCard>
              </PlumeformReveal>
            )}
            {notes?.map((note, i) => (
              <PlumeformReveal key={note.eyebrow} step={i}>
                <PlumeformGlassCard className="h-full px-8 py-8">
                  <p className="text-[0.625rem] font-bold tracking-[0.16em] text-highlight uppercase">{note.eyebrow}</p>
                  <div className="mt-4 text-[0.9375rem] leading-6 text-muted-foreground">{note.text}</div>
                </PlumeformGlassCard>
              </PlumeformReveal>
            ))}
          </div>
        )}

        {link && (
          <PlumeformReveal className="mt-12">
            <PlumeformLink href={link.href}>{link.label}</PlumeformLink>
          </PlumeformReveal>
        )}
      </div>
    </PlumeformBand>
  );
}
