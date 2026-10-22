import { cn } from "@foundry/foundry-utils";
import { SuperpowerButton } from "@foundry/superpower-button";
import { SuperpowerReveal } from "@foundry/superpower-reveal";

export interface SuperpowerIncludedRow {
  /** what's included */
  feature: string;
  /** a short grey detail, optional */
  detail?: string;
}

export interface SuperpowerIncludedProps {
  /** the small line above the headline */
  intro?: string;
  /** the headline; a line break (\n) splits it into its two lines */
  title: string;
  rows: SuperpowerIncludedRow[];
  cta?: { label: string; href: string };
  id?: string;
  className?: string;
}

export function SuperpowerIncluded({ intro, title, rows, cta, id, className }: SuperpowerIncludedProps) {
  return (
    <section id={id} className={cn("bg-background py-12 text-foreground lg:py-section", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter">
        {intro && <p className="text-center text-[1rem] leading-[1.5] lg:text-[1.0625rem]">{intro}</p>}
        <h2 className="mt-5 text-center text-[1.5rem] leading-[1.2] font-normal tracking-[-0.02em] whitespace-pre-line lg:mt-4 lg:text-[2.8125rem]">
          {title}
        </h2>
        <ul className="mt-8 w-full max-w-[37.5rem] lg:mt-10">
          {rows.map((r, i) => (
            <SuperpowerReveal
              as="li"
              key={r.feature}
              step={Math.min(i, 6)}
              rise={12}
              className={cn(
                "grid gap-1.5 rounded-[calc(var(--radius)/3)] px-3 py-3 lg:grid-cols-[15.6rem_1fr] lg:gap-0 lg:py-2.5",
                i % 2 === 0 && "bg-secondary",
              )}
            >
              <span className="text-[1rem] leading-[1.25] lg:text-[1.0625rem]">{r.feature}</span>
              {r.detail && <span className="text-[0.8125rem] leading-[1.35] text-muted-foreground lg:text-[1.0625rem] lg:leading-[1.25]">{r.detail}</span>}
            </SuperpowerReveal>
          ))}
        </ul>
        {cta && (
          <SuperpowerButton href={cta.href} className="mt-7 lg:mt-8 lg:h-[3.25rem]">
            {cta.label}
          </SuperpowerButton>
        )}
      </div>
    </section>
  );
}
