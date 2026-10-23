import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthPauseMotion, usePauseMotion } from "@foundry/functionhealth-pause-motion";
import "./functionhealth-press-logos.css";

export interface FunctionhealthPressLogosProps {
  /** publication names (or styled logo nodes), shown in a loop */
  logos: ReactNode[];
  /** accessible name of the list, e.g. "As seen in" */
  label: string;
  pauseLabel: string;
  playLabel: string;
  className?: string;
}

export function FunctionhealthPressLogos({ logos, label, pauseLabel, playLabel, className }: FunctionhealthPressLogosProps) {
  const { paused, toggle, rootProps } = usePauseMotion();
  const lap = (hidden: boolean) =>
    logos.map((l, i) => (
      <li key={`${hidden}-${i}`} aria-hidden={hidden || undefined} className="shrink-0 px-6 font-display text-[2.125rem] leading-none font-semibold tracking-[-0.03em] text-muted-foreground lg:px-[3.25rem] lg:text-[2.5rem]">
        {l}
      </li>
    ));
  return (
    <section {...rootProps} aria-label={label} className={cn("bg-background pt-[3.25rem] pb-12 text-foreground lg:pt-[4.75rem] lg:pb-[5.75rem]", className)}>
      <div className="functionhealth-press-logos-fade overflow-clip">
        <ul className="functionhealth-press-logos-track flex w-max items-center">
          {lap(false)}
          {lap(true)}
        </ul>
      </div>
      <div className="mx-auto mt-8 max-w-page px-gutter lg:mt-[4.25rem]">
        <FunctionhealthPauseMotion paused={paused} onToggle={toggle} pauseLabel={pauseLabel} playLabel={playLabel} />
      </div>
    </section>
  );
}
