import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetButton } from "@foundry/halodental-sonnet-button";
import { HalodentalSonnetHeading } from "@foundry/halodental-sonnet-heading";
import { HalodentalSonnetMedia } from "@foundry/halodental-sonnet-media";

export interface HalodentalSonnetProductSpec {
  /** a small icon, e.g. from lucide-react (size-4) */
  icon: ReactNode;
  /** the spec in a few words */
  text: string;
}

export interface HalodentalSonnetProductProps {
  /** the title; a list sets the line breaks */
  title: string | string[];
  /** the paragraph under the title */
  text: string;
  /** spec rows with an icon each, divided by hairlines */
  specs: HalodentalSonnetProductSpec[];
  /** the orange button */
  action: { label: string; href: string };
  /** the large photo. Empty shows the placeholder. */
  media?: ReactNode;
  /** how many small thumbnails to show beside or under the photo (0 hides them) */
  thumbnails?: number;
  className?: string;
}

/** One product, told in text and specs on the left and in pictures on the right. */
export function HalodentalSonnetProduct({ title, text, specs, action, media, thumbnails = 3, className }: HalodentalSonnetProductProps) {
  return (
    <section className={cn("py-section", className)}>
      <div className="mx-auto grid max-w-page gap-10 px-gutter lg:grid-cols-[minmax(0,28rem)_1fr] lg:gap-[8.5rem] lg:px-10">
        <div className="flex flex-col items-start lg:pt-4">
          <HalodentalSonnetHeading title={title} />
          <p className="mt-4 max-w-[34rem] text-[0.9rem] leading-[1.5] lg:mt-8 lg:text-base">{text}</p>
          <ul className="mt-6 w-full lg:mt-8">
            {specs.map((s, i) => (
              <li key={i} className="flex items-center gap-3 border-t border-border py-3 text-sm last:border-b">
                <span className="text-foreground">{s.icon}</span>
                {s.text}
              </li>
            ))}
          </ul>
          <HalodentalSonnetButton href={action.href} size="sm" className="mt-6 lg:mt-8 lg:h-10">
            {action.label}
          </HalodentalSonnetButton>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
          <HalodentalSonnetMedia ratio="1 / 0.98" className="lg:flex-1">
            {media}
          </HalodentalSonnetMedia>
          {thumbnails > 0 && (
            <div className="grid grid-cols-3 gap-3 lg:flex lg:w-24 lg:flex-col">
              {Array.from({ length: thumbnails }, (_, i) => (
                <HalodentalSonnetMedia key={i} ratio="1" className={cn(i === 0 ? "ring-2 ring-primary ring-inset" : "opacity-50")} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
