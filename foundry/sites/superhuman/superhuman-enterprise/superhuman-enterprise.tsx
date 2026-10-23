import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperhumanButton } from "@foundry/superhuman-button";
import { SuperhumanLink } from "@foundry/superhuman-link";
import { SuperhumanPlaceholder } from "@foundry/superhuman-placeholder";

export interface SuperhumanEnterpriseProps {
  /** the small line above the headline */
  eyebrow: string;
  /** the headline (use a line break through two sentences if wanted) */
  title: string;
  /** the lead paragraph */
  description: string;
  /** the lilac button */
  primary: { label: string; href: string };
  /** the lilac link */
  secondary: { label: string; href: string };
  /** the screenshot; empty shows a placeholder */
  media?: ReactNode;
  className?: string;
}

export function SuperhumanEnterprise({ eyebrow, title, description, primary, secondary, media, className }: SuperhumanEnterpriseProps) {
  return (
    <section className={cn("overflow-clip bg-chart-3 px-gutter pt-10 pb-14 text-primary-foreground lg:py-[6.5rem]", className)}>
      <div className="mx-auto grid max-w-page items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="text-base/[1.5] font-[460] text-primary-foreground/80 lg:text-lg">{eyebrow}</p>
          <h2 className="mt-7 max-w-[30rem] text-[2rem]/[1.2] font-[460] tracking-[-0.0275em] lg:mt-9 lg:text-[3.0625rem]/[1.2]">{title}</h2>
          <p className="mt-6 max-w-[34rem] text-lg/[1.5] font-[460] text-primary-foreground/80">{description}</p>
          <div className="mt-9 flex items-center gap-4 lg:mt-12">
            <SuperhumanButton label={primary.label} href={primary.href} variant="secondary" />
            <SuperhumanLink label={secondary.label} href={secondary.href} tone="soft" />
          </div>
        </div>
        <div className="-mr-gutter aspect-[16/9] overflow-clip rounded-l-lg lg:mr-0 lg:ml-6 lg:rounded-lg [&_img]:size-full [&_img]:object-cover">
          {media ?? <SuperhumanPlaceholder tone="panel" className="size-full" />}
        </div>
      </div>
    </section>
  );
}
