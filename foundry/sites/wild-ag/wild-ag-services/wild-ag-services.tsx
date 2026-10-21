import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { WildAgHeading } from "@foundry/wild-ag-heading";
import { WildAgMedia } from "@foundry/wild-ag-media";
import { WildAgPillRow } from "@foundry/wild-ag-pill-row";
import { WildAgReveal } from "@foundry/wild-ag-reveal";

export interface WildAgServiceItem {
  label: string;
  href: string;
}

export interface WildAgServicesProps {
  /** an id for in-page links */
  id?: string;
  title: string;
  /** the paragraphs under the title */
  paragraphs: string[];
  /** the numbered pills, in order */
  items: WildAgServiceItem[];
  /** photo above the pills (second on phones) */
  mediaA?: ReactNode;
  /** photo under the text (last on phones) */
  mediaB?: ReactNode;
  className?: string;
}

const frame = "aspect-[1.33] w-full rounded-lg lg:aspect-[1.11]";

export function WildAgServices({ id, title, paragraphs, items, mediaA, mediaB, className }: WildAgServicesProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-section text-muted-foreground", className)}>
      {/* phones: text, photo, pills, photo. Desktop: [photo, pills] | [text, photo] */}
      <div className="mx-auto flex max-w-page flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-x-[4.9rem] lg:gap-y-0">
        <div className="contents lg:flex lg:flex-col">
          <WildAgMedia media={mediaA} className={cn("order-2 lg:mt-[4.7rem]", frame)} />
          <ul className="order-3 grid gap-3 lg:mt-[7.8rem]">
            {items.map((item, i) => (
              <li key={item.href}>
                <WildAgPillRow number={i + 1} label={item.label} href={item.href} />
              </li>
            ))}
          </ul>
        </div>
        <div className="contents lg:flex lg:flex-col">
          <div className="order-1">
            <WildAgHeading>{title}</WildAgHeading>
            <div className="mt-6 space-y-3 text-[1.0625rem] leading-[1.4] font-medium tracking-[-0.01em]">
              {paragraphs.map((p, i) => (
                <WildAgReveal as="p" key={i} step={i + 1}>
                  {p}
                </WildAgReveal>
              ))}
            </div>
          </div>
          <WildAgMedia media={mediaB} className={cn("order-4 lg:mt-[7.5rem]", frame)} />
        </div>
      </div>
    </section>
  );
}
