import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ColumnButton } from "@foundry/column-button";
import { ColumnEyebrow, type ColumnTone } from "@foundry/column-eyebrow";
import "./column-scale.css";

export interface ColumnStat {
  /** the figure, e.g. "$3.1T+" */
  value: string;
  /** a short caption under it */
  label: string;
}

export interface ColumnScaleProps {
  /** the small mono tag at the top */
  eyebrow: string;
  /** accent of the tag and the figures */
  tone?: ColumnTone;
  /** the statement's first words, in the ink colour */
  titleStrong: string;
  /** the rest of the statement, in soft grey */
  titleSoft?: string;
  /** a paragraph under the statement */
  body: ReactNode;
  /** the white button */
  action?: { label: string; href: string };
  /** the figures along the bottom (four fill the row) */
  stats: ColumnStat[];
  /** the chart art on the right; empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

export function ColumnScale({ eyebrow, tone = "highlight", titleStrong, titleSoft, body, action, stats, media, className }: ColumnScaleProps) {
  return (
    <section className={cn("relative overflow-clip bg-background pt-8 pb-12 text-foreground lg:pt-section lg:pb-6", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter">
        <ColumnEyebrow tone={tone}>{eyebrow}</ColumnEyebrow>
        <hr className="mt-6 border-border" />

        <div className="relative lg:grid lg:min-h-[25.5rem] lg:grid-cols-[32rem_1fr]">
          {/* Chart art: a band above the copy on phones, the right side on desktop. */}
          <div className="relative -mx-gutter mt-4 h-[24rem] lg:absolute lg:inset-y-[-4.5rem] lg:right-[-5.5rem] lg:left-[22rem] lg:mx-0 lg:mt-0 lg:h-auto">
            {media ?? (
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_60%_50%,color-mix(in_oklab,var(--highlight)_14%,transparent),transparent_75%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_10%,transparent)_1px,transparent_1.5px)] bg-size-[9px_9px] [mask-image:radial-gradient(ellipse_50%_50%_at_60%_50%,black,transparent_85%)]" />
              </div>
            )}
          </div>
          <div className="relative mt-2 lg:mt-11">
            <h2 className="max-w-[32rem] font-display text-[1.75rem]/[1.15] font-medium tracking-[-0.02em] lg:text-[1.75rem]/[1.15]">
              {titleStrong}
              {titleSoft && <span className="text-muted-foreground/70"> {titleSoft}</span>}
            </h2>
            <p className="mt-5 max-w-[30rem] text-base/[1.4] text-muted-foreground">{body}</p>
            {action && (
              <ColumnButton href={action.href} variant="secondary" className="mt-7">
                {action.label}
              </ColumnButton>
            )}
          </div>
        </div>

        <dl className="relative mt-16 grid grid-cols-2 gap-x-4 gap-y-6 lg:mt-[3.25rem] lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="column-scale-stat" style={{ "--i": i } as CSSProperties}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl/none font-medium tracking-[-0.03em] text-[color-mix(in_oklab,var(--highlight)_90%,var(--foreground))] lg:text-[1.625rem]">{s.value}</dd>
              <dd aria-hidden className="mt-2 max-w-[10rem] text-xs/[1.35] text-muted-foreground lg:text-[0.8125rem]/[1.3]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
