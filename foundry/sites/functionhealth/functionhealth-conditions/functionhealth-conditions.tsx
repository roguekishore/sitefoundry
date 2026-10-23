import type { ReactNode } from "react";
import { CircleCheck } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";
import { FunctionhealthMedia } from "@foundry/functionhealth-media";
import { FunctionhealthPauseMotion, usePauseMotion } from "@foundry/functionhealth-pause-motion";
import "./functionhealth-conditions.css";

export interface FunctionhealthConditionsProps {
  title: HeadingPart[];
  /** short benefits, each with a check-circle */
  benefits: string[];
  /** the chart card in the middle; empty shows a placeholder */
  media?: ReactNode;
  /** condition names for the two sliding rows (each row repeats its list to fill the width) */
  rowOne: string[];
  rowTwo: string[];
  /** labels of the pause control */
  pauseLabel: string;
  playLabel: string;
  className?: string;
}

function Row({ names, dir }: { names: string[]; dir: "left" | "right" }) {
  const list = [...names, ...names, ...names];
  return (
    <div className="overflow-clip">
      <ul data-dir={dir} className="functionhealth-conditions-track flex w-max items-center gap-6 text-base leading-none font-light text-muted-foreground lg:text-xl">
        {list.map((n, i) => (
          <li key={i} aria-hidden={i >= names.length ? true : undefined} className="flex items-center gap-6">
            <span>{n}</span>
            <span aria-hidden className="size-2 rounded-full bg-border" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FunctionhealthConditions({ title, benefits, media, rowOne, rowTwo, pauseLabel, playLabel, className }: FunctionhealthConditionsProps) {
  const { paused, toggle, rootProps } = usePauseMotion();
  return (
    <section {...rootProps} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} align="start" className="max-w-[20rem] lg:max-w-none lg:text-center" />
        <ul className="mt-6 flex flex-col gap-3.5 lg:mt-5 lg:flex-row lg:justify-center lg:gap-6">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-base leading-tight font-light lg:text-[1.0625rem]">
              <CircleCheck className="size-[1.125rem] shrink-0 text-primary" strokeWidth={1.5} />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-12 lg:mt-[5.75rem]">
        <div className="relative z-10 mx-auto w-full max-w-page px-gutter lg:px-0">
          <FunctionhealthMedia media={media} ratio="mx-auto aspect-[41/31] w-[20.5rem] max-w-full" rounded="rounded-3xl" className="relative z-10 border-2 bg-background bg-none" />
          <div className="mt-4 flex justify-center">
            <FunctionhealthPauseMotion paused={paused} onToggle={toggle} pauseLabel={pauseLabel} playLabel={playLabel} />
          </div>
        </div>
        <div className="mt-12 space-y-4 lg:absolute lg:inset-x-0 lg:top-[5.375rem] lg:mt-0 lg:space-y-9">
          <Row names={rowOne} dir="left" />
          <Row names={rowTwo} dir="right" />
        </div>
      </div>
    </section>
  );
}
