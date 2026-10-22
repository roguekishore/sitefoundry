import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WarpMedia } from "@foundry/warp-media";
import { WarpPlate } from "@foundry/warp-plate";
import { WarpSection } from "@foundry/warp-section";
import "./warp-governance.css";

/** A series in the cost card: its colour comes from the theme's chart tokens. */
export interface WarpGovernanceSeries {
  label: string;
  value: string;
  /** chart-1 … chart-5 */
  colour: 1 | 2 | 3 | 4 | 5;
}

export interface WarpGovernanceAgent {
  /** what the agent is doing */
  status: string;
  /** the model pill */
  model: string;
  /** the ink agent pill */
  agent: string;
  /** one letter in the blue avatar */
  initial: string;
  /** e.g. "now", "12m" */
  time: string;
}

export interface WarpGovernanceProps {
  id?: string;
  /** the typed label above the title */
  tag?: string;
  /** shown in brackets after the tag */
  status?: string;
  title: string;
  lead?: string;
  /** caption of the figure frame */
  caption: string;
  /** the cost card */
  cost: {
    title: string;
    value: string;
    delta?: string;
    date?: string;
    series: WarpGovernanceSeries[];
    /** the chart; a placeholder when empty */
    chart?: ReactNode;
    chartLabel?: string;
  };
  /** the roster card */
  roster: {
    label: string;
    count?: string;
    agents: WarpGovernanceAgent[];
    note?: string;
  };
  /** the lower panel */
  proof: {
    title: string;
    text: string;
    /** the browser shot; a placeholder when empty */
    shot?: ReactNode;
    shotLabel?: string;
    /** the agent's working line, followed by blinking dots */
    working?: string;
    /** the agent's reply under the shot */
    reply: ReactNode;
  };
  className?: string;
}

const tiny = "font-mono text-[0.5625rem] leading-[1.65] tracking-[calc(0.12em_-_var(--warp-squeeze,0em))] uppercase";
const dotsBg =
  "bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--foreground)_16%,transparent)_1.2px,transparent_0)] bg-[size:12px_12px]";
const chartText = ["", "text-chart-1", "text-chart-2", "text-chart-3", "text-chart-4", "text-chart-5"];
const chartBg = ["", "bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"];

