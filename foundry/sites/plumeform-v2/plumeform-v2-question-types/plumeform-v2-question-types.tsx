import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Backdrop } from "@foundry/plumeform-v2-backdrop";
import { PlumeformV2Badge } from "@foundry/plumeform-v2-badge";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";
import { PlumeformV2GlassCard } from "@foundry/plumeform-v2-glass-card";
import { PlumeformV2Eyebrow, PlumeformV2Heading } from "@foundry/plumeform-v2-heading";
import { PlumeformV2Reveal } from "@foundry/plumeform-v2-reveal";

export interface PlumeformV2QuestionChip {
  label: string;
  /** a small line icon before the label */
  icon?: ReactNode;
  /** a badge after the label (e.g. a plan name) */
  badge?: string;
  href?: string;
}

export interface PlumeformV2QuestionTypesProps {
  eyebrow?: string;
  title: ReactNode;
  /** the long explanation at the right */
  body: ReactNode;
  link?: { label: string; href: string };
  /** labelled groups of chips under the heading */
  groups: { label: string; chips: PlumeformV2QuestionChip[] }[];
  /** the chip shown as picked */
  selected?: string;
  /** the example in the card; empty shows a placeholder */
  example?: ReactNode;
  /** height of the empty example placeholder (CSS length) */
  exampleHeight?: string;
  /** the round back button (its label is for screen readers) */
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
  /** e.g. "1 of 24" */
  counter?: string;
  /** a small line under the card */
  note?: string;
  /** the full list under everything */
  catalogue?: { label: string; items: { label: string; badge?: string }[] };
  /** a closing line under the list; strong text is brightened */
  footnote?: ReactNode;
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

export function PlumeformV2QuestionTypes({
  eyebrow,
  title,
  body,
  link,
  groups,
  selected,
  example,
  exampleHeight = "28rem",
  previous,
  next,
  counter,
  note,
  catalogue,
  footnote,
  backdrop,
  id,
  className,
}: PlumeformV2QuestionTypesProps) {
  return (
    <section id={id} className={cn("dark relative isolate overflow-clip px-gutter py-[calc(var(--section-y)*0.85)] text-foreground lg:py-section", className)}>
      <PlumeformV2Backdrop media={backdrop} />
      <div className="mx-auto grid max-w-[calc(var(--page-width)-2*var(--page-gutter))] gap-y-12 lg:grid-cols-2 lg:gap-x-24">
        <PlumeformV2Heading eyebrow={eyebrow} title={title} className="max-w-xl lg:self-end" />
        <PlumeformV2Reveal step={1} className="max-w-[28rem] text-base leading-[1.65] text-muted-foreground lg:text-[1.0625rem]">
          <div>{body}</div>
          {link && (
            <PlumeformV2Button variant="link" href={link.href} arrow className="mt-8">
              {link.label}
            </PlumeformV2Button>
          )}
        </PlumeformV2Reveal>

        <PlumeformV2Reveal className="space-y-7">
          {groups.map((group, g) => (
            <div key={group.label} className={cn(g > 0 && "hidden lg:block")}>
              <PlumeformV2Eyebrow className="mb-3.5 text-[0.625rem] font-bold tracking-[0.2em]">{group.label}</PlumeformV2Eyebrow>
              {/* phones: one row that scrolls sideways to the window's edge */}
              <ul className="-mr-gutter flex gap-2 overflow-x-auto pr-gutter pb-1 [scrollbar-width:none] lg:mr-0 lg:flex-wrap lg:overflow-visible lg:pr-0 lg:pb-0">
                {group.chips.map((chip) => {
                  const on = chip.label === selected;
                  return (
                    <li key={chip.label}>
                      <a
                        href={chip.href ?? "#"}
                        aria-current={on ? "true" : undefined}
                        className={cn(
                          "flex h-10 shrink-0 items-center gap-2 rounded-full border px-3.5 whitespace-nowrap text-[0.8125rem] transition-colors duration-200 [&_svg]:size-3.5 [&_svg]:opacity-80",
                          on
                            ? "border-highlight bg-foreground/5 font-bold text-foreground"
                            : "border-foreground/12 text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                        )}
                      >
                        {chip.icon}
                        {chip.label}
                        {chip.badge && <PlumeformV2Badge>{chip.badge}</PlumeformV2Badge>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </PlumeformV2Reveal>

        <div className="lg:-ml-6 lg:pt-12">
          <div className="relative mr-4 mb-4">
            {/* two cards peeking out behind the front one */}
            <span aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-foreground/8 bg-foreground/3" />
            <span aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-foreground/10 bg-foreground/4" />
            <PlumeformV2GlassCard step={1} className="bg-card/80 p-6 lg:p-7">
              {example ?? <div className="rounded-[calc(var(--radius)/2)] bg-foreground/6" style={{ height: exampleHeight }} />}
            </PlumeformV2GlassCard>
          </div>
          {(previous || next || counter) && (
            <div className="mt-8 flex items-center gap-2">
              {previous && (
                <a
                  href={previous.href}
                  aria-label={previous.label}
                  className="flex size-10 items-center justify-center rounded-full border border-foreground/20 transition-colors hover:bg-foreground/8"
                >
                  <ArrowLeft className="size-4" strokeWidth={2} aria-hidden />
                </a>
              )}
              {next && (
                <PlumeformV2Button href={next.href} arrow>
                  {next.label}
                </PlumeformV2Button>
              )}
              {counter && <span className="ml-auto text-[0.8125rem] font-semibold text-muted-foreground">{counter}</span>}
            </div>
          )}
          {note && <p className="mt-4 text-[0.8125rem] text-muted-foreground">{note}</p>}
        </div>

        {catalogue && (
          <PlumeformV2Reveal className="mt-12 lg:col-span-2 lg:mt-16">
            <PlumeformV2Eyebrow className="text-[0.625rem] font-bold tracking-[0.2em]">{catalogue.label}</PlumeformV2Eyebrow>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3.5 text-[0.9375rem] text-muted-foreground lg:grid-cols-5 lg:gap-y-4">
              {catalogue.items.map((item) => (
                <li key={item.label} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {item.label}
                  {item.badge && <PlumeformV2Badge>{item.badge}</PlumeformV2Badge>}
                </li>
              ))}
            </ul>
            {footnote && (
              <p className="mt-10 max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground [&_strong]:font-bold [&_strong]:text-foreground">{footnote}</p>
            )}
          </PlumeformV2Reveal>
        )}
      </div>
    </section>
  );
}
