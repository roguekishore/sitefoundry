import { cn } from "@foundry/foundry-utils";
import { OndoHeading } from "@foundry/ondo-heading";
import "./ondo-stats.css";

export interface OndoStat {
  /** the figure as shown, e.g. "$2.84B" (digits roll, other characters stay put) */
  value: string;
  /** the label beside it; use a line break ("Live\nnetworks") for two lines */
  label: string;
}

export interface OndoStatsProps {
  /** heading, first line (ink) */
  lead: string;
  /** heading, second line (grey) */
  trail?: string;
  /** the figures, usually three */
  stats: OndoStat[];
  className?: string;
}

const serif = "font-[family-name:var(--ondo-serif,var(--typeface-display))]";
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/** One figure: each digit in a window over a rolling 0–9 strip. */
function Figure({ value }: { value: string }) {
  return (
    <span aria-hidden className="flex">
      {[...value].map((ch, i) =>
        /\d/.test(ch) ? (
          <span key={i} className="inline-block h-[1em] overflow-clip">
            <span className="ondo-stats-strip flex flex-col" style={{ ["--ondo-stats-digit" as string]: ch }}>
              {digits.map((d) => (
                <span key={d} className="block h-[1em]">
                  {d}
                </span>
              ))}
            </span>
          </span>
        ) : (
          <span key={i} className="inline-block h-[1em]">
            {ch}
          </span>
        ),
      )}
    </span>
  );
}

/** Heading left, three odometer figures right. */
export function OndoStats({ lead, trail, stats, className }: OndoStatsProps) {
  return (
    <section className={cn("bg-background py-section lg:pt-[7.5rem] lg:pb-[7.5rem]", className)}>
      <div className="mx-auto grid max-w-page grid-cols-1 gap-14 [&>*]:min-w-0 px-gutter lg:grid-cols-2 lg:gap-0 lg:px-[calc(var(--page-gutter)*2.75)]">
        <OndoHeading size="title" lead={lead} trail={trail} />
        <dl>
          {stats.map((stat) => (
            <div key={stat.label} className="ondo-stats-row flex items-end gap-4 border-b border-border pt-4 pb-6 lg:gap-8 lg:pt-[2.6rem] lg:pb-[3.1rem]">
              <dt className={cn("order-2 pb-1 text-lg leading-[1.05] whitespace-pre-line text-muted-foreground shrink-0 lg:pb-2 lg:text-2xl lg:leading-[1.05]", serif)}>{stat.label}</dt>
              <dd className="order-1 font-display text-[clamp(4.25rem,22vw,6rem)] leading-none font-medium tracking-[-0.03em] text-foreground lg:text-[7rem] xl:text-[9.375rem] xl:tracking-[-0.027em]">
                <span className="sr-only">{stat.value}</span>
                <Figure value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
