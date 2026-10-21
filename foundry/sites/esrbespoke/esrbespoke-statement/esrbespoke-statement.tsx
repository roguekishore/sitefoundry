import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { EsrbespokeTypeOn } from "@foundry/esrbespoke-type-on";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeStatementProps {
  /** the tiny label at the top (wraps at about 10rem) */
  label?: string;
  /** the big paragraph */
  text: string;
  /** "section": label, then the paragraph far below it; "page-top": the paragraph opens the page under the header */
  placement?: "section" | "page-top";
  /** paper, black or charcoal */
  tone?: EsrbespokeTone;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

/** A label and one big full-width paragraph with a lot of air between them. */
export function EsrbespokeStatement({ label, text, placement = "section", tone = "light", id, className }: EsrbespokeStatementProps) {
  const pageTop = placement === "page-top";
  const textClass = cn(
    pageTop ? "max-w-[33em] text-[1.5rem]" : "text-[1.25rem]",
    "block font-display leading-none font-medium tracking-[-0.01em] font-stretch-[106%] lg:text-[2.5rem]",
  );
  return (
    <section
      id={id}
      className={cn(toneClass(tone), "px-gutter", pageTop ? "pt-[18.75rem] pb-40 lg:pb-[19.25rem]" : "pt-14 pb-8", className)}
    >
      {label && <EsrbespokeLabel as="h2" className="max-w-[10rem]">{label}</EsrbespokeLabel>}
      {pageTop ? (
        <EsrbespokeTypeOn as="p" text={text} step={6} className={textClass} />
      ) : (
        <p className={cn(textClass, label && "mt-[11rem] lg:mt-[20.5rem]")}>{text}</p>
      )}
    </section>
  );
}
