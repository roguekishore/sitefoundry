import { cn } from "@foundry/foundry-utils";
import { RiopropertyArrowLink } from "@foundry/rioproperty-arrow-link";
import { RiopropertyRiseText } from "@foundry/rioproperty-rise-text";

export interface RiopropertyStatementProps {
  /** the big capital heading; its words rise out of masks as it scrolls in */
  heading: string;
  /** a violet capital sub-head under the heading at the left */
  subhead?: string;
  /** the grey copy in the right-hand column */
  body: string;
  /** a small arrow link: at the left when there's no sub-head, under the copy otherwise */
  link?: { label: string; href: string };
  /** wide: the heading runs over two thirds of the page; otherwise about half */
  wide?: boolean;
  className?: string;
}

export function RiopropertyStatement({ heading, subhead, body, link, wide = false, className }: RiopropertyStatementProps) {
  const arrow = link && (
    <RiopropertyArrowLink href={link.href} reveal>
      {link.label}
    </RiopropertyArrowLink>
  );
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RiopropertyRiseText
          text={heading}
          className={cn(
            "font-display text-[clamp(2.19rem,1.8rem+1.61vw,3.25rem)] leading-[0.966] font-semibold uppercase",
            wide ? "lg:max-w-[58rem]" : "lg:max-w-[46rem]",
          )}
        />
        <div className="mt-12 flex flex-col gap-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-x-4">
          <div className="lg:col-span-7">
            {subhead ? (
              <RiopropertyRiseText
                as="p"
                split="block"
                text={subhead}
                className="max-w-[31rem] text-lg leading-normal text-primary uppercase lg:text-2xl"
              />
            ) : (
              arrow
            )}
          </div>
          <div className="flex flex-col items-start gap-10 lg:col-span-4 lg:col-start-9 lg:gap-12">
            <RiopropertyRiseText as="p" split="block" text={body} className="leading-normal text-muted-foreground lg:leading-[1.6]" />
            {subhead && arrow}
          </div>
        </div>
      </div>
    </section>
  );
}
