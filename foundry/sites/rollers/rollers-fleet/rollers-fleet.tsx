import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersArrowCard } from "@foundry/rollers-arrow-card";
import { RollersButton } from "@foundry/rollers-button";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import "./rollers-fleet.css";

export interface RollersFleetItem {
  /** the machine family */
  title: string;
  href: string;
  /** the photo (aspect 1.45); a placeholder when empty */
  media?: ReactNode;
  /** screen-reader label of the arrow tile */
  arrowLabel: string;
}

export interface RollersFleetProps {
  /** the cards, filled into the left column first, then the right (two each) */
  items: RollersFleetItem[];
  /** the orange button in the ruled row under the grid */
  action: { label: string; href: string };
  /** an in-page anchor */
  id?: string;
  className?: string;
}

/** A ruled two-column grid of large photo cards, the right column set lower than the left.
    On wide screens the columns drift against each other as you scroll (left down, right up).
    Under it, a ruled row with one orange button that slides in from the right. */
export function RollersFleet({ items, action, id, className }: RollersFleetProps) {
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];
  return (
    <section id={id} className={cn("bg-background text-foreground", className)}>
      <div className="relative grid overflow-clip md:grid-cols-2">
        <RollersRule className="inset-x-0 top-0" />
        <RollersRule orientation="vertical" className="inset-y-0 left-1/2 hidden md:block" />
        {columns.map((column, c) => (
          <div key={c} className={cn("flex flex-col", c === 0 ? "rollers-fleet-down" : "rollers-fleet-up")}>
            {column.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "relative px-gutter py-7.5 md:pt-[6.875rem] md:pr-10 md:pb-15 md:pl-7.5",
                  c === 1 && i === 0 && "md:pt-[18.75rem] md:pb-40",
                  c === 0 && i === 1 && "md:pt-40",
                  i === column.length - 1 && "md:flex-1",
                )}
              >
                {/* a hairline above every card on phones; between the cards of a column on wide screens */}
                <RollersRule className={cn("inset-x-0 top-0", i === 0 && "md:hidden", c === 0 && i === 0 && "hidden")} />
                <RollersRise>
                  <RollersArrowCard title={item.title} href={item.href} media={item.media} arrowLabel={item.arrowLabel} />
                </RollersRise>
              </div>
            ))}
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
