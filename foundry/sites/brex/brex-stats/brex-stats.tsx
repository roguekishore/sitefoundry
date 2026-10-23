import { cn } from "@foundry/foundry-utils";
import { BrexHeading } from "@foundry/brex-heading";

export interface BrexStat {
  /** the 24px label above the figure */
  label: string;
  /** the large figure, e.g. "71%" */
  value: string;
  /** the grey line under it */
  text: string;
}

export interface BrexStatsProps {
  title: string;
  /** three figures */
  stats: BrexStat[];
  /** the small print under the figures */
  note?: string;
  className?: string;
}

/** Three big orange figures with a footnote. */
export function BrexStats({ title, stats, note, className }: BrexStatsProps) {
  return (
    <section className={cn("bg-background px-gutter pt-12 pb-16 lg:pt-20 lg:pb-20", className)}>
      <BrexHeading title={title} className="max-w-[40rem] lg:max-w-[56rem]" />
      <dl className="mx-auto mt-10 grid max-w-[75.25rem] gap-12 lg:mt-12 lg:grid-cols-3 lg:gap-x-4 lg:px-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="font-display text-2xl/[1.8125rem] font-medium tracking-[-0.02em] text-foreground">{s.label}</dt>
            <dd className="mt-2">
              <span className="block font-display text-[1.875rem]/9 tracking-[-0.02em] text-primary lg:text-5xl/[3.25rem]">{s.value}</span>
              <span className="mt-3 block max-w-[24rem] text-base/6 text-muted-foreground">{s.text}</span>
            </dd>
          </div>
        ))}
      </dl>
      {note && <p className="mx-auto mt-12 max-w-[40rem] text-center text-xs/4 text-muted-foreground lg:max-w-none lg:mt-10">{note}</p>}
    </section>
  );
}
