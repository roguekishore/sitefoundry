import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { IncreaseHeading } from "@foundry/increase-heading";
import { IncreaseQuote, type IncreaseQuoteProps } from "@foundry/increase-quote";

export interface IncreaseTeamProps {
  /** the lead statement's dark opening clause */
  lead: string;
  /** the rest of it, in grey */
  rest?: string;
  /** a customer quote under the statement */
  quote?: IncreaseQuoteProps;
  /** a small text link at the bottom */
  link?: { label: string; href: string };
  className?: string;
}

/** A spacious framed text section: a two-tone statement, a grey pull-quote and a small arrow link, all in the left 60%. */
export function IncreaseTeam({ lead, rest, quote, link, className }: IncreaseTeamProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-x border-border px-gutter py-section">
        <IncreaseHeading lead={lead} rest={rest} />
        {quote && <IncreaseQuote {...quote} className="mt-10 lg:mt-11" />}
        {link && (
          <a href={link.href} className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:underline">
            {link.label}
            <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" strokeWidth={2} />
          </a>
        )}
      </div>
    </section>
  );
}
