import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchHalftone } from "@foundry/aspensearch-halftone";
import "./aspensearch-cta.css";

export interface AspensearchCtaProps {
  /** the top row's words: the first sits at the left edge, the last at the right edge (three short words work best) */
  lineOne: string[];
  /** the long word of the second row, indented, followed by the mint arrow box */
  lineTwo: string;
  /** where the whole phrase links to */
  href: string;
  /** the field behind the words; empty: halftone placeholder */
  media?: ReactNode;
  className?: string;
}

const box = "aspensearch-cta-word inline-block overflow-clip px-[0.06em] font-display leading-[0.94] tracking-[-0.04em] uppercase";

/**
 * A field one and a half windows tall with a call to action set as word blocks across it:
 * ink boxes for the top row (left edge, middle, right edge) and a paper box for the long word
 * below, closed by a mint arrow square. Each word rises inside its box as the phrase scrolls
 * into view, one after another.
 */
export function AspensearchCta({ lineOne, lineTwo, href, media, className }: AspensearchCtaProps) {
  return (
    <section className={cn("relative isolate min-h-[153svh] overflow-clip bg-background text-foreground", className)}>
      <AspensearchHalftone media={media} className="absolute inset-0 -z-10" />
      <a href={href} aria-label={[...lineOne, lineTwo].join(" ")} className="absolute inset-x-0 top-[62%] block text-[8.8vw] lg:text-[9.2vw]">
        <span className="flex items-start">
          {lineOne.map((w, i) => (
            <span
              key={i}
              aria-hidden
              className={cn(box, "bg-foreground text-background", i === 1 && "ml-[15vw]", i > 0 && i === lineOne.length - 1 && "ml-auto")}
              style={{ "--aspensearch-cta-i": i } as CSSProperties}
            >
              <span className="block">{w}</span>
            </span>
          ))}
        </span>
        <span className="flex pl-[21.25vw]">
          <span aria-hidden className={cn(box, "bg-background text-foreground")} style={{ "--aspensearch-cta-i": lineOne.length } as CSSProperties}>
            <span className="block">{lineTwo}</span>
          </span>
          <span aria-hidden className="flex size-[0.94em] shrink-0 items-center justify-center bg-highlight text-highlight-foreground">
            <ArrowRight className="size-[0.45em]" strokeWidth={1.25} />
          </span>
        </span>
      </a>
    </section>
  );
}