/** A control-plane figure: cost card, agent roster, and a proof panel with a browser shot. */
export function WarpGovernance({ id, tag, status, title, lead, caption, cost, roster, proof, className }: WarpGovernanceProps) {
  return (
    <WarpSection id={id} tag={tag} status={status} title={title} lead={lead} className={className}>
      <WarpPlate caption={caption} bare>
        <div className="px-3.5 pb-3.5">
          <div className={cn("grid grid-cols-1 border border-foreground bg-background lg:grid-cols-2", dotsBg)}>
            <div className="p-4 lg:p-[1.125rem]">
              <div className="h-full rounded-[calc(var(--radius)*3)] border border-foreground/10 bg-card p-6 lg:p-8">
                <p className="max-w-[16ch] text-sm leading-[1.65] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] sm:max-w-none">{cost.title}</p>
                <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <p className="flex items-baseline gap-2">
                    <span className="font-mono text-[1.625rem] leading-none font-semibold">{cost.value}</span>
                    {cost.delta && <span className="text-[0.6875rem] text-muted-foreground">{cost.delta}</span>}
                    {cost.date && <span className={cn(tiny, "text-muted-foreground/70")}>{cost.date}</span>}
                  </p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[0.6875rem] text-muted-foreground">
                    {cost.series.map((s) => (
                      <li key={s.label} className="flex items-center gap-1.5">
                        <span aria-hidden className={cn("size-1.5 rounded-full", chartBg[s.colour])} />
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <WarpMedia label={cost.chartLabel} className="mt-4 h-40 rounded-[calc(var(--radius)/2)]">
                  {cost.chart}
                </WarpMedia>
                <p className="mt-3 text-[0.6875rem] leading-[1.6] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))]">
                  {cost.series.map((s, i) => (
                    <span key={s.label}>
                      {i > 0 && <span className="text-muted-foreground/60"> · </span>}
                      <span className={chartText[s.colour]}>
                        {s.label} {s.value}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="border-t border-foreground/15 p-4 lg:border-t-0 lg:border-l lg:p-[1.125rem]">
              <div className="flex h-full flex-col rounded-[calc(var(--radius)*3)] border border-foreground/10 bg-card p-6 lg:p-8">
                <div className={cn(tiny, "flex items-start justify-between gap-4 border-b border-border pb-6 text-muted-foreground")}>
                  <span>[ {roster.label} ]</span>
                  {roster.count && <span className="shrink-0">{roster.count}</span>}
                </div>
                <ul className="mt-6 flex flex-col lg:mt-10">
                  {roster.agents.map((a) => (
                    <li key={a.status + a.agent} className="flex items-center gap-2.5 border-b border-border py-3 last:border-b-0">
                      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-glow" />
                      <span className="min-w-0 flex-1 truncate font-display text-[0.875rem] text-foreground/78">{a.status}</span>
                      <span className="hidden rounded-full border border-border px-2 py-0.5 text-[0.5625rem] tracking-[calc(0.12em_-_var(--warp-squeeze,0em))] text-muted-foreground uppercase sm:inline">{a.model}</span>
                      <span className="rounded-full border border-foreground px-2 py-0.5 text-[0.5625rem] font-semibold tracking-[calc(0.1em_-_var(--warp-squeeze,0em))] uppercase">{a.agent}</span>
                      <span aria-hidden className="flex size-[1.125rem] shrink-0 items-center justify-center rounded-full bg-primary text-[0.5rem] font-semibold text-primary-foreground uppercase">
                        {a.initial}
                      </span>
                      <span className={cn(tiny, "w-8 text-right text-muted-foreground/70")}>{a.time}</span>
                    </li>
                  ))}
                </ul>
                {roster.note && <p className="mt-auto border-t border-border pt-3 font-display text-[0.9375rem] leading-[1.5] text-muted-foreground">{roster.note}</p>}
              </div>
            </div>
          </div>

          <div className={cn("warp-governance-panel mt-3.5 grid grid-cols-1 gap-8 rounded-[calc(var(--radius)*2)] border border-foreground bg-background px-6 py-8 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-12", dotsBg)}>
            <div className="lg:pl-1">
              <h3 className="max-w-[20ch] font-display text-[1.0625rem] leading-[1.5] font-semibold tracking-[-0.015em] sm:max-w-none">{proof.title}</h3>
              <p className="mt-2 text-[0.8125rem] leading-[1.6] tracking-[calc(0.04em_-_var(--warp-squeeze,0em))] text-muted-foreground">{proof.text}</p>
            </div>
            <div>
              <WarpMedia label={proof.shotLabel} className="warp-governance-shot aspect-[1.54/1] border border-foreground/30 bg-card">
                {proof.shot}
              </WarpMedia>
              {proof.working && (
                <p className="mt-4 flex items-center gap-1 pl-[2.375rem] font-mono text-[0.75rem] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))] text-muted-foreground">
                  {proof.working}
                  <span aria-hidden className="inline-flex">
                    <i className="warp-governance-dot not-italic">.</i>
                    <i className="warp-governance-dot not-italic">.</i>
                    <i className="warp-governance-dot not-italic">.</i>
                  </span>
                </p>
              )}
              <div className="warp-governance-reply mt-3 flex gap-4 text-[0.8125rem] leading-[1.6] tracking-[calc(0.03em_-_var(--warp-squeeze,0em))]">
                <span aria-hidden className="mt-1 size-3.5 shrink-0 bg-primary" />
                <p className="[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">{proof.reply}</p>
              </div>
            </div>
          </div>
        </div>
      </WarpPlate>
    </WarpSection>
  );
}
