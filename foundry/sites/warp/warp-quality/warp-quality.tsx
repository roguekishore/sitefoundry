import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WarpMedia } from "@foundry/warp-media";
import { WarpPlate } from "@foundry/warp-plate";
import { WarpSection } from "@foundry/warp-section";

export interface WarpQualityRow {
  label: string;
  /** the verdict word, e.g. "pass" */
  verdict: string;
  /** struck through and muted when false */
  ok: boolean;
  value: string;
}

export interface WarpQualityMetric {
  /** small uppercase label at the top left */
  label: string;
  /** the boxed badge at the top right */
  badge?: string;
  /** the light subtitle */
  subtitle: string;
  /** the big figure, e.g. "94%" */
  value: string;
  /** the chart; a placeholder strip when empty */
  chart?: ReactNode;
  /** what the chart shows, for screen readers */
  chartLabel?: string;
  rows: WarpQualityRow[];
}

export interface WarpQualityProps {
  id?: string;
  /** the typed label above the title */
  tag?: string;
  /** shown in brackets after the tag */
  status?: string;
  title: string;
  lead?: string;
  /** caption of the figure frame */
  caption: string;
  /** small caption at the top left of the card */
  figureLabel?: string;
  /** small note at the top right of the card */
  figureMeta?: string;
  /** the columns (three in the original) */
  metrics: WarpQualityMetric[];
  className?: string;
}

const tiny = "font-mono text-[0.5625rem] leading-[1.65] tracking-[calc(0.12em_-_var(--warp-squeeze,0em))] uppercase";

/** Three metric columns in a figure plate: label, figure, chart and a short log. */
export function WarpQuality({ id, tag, status, title, lead, caption, figureLabel, figureMeta, metrics, className }: WarpQualityProps) {
  return (
    <WarpSection id={id} tag={tag} status={status} title={title} lead={lead} className={className}>
      <WarpPlate caption={caption} innerClassName="px-6 pt-6 pb-8 lg:px-8 lg:pt-8 lg:pb-8">
        {(figureLabel || figureMeta) && (
          <div className={cn(tiny, "flex items-start justify-between gap-4 text-muted-foreground")}>
            {figureLabel && <span>[ {figureLabel} ]</span>}
            {figureMeta && <span className="text-right">{figureMeta}</span>}
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-7 lg:grid-cols-3 lg:gap-0">
            {metrics.map((m, i) => (
              <div key={m.label} className={cn("min-w-0 lg:px-5 lg:first:pl-0 lg:last:pr-0", i > 0 && "border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0")}>
                <div className="flex items-center justify-between gap-3">
                  <span className={cn(tiny, "text-muted-foreground")}>{m.label}</span>
                  {m.badge && <span className={cn(tiny, "border border-foreground/60 px-1.5 font-medium text-foreground")}>{m.badge}</span>}
                </div>
                <p className="mt-1 font-display text-[0.9375rem] leading-[1.5] font-light text-foreground/78">{m.subtitle}</p>
                <p className="mt-1 font-mono text-[2.125rem] leading-[1.25] font-medium tracking-[calc(0.03em_-_var(--warp-squeeze,0em))]">{m.value}</p>
                <WarpMedia label={m.chartLabel} className="mt-4 h-20 rounded-[calc(var(--radius)/2)] lg:h-[6.75rem]">
                  {m.chart}
                </WarpMedia>
                <ul className="mt-5 border-t border-border">
                  {m.rows.map((r) => (
                    <li key={r.label + r.value} className="flex h-[1.875rem] items-center gap-3 border-b border-border/70 text-[0.6875rem] tracking-[calc(0.11em_-_var(--warp-squeeze,0em))] uppercase last:border-b-0">
                      <span className="min-w-0 flex-1 truncate text-muted-foreground">{r.label}</span>
                      <span className={cn("text-[0.625rem]", r.ok ? "font-medium text-foreground" : "text-muted-foreground line-through")}>{r.verdict}</span>
                      <span className="w-10 text-right font-medium">{r.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </WarpPlate>
    </WarpSection>
  );
}
