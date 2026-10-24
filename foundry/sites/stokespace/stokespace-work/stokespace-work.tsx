import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StokespaceArrowLink } from "@foundry/stokespace-arrow-link";
import { StokespaceEyebrow } from "@foundry/stokespace-eyebrow";
import { StokespaceHeading } from "@foundry/stokespace-heading";
import { StokespacePlaceholder } from "@foundry/stokespace-placeholder";
import "./stokespace-work.css";

export interface StokespaceWorkCard {
  /** the arrow link under the image */
  label: string;
  /** where it goes */
  href: string;
  /** the 4:3 image */
  media?: ReactNode;
}

export interface StokespaceWorkProps {
  /** anchor id for the section */
  id?: string;
  /** small label above the heading */
  eyebrow: string;
  /** which accent the label's bar glows in */
  eyebrowTone?: "primary" | "highlight" | "glow";
  /** the heading */
  title: string;
  /** the image links (two side by side from 1024px) */
  cards: StokespaceWorkCard[];
  className?: string;
}

/**
 * Two-up image links: a neon-barred label and an all-caps heading, then 4:3 images side by
 * side from 1024px (stacked on phones), each with an arrow link under it. The images fade in
 * as they scroll into view.
 */
export function StokespaceWork({ id, eyebrow, eyebrowTone = "glow", title, cards, className }: StokespaceWorkProps) {
  return (
    <section id={id} className={cn("px-gutter py-section", className)}>
      <StokespaceEyebrow label={eyebrow} tone={eyebrowTone} />
      <StokespaceHeading className="mt-9 lg:mt-[4.4rem]">{title}</StokespaceHeading>

      <ul className="mt-9 grid gap-x-5 gap-y-11 lg:mt-[4.5rem] lg:grid-cols-2">
        {cards.map((card) => (
          <li key={card.label}>
            <div className="stokespace-work-media aspect-[4/3] [&>img]:size-full [&>img]:object-cover">
              {card.media ?? <StokespacePlaceholder />}
            </div>
            <StokespaceArrowLink label={card.label} href={card.href} className="mt-6 lg:mt-[1.4rem]" />
          </li>
        ))}
      </ul>
    </section>
  );
}
