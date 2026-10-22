import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerInstitution {
  /** the name, for screen readers */
  name: string;
  /** the wordmark (styled text or an svg) */
  mark: ReactNode;
}

export interface SuperpowerCredentialsProps {
  /** the short claim next to the portraits */
  claim: string;
  /** round portraits (photos, or empty for placeholders), usually three */
  portraits: (ReactNode | undefined)[];
  /** four institution wordmarks */
  institutions: SuperpowerInstitution[];
  className?: string;
}

export function SuperpowerCredentials({ claim, portraits, institutions, className }: SuperpowerCredentialsProps) {
  return (
    <section className={cn("bg-linear-to-b from-background to-secondary text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-14 pb-5 lg:pt-[3.75rem] lg:pb-1">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-3.5">
          <span className="flex -space-x-2.5">
            {portraits.map((p, i) => (
              <SuperpowerMedia key={i} media={p} className="size-[2.375rem] rounded-full ring-2 ring-background" />
            ))}
          </span>
          <p className="max-w-[15rem] text-center text-[0.875rem] leading-[1.45] tracking-[-0.01em] lg:max-w-none lg:text-[0.9375rem]">{claim}</p>
        </div>
        <ul className="mx-auto mt-8 grid max-w-[18rem] grid-cols-2 items-center gap-x-8 gap-y-6 text-muted-foreground/70 lg:mt-8 lg:flex lg:max-w-none lg:justify-center lg:gap-x-[3.75rem]">
          {institutions.map((inst) => (
            <li key={inst.name} aria-label={inst.name} role="img" className="flex h-9 items-center justify-center">
              {inst.mark}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
