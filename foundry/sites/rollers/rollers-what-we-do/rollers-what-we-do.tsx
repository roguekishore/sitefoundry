import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersEyebrow } from "@foundry/rollers-eyebrow";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersWhatWeDoProps {
  /** the chip above the heading */
  eyebrow: string;
  /** the heading as parts: charcoal, then orange (tone: "accent") */
  heading: RollersWordsSegment[];
  /** the square brand tile; when empty, an orange square carrying the caption */
  media?: ReactNode;
  /** the short slogan set in the empty tile's corner */
  tileCaption?: string;
  /** an in-page anchor */
  id?: string;
  className?: string;
}

/** A ruled band: a narrow side cell holding a square orange brand tile, a hairline, and the chip
    and large two-tone heading in the wide cell. */
export function RollersWhatWeDo({ eyebrow, heading, media, tileCaption, id, className }: RollersWhatWeDoProps) {
  return (
    <section id={id} className={cn("relative grid bg-background text-foreground md:grid-cols-[22.5rem_1fr]", className)}>
      <RollersRule className="inset-x-0 top-0" />
      <RollersRule orientation="vertical" className="inset-y-0 left-[22.5rem] hidden md:block" />

      <div className="px-gutter pt-7.5 md:pt-10 md:pb-10">
        <RollersRise className="relative aspect-square bg-primary text-primary-foreground md:size-70">
          {media ??
            (tileCaption ? (
              <p className="absolute top-[11%] left-[11%] max-w-[60%] font-display text-[1.45rem] leading-[1.1] font-bold md:text-[1.15rem]">
                {tileCaption}
              </p>
            ) : null)}
        </RollersRise>
      </div>

      <div className="px-gutter pt-9 pb-9 md:pt-section md:pb-section">
        <RollersEyebrow>{eyebrow}</RollersEyebrow>
        <RollersWords
          segments={heading}
          className="mt-5 max-w-[48rem] font-display text-[2.05rem] leading-[1.1] font-[550] tracking-[-0.015em] md:mt-6.5 md:text-[3.25rem] lg:text-[4.25rem]"
        />
      </div>
    </section>
  );
}
