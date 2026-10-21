import { cn } from "@foundry/foundry-utils";
import { M3PgLink } from "@foundry/m3-pg-link";

export interface M3PgStatementProps {
  /** the opening of the headline, in grey */
  quiet: string;
  /** the rest of the headline, in full ink (follows on the same line) */
  strong: string;
  /** the paragraph under it */
  body: string;
  /** the link at the end */
  link: { label: string; href: string };
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function M3PgStatement({ quiet, strong, body, link, id, className }: M3PgStatementProps) {
  return (
    <section id={id} className={cn("relative z-10 bg-background px-gutter pb-section text-foreground lg:pb-[5.5rem]", className)}>
      <div className="mx-auto max-w-page lg:grid lg:grid-cols-4 lg:gap-x-5">
        <h2 className="text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-0.03em] uppercase lg:col-span-3 lg:pr-24 lg:text-[4rem] lg:leading-[4.5rem]">
          <span className="text-muted-foreground">{quiet}</span> {strong}
        </h2>
        <div className="mt-8 lg:col-span-2 lg:col-start-2 lg:mt-20">
          <p className="text-2xl leading-8 tracking-[-0.02em]">{body}</p>
          <M3PgLink href={link.href} className="mt-8 inline-block text-base leading-6 lg:mt-14">
            {link.label}
          </M3PgLink>
        </div>
      </div>
    </section>
  );
}
