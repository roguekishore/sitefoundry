import { cn } from "@foundry/foundry-utils";

export interface ArcDisclosure {
  /** a bold run-in at the start (or a whole bold line when there's no text) */
  lead?: string;
  /** the rest of the paragraph */
  text?: string;
  /** puts the lead on its own line above the text */
  leadOnOwnLine?: boolean;
}

export interface ArcFootnote {
  /** the superscript mark, e.g. "1"; leave empty for a continuation paragraph */
  mark?: string;
  text: string;
}

export interface ArcDisclosuresProps {
  /** the legal paragraphs above the rule */
  disclosures: ArcDisclosure[];
  /** the numbered footnotes under it */
  footnotes: ArcFootnote[];
  className?: string;
}

/** Arc's small-print block: 12px paragraphs with bold run-in leads, a hairline, then numbered footnotes. */
export function ArcDisclosures({ disclosures, footnotes, className }: ArcDisclosuresProps) {
  return (
    <section className={cn("bg-background pt-section text-muted-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter text-xs/[1.5]">
        <div className="space-y-4">
          {disclosures.map((d, i) => (
            <p key={i}>
              {d.lead && <strong className={cn("font-bold text-foreground", d.leadOnOwnLine && "block")}>{d.lead}</strong>}
              {d.lead && d.text && !d.leadOnOwnLine && " "}
              {d.text}
            </p>
          ))}
        </div>
        <hr className="my-6 border-foreground/25" />
        <div className="space-y-4">
          {footnotes.map((f, i) => (
            <p key={i}>
              {f.mark && <sup className="mr-1.5 text-[0.5625rem]">{f.mark}</sup>}
              {f.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
