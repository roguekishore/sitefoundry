import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBand } from "@foundry/plumeform-band";
import { PlumeformGlassCard } from "@foundry/plumeform-glass-card";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformStat {
  /** small line above the number */
  label: string;
  /** the number itself, e.g. "150" or "$12" */
  value: string;
  /** a line under the number */
  caption?: ReactNode;
  /** tall: two rows high, number at the bottom (use it first) · wide: two columns · base */
  shape?: "tall" | "wide" | "base";
}

export interface PlumeformStatsProps {
  eyebrow?: string;
  title: ReactNode;
  /** a bento of numbers; the classic set is one tall, two base and one wide */
  stats: PlumeformStat[];
  /** art behind the band (the original's WebGL fluted glass); empty shows a soft glow */
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

/** A dark "at a glance" band: a bold heading over a bento of glass cards with big mint-gradient numbers. */
export function PlumeformStats({ eyebrow, title, stats, backdrop, id, className }: PlumeformStatsProps) {
  return (
    <PlumeformBand id={id} backdrop={backdrop} className={cn("py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <PlumeformHeading eyebrow={eyebrow} title={title} className="max-w-[42rem]" />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-[minmax(14rem,auto)_minmax(14rem,auto)]">
          {stats.map((stat, i) => {
            const shape = stat.shape ?? "base";
            return (
              <PlumeformReveal
                key={stat.label}
                as="li"
                step={i}
                className={cn(shape === "tall" && "lg:row-span-2", shape === "wide" && "lg:col-span-2")}
              >
                <PlumeformGlassCard className={cn("flex h-full flex-col px-8 py-8", shape === "tall" && "min-h-[22rem] lg:min-h-0")}>
                  <p className="text-[0.9375rem] font-semibold text-muted-foreground">{stat.label}</p>
                  <p
                    className={cn(
                      "bg-linear-to-b from-foreground to-highlight bg-clip-text font-display leading-none font-extrabold tracking-[-0.04em] text-transparent",
                      shape === "tall" ? "mt-auto pt-10 text-[7rem] lg:text-[8.5rem]" : "mt-6 text-[4rem] lg:text-[4.5rem]",
                    )}
                  >
                    {stat.value}
                  </p>
                  {stat.caption && <div className={cn("text-[0.9375rem] text-muted-foreground", shape === "tall" ? "mt-6" : "mt-5")}>{stat.caption}</div>}
                </PlumeformGlassCard>
              </PlumeformReveal>
            );
          })}
        </ul>
      </div>
    </PlumeformBand>
  );
}
