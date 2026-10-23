import { cn } from "@foundry/foundry-utils";

export interface SlashStat {
  /** the figure ("$18bn") */
  value: string;
  /** a quieter suffix after it ("+") */
  suffix?: string;
  /** what it counts */
  label: string;
}

export interface SlashStatsProps {
  /** four figures read best */
  stats: SlashStat[];
  className?: string;
}

/** A short band of brushed-gold figures over a warm amber glow. */
export function SlashStats({ stats, className }: SlashStatsProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background py-14 text-foreground lg:py-0", className)}>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-radial-[ellipse_45%_60%_at_50%_100%] from-glow/22 via-glow/6 via-60% to-transparent lg:bg-radial-[ellipse_36%_75%_at_50%_95%]"
      />
      <div className="mx-auto grid max-w-page grid-cols-2 justify-items-center gap-x-6 gap-y-10 px-gutter lg:flex lg:h-[12.4375rem] lg:items-center lg:justify-center lg:gap-[3.625rem]">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-[1.75rem] leading-none tracking-[-0.02em] lg:text-[2.75rem]">
              <span className="bg-linear-[103deg] from-highlight via-[color-mix(in_oklab,var(--highlight)_25%,var(--foreground))] via-40% to-highlight to-75% bg-clip-text text-transparent">
                {stat.value}
              </span>
              {stat.suffix && <span className="text-highlight/60">{stat.suffix}</span>}
            </p>
            <p className="mx-auto mt-2 max-w-[6rem] text-[0.9375rem] leading-[1.3] tracking-[-0.02em] text-foreground/70 lg:mx-0 lg:mt-3 lg:max-w-none lg:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
