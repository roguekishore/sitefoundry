import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RollersButton } from "@foundry/rollers-button";
import { RollersRise } from "@foundry/rollers-rise";
import { RollersRule } from "@foundry/rollers-rule";
import { RollersWords, type RollersWordsSegment } from "@foundry/rollers-words";

export interface RollersAboutAction {
  label: string;
  href: string;
}

export interface RollersAboutProps {
  /** the statement as parts: usually orange first (tone: "accent"), then charcoal */
  heading: RollersWordsSegment[];
  /** the paragraphs under it, in the quiet olive grey */
  paragraphs: string[];
  /** the team photo (4:3); a placeholder when empty */
  media?: ReactNode;
  /** the charcoal pill, then the orange button beside it */
  secondaryAction: RollersAboutAction;
  primaryAction: RollersAboutAction;
  /** an in-page anchor */
  id?: string;
  className?: string;
}

/** A ruled band split in two halves by a hairline: a 4:3 photo on the left, and on the right a
    two-tone statement in a Helvetica-style grotesk, quiet olive paragraphs and a pill +
    rectangle button pair. Lines draw in, words rise, the rest fades up. */
export function RollersAbout({ heading, paragraphs, media, secondaryAction, primaryAction, id, className }: RollersAboutProps) {
  return (
    <section id={id} className={cn("relative grid bg-background text-foreground md:grid-cols-2", className)}>
      <RollersRule className="inset-x-0 top-0" />
      <RollersRule orientation="vertical" className="inset-y-0 left-1/2 hidden md:block" />

      <div className="px-gutter pt-section md:pb-section">
        <RollersRise className="aspect-[1.344] bg-muted">{media}</RollersRise>
      </div>

      <div className="px-gutter pt-8 pb-15 md:pt-section md:pb-section">
        <RollersWords
          as="h3"
          segments={heading}
          className="font-[family-name:var(--typeface-grotesk,var(--typeface-body))] text-[1.55rem] leading-[1.2] tracking-[0.01em] md:mt-1 lg:text-[2.75rem]"
        />
        <div className="mt-6 flex flex-col gap-5 font-[family-name:var(--typeface-grotesk,var(--typeface-body))] text-[0.875rem] leading-[1.5] text-muted-foreground md:mt-10 lg:text-[1.125rem]">
          {paragraphs.map((p, i) => (
            <RollersRise key={i} as="p">
              {p}
            </RollersRise>
          ))}
        </div>
        <RollersRise className="mt-6 flex md:mt-8">
          <RollersButton href={secondaryAction.href} variant="pill">
            {secondaryAction.label}
          </RollersButton>
          <RollersButton href={primaryAction.href}>{primaryAction.label}</RollersButton>
        </RollersRise>
      </div>
    </section>
  );
}
