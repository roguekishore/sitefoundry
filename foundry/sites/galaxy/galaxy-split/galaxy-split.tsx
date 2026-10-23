import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GalaxyButton } from "@foundry/galaxy-button";
import { GalaxyPlaceholder } from "@foundry/galaxy-placeholder";

export interface GalaxySplitLink {
  /** the link's title */
  title: string;
  /** one or two lines under it */
  text: string;
  /** where it goes */
  href: string;
}

export interface GalaxySplitProps {
  /** the small uppercase line over the heading */
  eyebrow?: string;
  /** the heading */
  title: string;
  /** xl: 40px → 72px (feature stories) · lg: 40px → 60px (business lines) */
  titleSize?: "xl" | "lg";
  /** the paragraph under the heading */
  body?: string;
  /** the white pill button */
  action?: { label: string; href: string };
  /** the media: an <img>, <video>, or (with mediaShape "card") any element; a muted placeholder when empty */
  media?: ReactNode;
  /** screen-reader text for the placeholder */
  mediaLabel?: string;
  /** which half the media takes on desktop (phones always show it first) */
  mediaSide?: "left" | "right";
  /** square · wide (16:9) · art (small centred tile) · card (your element, centred, up to 560px) */
  mediaShape?: "square" | "wide" | "art" | "card";
  /** keep the text to five columns, away from the media */
  narrowText?: boolean;
  /** link columns under the row (four across on desktop, one ruled list on phones) */
  links?: GalaxySplitLink[];
  className?: string;
}

const shapes = {
  square: "aspect-square w-full",
  wide: "aspect-video w-full",
  art: "mx-auto aspect-[9/10] w-40 lg:w-[19rem]",
  card: "mx-auto w-full max-w-[35rem]",
};

export function GalaxySplit({
  eyebrow,
  title,
  titleSize = "xl",
  body,
  action,
  media,
  mediaLabel,
  mediaSide = "left",
  mediaShape = "square",
  narrowText,
  links,
  className,
}: GalaxySplitProps) {
  const left = mediaSide === "left";
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className={cn("lg:col-span-6 lg:row-start-1", left ? "lg:col-start-1" : "lg:col-start-7")}>
            <div className={cn(shapes[mediaShape], mediaShape !== "card" && "overflow-clip")}>
              {media ?? <GalaxyPlaceholder label={mediaLabel} className={mediaShape === "card" ? "aspect-[2/1] rounded-2xl" : undefined} />}
            </div>
          </div>
          <div
            className={cn(
              "lg:row-start-1",
              left ? (narrowText ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-6 lg:col-start-7") : narrowText ? "lg:col-span-5 lg:col-start-1" : "lg:col-span-6 lg:col-start-1",
            )}
          >
            {eyebrow && <p className="mb-3 text-xs leading-[1.5] tracking-[0.1em] uppercase lg:mb-6 lg:text-sm lg:leading-5">{eyebrow}</p>}
            <h2
              className={cn(
                "font-display text-[2.5rem] leading-[1.1] font-[560] tracking-[-0.035em] [font-stretch:var(--galaxy-stretch,100%)]",
                titleSize === "xl" ? "lg:text-[4.5rem] lg:leading-[1.0555]" : "lg:text-[3.75rem] lg:leading-[1.0667]",
              )}
            >
              {title}
            </h2>
            {body && <p className="mt-4 text-base leading-6 lg:mt-8 lg:text-lg lg:leading-[1.5]">{body}</p>}
            {action && (
              <GalaxyButton href={action.href} className={body ? "mt-7 lg:mt-12" : "mt-5 lg:mt-8"}>
                {action.label}
              </GalaxyButton>
            )}
          </div>
        </div>
        {links && links.length > 0 && (
          <ul className="mt-14 flex flex-col gap-7 border-l border-border lg:mt-[5.5rem] lg:grid lg:grid-cols-4 lg:gap-0 lg:border-l-0">
            {links.map((link) => (
              <li key={link.title} className="group relative pl-4 lg:border-l lg:border-border lg:px-6">
                <a href={link.href} className="inline-flex items-center gap-0.5 text-lg leading-7 after:absolute after:inset-0 lg:text-xl">
                  {link.title}
                  <ChevronRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-2.5 motion-reduce:transition-none"
                    strokeWidth={2}
                  />
                </a>
                <p className="mt-1 text-base leading-6 text-muted-foreground lg:text-lg lg:leading-7">{link.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
