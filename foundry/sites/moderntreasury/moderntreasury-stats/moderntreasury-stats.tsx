import { cn } from "@foundry/foundry-utils";

export interface ModerntreasuryStat {
  /** the figure, e.g. "$40 Billion" */
  value: string;
  /** the caption under it */
  label: string;
}

export interface ModerntreasuryStatsProps {
  /** the figures; three fill the row */
  items: ModerntreasuryStat[];
  className?: string;
}

/** Big figures between hairlines: columns on desktop, a ruled stack on phones. */
export function ModerntreasuryStats({ items, className }: ModerntreasuryStatsProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <dl className="mx-auto grid max-w-page px-gutter lg:grid-cols-3 lg:gap-12">
        {items.map((s) => (
          <div key={s.label} className="flex flex-col-reverse items-center border-t border-foreground/20 py-[1.625rem] text-center last:border-b lg:border-y lg:py-7">
            <dt className="mt-2 text-base leading-6 text-foreground/50">{s.label}</dt>
            <dd className="font-display text-[2rem] leading-[1.25] font-normal tracking-[-0.035em] lg:text-[2.9375rem]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
