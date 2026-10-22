import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { NekoArrowLink } from "@foundry/neko-arrow-link";
import { NekoSectionLabel } from "@foundry/neko-section-label";
import { NekoSlot } from "@foundry/neko-slot";
import "./neko-photo-grid.css";

export interface NekoPhoto {
  /** the small label in the corner, shown in capitals */
  label: string;
  /** the photo; empty shows a placeholder */
  media?: ReactNode;
}

export interface NekoPhotoGridProps {
  /** the divider row above the grid */
  label?: string;
  /** three photos: wide, tall, square */
  photos: [NekoPhoto, NekoPhoto, NekoPhoto];
  title: string;
  body: string;
  link?: { label: string; href: string };
  className?: string;
}

// where each photo sits: phones (2 columns) first, then desktop (4 columns)
const places = [
  "[grid-area:2/1/3/3] aspect-square lg:[grid-area:1/1/2/3] lg:aspect-[674/539]",
  "[grid-area:1/2/2/3] self-end aspect-[168/225] lg:[grid-area:1/3/2/4] lg:self-stretch lg:aspect-auto",
  "[grid-area:1/1/2/2] aspect-[168/282] lg:[grid-area:2/2/3/3] lg:aspect-square",
];

export function NekoPhotoGrid({ label, photos, title, body, link, className }: NekoPhotoGridProps) {
  return (
    <section className={cn("bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {label && <NekoSectionLabel label={label} className="pt-section" />}
        <div className="mt-section grid grid-cols-2 gap-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <NekoSlot key={p.label} media={p.media} tone="slate" className={cn("rounded-2xl", places[i])}>
              <span className="neko-photo-grid-label absolute top-6 left-5 text-sm font-medium tracking-[0.04em] text-background uppercase lg:top-7 lg:text-base dark:text-foreground">
                {p.label}
              </span>
            </NekoSlot>
          ))}
          <div className="[grid-area:3/1/4/3] pt-7 lg:[grid-area:2/4/3/5] lg:pt-2">
            <h2 className="font-display text-[2rem] leading-10 tracking-[-0.02em] lg:text-[2.75rem] lg:leading-[3.25rem]">{title}</h2>
            <p className="mt-6 text-base leading-6 lg:mt-8 lg:text-lg">{body}</p>
            {link && <NekoArrowLink label={link.label} href={link.href} className="mt-6 lg:mt-8" />}
          </div>
        </div>
      </div>
    </section>
  );
}
