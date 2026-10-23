import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";
import { SlashPlaceholder } from "@foundry/slash-placeholder";

export interface SlashSecurityItem {
  /** the point ("Strong sign-in") */
  title: string;
  /** the explanation shown when it is open */
  body: ReactNode;
  /** its art (desktop: in the panel on the left; phones: inside the open item); a soft wash stands in when empty */
  media?: ReactNode;
}

export interface SlashSecurityProps {
  /** the heading, as runs */
  heading: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** the points, one open at a time (the first starts open) */
  items: SlashSecurityItem[];
  className?: string;
}

function Art({ media, className }: { media?: ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-clip rounded-xl border border-border bg-linear-[201deg] from-card from-14% to-popover", className)}>
      {media ?? <SlashPlaceholder tone="card" className="absolute inset-0" />}
    </div>
  );
}

/** A centred serif heading over an art panel (left) and a borderless accordion of security points (right). */
export function SlashSecurity({ heading, sub, items, className }: SlashSecurityProps) {
  const [open, setOpen] = useState(0);
  return (
    <section className={cn("bg-background pt-section text-foreground lg:pt-[calc(var(--section-y)*2+1.75rem)]", className)}>
      <div className="mx-auto max-w-[calc(76rem+2*var(--page-gutter))] px-gutter">
        <SlashHeading parts={heading} sub={sub} size="md" />
        <div className="mt-12 grid gap-10 lg:mt-[4.5rem] lg:grid-cols-[30rem_1fr] lg:gap-[5.4rem]">
          <Art media={items[open]?.media} className="hidden aspect-[480/444] lg:block" />
          <ul className="lg:-mt-3">
            {items.map((item, i) => {
              const isOpen = i === open;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-4 text-left text-base font-medium tracking-[-0.03em] transition-colors duration-150 hover:text-muted-foreground lg:py-[1.375rem] lg:text-xl"
                  >
                    {item.title}
                    <ChevronDown
                      aria-hidden
                      strokeWidth={1.5}
                      className={cn("size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none lg:mr-2 lg:size-5", isOpen && "rotate-180")}
                    />
                  </button>
                  <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-6 text-base leading-[1.4] tracking-[-0.02em] text-foreground/70 lg:max-w-[37rem] lg:pb-7 lg:text-lg lg:leading-[1.5] [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors [&_a:hover]:text-foreground">
                        {item.body}
                      </div>
                      <Art media={item.media} className="mb-6 aspect-[350/324] lg:hidden" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
