import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepAdvisor {
  name: ReactNode;
  /** two or three short lines about them */
  role: ReactNode;
  /** a cut-out portrait (transparent background works best) */
  portrait?: ReactNode;
}

export interface EightsleepAdvisorsProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  /** usually two */
  advisors: EightsleepAdvisor[];
  className?: string;
}

export function EightsleepAdvisors({ eyebrow, title, advisors, className }: EightsleepAdvisorsProps) {
  return (
    <section className={cn("dark bg-background pt-[110px] pb-section text-foreground lg:pt-[120px] lg:pb-[112px]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <EightsleepHeading eyebrow={eyebrow} title={title} />
        <ul className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {advisors.map((a, i) => (
            <li key={i} className="relative aspect-[350/426] overflow-clip rounded-sm bg-foreground/94 text-background lg:aspect-[640/560]">
              <div className="relative z-10 p-6">
                <h3 className="text-[16px] leading-[1.3] font-medium lg:text-[18px]">{a.name}</h3>
                <p className="mt-1 max-w-[250px] text-[14px] leading-[1.4] opacity-85">{a.role}</p>
              </div>
              <EightsleepMedia
                media={a.portrait}
                tone="inverse"
                className="absolute bottom-0 left-1/2 h-[66%] w-[86%] -translate-x-1/2 rounded-t-xl lg:h-[72%] lg:w-[70%]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
