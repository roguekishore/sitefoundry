import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformAboutIntroProps {
  eyebrow?: string;
  /** the page title */
  title: ReactNode;
  /** the paragraph under it */
  lead?: ReactNode;
  /** the white card about the person behind it */
  person: {
    /** small capitals above the name */
    eyebrow?: string;
    name: string;
    role?: string;
    /** a quiet pill link under the role */
    link?: { label: string; href: string };
    /** paragraphs on the right */
    paragraphs: ReactNode[];
    /** an underlined link under them */
    contact?: { label: string; href: string };
  };
  className?: string;
}

/** About page opening: eyebrow, big title and lead, then a white card introducing the person behind it. */
export function PlumeformAboutIntro({ eyebrow, title, lead, person, className }: PlumeformAboutIntroProps) {
  return (
    <section className={cn("bg-background pt-[calc(3.75rem+3.5rem)] pb-12 text-foreground lg:pt-[calc(3.75rem+5rem)] lg:pb-16", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <PlumeformHeading as="h1" size="page" eyebrow={eyebrow} title={title} className="max-w-[46rem]">
          {lead && <div className="text-lg leading-[1.6]">{lead}</div>}
        </PlumeformHeading>

        <PlumeformReveal step={1} className="mt-14 lg:mt-16">
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_12%,transparent)] lg:grid-cols-[2fr_3fr] lg:gap-10 lg:px-12 lg:py-12">
            <div>
              {person.eyebrow && <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">{person.eyebrow}</p>}
              <h2 className="mt-4 text-[2.25rem] leading-[1.1] font-bold tracking-[-0.025em]">{person.name}</h2>
              {person.role && <p className="mt-2 text-sm text-muted-foreground">{person.role}</p>}
              {person.link && (
                <PlumeformButton href={person.link.href} variant="soft" className="mt-7 h-11 px-6">
                  {person.link.label}
                </PlumeformButton>
              )}
            </div>
            <div className="space-y-5 text-base leading-[1.625] text-muted-foreground">
              {person.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {person.contact && (
                <a href={person.contact.href} className="inline-block border-b-2 border-highlight pb-0.5 text-[0.9375rem] font-bold text-foreground transition-colors duration-200 hover:text-highlight">
                  {person.contact.label}
                </a>
              )}
            </div>
          </div>
        </PlumeformReveal>
      </div>
    </section>
  );
}
