import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface NewhaloInvestorsProps {
  /** the wordmark at the top of the card (set in the orange) */
  brand: string;
  /** an icon before the wordmark */
  brandIcon?: ReactNode;
  /** the small spaced capitals above the heading */
  eyebrow: string;
  /** the bold 66px heading */
  title: string;
  /** the line under it */
  intro: string;
  /** the document cards: a number, a bold title, a paragraph and an orange link */
  documents: { title: string; text: string; href: string; linkLabel: string }[];
  /** the small print at the bottom of the card */
  note: string;
  className?: string;
}

/**
 * A private access page: a window-tall near-black screen with one centred graphite card (an
 * orange rule along its top, 18px corners, a long soft shadow). Bold tight type, and two
 * numbered document cards that lift 3px and take an orange border on hover.
 */
export function NewhaloInvestors({ brand, brandIcon, eyebrow, title, intro, documents, note, className }: NewhaloInvestorsProps) {
  return (
    <section className={cn("dark flex min-h-svh items-center justify-center bg-background px-6 py-6 text-foreground lg:py-[8.7rem]", className)}>
      <div className="w-full max-w-[58.75rem] rounded-[18px] border border-t-4 border-border border-t-primary bg-card p-6 shadow-[0_24px_70px_0] shadow-background/50 lg:px-11 lg:pt-11 lg:pb-10">
        <p className="flex items-center gap-2 font-display text-[2.25rem] leading-none tracking-[-0.02em] text-primary lg:text-[2.1rem]">
          {brandIcon && <span className="flex text-foreground [&_svg]:size-9">{brandIcon}</span>}
          {brand}
        </p>
        <p className="mt-12 text-xs font-bold tracking-[0.16em] text-primary uppercase lg:mt-14">{eyebrow}</p>
        <h1 className="mt-3 text-[2.4rem] leading-[1.05] font-bold tracking-[-0.045em] lg:text-[4.1rem] lg:leading-none">{title}</h1>
        <p className="mt-4 text-lg leading-normal text-foreground/75">{intro}</p>
        <ul className="mt-9 grid gap-4 lg:grid-cols-2">
          {documents.map((d, i) => (
            <li key={d.title}>
              <a
                href={d.href}
                className="group/doc block rounded-[14px] border border-border bg-foreground/[0.02] p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-foreground/[0.04] motion-reduce:transition-none"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-7 block text-[1.75rem] leading-tight font-bold tracking-[-0.025em]">{d.title}</span>
                <span className="mt-3 block text-base leading-normal text-foreground/65">{d.text}</span>
                <span className="mt-12 block text-sm font-bold text-primary group-hover/doc:underline">{d.linkLabel}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-foreground/45">{note}</p>
      </div>
    </section>
  );
}
