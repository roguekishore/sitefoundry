import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { toneStyle, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-cta.css";

export interface ColumnCtaCard {
  /** a line icon drawn on a small dotted tile (lucide works well) */
  icon?: ReactNode;
  title: string;
  /** a short note under the title */
  note: string;
  href: string;
}

export interface ColumnCtaProps {
  /** the big line */
  title: string;
  /** a sentence under it */
  lead?: string;
  /** the link cards (three fill the row) */
  cards: ColumnCtaCard[];
  /** colour of the card icons */
  tone?: ColumnTone;
  /** round the panel's bottom too (when no footer follows) */
  closed?: boolean;
  className?: string;
}

export function ColumnCta({ title, lead, cards, tone = "chart-1", closed, className }: ColumnCtaProps) {
  return (
    <section className={cn("bg-background px-3", closed && "pb-3", className)}>
      <div
        className={cn(
          "border border-border bg-muted px-[1.3125rem] pt-[4.5rem] text-foreground lg:pt-24",
          closed ? "rounded-xl pb-[4.5rem] lg:pb-24" : "rounded-t-xl border-b-0 pb-4",
        )}
      >
        <div className="column-cta-fade mx-auto max-w-page">
          <h2 className="font-display text-[2.5rem]/none font-semibold tracking-[-0.04em] lg:text-[3.25rem]/[1.08]">{title}</h2>
          {lead && <p className="mt-3 max-w-[42rem] text-lg/[1.35] text-muted-foreground lg:mt-4">{lead}</p>}
          <ul className="mt-14 grid gap-5 lg:mt-[3.25rem] lg:grid-cols-3">
            {cards.map((c) => (
              <li key={c.title}>
                <a
                  href={c.href}
                  style={toneStyle(tone)}
                  className="flex h-[13rem] flex-col rounded-lg border border-border bg-[color-mix(in_oklab,var(--background)_55%,var(--muted))] px-8 pt-[1.625rem] pb-8 shadow-[inset_0_1px_0_var(--secondary)] transition-[background-color,box-shadow] duration-200 ease-[ease] hover:bg-background hover:shadow-[inset_0_1px_0_var(--secondary),0_2px_6px_color-mix(in_oklab,var(--foreground)_6%,transparent)]"
                >
                  <span className="flex size-16 items-center justify-center bg-[radial-gradient(circle,color-mix(in_oklab,var(--tone)_22%,transparent)_0.8px,transparent_1.2px)] bg-size-[6px_6px] text-[var(--tone)] [&_svg]:size-8">
                    {c.icon}
                  </span>
                  <span className="mt-auto font-display text-base font-semibold tracking-[-0.01em]">{c.title}</span>
                  <span className="mt-0.5 text-sm text-muted-foreground">{c.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
