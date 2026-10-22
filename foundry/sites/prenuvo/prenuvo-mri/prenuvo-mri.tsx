import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PrenuvoReveal } from "@foundry/prenuvo-reveal";
import "./prenuvo-mri.css";

export interface PrenuvoMriFeature {
  /** the short title */
  title: string;
  /** one or two lines under it */
  body: ReactNode;
  /** the dot's colour */
  tone?: "green" | "blue" | "lilac";
}

export interface PrenuvoMriProps {
  /** three features, shown in a row on desktop */
  features: PrenuvoMriFeature[];
  /** the machine image (contain); empty shows a placeholder */
  media?: ReactNode;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

const dots = {
  green: "bg-chart-1 shadow-[0_0_12px_var(--chart-1)]",
  blue: "bg-chart-2 shadow-[0_0_12px_var(--chart-2)]",
  lilac: "bg-chart-3 shadow-[0_0_12px_var(--chart-3)]",
};

export function PrenuvoMri({ features, media, id, className }: PrenuvoMriProps) {
  return (
    <section id={id} className={cn("dark relative z-10 -mt-8 overflow-x-clip bg-background pb-20 text-foreground lg:mt-0 lg:pb-16", className)}>
      <div className="prenuvo-mri-in relative">
        {/* the machine: 630×444 centred (cropped by the screen) on phones; filling the window height on desktop */}
        <div className="relative left-1/2 h-[27.75rem] w-[39.375rem] -translate-x-1/2 lg:h-[104svh] lg:w-auto lg:max-w-[min(83.125rem,100%)] lg:aspect-[1330/936] [&>*]:size-full [&>*]:object-contain">
          {media ?? <div className="rounded-2xl bg-[linear-gradient(to_bottom,var(--accent),var(--background)_90%)]" />}
        </div>

        <ul className="relative mx-auto -mt-28 grid max-w-page gap-14 px-gutter text-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:grid-cols-3 lg:gap-12 lg:px-12">
          {features.map((f, i) => (
            <PrenuvoReveal as="li" key={f.title} step={i} className="flex flex-col items-center">
              <span aria-hidden className={cn("size-3 rounded-full", dots[f.tone ?? (["green", "blue", "lilac"] as const)[i % 3]])} />
              <h3 className="mt-6 font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-balance">{f.title}</h3>
              <p className="mt-3 max-w-[17.5rem] text-sm leading-[1.4] text-muted-foreground lg:max-w-xs lg:text-base">{f.body}</p>
            </PrenuvoReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
