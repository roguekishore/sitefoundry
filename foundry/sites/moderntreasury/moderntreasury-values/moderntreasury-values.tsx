import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryHeading } from "@foundry/moderntreasury-heading";

export interface ModerntreasuryValue {
  /** the card's title */
  title: string;
  /** a sentence or two under it */
  text: string;
}

export interface ModerntreasuryValuesProps {
  /** the section title */
  title: string | string[];
  /** the cards; three fill the row */
  items: ModerntreasuryValue[];
  className?: string;
}

/** Three pale tinted cards of short benefits under a centred heading. */
export function ModerntreasuryValues({ title, items, className }: ModerntreasuryValuesProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ModerntreasuryHeading title={title} />
        <ul className="mt-12 grid gap-6 lg:mt-12 lg:grid-cols-3">
          {items.map((v) => (
            <li key={v.title} className="rounded-lg bg-secondary px-8 py-10 text-secondary-foreground">
              <h3 className="text-[1.3125rem] leading-[1.3] font-normal">{v.title}</h3>
              <p className="mt-3 max-w-[19rem] text-base leading-6 text-foreground/75">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
