import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { gradientTextClass, type AirwallexTone } from "@foundry/airwallex-gradient";
import { AirwallexPlaceholder } from "@foundry/airwallex-placeholder";

export interface AirwallexStat {
  /** the figure ("40+") */
  value: string;
  /** the caption under it */
  label: string;
  /** the gradient the figure is painted with */
  tone: AirwallexTone;
}

export interface AirwallexNetworkProps {
  /** the headline */
  title: string;
  /** the paragraph */
  body: string;
  /** four figures fill the row */
  stats: AirwallexStat[];
  /** the globe (desktop); empty for a placeholder */
  media?: ReactNode;
  className?: string;
}

/** Headline and copy beside a globe, then a row of gradient figures. */
export function AirwallexNetwork({ title, body, stats, media, className }: AirwallexNetworkProps) {
  return (
    <section className={cn("relative overflow-clip bg-background text-foreground", className)}>
      <div aria-hidden className="absolute top-[-6rem] left-[calc(50%+11rem)] hidden w-[44rem] lg:block">
        {media ?? <AirwallexPlaceholder className="aspect-square w-full rounded-full" />}
      </div>
      <div className="relative mx-auto max-w-[76rem] px-gutter pt-[5.5rem] pb-20 lg:px-12 lg:pt-[7.5rem] lg:pb-32">
        <div className="lg:max-w-[35.5rem]">
          <h2 className="font-display text-[1.75rem] leading-[1.25] font-bold lg:text-[2.5rem]">{title}</h2>
          <p className="mt-6 text-base leading-6 text-foreground/80 lg:mt-8">{body}</p>
        </div>
        <ul className="mt-20 grid gap-10 lg:mt-32 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => (
            <li key={s.label}>
              <p className={cn("w-fit font-display text-2xl leading-[1.25] font-bold lg:text-[2.5rem]", gradientTextClass(s.tone))}>{s.value}</p>
              <p className="mt-3 max-w-[15rem] text-sm leading-6 font-semibold text-foreground/80 lg:mt-4 lg:text-base">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
