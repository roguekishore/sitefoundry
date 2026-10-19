import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetButton } from "@foundry/halodental-sonnet-button";
import { HalodentalSonnetHeading } from "@foundry/halodental-sonnet-heading";
import { HalodentalSonnetMedia } from "@foundry/halodental-sonnet-media";

export interface HalodentalSonnetNewsItem {
  /** the thumbnail: a photo or a publication logo. Empty shows the placeholder. */
  media?: ReactNode;
  /** the headline */
  title: string;
  /** two or three sentences */
  text: string;
  /** where the article lives */
  href: string;
}

export interface HalodentalSonnetNewsProps {
  /** the section title */
  title: string;
  /** the outlined button beside the title */
  action?: { label: string; href: string };
  /** the rows */
  items: HalodentalSonnetNewsItem[];
  /** the outlined button under the list */
  more?: { label: string; href: string };
  className?: string;
}

/** A press list: a big title, then rows of thumbnail, headline, blurb and an arrow. */
export function HalodentalSonnetNews({ title, action, items, more, className }: HalodentalSonnetNewsProps) {
  return (
    <section className={cn("py-section", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-10">
        <div className="flex items-start justify-between gap-4 max-lg:flex-col">
          <HalodentalSonnetHeading title={title} />
          {action && (
            <HalodentalSonnetButton variant="outline" size="sm" href={action.href} className="lg:mt-3">
              {action.label}
            </HalodentalSonnetButton>
          )}
        </div>

        <ul className="mt-10 lg:mt-24">
          {items.map((item, i) => (
            <li key={i} className="grid gap-5 border-t border-border py-8 lg:grid-cols-12 lg:gap-x-6 lg:py-7">
              <div className="lg:col-span-3">
                <HalodentalSonnetMedia ratio="1.8">{item.media}</HalodentalSonnetMedia>
              </div>
              <h3 className="font-display text-[1.3rem] leading-[1.1] font-normal lg:col-span-3 lg:col-start-6 lg:text-[1.75rem]">{item.title}</h3>
              <p className="text-[0.9rem] leading-[1.5] lg:col-span-3 lg:text-[0.9375rem]">{item.text}</p>
              <div className="lg:col-span-1 lg:flex lg:justify-end">
                <HalodentalSonnetButton variant="outline" size="sm" href={item.href} label={item.title} className="w-10 px-0 lg:h-10">
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />
                </HalodentalSonnetButton>
              </div>
            </li>
          ))}
        </ul>

        {more && (
          <div className="mt-6 flex justify-center">
            <HalodentalSonnetButton variant="outline" size="sm" href={more.href}>
              {more.label}
            </HalodentalSonnetButton>
          </div>
        )}
      </div>
    </section>
  );
}
