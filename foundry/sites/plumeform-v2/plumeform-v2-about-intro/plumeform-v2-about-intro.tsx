import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2Eyebrow, PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2AboutIntroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** the card under the title */
  profile: {
    /** small capitals above the name */
    label?: string;
    name: string;
    role?: string;
    /** a soft pill under the role */
    button?: { label: string; href: string };
    paragraphs: string[];
    /** an underlined link after the paragraphs */
    link?: { label: string; href: string };
  };
  id?: string;
  className?: string;
}

export function PlumeformV2AboutIntro({ eyebrow, title, lead, profile, id, className }: PlumeformV2AboutIntroProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pt-[calc(var(--section-y)*0.85+3.75rem)] pb-10 text-foreground lg:pt-[8.5rem]", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformV2Heading eyebrow={eyebrow} title={title} body={lead} size="page" className="max-w-[47rem] [&_div]:lg:text-lg" />
        <PlumeformV2Reveal
          step={1}
          className="mt-16 grid gap-10 rounded-2xl bg-card p-8 text-card-foreground shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_8px_24px_-12px_color-mix(in_oklab,var(--foreground)_10%,transparent)] sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16"
        >
          <div>
            {profile.label && <PlumeformV2Eyebrow className="mb-5">{profile.label}</PlumeformV2Eyebrow>}
            <h2 className="font-display text-4xl leading-tight font-bold tracking-[-0.03em]">{profile.name}</h2>
            {profile.role && <p className="mt-2 text-sm text-muted-foreground">{profile.role}</p>}
            {profile.button && (
              <PlumeformV2Button variant="soft" href={profile.button.href} size="lg" className="mt-6 h-11 px-6 text-sm">
                {profile.button.label}
              </PlumeformV2Button>
            )}
          </div>
          <div className="space-y-5 text-base leading-[1.65] text-muted-foreground lg:text-[1.0625rem]">
            {profile.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {profile.link && (
              <a href={profile.link.href} className="inline-block border-b-2 border-primary pb-0.5 font-bold text-foreground transition-colors hover:text-primary">
                {profile.link.label}
              </a>
            )}
          </div>
        </PlumeformV2Reveal>
      </div>
    </section>
  );
}
