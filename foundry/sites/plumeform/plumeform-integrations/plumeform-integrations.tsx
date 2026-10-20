import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformBadge } from "@foundry/plumeform-badge";
import { PlumeformHeading } from "@foundry/plumeform-heading";
import { PlumeformLink } from "@foundry/plumeform-link";
import { PlumeformPanel } from "@foundry/plumeform-panel";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformChipGroup {
  /** small capitals before the chips, e.g. "Export" */
  label: string;
  chips: { label: string; badge?: string }[];
}

export interface PlumeformIntegrationsProps {
  eyebrow?: string;
  title: ReactNode;
  /** the copy on the right */
  body: ReactNode;
  link?: { label: string; href: string };
  /** the wide diagram (where each answer goes); empty shows a placeholder */
  media?: ReactNode;
  /** placeholder width / height */
  aspect?: string;
  /** rows of small chips under the diagram (one row each; side by side on desktop) */
  chipGroups?: PlumeformChipGroup[];
  footnote?: ReactNode;
  id?: string;
  className?: string;
}

/** Heading and copy side by side, a wide diagram panel over warm clouds, then labelled rows of small chips. */
export function PlumeformIntegrations({ eyebrow, title, body, link, media, aspect = "1040/620", chipGroups, footnote, id, className }: PlumeformIntegrationsProps) {
  return (
    <section id={id} className={cn("overflow-x-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-[5.5rem]">
          <PlumeformHeading eyebrow={eyebrow} title={title} />
          <PlumeformReveal step={1} className="max-w-[28rem] lg:pt-10">
            <div className="text-base leading-[1.625] text-muted-foreground">{body}</div>
            {link && <PlumeformLink href={link.href} className="mt-7">{link.label}</PlumeformLink>}
          </PlumeformReveal>
        </div>

        <PlumeformReveal className="mt-16 lg:mt-20 lg:px-8">
          <PlumeformPanel media={media} aspect={aspect} clouds="b" />
        </PlumeformReveal>

        {chipGroups && (
          <PlumeformReveal className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:px-11">
            {chipGroups.map((group) => (
              <div key={group.label} className="flex flex-wrap items-center gap-1.5">
                <span className="mr-2 text-[0.625rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">{group.label}</span>
                {group.chips.map((chip) => (
                  <span key={chip.label} className="inline-flex h-7 items-center gap-1.5 rounded-full bg-secondary px-2.5 text-xs font-medium text-secondary-foreground">
                    {chip.label}
                    {chip.badge && <PlumeformBadge>{chip.badge}</PlumeformBadge>}
                  </span>
                ))}
              </div>
            ))}
          </PlumeformReveal>
        )}

        {footnote && <PlumeformReveal className="mt-10 text-center text-[0.8125rem] text-muted-foreground">{footnote}</PlumeformReveal>}
      </div>
    </section>
  );
}
