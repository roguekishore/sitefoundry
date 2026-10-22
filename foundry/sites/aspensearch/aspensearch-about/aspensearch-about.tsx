import { cn } from "@foundry/foundry-utils";
import { AspensearchLabel } from "@foundry/aspensearch-label";
import { AspensearchOdometer } from "@foundry/aspensearch-odometer";
import { AspensearchRevealText } from "@foundry/aspensearch-reveal-text";

export interface AspensearchAboutStat {
  /** the figure, e.g. "640+"; its digits roll in like an odometer */
  value: string;
  /** a short caption in the tile's bottom corner */
  caption: string;
}

export interface AspensearchAboutProps {
  /** the "■ LABEL" tag top left */
  label: string;
  /** the statement, one entry per paragraph */
  paragraphs: string[];
  /** the small ink tile at the foot of the statement */
  inkStat: AspensearchAboutStat;
  /** the large mint tile across the left half */
  mintStat: AspensearchAboutStat;
  /** the grey tile at the far right */
  greyStat: AspensearchAboutStat;
  /** anchor id for header links */
  id?: string;
  className?: string;
}

const tile = "flex flex-col justify-between px-3 pt-4 pb-6 lg:px-5 lg:pt-5";
const caption = "text-base/[1.3]";

/**
 * A long statement and three figures as offset tiles. Phones: label, a 24px statement lower
 * down, then three 200px-ish tiles stacked (ink, mint, grey). Desktop: label in the left half,
 * a 31px statement in the right half ending on a small ink tile; below the line, a big mint
 * tile across the left half, an empty quarter and a grey tile hanging from the right. The
 * statement rises in line by line; the figures' digits roll into place as they scroll in.
 */
export function AspensearchAbout({ label, paragraphs, inkStat, mintStat, greyStat, id, className }: AspensearchAboutProps) {
  return (
    <section id={id} className={cn("grid border-t border-border bg-background font-sans tracking-[-0.04em] text-foreground lg:grid-cols-4", className)}>
      <div className="px-3 pt-6 lg:col-span-2 lg:px-5 lg:pt-6">
        <AspensearchLabel>{label}</AspensearchLabel>
      </div>

      <div className="flex flex-col lg:col-span-2 lg:border-l lg:border-border">
        <div className="mt-[46vw] flex flex-col gap-[1.1em] px-3 pb-6 text-[6.2vw]/[1.1] lg:mt-0 lg:px-5 lg:pt-5 lg:pb-0 lg:text-[2.15vw]/[1.1]">
          {paragraphs.map((p, i) => (
            <AspensearchRevealText key={i} text={p} />
          ))}
        </div>
        <div className={cn(tile, "min-h-[51vw] bg-foreground text-background lg:mt-[24vw] lg:h-[13.9vw] lg:min-h-0 lg:w-1/2")}>
          <AspensearchOdometer value={inkStat.value} className="font-display text-[20.5vw] lg:text-[5.55vw]" />
          <p className={caption}>{inkStat.caption}</p>
        </div>
      </div>

      <div className={cn(tile, "min-h-[51vw] bg-highlight text-highlight-foreground lg:col-span-2 lg:h-[55.6vw] lg:border-t lg:border-r lg:border-border")}>
        <AspensearchOdometer value={mintStat.value} className="font-display text-[20.5vw] lg:text-[9.2vw]" />
        <p className={cn(caption, "self-end")}>{mintStat.caption}</p>
      </div>
      <div aria-hidden className="hidden lg:block lg:border-t lg:border-border" />
      <div className={cn(tile, "min-h-[51vw] bg-muted lg:h-[27.8vw] lg:border-t lg:border-b lg:border-l lg:border-border")}>
        <AspensearchOdometer value={greyStat.value} className="font-display text-[20.5vw] lg:text-[9.2vw]" />
        <p className={caption}>{greyStat.caption}</p>
      </div>
    </section>
  );
}
