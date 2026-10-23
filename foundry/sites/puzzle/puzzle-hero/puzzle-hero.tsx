import type { ReactNode } from "react";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";
import { PuzzlePlaceholder } from "@foundry/puzzle-placeholder";

export interface PuzzleHeroProps {
  /** the monospace caps in the mint pill */
  badge: string;
  /** the headline; may hold <br /> */
  title: ReactNode;
  /** the paragraph under it */
  text: ReactNode;
  /** the ink button */
  primary: { label: string; href: string };
  /** the outline button */
  secondary: { label: string; href: string };
  /** the arrow link under the buttons */
  link?: { label: string; href: string };
  /** the small print at the bottom of the column */
  note?: string;
  /** the 5:3 video or image; empty shows a placeholder */
  media?: ReactNode;
  /** the label of the white pill over the frame; leave out for none */
  playLabel?: string;
  className?: string;
}

/** Copy on the left, a wide video frame on the right. */
export function PuzzleHero({ badge, title, text, primary, secondary, link, note, media, playLabel, className }: PuzzleHeroProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-12 px-gutter pt-10 pb-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-9 lg:pt-20 lg:pb-[6.25rem]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="flex items-center gap-3 rounded-[1.25rem] border border-glow/80 bg-glow/20 px-3 py-1.5 font-mono text-[0.75rem]/[1.35] tracking-[0.04em] uppercase lg:px-4 lg:text-[0.8125rem]/[1.35]">
            <span aria-hidden className="hidden size-2.5 shrink-0 rounded-full bg-glow lg:block" />
            {badge}
          </p>
          <h1 className="mt-4 font-display text-[2.75rem]/[1.15] font-normal tracking-[-0.015em] text-balance lg:mt-5 lg:text-[3.25rem]/[1.25]">
            {title}
          </h1>
          <p className="mt-4 max-w-[36rem] text-base/[1.55] text-foreground/70 lg:mt-5 lg:text-lg/[1.5]">{text}</p>
          <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:mt-5 lg:gap-[1.125rem]">
            <PuzzleButton href={primary.href} className="w-full sm:w-auto">
              {primary.label}
            </PuzzleButton>
            <PuzzleButton href={secondary.href} variant="outline" className="w-full sm:w-auto">
              {secondary.label}
            </PuzzleButton>
          </div>
          {link && (
            <a
              href={link.href}
              className="group mt-6 inline-flex items-center gap-4 text-lg font-medium transition-colors duration-300 hover:text-highlight motion-reduce:transition-none"
            >
              {link.label}
              <ArrowRight aria-hidden className="size-6 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.5} />
            </a>
          )}
          {note && <p className="mt-6 text-sm font-medium text-foreground/70">{note}</p>}
        </div>

        <div className="relative aspect-[5/3] overflow-clip rounded-[calc(var(--radius)*0.9)] lg:rounded-[calc(var(--radius)+2px)]">
          {media ?? <PuzzlePlaceholder className="size-full" />}
          {playLabel && (
            <span className="absolute right-2.5 bottom-2.5 flex items-center gap-2 rounded-[calc(var(--radius)*0.6)] border border-border bg-card py-1.5 pr-1.5 pl-3 text-xs text-card-foreground lg:right-3.5 lg:bottom-3.5 lg:gap-3 lg:py-2 lg:pr-2 lg:pl-3 lg:text-sm">
              {playLabel}
              <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-background lg:size-6">
                <Play aria-hidden className="size-2.5 translate-x-px fill-current lg:size-3" />
              </span>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
