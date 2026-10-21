import type { ReactNode } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { KononenkogroupMedia } from "@foundry/kononenkogroup-media";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-hero.css";

export interface KononenkogroupHeroProps {
  /** the title, one line each; the last word of the last line is set in the serif */
  title: string[];
  /** the full-window photo or video (fills the frame, cropped like object-fit: cover) */
  media?: ReactNode;
  className?: string;
}

/**
 * A window-sized hero: one photo filling the screen, edge to edge, with a two-line title in
 * white at the bottom left whose last word turns serif. The title rises on load; the photo
 * drifts down slowly as the hero scrolls away.
 */
export function KononenkogroupHero({ title, media, className }: KononenkogroupHeroProps) {
  const last = title[title.length - 1] ?? "";
  const cut = last.lastIndexOf(" ");
  const lastHead = cut > 0 ? last.slice(0, cut) : "";
  const lastWord = cut > 0 ? last.slice(cut + 1) : last;

  return (
    <section
      className={cn(
        "kononenkogroup-hero relative h-[calc(100svh-0.5rem)] overflow-clip bg-foreground lg:h-svh",
        className,
      )}
    >
      <div className="kononenkogroup-hero-media dark absolute inset-0">
        <KononenkogroupMedia media={media} className="size-full" />
      </div>
      <h1 className="dark absolute inset-x-0 bottom-0 px-gutter pb-[3.5vw] font-sans text-[10.67vw] leading-[0.82] tracking-[-0.045em] text-foreground lg:pb-[1.6vw] lg:text-[4.17vw]">
        {title.slice(0, -1).map((line, i) => (
          <KononenkogroupLines key={i} as="span" trigger="load" delay={200 + i * 90} text={line} className="block" />
        ))}
        <span className="block">
          {lastHead && <KononenkogroupLines as="span" trigger="load" delay={200 + (title.length - 1) * 90} text={lastHead} />}{" "}
          <KononenkogroupLines
            as="span"
            trigger="load"
            delay={200 + (title.length - 1) * 90}
            text={lastWord}
            className="font-display tracking-[-0.04em]"
          />
        </span>
      </h1>
    </section>
  );
}
