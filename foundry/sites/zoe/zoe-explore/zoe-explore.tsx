import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoeExploreCard {
  /** the small navy tag on the picture */
  tag: string;
  /** one or two lines under the picture */
  text: string;
  href: string;
  /** the square picture (object-cover); a placeholder when empty */
  media?: ReactNode;
  /** placeholder surface when there's no media: photo, or sun for a yellow cover */
  placeholder?: "photo" | "sun";
}

export interface ZoeExploreProps {
  /** the small uppercase line at the top */
  eyebrow: string;
  /** the newsletter sign-up */
  newsletter: {
    title: string;
    /** where the form posts */
    action?: string;
    /** the field's accessible name and its placeholder */
    inputLabel: string;
    placeholder: string;
    submitLabel: string;
    /** the small print under the field */
    note: string;
  };
  /** link cards to other parts of the site */
  cards: ZoeExploreCard[];
  className?: string;
}

/** Zoe's plum explore band with the newsletter sign-up. */
export function ZoeExplore({ eyebrow, newsletter, cards, className }: ZoeExploreProps) {
  return (
    <section className={cn("bg-secondary pt-24 pb-24 text-secondary-foreground lg:pt-[8.5rem] lg:pb-[4.75rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <p className="text-sm font-medium uppercase">{eyebrow}</p>
        <div className="mt-8 hidden border-t border-secondary-foreground/25 xl:block" />

        <div className="mt-10 flex flex-col gap-20 xl:mt-[3.375rem] xl:grid xl:grid-cols-[27rem_1fr] xl:gap-0">
          <div className="max-w-[26rem] xl:max-w-[20.25rem]">
            <h2 className="font-[family-name:var(--zoe-serif,var(--typeface-display))] text-[1.75rem] leading-[1.15] font-light tracking-[-0.01em] lg:text-[1.875rem]">
              {newsletter.title}
            </h2>
            <form
              action={newsletter.action}
              className="mt-4 flex h-[3.75rem] items-center gap-2 rounded-[calc(var(--radius)/2)] border border-secondary-foreground/80 py-2.5 pr-2.5 pl-4 focus-within:border-secondary-foreground"
            >
              <input
                type="email"
                name="email"
                required
                aria-label={newsletter.inputLabel}
                placeholder={newsletter.placeholder}
                className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-secondary-foreground/80"
              />
              <ZoeButton type="submit" variant="light" size="sm" className="text-lg">
                {newsletter.submitLabel}
              </ZoeButton>
            </form>
            <p className="mt-4 text-sm leading-[1.2] opacity-90">{newsletter.note}</p>
          </div>

          <ul className="-mx-gutter flex snap-x snap-mandatory scroll-px-gutter gap-6 overflow-x-auto px-gutter [scrollbar-width:none] max-xl:order-first xl:mx-0 xl:overflow-visible xl:px-0 [&::-webkit-scrollbar]:hidden">
            {cards.map((c) => (
              <li key={c.tag} className="flex w-[15.625rem] shrink-0 snap-start">
                <a
                  href={c.href}
                  className="group flex w-full flex-col overflow-clip rounded-lg bg-background text-foreground transition-transform duration-300 ease-in-out hover:-translate-y-1 motion-reduce:transition-none"
                >
                  <div className="relative aspect-square overflow-clip rounded-lg">
                    <div className="absolute inset-0 *:size-full *:object-cover">
                      {c.media ?? <ZoePlaceholder tone={c.placeholder ?? "photo"} />}
                    </div>
                    <span className="absolute top-4 left-4 rounded-[calc(var(--radius)/3)] bg-foreground px-2 py-1 text-sm leading-none text-background dark:bg-card dark:text-card-foreground">
                      {c.tag}
                    </span>
                  </div>
                  <p className="min-h-[5.5rem] px-4 pt-4 pb-6 text-base leading-[1.2]">{c.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
