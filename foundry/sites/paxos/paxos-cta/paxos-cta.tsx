import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PaxosButton } from "@foundry/paxos-button";

export interface PaxosCtaProps {
  /** the closing line (two lines on desktop) */
  title: ReactNode;
  /** the slate pill */
  primary: { label: string; href: string };
  /** the outline pill */
  secondary?: { label: string; href: string };
  /** an image behind everything (cover); the token wash when empty */
  backdrop?: ReactNode;
  className?: string;
}

/** Full-bleed soft-light band with a centred title and two pills. */
export function PaxosCta({ title, primary, secondary, backdrop, className }: PaxosCtaProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background px-gutter", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10",
          !backdrop &&
            "bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_35%),radial-gradient(80%_120%_at_0%_100%,color-mix(in_oklab,var(--glow)_12%,transparent),transparent_70%),radial-gradient(70%_110%_at_100%_100%,color-mix(in_oklab,var(--highlight)_28%,transparent),transparent_70%)]",
        )}
      >
        {backdrop}
      </div>
      <div className="mx-auto flex h-[19rem] max-w-page flex-col justify-center px-[1.6rem] lg:h-[33.375rem] lg:items-center lg:px-0 lg:text-center">
        <h2 className="max-w-[19rem] font-display text-2xl/[1.2] font-normal tracking-[-0.02em] text-foreground lg:max-w-[38rem] lg:text-[2rem]/[1.19]">
          {title}
        </h2>
        <div className="mt-6 flex flex-wrap gap-5">
          <PaxosButton href={primary.href}>{primary.label}</PaxosButton>
          {secondary ? (
            <PaxosButton href={secondary.href} variant="outline">
              {secondary.label}
            </PaxosButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
