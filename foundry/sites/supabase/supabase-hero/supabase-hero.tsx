import { cn } from "@foundry/foundry-utils";
import { SupabaseButton } from "@foundry/supabase-button";
import { SupabaseHeading, type SupabaseHeadingPart } from "@foundry/supabase-heading";

export interface SupabaseHeroProps {
  /** the title's phrases, each on its own line (the site sets an ink line over a green one) */
  title: SupabaseHeadingPart[];
  /** the lead paragraph, beside the title on desktop */
  lead: string;
  /** the green button */
  primary: { label: string; href: string };
  /** the white button beside it */
  secondary?: { label: string; href: string };
  className?: string;
}

/** A plain-white opening: a two-line 46px title on the left, the lead to its right on its baseline, two buttons below. */
export function SupabaseHero({ title, lead, primary, secondary, className }: SupabaseHeroProps) {
  return (
    <header className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto box-content grid max-w-page px-gutter pt-10 pb-8 lg:grid-cols-2 lg:gap-x-12 lg:pt-[9.75rem] lg:pb-16">
        <SupabaseHeading as="h1" size="title" stack="always" parts={title} />
        <p className="mt-4 max-w-[34rem] text-base text-muted-foreground lg:mt-0 lg:self-end lg:pb-1">{lead}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          <SupabaseButton href={primary.href}>{primary.label}</SupabaseButton>
          {secondary && (
            <SupabaseButton href={secondary.href} variant="outline">
              {secondary.label}
            </SupabaseButton>
          )}
        </div>
      </div>
    </header>
  );
}
