import { useState, type ReactNode } from "react";
import { Tag, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerFacts, type SuperpowerFact } from "@foundry/superpower-facts";
import { SuperpowerMedia } from "@foundry/superpower-media";
import "./superpower-offer.css";

export interface SuperpowerOfferProps {
  /** the small white pill above the headline */
  tag?: string;
  title: string;
  /** the question above the answers */
  question?: string;
  /** the answer pills; the last one is drawn quieter (frosted) */
  options: { label: string; href: string }[];
  facts?: SuperpowerFact[];
  /** the photo behind; empty: a warm placeholder */
  media?: ReactNode;
  mediaLabel?: string;
  /** cover the window as a popup with a close button */
  overlay?: boolean;
  /** close button label, for screen readers */
  closeLabel?: string;
  className?: string;
}

export function SuperpowerOffer({ tag, title, question, options, facts, media, mediaLabel, overlay = false, closeLabel = "Close", className }: SuperpowerOfferProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <section
      role={overlay ? "dialog" : undefined}
      aria-modal={overlay || undefined}
      aria-label={overlay ? title : undefined}
      className={cn(
        "dark relative min-h-svh overflow-clip bg-background text-foreground",
        overlay && "superpower-offer-in fixed inset-0 z-50 overflow-y-auto",
        className,
      )}
    >
      <SuperpowerMedia media={media} tone="warm" label={mediaLabel} className="absolute inset-0" />
      <div className="absolute inset-0 bg-background/35" aria-hidden />
      {overlay && (
        <button
          type="button"
          aria-label={closeLabel}
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 z-10 grid size-[2.625rem] place-items-center rounded-full bg-foreground/20 backdrop-blur-md transition-colors duration-200 hover:bg-foreground/30 lg:top-[2.1rem] lg:right-[2.3rem]"
        >
          <X className="size-5" strokeWidth={1.75} aria-hidden />
        </button>
      )}
      <div className="relative flex min-h-svh flex-col items-center px-gutter pt-[7.5rem] pb-16 lg:ml-auto lg:w-1/2 lg:pt-[9.4rem] lg:pr-[6.5rem] lg:pb-20">
        {tag && (
          <span className="flex h-8 items-center gap-2 rounded-full bg-foreground px-3.5 text-[0.9375rem] text-background lg:h-[2.375rem] lg:px-4">
            <Tag className="size-3.5 fill-background" aria-hidden />
            {tag}
          </span>
        )}
        <h2 className="mt-6 max-w-[17ch] text-center text-[1.75rem] leading-[1.15] font-normal tracking-[-0.02em] lg:mt-3 lg:text-[3.375rem] lg:leading-[1.05] lg:tracking-[-0.03em]">
          {title}
        </h2>
        {question && <p className="mt-4 text-center text-[0.9375rem] text-foreground/80 lg:mt-5 lg:text-[1.125rem] lg:text-foreground/90">{question}</p>}
        <ul className="mt-5 flex w-full flex-col gap-2.5 lg:mt-5 lg:w-[15.8rem]">
          {options.map((o, i) => (
            <li key={o.label}>
              <a
                href={o.href}
                className={cn(
                  "flex h-14 items-center justify-center rounded-full px-4 text-center text-[0.9375rem] leading-tight transition-[background-color,transform] duration-250 ease-out hover:-translate-y-px motion-reduce:transition-none lg:h-[3.25rem] lg:text-[0.875rem]",
                  i === options.length - 1 && options.length > 1
                    ? "border border-foreground/45 bg-foreground/20 backdrop-blur-md hover:bg-foreground/30"
                    : "bg-foreground text-background hover:bg-foreground/90",
                )}
              >
                {o.label}
              </a>
            </li>
          ))}
        </ul>
        {facts && facts.length > 0 && (
          <SuperpowerFacts items={facts} centered className="mt-auto max-w-[20rem] pt-12 text-[0.8125rem] lg:max-w-none lg:text-[0.9375rem] [&_svg]:fill-foreground [&_svg]:text-background" />
        )}
      </div>
    </section>
  );
}
