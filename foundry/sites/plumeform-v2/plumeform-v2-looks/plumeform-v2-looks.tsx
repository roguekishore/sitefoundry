import { useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Backdrop } from "@foundry/plumeform-v2-backdrop";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2GlassCard } from "@foundry/plumeform-v2-glass-card";
import { PlumeformV2Eyebrow, PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";
import "./plumeform-v2-looks.css";

export interface PlumeformV2LooksLayout {
  name: string;
  /** a small icon in the list */
  icon?: ReactNode;
  /** the tag at the right of the list item (e.g. Free, Plus) */
  plan: string;
  /** true when the tag marks the free plan: shown in mint */
  free?: boolean;
  description: string;
  bullets: string[];
  /** the preview in the wide card; empty shows a placeholder */
  preview?: ReactNode;
}

export interface PlumeformV2LooksProps {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  /** the picker's label, for screen readers */
  pickerLabel?: string;
  layouts: PlumeformV2LooksLayout[];
  /** the tall stat card */
  stat?: { label: string; value: string; text: string };
  /** the wide card of colour themes */
  themes?: {
    title: string;
    text: string;
    /** each swatch is three token names, e.g. ["primary", "foreground", "background"] */
    items: { name: string; swatch: [string, string, string] }[];
  };
  /** small cards in a row */
  points?: { eyebrow: string; text: string }[];
  link?: { label: string; href: string };
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

const token = (name: string): CSSProperties => ({ background: `var(--${name})` });

export function PlumeformV2Looks({
  eyebrow,
  title,
  body,
  pickerLabel = "Layouts",
  layouts,
  stat,
  themes,
  points,
  link,
  backdrop,
  id,
  className,
}: PlumeformV2LooksProps) {
  const [picked, setPicked] = useState(0);
  const layout = layouts[picked];

  return (
    <section id={id} className={cn("dark relative isolate overflow-clip px-gutter py-[calc(var(--section-y)*0.85)] text-foreground lg:py-section", className)}>
      <PlumeformV2Backdrop media={backdrop} />
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformV2Heading eyebrow={eyebrow} title={title} body={body} className="max-w-[41rem]" />

        <div className="mt-14 grid gap-4 lg:grid-cols-[17rem_1fr]">
          <PlumeformV2GlassCard className="p-3">
            <ul role="listbox" aria-label={pickerLabel} className="grid gap-0.5">
              {layouts.map((item, i) => (
                <li key={item.name} role="option" aria-selected={i === picked}>
                  <button
                    type="button"
                    onClick={() => setPicked(i)}
                    className={cn(
                      "flex h-10 w-full items-center gap-3 rounded-[0.875rem] px-3 text-left text-sm font-bold transition-colors duration-200 [&_svg]:size-4 [&_svg]:opacity-70",
                      i === picked ? "bg-foreground/10" : "text-foreground/85 hover:bg-foreground/5",
                    )}
                  >
                    {item.icon}
                    <span className="flex-1">{item.name}</span>
                    <span className={cn("text-[0.5625rem] font-extrabold tracking-[0.14em] uppercase", item.free ? "text-highlight" : "text-muted-foreground")}>
                      {item.plan}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </PlumeformV2GlassCard>

          <PlumeformV2GlassCard step={1} className="grid gap-6 p-6 sm:grid-cols-[minmax(0,18.5rem)_1fr] sm:p-8">
            <div key={`p${picked}`} className="plumeform-v2-looks-swap aspect-[296/212] overflow-clip rounded-lg border border-foreground/8 bg-foreground/5 [&>*]:size-full">
              {layout.preview}
            </div>
            <div key={`d${picked}`} className="plumeform-v2-looks-swap self-center">
              <h3 className="text-xl font-bold tracking-[-0.02em]">{layout.name}</h3>
              <p className="mt-3 max-w-md text-[0.9375rem] leading-[1.7] text-muted-foreground lg:text-base">{layout.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {layout.bullets.map((b) => (
                  <li key={b} className="relative pl-4">
                    <span aria-hidden className="absolute top-[0.55em] left-0 size-1 rounded-full bg-highlight" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </PlumeformV2GlassCard>
        </div>

        {(stat || themes) && (
          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_2.05fr]">
            {stat && (
              <PlumeformV2GlassCard className="p-8">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-4 bg-[linear-gradient(135deg,var(--foreground),var(--primary)_45%,var(--highlight))] bg-clip-text font-display text-[7rem] leading-none font-extrabold tracking-[-0.05em] text-transparent lg:text-[8rem]">
                  {stat.value}
                </p>
                <p className="mt-8 text-sm leading-[1.65] text-muted-foreground">{stat.text}</p>
              </PlumeformV2GlassCard>
            )}
            {themes && (
              <PlumeformV2GlassCard step={1} className="p-8">
                <h3 className="text-xl font-bold tracking-[-0.02em] lg:text-[1.375rem]">{themes.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-[1.65] text-muted-foreground">{themes.text}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {themes.items.map((t) => (
                    <li key={t.name} className="flex h-10 items-center gap-2.5 rounded-[0.625rem] border border-foreground/15 px-1.5 text-[0.8125rem] font-semibold">
                      <span aria-hidden className="flex h-7 w-10 overflow-clip rounded-md">
                        {t.swatch.map((s, i) => (
                          <span key={i} className="flex-1" style={token(s)} />
                        ))}
                      </span>
                      {t.name}
                    </li>
                  ))}
                </ul>
              </PlumeformV2GlassCard>
            )}
          </div>
        )}

        {points && (
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {points.map((p, i) => (
              <PlumeformV2GlassCard as="li" key={p.eyebrow} step={i} className="p-8">
                <PlumeformV2Eyebrow className="text-[0.625rem] font-bold tracking-[0.2em] text-highlight">{p.eyebrow}</PlumeformV2Eyebrow>
                <p className="mt-5 text-[0.9375rem] leading-[1.6] text-muted-foreground">{p.text}</p>
              </PlumeformV2GlassCard>
            ))}
          </ul>
        )}

        {link && (
          <PlumeformV2Reveal className="mt-12">
            <PlumeformV2Button variant="link" href={link.href} arrow>
              {link.label}
            </PlumeformV2Button>
          </PlumeformV2Reveal>
        )}
      </div>
    </section>
  );
}
