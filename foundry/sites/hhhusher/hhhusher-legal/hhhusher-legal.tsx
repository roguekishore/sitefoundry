import { cn } from "@foundry/foundry-utils";

export interface HhhusherLegalSection {
  /** the section heading, e.g. "Returns" */
  heading: string;
  /** the section's paragraphs */
  paragraphs: string[];
}

export interface HhhusherLegalProps {
  sections: HhhusherLegalSection[];
  className?: string;
}

/**
 * Long-form legal text on cream: medium-weight 43px headings and 16px paragraphs in one
 * 40rem column on the left, generous space between sections. No motion.
 */
export function HhhusherLegal({ sections, className }: HhhusherLegalProps) {
  return (
    <section className={cn("bg-background pt-[1.9rem] pb-section text-foreground lg:pt-[7.5rem]", className)}>
      <div className="mx-auto flex max-w-page flex-col gap-12 px-gutter lg:gap-10">
        {sections.map((section, i) => (
          <article key={i} className="max-w-[40rem]">
            <h2 className="font-display text-[1.82rem] leading-[1] font-medium tracking-[-0.01em] lg:text-[2.6875rem] lg:leading-[1.1]">{section.heading}</h2>
            <div className="mt-[0.7rem] flex flex-col gap-5 text-[1.04rem] leading-[1.3] font-medium tracking-[-0.02em] lg:mt-11 lg:gap-[1.1rem] lg:text-base lg:leading-[1.3]">
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
