import { cn } from "@foundry/foundry-utils";
import { M3PgLink } from "@foundry/m3-pg-link";

export interface M3PgPrinciple {
  /** the card's title */
  title: string;
  /** its paragraph */
  body: string;
  /** the link under it */
  link: { label: string; href: string };
}

export interface M3PgPrinciplesProps {
  /** the small label in the first column; each entry is a line on desktop (joined on phones) */
  label: string[];
  /** the big uppercase headline, one entry per line */
  headline: string[];
  /** the grey line under the headline */
  tagline: string;
  /** the cards (three fill the row) */
  items: M3PgPrinciple[];
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function M3PgPrinciples({ label, headline, tagline, items, id, className }: M3PgPrinciplesProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter pb-section text-foreground", className)}>
      <div className="mx-auto max-w-page lg:grid lg:grid-cols-4 lg:gap-x-5">
        <p className="text-base leading-6 tracking-[-0.01em] lg:text-xl lg:leading-7">
          {label.map((line, i) => (
            <span key={i} className="lg:block">
              {line}
              {i < label.length - 1 && " "}
            </span>
          ))}
        </p>

        <div className="lg:col-span-3">
          <h2 className="mt-2.5 text-[2.25rem] leading-[2.625rem] font-semibold tracking-[-0.03em] uppercase lg:mt-0 lg:text-[4rem] lg:leading-[4.625rem]">
            {headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-2xl leading-8 tracking-[-0.02em] text-muted-foreground lg:mt-12 lg:text-[2.5rem] lg:leading-[3rem]">
            {tagline}
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-5 lg:mt-12">
            {items.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg leading-6 font-semibold tracking-[-0.01em] lg:text-2xl lg:leading-7 lg:tracking-[-0.02em]">{item.title}</h3>
                <hr className="mt-4 border-t border-border lg:mt-6" />
                <p className="mt-5 text-base leading-6 tracking-[-0.01em] lg:mt-7">{item.body}</p>
                <M3PgLink href={item.link.href} className="mt-5 inline-block text-base leading-6 lg:text-lg">
                  {item.link.label}
                </M3PgLink>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
