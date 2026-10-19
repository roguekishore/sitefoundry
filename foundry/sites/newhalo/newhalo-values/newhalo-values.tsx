import { cn } from "@foundry/foundry-utils";
import { newhaloReveal, newhaloRevealStyle } from "@foundry/newhalo-reveal";

export interface NewhaloValuesProps {
  /** the 100px heading */
  title: string;
  /** the cards, two to a row on desktop */
  values: { title: string; text: string }[];
  className?: string;
}

/** A 100px heading over a grid of white cards (32px title, short paragraph) with 2px gaps. Cards rise in. */
export function NewhaloValues({ title, values, className }: NewhaloValuesProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <h2 className="font-display text-[3.125rem] leading-[0.95] tracking-[-0.015em] lg:text-[6.25rem]">{title}</h2>
        <ul className="mt-10 grid gap-0.5 lg:mt-12 lg:grid-cols-2">
          {values.map((v, i) => (
            <li key={v.title} className={cn("rounded-lg bg-card p-gutter pb-8 text-card-foreground lg:p-[1.875rem] lg:pb-10", newhaloReveal("rise"))} style={newhaloRevealStyle(i % 2)}>
              <h3 className="font-display text-[1.56rem] leading-[1.1] lg:text-[2rem]">{v.title}</h3>
              <p className="mt-6 max-w-[33rem] text-[0.91rem] leading-normal lg:text-base">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
