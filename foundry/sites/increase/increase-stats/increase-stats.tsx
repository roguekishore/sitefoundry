import { cn } from "@foundry/foundry-utils";

export interface IncreaseStat {
  /** the figure, set large in mono (e.g. "$40B+") */
  value: string;
  /** what it counts */
  label: string;
}

export interface IncreaseStatsProps {
  /** two to four figures, in one row from sm and stacked on phones */
  stats: IncreaseStat[];
  className?: string;
}

/** Three big thin mono figures with small grey captions, centred in equal columns inside the frame. */
export function IncreaseStats({ stats, className }: IncreaseStatsProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <dl
        className="mx-auto grid max-w-page gap-12 border-x border-border px-gutter py-16 sm:grid-flow-col sm:auto-cols-fr sm:gap-6 lg:py-[5.25rem]"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center gap-2.5 text-center">
            <dt className="text-sm text-muted-foreground sm:text-[0.9375rem]">{stat.label}</dt>
            <dd className="font-mono text-[2.5rem] leading-[1.1] font-normal tracking-[-0.02em]">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
