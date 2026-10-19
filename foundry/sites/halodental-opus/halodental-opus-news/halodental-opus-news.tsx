import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusButton } from "@foundry/halodental-opus-button";
import { HalodentalOpusHeading } from "@foundry/halodental-opus-heading";

export interface HalodentalOpusNewsItem {
  /** the story's headline */
  title: string;
  /** a short summary */
  text: string;
  /** where the arrow tile links */
  href: string;
  /** screen-reader label for the arrow tile */
  linkLabel: string;
  /** a 16:9 photo or a publication's logo on white; empty → a white tile */
  media?: ReactNode;
}

export interface HalodentalOpusNewsProps {
  /** the heading */
  title: string;
  /** the outline button beside (desktop) or under (phones) the heading */
  link?: { label: string; href: string };
  /** the stories, one ruled row each */
  items: HalodentalOpusNewsItem[];
  /** the outline button centred under the list; the last row fades out above it */
  more?: { label: string; href: string };
  className?: string;
}

/**
 * Halo Dental's news list: a big heading with an outline button, then rows ruled with
 * 1px ink lines. Each row on the 12-column grid: a 16:9 thumbnail (3 columns), the
 * headline (3), a summary (3) and a small white arrow tile at the end. With `more`, the
 * last row fades into the page under a centred button. On phones each row stacks.
 */
export function HalodentalOpusNews({ title, link, items, more, className }: HalodentalOpusNewsProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <HalodentalOpusHeading title={title} />
          {link && (
            <HalodentalOpusButton variant="outline" href={link.href} className="lg:mb-1.5 lg:h-[2.625rem]">
              {link.label}
            </HalodentalOpusButton>
          )}
        </div>

        <ul className="mt-8 lg:mt-[3.25rem]">
          {items.map((item, i) => {
            const faded = more && items.length > 1 && i === items.length - 1;
            return (
              <li
                key={item.title}
                aria-hidden={faded || undefined}
                className={cn(
                  "grid grid-cols-1 gap-x-5 border-t border-foreground pt-5 pb-[1.875rem] lg:grid-cols-12 lg:py-[1.875rem]",
                  faded && "pointer-events-none max-h-36 overflow-hidden mask-b-from-0% mask-b-to-90% opacity-25 lg:max-h-40",
                )}
              >
                <div className="aspect-[348/193] overflow-hidden rounded-lg bg-card lg:col-span-3 lg:aspect-[325/180]">{item.media}</div>
                <HalodentalOpusHeading as="h3" size="card" title={item.title} className="mt-6 lg:col-span-3 lg:col-start-6 lg:mt-0" />
                <p className="mt-5 text-[0.9375rem] leading-[1.45] lg:col-span-3 lg:mt-1 lg:text-base lg:leading-normal">{item.text}</p>
                <HalodentalOpusButton variant="card" href={item.href} ariaLabel={item.linkLabel} className="mt-5 lg:col-start-12 lg:mt-0 lg:justify-self-end">
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.25} />
                </HalodentalOpusButton>
              </li>
            );
          })}
        </ul>

        {more && (
          <div className={cn("flex justify-center", items.length > 1 ? "-mt-16 lg:-mt-[5.5rem]" : "mt-8")}>
            <HalodentalOpusButton variant="outline" href={more.href} className="relative lg:h-[2.625rem]">
              {more.label}
            </HalodentalOpusButton>
          </div>
        )}
      </div>
    </section>
  );
}
