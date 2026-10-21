import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersButton } from "@foundry/rollers-button";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersDivisionFeature {
  title: string;
  body: string;
}

export interface RollersDivisionProps {
  /** the chip above the heading (the division's name) */
  eyebrow: string;
  /** the heading as parts: white, then the highlight colour on a new line (tone: "highlight", newLine) */
  heading: RollersWordsSegment[];
  /** the white pill, then the orange button under it */
  secondaryAction: { label: string; href: string };
  primaryAction: { label: string; href: string };
  /** the wide 2:1 photo; a placeholder when empty */
  media?: ReactNode;
  /** the paragraph beside the photo */
  text: string;
  /** three short features in a ruled row */
  features: RollersDivisionFeature[];
  /** an in-page anchor */
  id?: string;
  className?: string;
}

const rule = "bg-accent-foreground/45";

/** A denim-blue band for a sub-brand: chip, a white heading with a navy second line and two
    stacked buttons on the right; then a row ruled in soft white with a wide 2:1 photo and a
    paragraph, and a row of three features. */
export function RollersDivision({
  eyebrow,
  heading,
  secondaryAction,
  primaryAction,
  media,
  text,
  features,
  id,
  className,
}: RollersDivisionProps) {
  return (
    <section id={id} className={cn("bg-accent pt-section pb-15 text-accent-foreground md:pb-section", className)}>
      <div className="flex flex-col gap-6 px-gutter md:flex-row md:items-end md:justify-between">
        <div>
          <RollersEyebrow className="normal-case">{eyebrow}</RollersEyebrow>
          <RollersWords
            segments={heading}
            className="mt-5 font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] md:mt-6.5 md:text-[3.25rem] lg:text-[4.25rem]"
          />
        </div>
        <RollersRise className="flex md:flex-col md:items-end md:pb-3">
          <RollersButton href={secondaryAction.href} variant="light">
            {secondaryAction.label}
          </RollersButton>
          <RollersButton href={primaryAction.href}>{primaryAction.label}</RollersButton>
        </RollersRise>
      </div>

      <div className="relative mt-7.5 grid md:mt-20 md:grid-cols-[67%_1fr]">
        <RollersRule className={cn("inset-x-0 top-0", rule)} />
        <RollersRule orientation="vertical" className={cn("inset-y-0 left-[67%] hidden md:block", rule)} />
        <div className="px-gutter pt-7.5 md:py-10">
          <RollersRise className="aspect-[2] overflow-clip bg-background/15">{media}</RollersRise>
        </div>
        <RollersRise as="p" className="px-gutter pt-6 pb-7.5 font-display text-[0.875rem] leading-[1.25] md:pt-3.5 md:text-[1.25rem] lg:pt-3.5 lg:text-[1.5rem] lg:leading-[1.2]">
          {text}
        </RollersRise>
      </div>

      <ul className="relative grid gap-7 pt-7.5 pb-7.5 md:grid-cols-3 md:gap-0 md:py-0">
        <RollersRule className={cn("inset-x-0 top-0", rule)} />
        <RollersRule className={cn("inset-x-0 bottom-0", rule)} />
        {features.map((feature, i) => (
          <li key={feature.title} className="relative px-gutter md:pt-13 md:pb-11">
            {i > 0 ? <RollersRule orientation="vertical" className={cn("inset-y-0 left-0 hidden md:block", rule)} /> : null}
            <RollersRise step={i}>
              <h3 className="font-display text-[1.125rem] leading-[1.3] md:text-[1.5rem]">{feature.title}</h3>
              <p className="mt-3 max-w-[24rem] font-display text-[0.875rem] leading-[1.5] md:mt-4 lg:text-[1.125rem]">{feature.body}</p>
            </RollersRise>
          </li>
        ))}
      </ul>
    </section>
  );
}
