import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LithicArrowLink } from "@foundry/lithic-arrow-link";
import { LithicContours } from "@foundry/lithic-contours";
import { LithicPlaceholder } from "@foundry/lithic-placeholder";

export interface LithicDevelopersProps {
  /** the headline */
  title: string;
  /** the paragraph; may hold <strong> for a bold name */
  text: ReactNode;
  /** one to three arrow links */
  links: { label: string; href: string }[];
  /** the screenshot on the right. A dark frame when empty */
  media?: ReactNode;
  className?: string;
}

/** For engineers: copy on the left, a big screenshot cropped by the panel on the right. */
export function LithicDevelopers({ title, text, links, media, className }: LithicDevelopersProps) {
  return (
    <section className={cn("px-gutter lg:px-6", className)}>
      <div className="relative isolate overflow-clip rounded-lg bg-secondary text-secondary-foreground lg:min-h-[32.125rem]">
        <LithicContours at="0% 10%" gap={9} className="-z-10 text-chart-2/45 lg:right-[55%]" />
        <div className="mx-auto max-w-page px-6 pt-8 lg:flex lg:min-h-[32.125rem] lg:items-center lg:px-gutter lg:py-24">
          <div className="lg:max-w-[28rem] lg:pt-2">
            <h2 className="font-display text-2xl/[1.2] font-medium tracking-[-0.02em] lg:text-[2rem]/[1.2]">{title}</h2>
            <p className="mt-6 text-sm/[1.6] tracking-[0.01em] lg:text-base/[1.4] lg:tracking-normal [&_strong]:font-semibold">{text}</p>
            <ul className="mt-10 flex flex-col gap-6 lg:mt-8 lg:flex-row lg:gap-7">
              {links.map((link) => (
                <li key={link.label}>
                  <LithicArrowLink href={link.href} className="text-base lg:text-sm">
                    {link.label}
                  </LithicArrowLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative mt-16 h-[12.5rem] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[57.5%] lg:mt-0 lg:h-auto">
          <div className="absolute top-0 left-7 aspect-[700/434] w-[22rem] lg:top-[3.875rem] lg:left-0 lg:w-[43.75rem]">
            {media ?? <LithicPlaceholder tone="ink" className="size-full rounded-xl" />}
          </div>
        </div>
      </div>
    </section>
  );
}
