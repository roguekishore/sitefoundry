import { cn } from "@foundry/foundry-utils";
import { IncreaseHeading } from "@foundry/increase-heading";
import { IncreaseQuoteCard, type IncreaseQuoteCardProps } from "@foundry/increase-quote-card";

export interface IncreaseCustomerPoint {
  /** the bold opening words */
  lead: string;
  /** the rest of the sentence */
  rest: string;
}

export interface IncreaseCustomerGroup {
  /** the group's heading (a kind of customer) */
  title: string;
  /** short points, three to a row from md */
  points: IncreaseCustomerPoint[];
  /** an optional customer card under the points */
  card?: IncreaseQuoteCardProps;
}

export interface IncreaseCustomersProps {
  /** the lead statement's dark opening clause */
  lead: string;
  /** the rest of it, in grey */
  rest?: string;
  /** groups of points, one per kind of customer */
  groups: IncreaseCustomerGroup[];
  className?: string;
}

/**
 * Who it's for: a two-tone statement, then for each kind of customer a 24px heading, three
 * short bold-lead points in columns and, optionally, a wide quote card washed in blue.
 */
export function IncreaseCustomers({ lead, rest, groups, className }: IncreaseCustomersProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-x border-border px-gutter pt-11 pb-12 lg:pt-[5.25rem] lg:pb-20">
        <IncreaseHeading lead={lead} rest={rest} />
        {groups.map((group) => (
          <div key={group.title} className="mt-14 lg:mt-14">
            <h3 className="max-w-[40rem] text-2xl leading-[1.25] tracking-[-0.01em] text-pretty">{group.title}</h3>
            <ul className="mt-8 grid gap-6 md:mt-9 md:grid-cols-3 md:gap-x-12">
              {group.points.map((point) => (
                <li key={point.lead} className="text-[0.9375rem] leading-6 text-foreground/85">
                  <strong className="font-semibold text-foreground">{point.lead}</strong> {point.rest}
                </li>
              ))}
            </ul>
            {group.card && <IncreaseQuoteCard {...group.card} className="mt-10 md:mt-8" />}
          </div>
        ))}
      </div>
    </section>
  );
}
