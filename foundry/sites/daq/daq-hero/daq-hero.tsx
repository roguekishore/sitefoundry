import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./daq-hero.css";

export interface DaqHeroProps {
  /** the first headline line, set hairline-thin (shown uppercase) */
  lead: string;
  /** the payoff line, set heavy (shown uppercase) */
  payoff: string;
  /** the monospace intro under the headline (shown uppercase) */
  intro: string;
  /** the square outlined button */
  cta: { label: string; href: string };
  className?: string;
}

export function DaqHero({ lead, payoff, intro, cta, className }: DaqHeroProps) {
  return (
    <section className={cn("daq-hero relative flex h-svh min-h-[34rem] items-center overflow-clip", className)}>
      {/* everything inside fades and drifts down as the hero scrolls away */}
      <div className="daq-hero-content w-full px-gutter pb-[6svh] lg:pb-[4svh]">
        <h1 className="font-display text-[clamp(3rem,8vw,9rem)] leading-[0.8] tracking-[-0.035em] uppercase">
          <span className="daq-hero-mask">
            <span className="daq-hero-line font-thin" style={{ animationDelay: "0.15s" }}>
              {lead}
            </span>
          </span>
          <span className="daq-hero-mask">
            <span className="daq-hero-line font-bold" style={{ animationDelay: "0.27s" }}>
              {payoff}
            </span>
          </span>
        </h1>

        <p className="mt-9 max-w-[23rem] overflow-clip font-mono text-xs leading-[1.65] font-medium tracking-[0.1em] text-foreground/72 uppercase lg:mt-[4.5rem] lg:max-w-[39rem] lg:text-[0.9375rem] lg:leading-[1.35]">
          <span className="daq-hero-slide block">{intro}</span>
        </p>

        <a
          href={cta.href}
          className="daq-hero-fade group/cta mt-12 inline-flex h-[3.125rem] items-center gap-6 border border-foreground/20 px-8 font-mono text-[0.625rem] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-foreground/60"
        >
          <span className="relative pb-0.5">
            {cta.label}
            {/* an underline draws in from the left on hover */}
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:scale-x-100 motion-reduce:transition-none"
            />
          </span>
          <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-3.5 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
