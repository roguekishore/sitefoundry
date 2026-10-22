import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepReveal } from "@foundry/eightsleep-reveal";

export interface EightsleepGuarantee {
  /** a line icon (lucide works), drawn 32px */
  icon?: ReactNode;
  title: ReactNode;
  text: ReactNode;
}

export interface EightsleepGuaranteesProps {
  /** three promises */
  items: EightsleepGuarantee[];
  /** a small centered note under them */
  note?: ReactNode;
  className?: string;
}

export function EightsleepGuarantees({ items, note, className }: EightsleepGuaranteesProps) {
  return (
    <section className={cn("bg-background pt-[120px] pb-[96px] text-foreground lg:pt-[150px] lg:pb-[80px]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <ul className="grid gap-20 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <EightsleepReveal as="li" key={i} step={i} rise={24} className="flex flex-col items-center text-center">
              {item.icon && <span className="flex size-8 items-center justify-center [&_svg]:size-8 [&_svg]:stroke-[1.25]">{item.icon}</span>}
              <h3 className="mt-5 text-[22px] leading-[1.1]">{item.title}</h3>
              <p className="mt-3 max-w-[20rem] text-[15px] leading-[1.35] text-muted-foreground">{item.text}</p>
            </EightsleepReveal>
          ))}
        </ul>
        {note && <p className="mx-auto mt-24 max-w-[34rem] text-center text-[14px] leading-[1.3] lg:mt-[72px]">{note}</p>}
      </div>
    </section>
  );
}
