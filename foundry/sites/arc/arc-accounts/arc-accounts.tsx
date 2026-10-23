import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArcFeatureCopy } from "@foundry/arc-feature-copy";
import { ArcHeading } from "@foundry/arc-heading";
import { ArcPlaceholder } from "@foundry/arc-placeholder";
import { ArcReveal } from "@foundry/arc-reveal";

const tones = {
  /** blue-grey */
  accent: "bg-accent",
  /** sage */
  secondary: "bg-secondary",
  /** sand: the highlight colour at 30%, so themes with a strong highlight still get a pastel */
  highlight: "bg-highlight/30",
} as const;

export interface ArcAccount {
  /** the pill above the title */
  badge: string;
  title: string;
  body: string;
  /** the bold link label at the foot, e.g. "Learn more" */
  linkLabel: string;
  href: string;
  /** the card's pastel tint */
  tone: keyof typeof tones;
  /** the illustration across the card's top (363×221); empty: a faint wash placeholder */
  media?: ReactNode;
}

export interface ArcAccountsProps {
  /** the big left-aligned section heading */
  heading: string;
  /** the cards, three to a row on desktop */
  accounts: ArcAccount[];
  className?: string;
}

/** Arc's account cards: a big heading, then three pastel 20px-radius cards, each an illustration over badge, title, copy and link. */
export function ArcAccounts({ heading, accounts, className }: ArcAccountsProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ArcHeading title={heading} />
        <ul className="mt-[2.1rem] grid gap-6 lg:mt-[4.25rem] lg:grid-cols-3">
          {accounts.map((a, i) => (
            <li key={a.title} className="flex">
              <ArcReveal step={i} className="flex w-full">
                <a
                  href={a.href}
                  className={cn("group flex w-full flex-col overflow-clip rounded-[calc(var(--radius)+12px)] text-foreground", tones[a.tone])}
                >
                  <div className="aspect-[363/221] transition-opacity duration-200 group-hover:opacity-90 motion-reduce:transition-none">
                    {a.media ?? <ArcPlaceholder tone="wash" className="size-full" />}
                  </div>
                  <ArcFeatureCopy
                    badge={a.badge}
                    title={a.title}
                    body={a.body}
                    linkLabel={a.linkLabel}
                    className="flex-1 px-6 pt-1 pb-[2.125rem] transition-opacity duration-200 group-hover:opacity-90 motion-reduce:transition-none lg:px-10 lg:pb-10"
                  />
                </a>
              </ArcReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
