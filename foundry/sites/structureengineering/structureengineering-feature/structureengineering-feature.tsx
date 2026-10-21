import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StructureengineeringButton } from "@foundry/structureengineering-button";
import { StructureengineeringMedia } from "@foundry/structureengineering-media";

export interface StructureengineeringFeatureProps {
  /** the bold label at the left ("feature project") */
  label: string;
  /** the project's name, in mono */
  title: string;
  /** the light outline button */
  cta: { label: string; href: string };
  /** the full-bleed photo. Empty: a placeholder */
  media?: ReactNode;
  className?: string;
}

// One featured project on a full-bleed darkened photo sized by the window (81% at desktop, a
// tall 150% on phones). Desktop: a single row through the middle, label at the left, mono name
// at the centre, a light outline button at the right. Phones: the three stacked at the bottom.
export function StructureengineeringFeature({ label, title, cta, media, className }: StructureengineeringFeatureProps) {
  return (
    <section data-tone="dark" className={cn("relative isolate flex h-[150svh] items-end overflow-clip text-card dark:text-card-foreground lg:h-[81svh] lg:items-center", className)}>
      <StructureengineeringMedia media={media} tone="dark" veil className="absolute inset-0 -z-10" />
      <div className="mx-auto grid w-full max-w-page gap-6 px-gutter pb-9 lg:grid-cols-2 lg:items-center lg:pb-0">
        <p className="text-xl leading-tight font-semibold tracking-tight uppercase">{label}</p>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-base leading-tight uppercase">{title}</p>
          <StructureengineeringButton href={cta.href} variant="media">
            {cta.label}
          </StructureengineeringButton>
        </div>
      </div>
    </section>
  );
}
