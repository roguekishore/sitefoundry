import type { ReactNode } from "react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { EsrbespokeParallax } from "@foundry/esrbespoke-parallax";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeHeroProps {
  /** the headline (wraps to two lines) */
  title: string;
  /** a short note in tiny capitals, at column 9 */
  note: string;
  /** the link at the bottom right (desktop) / beside the note (phones) */
  link: { label: string; href: string };
  /** the sound toggle at the bottom left */
  soundLabel: string;
  /** called when the sound toggle is pressed */
  onSound?: () => void;
  /** the full-window film or photo (fills like object-fit: cover). Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

const fade = "transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

/** Full-window film hero: headline above the middle, note at column 9, sound + link along the bottom. */
export function EsrbespokeHero({ title, note, link, soundLabel, onSound, media, className }: EsrbespokeHeroProps) {
  return (
    <section className={cn("dark relative h-svh overflow-clip bg-background text-foreground", className)}>
      <EsrbespokeParallax media={media} drift="exit" className="absolute inset-0" />
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-[27%_30%_1fr_auto] gap-x-4 px-gutter pb-7 lg:grid-cols-12 lg:grid-rows-[44%_1fr_auto]">
        <h1 className="col-span-2 row-start-2 max-w-[7em] font-display text-[2.5rem] leading-none font-medium tracking-[-0.01em] font-stretch-[106%] lg:col-span-6 lg:text-[3.875rem]">
          {title}
        </h1>
        <EsrbespokeLabel as="p" className="col-start-2 row-start-3 max-w-[16rem] pt-0.5 lg:col-span-3 lg:col-start-9 lg:row-start-2 lg:pt-1">
          {note}
        </EsrbespokeLabel>
        <a href={link.href} className={cn("col-start-1 row-start-3 self-start pt-1 hover:opacity-50 lg:col-start-9 lg:row-start-3 lg:self-end lg:pt-0", fade)}>
          <EsrbespokeLabel className="font-semibold">{link.label}</EsrbespokeLabel>
        </a>
        <button type="button" onClick={onSound} className={cn("col-start-1 row-start-4 self-end justify-self-start hover:opacity-70 lg:row-start-3", fade)}>
          <EsrbespokeLabel className="font-semibold">{soundLabel}</EsrbespokeLabel>
        </button>
      </div>
    </section>
  );
}
