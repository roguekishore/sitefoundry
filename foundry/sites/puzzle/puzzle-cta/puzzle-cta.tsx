import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PuzzleButton } from "@foundry/puzzle-button";
import { PuzzlePixels } from "@foundry/puzzle-pixels";

export interface PuzzleCtaProps {
  /** the headline; may hold <br /> */
  title: ReactNode;
  text?: ReactNode;
  /** the soft violet button */
  primary: { label: string; href: string };
  /** the white-outline button */
  secondary?: { label: string; href: string };
  /** the quiet arrow link under the buttons */
  link?: { label: string; href: string };
  className?: string;
}

/** The violet closing band. */
export function PuzzleCta({ title, text, primary, secondary, link, className }: PuzzleCtaProps) {
  return (
    <section className={cn("bg-background", className)}>
      <div className="relative overflow-clip rounded-t-[calc(var(--radius)*0.9)] bg-primary px-6 pt-[6.25rem] pb-28 text-center text-primary-foreground lg:rounded-t-lg lg:pt-[9.25rem] lg:pb-40">
        <PuzzlePixels pattern="block" className="absolute top-16 -left-4 hidden [--pixel:4.25rem] lg:grid" />
        <PuzzlePixels pattern="step" className="absolute top-[18rem] -right-8 [--pixel:2.5rem] lg:top-[17rem] lg:[--pixel:3.9rem]" />
        <PuzzlePixels pattern="stair" className="absolute -bottom-36 left-4 [--pixel:2.25rem] lg:-bottom-48 lg:left-[24rem] lg:[--pixel:4.25rem]" />

        <div className="relative mx-auto max-w-[36rem]">
          <h2 className="font-display text-[2.125rem]/[1.05] font-medium tracking-[-0.01em] text-balance lg:text-[3.25rem]/[1.08]">{title}</h2>
          {text && <p className="mx-auto mt-6 max-w-[21rem] text-base/[1.6] text-primary-foreground/70 sm:max-w-[28rem] lg:mt-9">{text}</p>}
          <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row lg:mt-9 lg:gap-[1.125rem]">
            <PuzzleButton href={primary.href} variant="violet" className="h-12 lg:h-[3.125rem]">
              {primary.label}
            </PuzzleButton>
            {secondary && (
              <PuzzleButton href={secondary.href} variant="outline-on-dark" className="h-12 lg:h-[3.125rem]">
                {secondary.label}
              </PuzzleButton>
            )}
          </div>
          {link && (
            <a
              href={link.href}
              className="group mt-7 inline-flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground motion-reduce:transition-none lg:mt-8 lg:text-base"
            >
              {link.label}
              <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
