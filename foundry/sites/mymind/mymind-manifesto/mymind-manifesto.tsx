import { cn } from "@foundry/foundry-utils";
import { MymindEyebrow } from "@foundry/mymind-eyebrow";

export interface MymindManifestoParagraph {
  /** the paragraph's text */
  text: string;
  /** a bold phrase that ends the paragraph */
  strong?: string;
}

export interface MymindManifestoProps {
  /** small capitals above the text */
  eyebrow: string;
  /** the oversized italic first word of the first paragraph */
  lead: string;
  /** the paragraphs (the first continues after the lead word) */
  paragraphs: MymindManifestoParagraph[];
  /** the heavy tangerine word that leads each refusal, e.g. "NO" */
  refusalWord: string;
  /** the refusals, one per line */
  refusals: string[];
  className?: string;
}

/** Serif manifesto column with an italic lead word and a list of refusals. */
export function MymindManifesto({ eyebrow, lead, paragraphs, refusalWord, refusals, className }: MymindManifestoProps) {
  return (
    <section className={cn("bg-background pt-[3.5rem] pb-16 text-foreground lg:pt-[18rem] lg:pb-4", className)}>
      <div className="mx-auto max-w-[45.625rem] px-gutter">
        <MymindEyebrow className="text-center">{eyebrow}</MymindEyebrow>
        <div className="mt-11 space-y-8 font-display text-[1.75rem] leading-[2.75rem] tracking-[-0.02em] text-muted-foreground lg:mt-[3.75rem] lg:space-y-[2.0625rem] lg:text-[2.625rem] lg:leading-[3.125rem]">
          {paragraphs.map((p, i) => (
            <p key={i}>
              {i === 0 && <span className="mr-1.5 align-baseline text-[2.4em] leading-[0] tracking-[-0.04em] italic lg:mr-2.5 lg:text-[1.8em]">{lead}</span>}
              {p.text}
              {p.strong && <strong className="font-semibold text-foreground/80"> {p.strong}</strong>}
            </p>
          ))}
        </div>
      </div>

      <ul className="mx-auto mt-[7.5rem] w-fit px-gutter font-display text-[1.75rem] leading-[2.625rem] tracking-[-0.02em] text-muted-foreground lg:mt-[6.5rem] lg:text-[3.25rem] lg:leading-[4.125rem]">
        {refusals.map((r) => (
          <li key={r} className="flex items-baseline gap-2.5 lg:gap-3">
            <span className="font-[family-name:var(--mymind-round,var(--typeface-body))] text-[1.75rem] leading-none font-extrabold tracking-normal text-primary lg:text-[3.25rem]">{refusalWord}</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
