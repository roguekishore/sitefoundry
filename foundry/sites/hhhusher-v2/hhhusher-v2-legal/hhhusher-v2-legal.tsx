import { cn } from "@foundry/foundry-utils";

export interface HhhusherV2LegalSection {
  heading: string;
  /** one string per paragraph */
  paragraphs: string[];
}

export interface HhhusherV2LegalProps {
  sections: HhhusherV2LegalSection[];
  className?: string;
}

export function HhhusherV2Legal({ sections, className }: HhhusherV2LegalProps) {
  return (
    <section className={cn("bg-background pt-[calc(var(--section-y)*0.5)] pb-section text-foreground lg:pt-[calc(var(--section-y)*0.9)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="max-w-[40rem]">
          {sections.map((section) => (
            <div key={section.heading} className="mt-12 first:mt-0 lg:mt-[2.8rem]">
              <h2 className="font-display text-[1.82rem] leading-[1] font-[570] tracking-[-0.02em] lg:text-[2.6875rem]">{section.heading}</h2>
              <div className="mt-6 space-y-[1.1rem] font-display text-[1.04rem] leading-[1.3] font-[570] tracking-[-0.01em] lg:mt-[3.1rem] lg:text-base lg:leading-[1.3]">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
