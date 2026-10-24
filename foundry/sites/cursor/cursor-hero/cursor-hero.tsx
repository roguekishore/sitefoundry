import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { CursorButton } from "@foundry/cursor-button";
import { CursorMedia } from "@foundry/cursor-media";

export interface CursorHeroAction {
  label: ReactNode;
  href: string;
  /** a shorter label for phones (the original swaps "Download for …" for "Get started") */
  mobileLabel?: ReactNode;
}

export interface CursorHeroProps {
  /** the opening statement, about two lines at 26px */
  title: string;
  /** the ink pill */
  primaryAction: CursorHeroAction;
  /** the pale grey pill (hidden on phones) */
  secondaryAction?: CursorHeroAction;
  /** the big picture: an image or video; a placeholder wash when empty */
  media?: ReactNode;
  /** accessible name of the empty placeholder */
  mediaLabel?: string;
  className?: string;
}

/** Small statement, two pills, one 720px media frame. */
export function CursorHero({ title, primaryAction, secondaryAction, media, mediaLabel, className }: CursorHeroProps) {
  return (
    <section className={cn("bg-background pb-section text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter pt-26 lg:pt-28">
        <h1 className="max-w-[15em] font-display text-2xl leading-[1.25] tracking-[-0.01em] text-balance lg:text-[1.625rem]">
          {title}
        </h1>
        <div className="mt-5.5 flex flex-wrap gap-2.5">
          <CursorButton href={primaryAction.href}>
            {primaryAction.mobileLabel ? (
              <>
                <span className="contents sm:hidden">{primaryAction.mobileLabel}</span>
                <span className="hidden sm:contents">{primaryAction.label}</span>
              </>
            ) : (
              primaryAction.label
            )}
          </CursorButton>
          {secondaryAction && (
            <CursorButton href={secondaryAction.href} variant="secondary" className="hidden sm:inline-flex">
              {secondaryAction.label}
            </CursorButton>
          )}
        </div>
        <CursorMedia label={mediaLabel} className="mt-13 h-[45rem] lg:mt-14">
          {media}
        </CursorMedia>
      </div>
    </section>
  );
}
