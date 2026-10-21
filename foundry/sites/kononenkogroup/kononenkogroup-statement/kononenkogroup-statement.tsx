import type { ReactNode } from "react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { KononenkogroupMedia } from "@foundry/kononenkogroup-media";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-statement.css";

export interface KononenkogroupStatementProps {
  /** the huge centred heading, one item per line */
  heading: string[];
  /** two short grey notes under it (side by side on wide screens) */
  notes: string[];
  /** the full-bleed photo under the notes */
  media?: ReactNode;
  className?: string;
}

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";

/**
 * A manifesto band: a huge two-line grotesk heading centred on white, two small grey notes on
 * the grid beneath, then a full-bleed photo. The heading's lines and the notes rise into view;
 * the photo travels slowly through its frame (parallax).
 */
export function KononenkogroupStatement({ heading, notes, media, className }: KononenkogroupStatementProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <KononenkogroupLines
        as="h2"
        text={heading}
        className="px-gutter text-center font-sans text-[10.67vw] leading-[0.85] tracking-[-0.045em] lg:text-[9.115vw] lg:leading-[0.82]"
      />
      <div className="mt-[7vw] grid gap-[5vw] px-gutter text-center text-muted-foreground lg:mt-[3.2vw] lg:grid-cols-15 lg:gap-x-[1.11vw] lg:text-left">
        {notes.map((note, i) => (
          <KononenkogroupLines
            key={i}
            text={note}
            className={cn(small, "mx-auto max-w-[88vw] lg:col-span-3 lg:mx-0 lg:max-w-none", i === 0 ? "lg:col-start-5" : "lg:col-start-9")}
          />
        ))}
      </div>
      <div className="kononenkogroup-statement-frame relative mt-[16vw] aspect-[3/2] overflow-clip lg:mt-[7.3vw] lg:aspect-[1440/590]">
        <div className="kononenkogroup-statement-layer absolute inset-x-0 -inset-y-[25%]">
          <KononenkogroupMedia media={media} className="size-full" />
        </div>
      </div>
    </section>
  );
}
