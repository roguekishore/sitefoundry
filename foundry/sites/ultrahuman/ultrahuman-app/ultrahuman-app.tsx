import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { UltrahumanButton } from "@foundry/ultrahuman-button";
import { UltrahumanHeading } from "@foundry/ultrahuman-heading";
import { UltrahumanPlaceholder } from "@foundry/ultrahuman-placeholder";
import { UltrahumanReveal } from "@foundry/ultrahuman-reveal";

export interface UltrahumanAppStore {
  /** the store's name, e.g. "App Store" */
  label: string;
  /** where it goes */
  href: string;
  /** a small icon after the name */
  icon?: ReactNode;
}

export interface UltrahumanAppProps {
  /** the centred title */
  title: string;
  /** one or two lines under it */
  body: string;
  /** the outline store pills (two on the original) */
  stores: UltrahumanAppStore[];
  /** the film (16:9 on desktop, portrait on phones); a placeholder when empty */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  /** screen-reader label for the round play button */
  playLabel?: string;
  className?: string;
}

/** A centred app intro with two outline store pills over a rounded film frame (800×450 on desktop,
 *  a 266×473 portrait on phones) with a round play button in its corner; everything rises in. */
export function UltrahumanApp({ title, body, stores, media, mediaLabel, playLabel, className }: UltrahumanAppProps) {
  return (
    <section className={cn("bg-background pt-[5.75rem] pb-24 text-foreground lg:pt-[8.25rem] lg:pb-36", className)}>
      <UltrahumanHeading
        title={title}
        body={body}
        actions={stores.map((store) => (
          <UltrahumanButton key={store.label} href={store.href} variant="outline" className="min-w-36 [&_svg]:size-[1.125rem]">
            {store.label}
            {store.icon}
          </UltrahumanButton>
        ))}
      />
      <UltrahumanReveal className="relative mx-auto mt-16 aspect-[266/473] w-[68.2%] max-w-[50rem] overflow-clip rounded-lg bg-background lg:mt-32 lg:aspect-video lg:w-[55.5%]">
        {media ?? <UltrahumanPlaceholder tone="soft" label={mediaLabel} />}
        <button
          type="button"
          aria-label={playLabel}
          className="absolute right-4 bottom-4 grid size-12 place-items-center rounded-full bg-foreground/10 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-foreground/20 lg:right-6 lg:bottom-6"
        >
          <Play aria-hidden className="size-3.5 fill-current" strokeWidth={0} />
        </button>
      </UltrahumanReveal>
    </section>
  );
}
