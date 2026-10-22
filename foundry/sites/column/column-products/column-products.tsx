import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ColumnEyebrow, toneStyle, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-products.css";

export interface ColumnProduct {
  /** a small line icon (lucide works well) */
  icon?: ReactNode;
  label: string;
  /** where the tile links to */
  href?: string;
}

export interface ColumnProductGroup {
  /** the group's label, on the left */
  title: string;
  /** colour of the group's icons */
  tone?: ColumnTone;
  /** its tiles */
  items: ColumnProduct[];
}

export interface ColumnProductsProps {
  /** the small mono tag (shown with a blinking cursor) */
  eyebrow: string;
  /** accent of the tag */
  tone?: ColumnTone;
  /** the big heading */
  title: string;
  /** the groups of tiles */
  groups: ColumnProductGroup[];
  className?: string;
}

export function ColumnProducts({ eyebrow, tone = "chart-4", title, groups, className }: ColumnProductsProps) {
  return (
    <section className={cn("bg-background pt-24 pb-[8.5rem] text-foreground lg:pt-24 lg:pb-[8.75rem]", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <ColumnEyebrow tone={tone} cursor>
          {eyebrow}
        </ColumnEyebrow>
        <hr className="mt-6 border-border" />
        <h2 className="mt-14 max-w-[40rem] font-display text-[2.125rem]/[1.05] font-semibold tracking-[-0.04em] text-balance lg:mt-11 lg:text-5xl/[1.12]">{title}</h2>

        <div className="mt-7 flex flex-col gap-14 lg:mt-[4.75rem] lg:gap-[4.5rem]">
          {groups.map((g) => (
            <div key={g.title} className="lg:grid lg:grid-cols-[22.75rem_1fr]">
              <h3 className="max-w-[15rem] font-display text-base/[1.2] font-medium tracking-[-0.01em] max-lg:max-w-none lg:pt-2 lg:text-xl/[1.1]">{g.title}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:mt-0" style={toneStyle(g.tone ?? "chart-1")}>
                {g.items.map((p, i) => (
                  <li key={p.label} className="column-products-tile" style={{ "--i": i } as CSSProperties}>
                    <a
                      href={p.href ?? "#"}
                      className="flex h-14 items-center gap-3 rounded-lg bg-[color-mix(in_oklab,var(--muted)_80%,var(--background))] pl-2 text-base font-medium tracking-[-0.01em] transition-colors duration-200 ease-[ease] hover:bg-muted"
                    >
                      <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-[var(--tone)] shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_1px_2px_color-mix(in_oklab,var(--foreground)_8%,transparent)] [&_svg]:size-3.5">
                        {p.icon}
                      </span>
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
