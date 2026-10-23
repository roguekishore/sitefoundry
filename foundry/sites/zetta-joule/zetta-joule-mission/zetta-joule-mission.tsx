import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleReveal } from "@foundry/zetta-joule-reveal";
import { ZettaJouleStatement } from "@foundry/zetta-joule-statement";
import "./zetta-joule-mission.css";

export interface ZettaJouleMissionProps {
  /** small label, top-left */
  label: string;
  /** the large statement */
  statement: string;
  /** the button under the statement */
  cta: { label: string; href: string };
  /** the smaller paragraph left of the video */
  paragraph: string;
  /** the video (or any media); empty shows a placeholder. It fills its frame and is cropped like object-fit: cover */
  media?: ReactNode;
  /** the dictionary-style line over the video once it is full window */
  overlay: {
    /** the word */
    term: string;
    /** how it is pronounced */
    pronunciation: string;
    /** its meaning */
    definition: string;
  };
  className?: string;
}

const wrap = "mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter lg:px-10";

export function ZettaJouleMission({ label, statement, cta, paragraph, media, overlay, className }: ZettaJouleMissionProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className={cn(wrap, "pt-20 lg:pt-section")}>
        <ZettaJouleStatement label={label} statement={statement}>
          <ZettaJouleReveal>
            <ZettaJouleButton label={cta.label} href={cta.href} />
          </ZettaJouleReveal>
        </ZettaJouleStatement>
      </div>
      <div className="zetta-joule-mission-pin">
        <div className="zetta-joule-mission-stage mx-auto w-full max-w-[calc(var(--page-width)+5rem)] pt-20 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:px-10 lg:pt-[7.5rem] lg:pb-section">
          <ZettaJouleReveal variant="lines" distance={40} as="div" className="zetta-joule-mission-text px-gutter lg:col-span-3 lg:px-0">
            <p className="font-display text-xl leading-[1.3] tracking-[-0.01em] text-muted-foreground">{paragraph}</p>
          </ZettaJouleReveal>
          <div className="zetta-joule-mission-media dark relative mt-20 aspect-[390/488] overflow-clip text-foreground lg:col-span-8 lg:col-start-5 lg:mt-0 lg:aspect-[901/498] lg:rounded-sm">
            {media ? <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{media}</div> : <ZettaJoulePlaceholder tone="deep" className="absolute inset-0 rounded-none" />}
            <div className="zetta-joule-mission-overlay absolute inset-x-4 top-[36%] border-t border-foreground/60 pt-5 lg:inset-x-8 lg:top-[43%] lg:flex lg:justify-between lg:pt-4">
              <p className="text-xl leading-[1.15] font-medium tracking-[-0.01em] lg:text-lg">
                {overlay.term}
                <span className="block font-normal">{overlay.pronunciation}</span>
              </p>
              <p className="mt-8 font-display text-xl leading-[1.3] font-light tracking-[-0.02em] lg:mt-0 lg:max-w-[35rem] lg:text-2xl lg:leading-[1.2]">{overlay.definition}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
