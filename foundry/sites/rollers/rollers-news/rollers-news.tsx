import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersArrowCard } from "@foundry/rollers-arrow-card";
import { RollersButton } from "@foundry/rollers-button";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";

export interface RollersNewsItem {
  /** the article's title (two lines at most) */
  title: string;
  href: string;
  /** the chip over the photo (Guide, Safety…) */
  tag: string;
  /** the photo (aspect 1.45); a placeholder when empty */
  media?: ReactNode;
  /** screen-reader label of the arrow tile */
  arrowLabel: string;
}

export interface RollersNewsProps {
  /** three articles, one per ruled column */
  items: RollersNewsItem[];
  /** the orange button in the ruled row under the cards */
  action: { label: string; href: string };
  className?: string;
}

/** Three article cards in ruled columns (photo with a chip, two-line title, orange arrow tile),
    then a ruled row with one orange button that slides in from the right. */
export function RollersNews({ items, action, className }: RollersNewsProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="relative grid gap-7.5 px-gutter pt-7.5 pb-0 md:grid-cols-3 md:gap-0 md:px-0 md:py-10">
        <RollersRule className="inset-x-0 top-0" />
        {items.map((item, i) => (
          <div key={item.title} className="relative md:px-10">
            {i > 0 ? <RollersRule orientation="vertical" className="-inset-y-10 left-0 hidden md:block" /> : null}
            <RollersRise step={i}>
              <RollersArrowCard title={item.title} href={item.href} tag={item.tag} media={item.media} arrowLabel={item.arrowLabel} size="md" />
            </RollersRise>
          </div>
        ))}
      </div>

      <div className="relative overflow-x-clip px-gutter pt-7.5 pb-7.5 md:pt-10 md:pb-[6.875rem]">
        <RollersRule className="inset-x-0 top-0" />
        <RollersRise from="right" className="inline-block">
          <RollersButton href={action.href}>{action.label}</RollersButton>
        </RollersRise>
      </div>
    </section>
  );
}
