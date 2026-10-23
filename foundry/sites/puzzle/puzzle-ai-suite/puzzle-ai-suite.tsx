import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";
import { PuzzleHeading } from "@foundry/puzzle-heading";
import { PuzzlePixels } from "@foundry/puzzle-pixels";
import { PuzzlePlaceholder } from "@foundry/puzzle-placeholder";

export interface PuzzleSuiteMessage {
  /** you: a tinted bubble on the right · reply: a white card on the left */
  from: "you" | "reply";
  text: string;
  /** small figure tiles under a reply */
  figures?: { label: string; value: string }[];
}

export interface PuzzleSuiteReview {
  /** the bold line at the top of the table */
  summary: string;
  /** the mint status pill at its right */
  status: string;
  /** the table rows */
  rows: { name: string; note: string; amount: string; flagged?: boolean }[];
  /** two buttons: the first solid, the second outlined */
  actions: { label: string; href: string }[];
  /** the small line under the card */
  footnote?: string;
}

export interface PuzzleSuiteFeature {
  /** a lucide icon for the tile */
  icon: ReactNode;
  /** violet or green icon tile and question bubbles */
  tone?: "violet" | "green";
  title: string;
  /** the small outlined pill after the title, e.g. "Ask" */
  tag: string;
  text: string;
  /** the media frame in the feature card; empty shows a placeholder */
  media?: ReactNode;
  /** the frame's width ÷ height (1.13 for the first, 1.4 for the second in the original) */
  mediaRatio?: number;
  /** the exchange shown in the panel beside the card */
  messages: PuzzleSuiteMessage[];
  /** a review table after the messages */
  review?: PuzzleSuiteReview;
}

export interface PuzzleAiSuiteProps {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  /** the outline button under the heading */
  cta?: { label: string; href: string };
  /** one row per feature: card + panel */
  features: PuzzleSuiteFeature[];
  /** the framed strip at the bottom */
  strip?: {
    /** the bold lead-in */
    lead: string;
    text: string;
    /** outline then violet */
    actions: { label: string; href: string }[];
  };
  className?: string;
}

const tile = { violet: "bg-secondary", green: "bg-glow" };
const bubble = { violet: "bg-secondary/45", green: "bg-glow/15" };

