import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CursorButton } from "@foundry/cursor-button";

export interface CursorCtaProps {
  /** a short line, e.g. "Try it today." */
  title: string;
  /** the ink pill */
  action: { label: ReactNode; href: string; mobileLabel?: ReactNode };
  className?: string;
}

/** A big centred line and one pill. */
export function CursorCta({ title, action, className }: CursorCtaProps) {
  return (
    <section className={cn("bg-background pt-section pb-[calc(var(--section-y)*2)] text-foreground", className)}>
      <div className="mx-auto flex max-w-[calc(var(--page-width)+2*var(--page-gutter))] flex-col items-center px-gutter text-center">
        <h2 className="font-display text-[3.125rem] leading-[1.1] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">{title}</h2>
        <CursorButton href={action.href} className="mt-5.5">
          {action.mobileLabel ? (
            <>
              <span className="contents sm:hidden">{action.mobileLabel}</span>
              <span className="hidden sm:contents">{action.label}</span>
            </>
          ) : (
            action.label
          )}
        </CursorButton>
      </div>
    </section>
  );
}
