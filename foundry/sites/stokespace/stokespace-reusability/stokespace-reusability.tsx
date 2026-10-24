import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StokespaceEyebrow } from "@foundry/stokespace-eyebrow";
import { StokespaceHeading } from "@foundry/stokespace-heading";
import { StokespacePlaceholder } from "@foundry/stokespace-placeholder";

export interface StokespaceReusabilityItem {
  /** row title */
  title: string;
  /** the text shown when the row is open */
  body: string;
}

export interface StokespaceReusabilityProps {
  /** anchor id for the section */
  id?: string;
  /** small label above the heading */
  eyebrow: string;
  /** which accent the label's bar glows in */
  eyebrowTone?: "primary" | "highlight" | "glow";
  /** the section heading */
  title: string;
  /** the wide image (16:9 phones, 7:3 from 1024px) */
  wideMedia?: ReactNode;
  /** the tall 4:5 image beside the list */
  tallMedia?: ReactNode;
  /** the expandable rows */
  items: StokespaceReusabilityItem[];
  /** which row starts open (none by default) */
  defaultOpen?: number;
  className?: string;
}

const ease = "duration-400 ease-[cubic-bezier(0.77,0,0.175,1)]";
const fill = "[&>img]:size-full [&>img]:object-cover";

/**
 * Label + wide all-caps heading (from the second quarter on desktop), a full-width 7:3 image,
 * then a 4:5 image beside a hairline list of expandable rows. Rows sit at 30% ink and come
 * to full ink on hover; a thin plus opens a row (its body slides open, the plus turns to a
 * minus).
 */
export function StokespaceReusability({
  id,
  eyebrow,
  eyebrowTone = "primary",
  title,
  wideMedia,
  tallMedia,
  items,
  defaultOpen,
  className,
}: StokespaceReusabilityProps) {
  const [open, setOpen] = useState<number | undefined>(defaultOpen);

  return (
    <section id={id} className={cn("px-gutter py-section", className)}>
      <div className="grid lg:grid-cols-4 lg:gap-x-5">
        <StokespaceEyebrow label={eyebrow} tone={eyebrowTone} className="self-start justify-self-start" />
        <StokespaceHeading className="mt-[2.1rem] lg:col-span-3 lg:mt-0">{title}</StokespaceHeading>
      </div>

      <div className={cn("mt-9 aspect-video lg:mt-16 lg:aspect-[7/3]", fill)}>{wideMedia ?? <StokespacePlaceholder />}</div>

      <div className="mt-10 grid gap-x-5 lg:mt-20 lg:grid-cols-2">
        <div className={cn("aspect-[4/5]", fill)}>{tallMedia ?? <StokespacePlaceholder />}</div>

        <ul className="mt-5 border-b border-border lg:mt-0 lg:w-[85%] lg:self-start">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title} className="group/item border-t border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? undefined : i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-6 pt-6 pb-6 text-left transition-colors duration-350 ease-[cubic-bezier(0.165,0.84,0.44,1)] lg:pt-7 lg:pb-[3.25rem]",
                    isOpen ? "text-foreground" : "text-foreground/30 hover:text-foreground",
                  )}
                >
                  <span className="block text-[length:clamp(0.875rem,0.7625rem+0.462vw,1.178rem)] leading-[1.35] font-light lg:leading-[1.2]">
                    {item.title}
                  </span>
                  <span aria-hidden className="relative size-4 shrink-0 lg:-my-2 lg:size-8">
                    <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                    <span
                      className={cn(
                        "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform motion-reduce:transition-none",
                        ease,
                        isOpen && "rotate-90",
                      )}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] motion-reduce:transition-none",
                    ease,
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pr-10 pb-6 text-[length:clamp(0.875rem,0.7625rem+0.462vw,1.178rem)] leading-[1.35] font-light lg:pb-10 lg:leading-[1.2]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
