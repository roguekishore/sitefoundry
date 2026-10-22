import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthButton } from "@foundry/instituteofhealth-button";

export interface InstituteofhealthCtaProps {
  /** a short line or two at the top centre, one entry per line on desktop */
  lead?: string[];
  /** the big centred statement */
  heading: string;
  /** the light button under it */
  action: { label: string; href: string };
  /** the full-bleed background (video or image, cropped like object-fit: cover); empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function InstituteofhealthCta({ lead = [], heading, action, media, className }: InstituteofhealthCtaProps) {
  return (
    <section className={cn("relative isolate flex min-h-svh flex-col overflow-clip px-gutter text-highlight-foreground lg:min-h-[128svh]", className)}>
      <div className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
        {media ?? <div className="bg-[radial-gradient(ellipse_120%_70%_at_20%_75%,var(--glow),var(--highlight)_45%,color-mix(in_oklab,var(--highlight)_35%,var(--foreground))_80%)]" />}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[oklch(0_0_0/0.2)]" /> {/* foundry-allow-colour: a light black scrim keeps the white type readable on any media */}

      {lead.length > 0 && (
        <p className="mx-auto max-w-[22rem] pt-14 text-center text-[0.975rem] leading-[1.3] font-medium tracking-[-0.03em] lg:max-w-none lg:pt-[5.6rem] lg:text-[0.945rem]">
          {lead.map((l) => (
            <span key={l} className="lg:block">
              {l}{" "}
            </span>
          ))}
        </p>
      )}

      <div className="flex flex-1 flex-col items-center justify-center pb-24 text-center lg:pb-12">
        <h2 className="max-w-[20rem] font-display text-[2.49rem] leading-[1.05] font-medium tracking-[-0.035em] lg:max-w-[38rem] lg:text-[4.75rem] lg:leading-none lg:tracking-[-0.04em]">
          {heading}
        </h2>
        <InstituteofhealthButton href={action.href} variant="light" className="mt-8 h-[3.9rem] w-full lg:mt-8 lg:h-[3.8rem] lg:w-[21.6rem]">
          {action.label}
        </InstituteofhealthButton>
      </div>
    </section>
  );
}
