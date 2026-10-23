import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanButton } from "@foundry/superhuman-button";
import { SuperhumanPlaceholder } from "@foundry/superhuman-placeholder";

export interface SuperhumanCtaProps {
  /** the headline */
  title: string;
  /** the outlined button */
  button: { label: string; href: string };
  /** the background image; empty shows a colour wash */
  media?: ReactNode;
  className?: string;
}

export function SuperhumanCta({ title, button, media, className }: SuperhumanCtaProps) {
  return (
    <section className={cn("relative overflow-clip bg-chart-1 px-gutter py-10 text-primary-foreground lg:flex lg:min-h-[15.6875rem] lg:items-center lg:py-0", className)}>
      <div aria-hidden className="absolute inset-0 [&_img]:size-full [&_img]:object-cover">
        {media ?? <SuperhumanPlaceholder tone="wash" className="size-full opacity-70" />}
      </div>
      <div className="relative mx-auto flex w-full max-w-page flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-[18rem] text-[2rem]/[1.2] font-[460] tracking-[-0.0275em] lg:max-w-none lg:text-[3.0625rem]/[1.2]">{title}</h2>
        <SuperhumanButton label={button.label} href={button.href} variant="outline" className="h-[3.125rem] w-full text-sm font-medium lg:w-[7.5rem]" />
      </div>
    </section>
  );
}
