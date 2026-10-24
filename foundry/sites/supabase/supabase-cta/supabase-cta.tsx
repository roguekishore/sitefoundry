import { cn } from "@foundry/foundry-utils";
import { SupabaseButton } from "@foundry/supabase-button";
import { SupabaseHeading, type SupabaseHeadingPart } from "@foundry/supabase-heading";

export interface SupabaseCtaProps {
  /** the two-tone title (grey phrase, then ink): one line on desktop, stacked on phones */
  title: SupabaseHeadingPart[];
  /** the green button */
  primary: { label: string; href: string };
  /** the white button beside it */
  secondary?: { label: string; href: string };
  className?: string;
}

/** A quiet closing band: a centred two-tone title and two buttons with plenty of air around them. */
export function SupabaseCta({ title, primary, secondary, className }: SupabaseCtaProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto box-content flex max-w-page flex-col items-center px-gutter py-32 text-center lg:py-[8.25rem]">
        <SupabaseHeading parts={title} stack="phone" className="text-[1.6rem] leading-[1.2] lg:text-[2.125rem] lg:leading-[1.11]" />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <SupabaseButton href={primary.href}>{primary.label}</SupabaseButton>
          {secondary && (
            <SupabaseButton href={secondary.href} variant="outline">
              {secondary.label}
            </SupabaseButton>
          )}
        </div>
      </div>
    </section>
  );
}
