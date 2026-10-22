import { cn } from "@foundry/foundry-utils";
import { AnchorageCount } from "@foundry/anchorage-count";
import "./anchorage-stats.css";

export interface AnchorageStat {
  /** the figure, e.g. "7+", "2K+", "3.1B"; its number counts up */
  value: string;
  /** the small caption under it */
  label: string;
}

export interface AnchorageStatsProps {
  /** the centred heading */
  title: string;
  /** the figures, usually three */
  stats: AnchorageStat[];
  /** the soft glow at the left edge */
  glow?: boolean;
  className?: string;
}

/** A heading over three huge gradient figures, between fading hairlines. */
export function AnchorageStats({ title, stats, glow = true, className }: AnchorageStatsProps) {
  return (
    <section className={cn("relative isolate overflow-clip py-10 text-foreground lg:py-[5.25rem]", className)}>
      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,color-mix(in_oklab,var(--glow)_65%,transparent),color-mix(in_oklab,var(--glow)_22%,transparent)_55%,transparent)] lg:bg-[radial-gradient(ellipse_36%_50%_at_0%_50%,color-mix(in_oklab,var(--glow)_65%,transparent),color-mix(in_oklab,var(--glow)_22%,transparent)_55%,transparent)]" />
      )}
      <div className="mx-auto max-w-[51.25rem] px-gutter">
        <div aria-hidden className="anchorage-stats-rule" />
      </div>

      <div className="mx-auto max-w-[60.75rem] px-gutter pt-[3.75rem] pb-[5.75rem] lg:pt-[9.75rem] lg:pb-[8.25rem]">
        <h2 className="mx-auto max-w-[22rem] text-center font-display text-[2rem] leading-[1.1] font-[550] sm:max-w-none lg:text-[2.5rem] lg:leading-[1.2]">{title}</h2>
        <dl className="mt-14 grid grid-cols-3 gap-x-2 lg:mt-[3.75rem] lg:gap-x-8">
          {stats.map((s) => (
            <div key={s.label} className="anchorage-stats-item flex flex-col-reverse items-center text-center">
              <dt className="mt-1 max-w-[11.5rem] text-xs leading-[1.15] text-primary lg:mt-2 lg:text-base lg:leading-[1.65]">{s.label}</dt>
              <dd className="font-display text-[3.5rem] leading-[1] font-[250] tracking-[-0.02em] lg:text-[7.25rem]">
                <AnchorageCount value={s.value} className="anchorage-stats-figure" />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto max-w-[51.25rem] px-gutter">
        <div aria-hidden className="anchorage-stats-rule" />
      </div>
    </section>
  );
}
