import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StokespaceArrowLink } from "@foundry/stokespace-arrow-link";
import { StokespaceEyebrow } from "@foundry/stokespace-eyebrow";
import { StokespaceHeading } from "@foundry/stokespace-heading";
import { StokespacePlaceholder } from "@foundry/stokespace-placeholder";

export interface StokespaceNovaProps {
  /** anchor id for the section */
  id?: string;
  /** small label above the heading */
  eyebrow: string;
  /** which accent the label's bar glows in */
  eyebrowTone?: "primary" | "highlight" | "glow";
  /** the heading (the compact size) */
  title: string;
  /** body paragraphs in the right half */
  paragraphs: string[];
  /** the arrow link under the paragraphs */
  link: { label: string; href: string };
  /** the wide 7:3 render under the text (a dusk-gradient placeholder when empty) */
  media?: ReactNode;
  className?: string;
}

/**
 * Product intro: a neon-barred label, then a compact all-caps heading on the left half and
 * light-weight paragraphs plus an arrow link on the right half (stacked on phones), closed by
 * a full-width 7:3 render.
 */
export function StokespaceNova({
  id,
  eyebrow,
  eyebrowTone = "highlight",
  title,
  paragraphs,
  link,
  media,
  className,
}: StokespaceNovaProps) {
  return (
    <section id={id} className={cn("px-gutter py-section", className)}>
      <StokespaceEyebrow label={eyebrow} tone={eyebrowTone} />

      <div className="mt-9 grid gap-x-5 lg:mt-[4.5rem] lg:grid-cols-2">
        <StokespaceHeading size="compact" className="lg:max-w-[85%]">
          {title}
        </StokespaceHeading>
        <div className="mt-10 lg:mt-0 lg:w-[85%]">
          <div className="space-y-[0.75em] text-[length:clamp(0.875rem,0.7625rem+0.462vw,1.178rem)] leading-[1.35] font-light lg:leading-[1.2]">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <StokespaceArrowLink {...link} className="mt-10 lg:mt-[4.9rem]" />
        </div>
      </div>

      <div className="mt-10 aspect-[7/3] lg:mt-[4.4rem] [&>img]:size-full [&>img]:object-cover">
        {media ?? <StokespacePlaceholder tone="sky" />}
      </div>
    </section>
  );
}
