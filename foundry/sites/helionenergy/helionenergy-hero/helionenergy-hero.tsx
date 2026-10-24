import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HelionenergyHeading } from "@foundry/helionenergy-heading";
import { HelionenergyPlaceholder } from "@foundry/helionenergy-placeholder";

export interface HelionenergyHeroProps {
  /** the heading's lines, broken on every width; the first line is stepped in */
  title: ReactNode[];
  /** the full-bleed film or photo behind it (cropped like object-fit: cover) */
  media?: ReactNode;
  className?: string;
}

/**
 * A full-window hero: footage fills the screen edge to edge and a two-line uppercase heading sits
 * low on the left, its first line stepped in.
 */
export function HelionenergyHero({ title, media, className }: HelionenergyHeroProps) {
  return (
    <section className={cn("dark relative isolate h-svh overflow-clip bg-background text-foreground", className)}>
      <HelionenergyPlaceholder media={media} tone="film" className="absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 px-gutter pb-[4.5rem] lg:pb-12">
        <div className="mx-auto max-w-page">
          <HelionenergyHeading as="h1" lines={title} breakOn="always" indentFirst />
        </div>
      </div>
    </section>
  );
}
