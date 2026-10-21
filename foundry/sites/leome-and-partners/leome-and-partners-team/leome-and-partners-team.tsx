import type { ReactNode } from "react";
import { LeomeAndPartnersLineLink } from "@foundry/leome-and-partners-line-link";
import { LeomeAndPartnersMediaPanel } from "@foundry/leome-and-partners-media-panel";
import { LeomeAndPartnersWordReveal } from "@foundry/leome-and-partners-word-reveal";

export interface LeomeAndPartnersTeamProps {
  /** the heading, one entry per line at desktop (each wraps further on phones) */
  title: string[];
  /** the link at the bottom-right (below the heading on phones) */
  link?: { label: string; href: string };
  /** the full-bleed photo; give it `className="size-full object-cover"`. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-bleed photo panel (at least the window's height, 3:2 on wide screens) with corner
 * marks, a big two-line heading at the bottom-left that rises line by line, and an underlined
 * link at the bottom-right; the photo drifts against the scroll.
 */
export function LeomeAndPartnersTeam({ title, link, media, className }: LeomeAndPartnersTeamProps) {
  return (
    <LeomeAndPartnersMediaPanel media={media} className={className}>
      <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] lg:text-[4rem]">
          {title.map((line, i) => (
            <span key={i} className="block">
              <LeomeAndPartnersWordReveal text={line} />
            </span>
          ))}
        </h2>
        {link && <LeomeAndPartnersLineLink label={link.label} href={link.href} className="shrink-0" />}
      </div>
    </LeomeAndPartnersMediaPanel>
  );
}
