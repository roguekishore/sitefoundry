import { cn } from "@foundry/foundry-utils";
import { NewhaloAccordion, type NewhaloAccordionItem } from "@foundry/newhalo-accordion";
import { NewhaloButton } from "@foundry/newhalo-button";

export interface NewhaloFaqTeaserProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 64px heading on the left */
  title: string;
  /** the orange button under it (to the full help centre) */
  cta: { label: string; href: string };
  /** a handful of questions */
  items: NewhaloAccordionItem[];
  className?: string;
}

/** A short FAQ on paper: a 64px heading and an orange button on the left, a hairline accordion on the right. */
export function NewhaloFaqTeaser({ id, title, cta, items, className }: NewhaloFaqTeaserProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-10 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <h2 className="max-w-[22rem] font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{title}</h2>
          <NewhaloButton label={cta.label} href={cta.href} className="mt-6 lg:mt-9" />
        </div>
        <NewhaloAccordion items={items} group={`${id ?? "newhalo"}-faq`} className="border-b-0 lg:col-span-7 lg:col-start-6" />
      </div>
    </section>
  );
}
