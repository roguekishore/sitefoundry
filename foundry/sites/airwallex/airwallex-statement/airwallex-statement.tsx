import { cn } from "@foundry/foundry-utils";

export interface AirwallexStatementProps {
  /** the headline */
  title: string;
  /** the paragraph under it */
  body: string;
  className?: string;
}

/** A centred headline and paragraph. */
export function AirwallexStatement({ title, body, className }: AirwallexStatementProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[5.25rem] pb-8 text-center lg:px-12 lg:pt-32 lg:pb-16">
        <h2 className="mx-auto max-w-[20rem] font-display text-[1.75rem] leading-[1.25] font-bold lg:max-w-none lg:text-[2.5rem]">{title}</h2>
        <p className="mt-6 text-lg leading-[1.5] text-foreground/80 lg:mt-7 lg:text-[1.0625rem] lg:leading-[1.6]">{body}</p>
      </div>
    </section>
  );
}
