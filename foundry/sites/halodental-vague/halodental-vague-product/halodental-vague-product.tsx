import type { ReactNode } from "react";
import { Camera, Droplets, Feather, Sun } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalVagueButton } from "@foundry/halodental-vague-button";

export interface HalodentalVagueSpecItem {
  /** icon identifier from the built-in medical/optics set */
  icon?: "light" | "antifog" | "camera" | "weight";
  /** specification text */
  label: string;
}

export interface HalodentalVagueProductProps {
  /** two-line section heading */
  title: string;
  /** introductory paragraph below the heading */
  description: string;
  /** bordered specification rows */
  specs: HalodentalVagueSpecItem[];
  /** primary orange CTA button below the specification table */
  cta: {
    label: string;
    href: string;
  };
  /** optional award label shown in the corner of the default studio placeholder */
  awardLabel?: string;
  /** main square product media slot (670×670 on desktop, 348×348 on phones) */
  media?: ReactNode;
  /** optional custom thumbnail nodes (3 square slots) */
  thumbnails?: ReactNode[];
  className?: string;
}

const specIcons = {
  light: Sun,
  antifog: Droplets,
  camera: Camera,
  weight: Feather,
};

function DefaultProductMedia({ awardLabel }: { awardLabel?: string }) {
  return (
    <div className="dark relative size-full overflow-hidden bg-background text-foreground">
      {/* Soft radial studio spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_56%_52%,var(--secondary)_0%,var(--card)_42%,var(--background)_78%)]"
      />
      {/* Stylized angled optical wand silhouette */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[72%] w-5 rotate-18 rounded-full bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/45 ring-1 ring-foreground/25">
          <div className="absolute -top-9 left-1/2 size-12 -translate-x-1/2 rounded-full border-2 border-foreground/80 bg-background/60" />
          <div className="absolute bottom-3 inset-x-0.5 h-1.5 rounded-full bg-foreground/90" />
        </div>
      </div>
      {awardLabel && (
        <div className="absolute right-5 bottom-5 flex items-center gap-2 text-xs text-foreground/90 lg:right-8 lg:bottom-7">
          <span aria-hidden className="size-6 rounded-full bg-glow" />
          <span className="font-normal tracking-tight">{awardLabel}</span>
        </div>
      )}
    </div>
  );
}

function DefaultThumbnails() {
  return [
    <div
      key="thumb-1"
      className=" size-full rounded-lg border border-primary p-[3px]"
    >
      <div className="dark relative size-full overflow-hidden rounded-[5px] bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_55%,var(--secondary)_0%,var(--background)_75%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-9 w-1.5 rotate-18 rounded-full bg-foreground/60" />
        </div>
      </div>
    </div>,
    <div
      key="thumb-2"
      className="relative size-full overflow-hidden rounded-lg bg-secondary/90"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="size-6 rounded-full border border-foreground/20" />
      </div>
    </div>,
    <div
      key="thumb-3"
      className="relative size-full overflow-hidden rounded-lg bg-muted-foreground/25"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-7 w-1.5 -rotate-24 rounded-full bg-foreground/20" />
      </div>
    </div>,
  ];
}

/**
 * Halo Dental's 12-column product section: 4-col spec stack on the left, 7-col square media + thumbs on the right.
 */
export function HalodentalVagueProduct({
  title,
  description,
  specs,
  cta,
  awardLabel = "reddot winner 2024",
  media,
  thumbnails,
  className,
}: HalodentalVagueProductProps) {
  const thumbItems = thumbnails ?? DefaultThumbnails();

  return (
    <section className={cn("bg-background py-[var(--section-y)] px-[var(--page-gutter)] text-foreground", className)}>
      <div className="mx-auto grid max-w-[var(--page-width)] grid-cols-1 items-start lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-4 lg:pb-10">
          <h2 className="font-display text-[2.47rem] leading-[1.1] font-normal tracking-[-0.015em] lg:max-w-[9ch] lg:text-[4rem] lg:leading-none">
            {title}
          </h2>
          <p className="mt-2.5 text-[0.91rem] leading-[1.5] font-normal text-foreground lg:mt-5 lg:text-base lg:leading-[1.5]">
            {description}
          </p>

          <ul className="mt-[30px] w-full border-b border-border lg:mt-10">
            {specs.map((item) => {
              const Icon = specIcons[item.icon ?? "light"];
              return (
                <li
                  key={item.label}
                  className="flex h-[43px] items-center gap-3.5 border-t border-border text-[0.91rem] font-normal text-foreground lg:h-[44px] lg:text-base"
                >
                  <Icon aria-hidden className="size-4 shrink-0 text-foreground" strokeWidth={1.5} />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-[30px] lg:mt-10">
            <HalodentalVagueButton variant="primary" href={cta.href}>
              {cta.label}
            </HalodentalVagueButton>
          </div>
        </div>

        <div className="mt-[30px] lg:col-span-7 lg:col-start-6 lg:mt-0">
          <div className="flex flex-col items-center gap-y-2.5 lg:flex-row lg:gap-x-5">
            <div className="aspect-square w-full overflow-hidden rounded-lg lg:size-[670px] lg:shrink-0">
              {media ?? <DefaultProductMedia awardLabel={awardLabel} />}
            </div>

            <ul aria-label="Product gallery thumbnails" className="flex shrink-0 items-center gap-1.5 lg:w-[95px] lg:flex-col lg:gap-2.5">
              {thumbItems.map((thumb, idx) => (
                <li key={idx} className="size-[68px] overflow-hidden rounded-lg lg:size-[95px]">
                  {thumb}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
