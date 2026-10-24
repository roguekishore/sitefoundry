import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoePodcastPlatform {
  /** the app's name, for screen readers */
  label: string;
  href: string;
  /** its icon (e.g. a lucide icon at size-10) */
  icon: ReactNode;
}

export interface ZoePodcastProps {
  /** the semibold line above the headline (the show's name) */
  eyebrow: string;
  /** the serif headline */
  title: string;
  /** listening apps, shown as icons in a translucent pill */
  platforms: ZoePodcastPlatform[];
  /** the composite image (phone, hosts, episodes); a placeholder when empty */
  media?: ReactNode;
  className?: string;
}

/** Zoe's yellow podcast band. */
export function ZoePodcast({ eyebrow, title, platforms, media, className }: ZoePodcastProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-primary text-primary-foreground", className)}>
      {/* decorative blobs: a paler sweep from the right and a faint deeper shade along the bottom */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-[22%] -right-[35%] aspect-[1.45] w-[150%] rounded-[50%] bg-glow/55 lg:top-[14%] lg:-right-[22%] lg:w-[95%]" />
        <div className="absolute -bottom-[30%] -left-[20%] aspect-[3] w-[90%] rounded-[50%] bg-glow/70 lg:-bottom-[42%] lg:w-[70%]" />
        <div className="absolute -right-[10%] -bottom-[25%] aspect-[2] w-[70%] rounded-[50%] bg-foreground/[0.04] lg:w-[55%]" />
      </div>

      <div className="mx-auto grid max-w-page items-center gap-10 px-gutter pt-16 pb-16 lg:grid-cols-2 lg:gap-0 lg:py-section">
        <div className="text-center lg:pl-[12.5rem] lg:text-left">
          <p className="text-lg font-semibold lg:text-2xl">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-[20rem] font-[family-name:var(--zoe-serif,var(--typeface-display))] text-[2.125rem] leading-[1.1] font-light tracking-[-0.01em] lg:mx-0 lg:mt-5 lg:max-w-[24rem] lg:text-[2.875rem] lg:leading-[1.05]">
            {title}
          </h2>
          <ul className="mt-8 inline-flex items-center gap-6 rounded-full bg-background/20 px-7 py-4 lg:gap-8">
            {platforms.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  aria-label={p.label}
                  className="grid size-10 place-items-center transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none lg:size-12"
                >
                  {p.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative order-first -mx-gutter aspect-[600/700] *:absolute *:inset-0 *:size-full *:rounded-[2rem] *:object-cover sm:mx-auto sm:w-full sm:max-w-[37.5rem] lg:order-last lg:mx-0">
          {media ?? <ZoePlaceholder tone="glass" />}
        </div>
      </div>
    </section>
  );
}
