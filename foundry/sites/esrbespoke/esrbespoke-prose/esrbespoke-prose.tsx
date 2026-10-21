import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";

export interface EsrbespokeProseSection {
  /** a small sub-heading (optional) */
  heading?: string;
  /** its paragraphs */
  paragraphs: string[];
}

export interface EsrbespokeProseProps {
  /** the tiny label at the left */
  label: string;
  /** the text, in groups */
  sections: EsrbespokeProseSection[];
  /** the gap between paragraphs: "tight" (one line) or "loose" (two lines) */
  spacing?: "tight" | "loose";
  tone?: EsrbespokeTone;
  id?: string;
  className?: string;
}

const text = "font-display text-[0.9375rem] leading-[1.2] font-medium tracking-[-0.01em] font-stretch-[106%] lg:text-[1.25rem]";

/** Label at the left, long text from column 7. */
export function EsrbespokeProse({ label, sections, spacing = "tight", tone = "light", id, className }: EsrbespokeProseProps) {
  const gap = cn("flex flex-col", spacing === "loose" ? "gap-[3.25rem]" : "gap-6");
  return (
    <section id={id} className={cn(toneClass(tone), "pb-28 lg:pb-40", className)}>
      <div className="mx-gutter grid grid-cols-2 gap-x-4 border-t border-border lg:grid-cols-12">
        <EsrbespokeLabel as="h2" className="col-span-2 pt-8 lg:col-span-3">{label}</EsrbespokeLabel>
        <div className={cn("col-span-2 mt-16 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:pt-8", gap)}>
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h3 className="mb-4 font-display text-[1rem] leading-[1.2] font-medium tracking-[-0.01em] font-stretch-[106%] lg:text-[1.125rem] lg:leading-[1.3]">
                  {section.heading}
                </h3>
              )}
              <div className={gap}>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className={text}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
