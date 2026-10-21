import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersFleetIntroProps {
  /** the chip above the heading */
  eyebrow: string;
  /** the heading as parts: orange first (tone: "accent"), then charcoal */
  heading: RollersWordsSegment[];
  /** the side card's photo; a placeholder when empty */
  media?: ReactNode;
  /** the orange bar under the photo */
  link: { label: string; href: string };
  /** an in-page anchor */
  id?: string;
  className?: string;
}

/** A ruled band: chip and very large two-tone heading in the wide cell, and past a vertical
    hairline a small side card, a photo over a full-width orange link bar. */
export function RollersFleetIntro({ eyebrow, heading, media, link, id, className }: RollersFleetIntroProps) {
  return (
    <section id={id} className={cn("relative grid bg-background text-foreground md:grid-cols-[1fr_22.5rem]", className)}>
      <RollersRule className="inset-x-0 top-0" />
      <RollersRule orientation="vertical" className="inset-y-0 right-[22.5rem] hidden md:block" />

      <div className="px-gutter pt-7.5 md:pt-section md:pb-section">
        <RollersEyebrow>{eyebrow}</RollersEyebrow>
        <RollersWords
          segments={heading}
          className="mt-5 max-w-[60rem] font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] md:mt-6.5 md:text-[3.25rem] lg:text-[4.25rem]"
        />
      </div>

      <div className="px-gutter pt-8 pb-7.5 md:py-10">
        <RollersRise>
          <a href={link.href} className="group/fleet block">
            <div className="aspect-[1.43] overflow-clip bg-muted md:aspect-[1.47]">{media}</div>
            <span className="flex h-11 items-center justify-center bg-primary font-display text-[0.875rem] text-primary-foreground transition-colors duration-[450ms] group-hover/fleet:bg-muted-foreground motion-reduce:transition-none md:h-12 md:text-[1rem]">
              {link.label}
            </span>
          </a>
        </RollersRise>
      </div>
    </section>
  );
}
