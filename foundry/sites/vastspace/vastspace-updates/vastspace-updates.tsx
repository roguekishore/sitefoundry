import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VastspaceButton } from "@foundry/vastspace-button";
import { VastspacePlaceholder } from "@foundry/vastspace-placeholder";
import { VastspaceSectionHeading } from "@foundry/vastspace-section-heading";
import "./vastspace-updates.css";

export interface VastspaceUpdate {
  /** small mono label, e.g. "Press release" */
  category: string;
  /** the date, shown as written (capitalised by the style) */
  date: string;
  /** the headline */
  title: string;
  /** where the card links */
  href: string;
  /** the square photo (an <img> or any node that fills its box); empty shows a placeholder */
  image?: ReactNode;
}

export interface VastspaceUpdatesProps {
  /** the section title */
  title: string;
  /** the button at the right of the title */
  action: { label: string; href: string };
  /** the cards, six fill two rows on desktop */
  items: VastspaceUpdate[];
  className?: string;
}

export function VastspaceUpdates({ title, action, items, className }: VastspaceUpdatesProps) {
  return (
    <section className={cn("border-t border-border bg-card pt-section pb-[12.25rem] text-card-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <VastspaceSectionHeading title={title} action={<VastspaceButton label={action.label} href={action.href} />} />
        <ul className="mt-12 grid gap-y-[3.75rem] md:mt-[4.8rem] md:grid-cols-2 md:gap-x-[3.75rem] lg:grid-cols-3">
          {items.map((u) => (
            <li key={u.title}>
              <a href={u.href} className="block">
                <div className="aspect-square overflow-clip">
                  <div className="vastspace-updates-zoom size-full [&>*]:size-full [&>*]:object-cover">{u.image ?? <VastspacePlaceholder className="size-full" />}</div>
                </div>
                <p className="mt-7 flex items-center gap-3 font-mono text-xs/3 tracking-[0.02em] uppercase md:mt-10">
                  {u.category}
                  <span aria-hidden className="size-3 bg-highlight" />
                  {u.date}
                </p>
                <h3 className="mt-6 text-lg/[1.12] font-medium md:text-xl/[1.12]">{u.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
