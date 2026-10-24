import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";

export interface ReflectKeyHint {
  /** what the keys do */
  label: string;
  /** one small icon per key cap (e.g. lucide arrows) */
  keys: ReactNode[];
}

export interface ReflectAcademyProps {
  eyebrow?: string;
  /** "\n" breaks the line on desktop only */
  title: string;
  /** "\n" breaks the line on desktop only */
  lead?: string;
  action?: { label: string; href: string };
  /** the panel's picture (a playable falling-blocks game in the original); a violet floor glow when empty */
  media?: ReactNode;
  mediaLabel?: string;
  /** the row of key caps under the panel (desktop only) */
  hints?: ReflectKeyHint[];
  className?: string;
}

/** A big rounded panel lit from its floor, with the heading set inside it. */
export function ReflectAcademy({ eyebrow, title, lead, action, media, mediaLabel, hints, className }: ReflectAcademyProps) {
  return (
    <section className={cn("relative bg-background pb-12 text-foreground lg:pt-[11.25rem] lg:pb-[3.25rem]", className)}>
      <div className="relative mx-auto flex h-[43rem] max-w-[56rem] flex-col items-center px-gutter pt-5 lg:h-[40rem] lg:justify-center lg:pt-0">
        <ReflectMedia
          tone="rise"
          reveal
          label={mediaLabel}
          className="absolute inset-0 -z-0 border-b-2 border-highlight/40 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_oklab,var(--glow)_22%,transparent)_70%,color-mix(in_oklab,var(--glow)_80%,var(--foreground))),linear-gradient(180deg,transparent,color-mix(in_oklab,var(--foreground)_3%,transparent))] shadow-[inset_0_-40px_60px_-20px_color-mix(in_oklab,var(--glow)_70%,transparent)] max-lg:right-2.5 lg:rounded-[1.5rem]"
        >
          {media}
        </ReflectMedia>
        <ReflectHeading
          eyebrow={eyebrow}
          title={title}
          lead={lead}
          leadClassName="max-w-[20rem] sm:max-w-[22rem]"
          className="relative"
        >
          {action && (
            <ReflectButton href={action.href} variant="secondary">
              {action.label}
            </ReflectButton>
          )}
        </ReflectHeading>
      </div>
      {hints && hints.length > 0 && (
        <ul className="mt-5 hidden items-center justify-center gap-8 lg:flex">
          {hints.map((hint) => (
            <li key={hint.label} className="flex items-center gap-2 text-xs/4 text-muted-foreground">
              {hint.label}
              {hint.keys.map((key, i) => (
                <kbd
                  key={i}
                  className="grid size-6 place-items-center rounded-sm border border-foreground/10 bg-foreground/5 font-sans text-foreground/70 shadow-[inset_0_-2px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)] [&_svg]:size-2.5"
                >
                  {key}
                </kbd>
              ))}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
