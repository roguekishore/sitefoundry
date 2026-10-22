import type { ReactNode } from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BevelButton } from "@foundry/bevel-button";
import { bevelLead, bevelTitle } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";
import "./bevel-hero.css";

export interface BevelHeroChip {
  /** a small icon (lucide) */
  icon: ReactNode;
  /** the metric's name */
  label: ReactNode;
  /** its value */
  value: ReactNode;
}

export interface BevelHeroProps {
  /** the page title (two lines at desktop, three on phones) */
  title: ReactNode;
  /** the lead under it */
  lead: ReactNode;
  /** the dark pill */
  cta: { label: ReactNode; href: string; icon?: ReactNode };
  /** star rating out of five (halves allowed) */
  rating?: number;
  /** the small text after the stars */
  ratingLabel?: ReactNode;
  /** the device shot (phone + watch); a phone-shaped placeholder when empty */
  media?: ReactNode;
  /** the sky behind the top of the frame; a soft accent wash when empty */
  backdrop?: ReactNode;
  /** the light-streak video behind the device; a soft tinted band when empty */
  streak?: ReactNode;
  /** up to four metric chips that take turns floating in around the device (desktop) */
  chips?: BevelHeroChip[];
  className?: string;
}

/** Where the chips float, as a share of the frame (desktop only), and their tilt. */
const chipSpots = [
  "left-[18%] top-[50%] [--bevel-chip-r:6deg]",
  "right-[7%] top-[61%] [--bevel-chip-r:3deg]",
  "left-[-0.5%] top-[77%] [--bevel-chip-r:-14deg]",
  "right-[16%] top-[42%] [--bevel-chip-r:-4deg]",
];

/**
 * A rounded frame inset 8px from the window, washed from a pale sky blue down to white: a big
 * centered two-line title, a lead, a dark pill and a star rating, then the device rising from
 * the bottom edge. Metric chips drift in and out around it on a 12s loop.
 */
export function BevelHero({ title, lead, cta, rating = 5, ratingLabel, media, backdrop, streak, chips = [], className }: BevelHeroProps) {
  return (
    <section className={cn("bg-background p-2 text-foreground", className)}>
      <div className="relative isolate overflow-clip rounded-2xl bg-linear-to-b from-accent via-accent/50 to-background">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[5.6rem] overflow-clip rounded-t-2xl lg:h-[21rem]">
          {backdrop ?? <div className="size-full bg-linear-to-b from-accent to-transparent" />}
        </div>
        <div aria-hidden className="absolute inset-x-0 top-[48%] bottom-0 -z-10 lg:top-[25%]">
          {streak ?? (
            <div className="size-full bg-[radial-gradient(ellipse_75%_28%_at_50%_42%,color-mix(in_oklab,var(--glow)_45%,transparent),transparent_70%),linear-gradient(to_bottom,transparent_18%,color-mix(in_oklab,var(--chart-5)_35%,transparent)_38%,color-mix(in_oklab,var(--chart-1)_28%,transparent)_48%,color-mix(in_oklab,var(--chart-4)_22%,transparent)_56%,transparent_74%)]" />
          )}
        </div>

        <div className="relative flex flex-col items-center px-gutter pt-[5.75rem] text-center lg:pt-[6.5rem]">
          <h1 className={cn(bevelTitle.xl, "max-w-[22rem] text-balance lg:max-w-[42rem]")}>{title}</h1>
          <p className={cn(bevelLead, "mt-5 max-w-[17rem] text-balance lg:max-w-[37rem]")}>{lead}</p>
          <BevelButton label={cta.label} href={cta.href} icon={cta.icon} className="mt-7 px-6" />
          {ratingLabel && (
            <p className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground lg:mt-6 lg:text-[0.8125rem]">
              <span className="flex text-highlight [&_svg]:size-4 [&_svg]:fill-current">
                {Array.from({ length: Math.floor(rating) }, (_, i) => (
                  <Star key={i} strokeWidth={0} />
                ))}
                {rating % 1 >= 0.5 && <StarHalf strokeWidth={0} />}
              </span>
              {ratingLabel}
            </p>
          )}
          <div className="relative mt-7 h-[26.5rem] w-[min(100%,21rem)] lg:mt-6 lg:h-[37.25rem] lg:w-[28rem]">
            {media ?? <BevelPlaceholder tone="phone" className="mx-auto h-[115%] w-[72%] rounded-t-[3rem]" />}
          </div>
        </div>

        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background via-background/70 to-transparent lg:h-48" />

        {chips.slice(0, 4).map((chip, i) => (
          <div
            key={i}
            className={cn(
              "bevel-hero-chip absolute z-10 hidden w-max max-w-[14rem] items-start gap-2.5 rounded-[1.25rem] bg-background/90 px-4 py-3 text-left ring-1 ring-glow/60 backdrop-blur-sm lg:flex",
              "shadow-[0_4px_16px_0_color-mix(in_oklab,var(--foreground)_10%,transparent)]",
              chipSpots[i],
            )}
            style={{ animationDelay: `${i * 3 - 1}s` }}
          >
            <span className="mt-0.5 flex text-glow [&_svg]:size-6">{chip.icon}</span>
            <span>
              <span className="block text-sm leading-tight font-semibold">{chip.label}</span>
              <span className="mt-0.5 block text-[0.8125rem] leading-snug font-medium text-muted-foreground">{chip.value}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
