import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NewhaloAccordion, type NewhaloAccordionItem } from "@foundry/newhalo-accordion";
import { NewhaloMedia } from "@foundry/newhalo-media";
import { newhaloReveal } from "@foundry/newhalo-reveal";

export interface NewhaloProductAppProps {
  /** the anchor id (for the sub-navigation) */
  id?: string;
  /** the 64px heading beside the app tile */
  title: string;
  /** the paragraph under it */
  body: string;
  /** the icon on the amber→red app tile */
  appIcon: ReactNode;
  /** the features that open as white cards */
  features: NewhaloAccordionItem[];
  /** the tall photo or video on the left; empty shows the placeholder */
  media?: ReactNode;
  /** screen-reader name of the orange play tile on the media; leave out to hide it */
  playLabel?: string;
  className?: string;
}

/**
 * A software section on paper: a tall rounded photo with an orange play tile on the left; on
 * the right an amber→red app tile beside a 64px heading, a paragraph, and features that
 * open as white cards (the open one's tile turns orange).
 */
export function NewhaloProductApp({ id, title, body, appIcon, features, media, playLabel, className }: NewhaloProductAppProps) {
  return (
    <section id={id} className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-y-12 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className={cn("relative lg:col-span-6", newhaloReveal("bloom"))}>
          <NewhaloMedia className="aspect-[0.9] rounded-lg">{media}</NewhaloMedia>
          {playLabel && (
            <button
              type="button"
              aria-label={playLabel}
              className="absolute top-1/2 left-1/2 flex size-20 -translate-1/2 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-colors duration-300 hover:text-background"
            >
              <Play aria-hidden strokeWidth={1.25} className="size-7" />
            </button>
          )}
        </div>
        <div className="flex flex-col lg:col-span-6">
          <div className="flex items-center gap-5 lg:gap-8">
            <span aria-hidden className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-highlight to-glow text-primary-foreground lg:size-20 [&_svg]:size-9 lg:[&_svg]:size-11">
              {appIcon}
            </span>
            <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.01em] lg:text-[4rem] lg:leading-none">{title}</h2>
          </div>
          <p className={cn("mt-6 max-w-[27rem] text-[0.91rem] leading-normal lg:mt-8 lg:text-base", newhaloReveal("fade"))}>{body}</p>
          <NewhaloAccordion items={features} variant="cards" group={`${id ?? "newhalo"}-app`} openIndex={0} className="-mx-gutter mt-12 lg:mt-auto lg:-mr-[1.875rem] lg:-ml-[1.875rem]" />
        </div>
      </div>
    </section>
  );
}
