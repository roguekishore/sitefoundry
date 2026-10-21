import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-principles.css";

export interface KononenkogroupPrinciplesProps {
  /** the labels at the tips of the rays, clockwise from the top (eight on the original) */
  rays: string[];
  /** the heading shown first, one item per line */
  first: string[];
  /** the heading that replaces it halfway through, one item per line */
  second: string[];
  /** hide the whole section below 1024px, as the original does */
  desktopOnly?: boolean;
  className?: string;
}

function Heading({ lines, which }: { lines: string[]; which: "first" | "second" }) {
  return (
    <span className={cn(`kononenkogroup-principles-${which}`, "flex flex-col justify-center")}>
      {lines.map((line, i) => (
        <span key={i} className="kononenkogroup-principles-mask">
          <span className="kononenkogroup-principles-word">{line}</span>
        </span>
      ))}
    </span>
  );
}

function Stage({ rays, first, second, copy }: Omit<KononenkogroupPrinciplesProps, "desktopOnly" | "className"> & { copy?: boolean }) {
  const Tag = copy ? "p" : "h2";
  return (
    <div className="kononenkogroup-principles-stage absolute inset-0">
      <div className="kononenkogroup-principles-star" aria-hidden>
        {rays.map((ray, i) => (
          <span
            key={i}
            className="kononenkogroup-principles-ray"
            style={{ "--kononenkogroup-principles-angle": `${(360 / rays.length) * i}deg` } as CSSProperties}
          >
            <span className="kononenkogroup-principles-line" />
            <span className="kononenkogroup-principles-label font-sans text-[2.4vw] leading-none lg:text-[max(9px,0.625vw)]">{ray}</span>
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Tag className="relative text-center font-sans text-[10.67vw] leading-[0.85] tracking-[-0.045em] lg:text-[4.17vw] lg:leading-[0.875]">
          <Heading lines={first} which="first" />
          <Heading lines={second} which="second" />
        </Tag>
      </div>
    </div>
  );
}

/**
 * A pinned interlude two windows tall: a star of eight hairline rays with numbered tips around
 * a centred two-line heading. While it is pinned the star turns half a turn, the heading slides
 * up and out as a second one rises into its place, and the stage fades to black, leading into
 * dark sections. Desktop only by default, like the original.
 */
export function KononenkogroupPrinciples({ rays, first, second, desktopOnly = true, className }: KononenkogroupPrinciplesProps) {
  return (
    <section className={cn("kononenkogroup-principles relative h-[200svh]", desktopOnly && "hidden lg:block", className)}>
      <div className="sticky top-0 h-svh overflow-clip bg-background text-foreground">
        <Stage rays={rays} first={first} second={second} />
        <div aria-hidden className="kononenkogroup-principles-night dark absolute inset-0 bg-background text-foreground">
          <Stage rays={rays} first={first} second={second} copy />
        </div>
      </div>
    </section>
  );
}