function Panel({ feature }: { feature: PuzzleSuiteFeature }) {
  const tone = feature.tone ?? "violet";
  return (
    <div className="flex flex-col justify-center gap-3.5 rounded-[calc(var(--radius)*1.8)] bg-background p-[1.125rem] text-foreground lg:gap-4 lg:p-8">
      {feature.messages.map((m) =>
        m.from === "you" ? (
          <p
            key={m.text}
            className={cn(
              "ml-auto max-w-[17.5rem] rounded-[0.8rem_0.8rem_0.2rem_0.8rem] px-3.5 py-2.5 text-sm/[1.45] lg:max-w-[27rem] lg:px-4 lg:py-3 lg:text-base/[1.5]",
              bubble[tone],
            )}
          >
            {m.text}
          </p>
        ) : (
          <div key={m.text} className="max-w-[32rem] rounded-[calc(var(--radius)*0.75)] bg-card p-3.5 text-card-foreground lg:p-4">
            <p className="text-sm/[1.6] lg:text-[0.9375rem]/[1.55]">{m.text}</p>
            {m.figures && (
              <dl className="mt-3 grid grid-cols-3 gap-1.5 lg:gap-2">
                {m.figures.map((f) => (
                  <div key={f.label} className="rounded-[calc(var(--radius)/2)] bg-background px-2 py-2.5 lg:px-2.5">
                    <dt className="text-[0.8125rem]/none text-muted-foreground lg:text-[0.6875rem]/none">{f.label}</dt>
                    <dd className="mt-2 text-sm/none lg:text-[0.9375rem]/none">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        ),
      )}
      {feature.review && (
        <>
          <div className="rounded-[calc(var(--radius)*0.75)] bg-card p-3.5 text-card-foreground lg:p-4">
            <div className="flex items-start justify-between gap-3 border-b border-border pb-4 lg:items-center">
              <p className="text-sm/[1.5] font-medium lg:text-[0.9375rem]">{feature.review.summary}</p>
              <span className="shrink-0 rounded-full bg-glow/20 px-2 py-1 text-xs/none font-medium text-foreground/75">{feature.review.status}</span>
            </div>
            <ul className="divide-y divide-border">
              {feature.review.rows.map((r) => (
                <li key={r.name} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-3 text-sm lg:flex lg:items-center lg:py-3.5 lg:text-[0.9375rem]">
                  <span className="lg:mr-auto">{r.name}</span>
                  <span className={cn("text-right", r.flagged ? "text-chart-5" : "text-muted-foreground")}>{r.note}</span>
                  <span className="lg:ml-3">{r.amount}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col items-start gap-2 lg:flex-row lg:gap-2.5">
              {feature.review.actions.map((a, i) => (
                <PuzzleButton key={a.label} href={a.href} variant={i === 0 ? "card" : "outline"} className="h-12 px-6 text-lg lg:h-[3.375rem]">
                  {a.label}
                </PuzzleButton>
              ))}
            </div>
          </div>
          {feature.review.footnote && <p className="text-sm text-muted-foreground lg:text-xs">{feature.review.footnote}</p>}
        </>
      )}
    </div>
  );
}

/** The violet AI band: features paired with chat panels. */
export function PuzzleAiSuite({ eyebrow, title, text, cta, features, strip, className }: PuzzleAiSuiteProps) {
  return (
    <section className={cn("relative overflow-clip bg-primary text-primary-foreground", className)}>
      <PuzzlePixels className="absolute -top-2 -right-24 [--pixel:3rem] lg:-right-10 lg:[--pixel:2.6rem]" />
      <PuzzlePixels pattern="block" className="absolute top-[45%] -left-16 [--pixel:3.5rem]" />
      <PuzzlePixels pattern="step" className="absolute right-0 bottom-24 [--pixel:3rem] lg:bottom-0" />
      <PuzzlePixels pattern="stair" className="absolute bottom-0 left-8 [--pixel:3rem] lg:left-16" />

      <div className="relative mx-auto max-w-page px-gutter pt-[6.25rem] pb-12 lg:pt-[8.25rem] lg:pb-12">
        <PuzzleHeading tone="inverse" eyebrow={eyebrow} title={title} text={text} className="lg:max-w-[57rem]" />
        {cta && (
          <div className="mt-8 flex justify-center lg:mt-10">
            <PuzzleButton href={cta.href} variant="outline-on-dark" className="h-12 w-full text-lg sm:w-auto lg:h-[3.4375rem] lg:px-8">
              {cta.label}
            </PuzzleButton>
          </div>
        )}

        <div className="mt-11 grid gap-[1.375rem] lg:mt-14 lg:grid-cols-2 lg:gap-x-[3.375rem] lg:gap-y-[3.375rem]">
          {features.map((f) => (
            <div key={f.title} className="contents">
              <article className="flex flex-col rounded-[calc(var(--radius)*1.8)] border border-primary-foreground/12 bg-primary-foreground/5 p-[1.375rem] lg:p-9">
                <div className="flex items-center gap-2 lg:gap-2.5">
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-[calc(var(--radius)*0.6)] text-foreground lg:size-11 dark:text-background [&_svg]:size-[1.125rem] lg:[&_svg]:size-5",
                      tile[f.tone ?? "violet"],
                    )}
                  >
                    {f.icon}
                  </span>
                  <h3 className="font-display text-2xl/none font-normal lg:text-[1.75rem]/none">{f.title}</h3>
                  <span className="rounded-full border border-primary-foreground/25 px-2 py-1.5 text-xs/none text-primary-foreground/80 lg:px-2.5 lg:py-2 lg:text-[0.8125rem]/none">{f.tag}</span>
                </div>
                <p className="mt-4 text-base/[1.6] text-primary-foreground/75 lg:mt-5 lg:text-[1.0125rem]/[1.65]">{f.text}</p>
                <div className="mt-4 overflow-clip rounded-[calc(var(--radius)*0.45)] lg:mt-5" style={{ aspectRatio: f.mediaRatio ?? 1.13 }}>
                  {f.media ?? <PuzzlePlaceholder tone="powder" className="size-full" />}
                </div>
              </article>
              <Panel feature={f} />
            </div>
          ))}
        </div>

        {strip && (
          <div className="mt-11 flex flex-col gap-4 rounded-[calc(var(--radius)*1.8)] border border-primary-foreground/12 p-[1.625rem] lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-8">
            <p className="text-base/[1.6] text-primary-foreground/75">
              <strong className="font-semibold text-primary-foreground">{strip.lead}</strong> {strip.text}
            </p>
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-2.5">
              {strip.actions.map((a, i) => (
                <PuzzleButton
                  key={a.label}
                  href={a.href}
                  variant={i === 0 ? "outline-on-dark" : "violet"}
                  className="h-12 text-lg lg:h-[3.4375rem] lg:px-8"
                >
                  {a.label}
                </PuzzleButton>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
