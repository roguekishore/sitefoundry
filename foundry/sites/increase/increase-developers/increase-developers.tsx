import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { IncreaseButton } from "@foundry/increase-button";
import { IncreaseHeading } from "@foundry/increase-heading";
import { IncreaseQuote, type IncreaseQuoteProps } from "@foundry/increase-quote";
import "./increase-developers.css";

export interface IncreaseDeveloperRow {
  /** the row statement's bold opening words */
  lead: string;
  /** the rest of the statement, in grey */
  rest?: string;
  /** a small primary-coloured link under the statement */
  link?: { label: string; href: string };
  /** a customer quote at the bottom of the row */
  quote?: IncreaseQuoteProps;
  /** the diagram on the right (desktop only). Empty: the dot grid alone, as a placeholder */
  media?: ReactNode;
}

export interface IncreaseDevelopersProps {
  /** the intro statement's dark opening clause */
  lead: string;
  /** the rest of it, in grey */
  rest?: string;
  /** the mint button under the intro */
  action?: { label: string; href: string };
  /** the ruled rows below: statement, link and quote left, a diagram on a dot grid right */
  rows: IncreaseDeveloperRow[];
  className?: string;
}

/**
 * Increase's engineering band, always dark navy: a two-tone statement and a mint button,
 * then ruled rows, each with a statement and link at the top left, a customer quote at the
 * bottom left and a diagram on a dot grid at the right that fades up as it scrolls in.
 */
export function IncreaseDevelopers({ lead, rest, action, rows, className }: IncreaseDevelopersProps) {
  return (
    <section className={cn("dark border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-x border-border">
        <div className="px-gutter pt-[5.25rem] pb-12 lg:pt-[7.25rem]">
          <IncreaseHeading lead={lead} rest={rest} className="lg:max-w-[47rem]" />
          {action && (
            <IncreaseButton href={action.href} className="mt-8">
              {action.label}
            </IncreaseButton>
          )}
        </div>

        {rows.map((row) => (
          <div
            key={row.lead}
            className="grid gap-12 border-t border-border px-gutter pt-[3.75rem] pb-12 lg:min-h-[34.25rem] lg:grid-cols-[1fr_32.5rem] lg:gap-16 lg:pt-[3.25rem]"
          >
            <div className="flex flex-col">
              <IncreaseHeading as="h3" size="row" lead={row.lead} rest={row.rest} className="lg:max-w-[33rem]" />
              {row.link && (
                <a href={row.link.href} className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-primary hover:underline lg:mt-8">
                  {row.link.label}
                  <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" strokeWidth={2} />
                </a>
              )}
              {row.quote && <IncreaseQuote size="sm" {...row.quote} className="mt-12 lg:mt-auto lg:pt-12" />}
            </div>
            <div
              aria-hidden={row.media ? undefined : true}
              className="increase-developers-media increase-developers-dots hidden min-h-[27.5rem] items-center justify-center lg:flex"
            >
              {row.media}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
