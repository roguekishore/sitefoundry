import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { K2spaceMedia } from "@foundry/k2space-media";

export interface K2spaceHeroProps {
  /** the giant line (two short words read best: phones stack them) */
  title: string;
  /** the full-bleed video or photo behind it */
  media?: ReactNode;
  className?: string;
}

const corner = "absolute size-3 border-foreground/80 lg:size-[0.9vw]";

/**
 * A window-tall hero: footage edge to edge, one colossal line centred in a frame of four
 * hairline corner brackets.
 */
export function K2spaceHero({ title, media, className }: K2spaceHeroProps) {
  return (
    <section
      className={cn(
        "dark relative isolate flex h-svh items-center overflow-clip bg-background text-foreground [font-stretch:var(--k2space-stretch,100%)]",
        className,
      )}
    >
      <K2spaceMedia media={media} className="absolute inset-0 -z-10" />
      <div className="relative mx-[35px] w-full py-7 lg:mx-[2.43vw] lg:py-[4.2vw]">
        <span aria-hidden className={cn(corner, "top-0 left-0 border-t border-l")} />
        <span aria-hidden className={cn(corner, "top-0 right-0 border-t border-r")} />
        <span aria-hidden className={cn(corner, "bottom-0 left-0 border-b border-l")} />
        <span aria-hidden className={cn(corner, "right-0 bottom-0 border-r border-b")} />
        <h1 className="text-center font-display text-[92px]/[0.92] font-[560] tracking-[-6px] lg:text-[14.81vw]/none lg:tracking-[-0.027em]">
          {title}
        </h1>
      </div>
    </section>
  );
}
