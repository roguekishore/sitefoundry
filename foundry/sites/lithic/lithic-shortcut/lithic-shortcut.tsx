import { cn } from "@foundry/foundry-utils";
import { LithicArrowLink } from "@foundry/lithic-arrow-link";
import { LithicContours } from "@foundry/lithic-contours";

export interface LithicShortcutProps {
  /** the question on the left */
  title: string;
  /** two to four arrow links */
  links: { label: string; href: string }[];
  className?: string;
}

/** "Skip ahead" strip: a question and a few arrow links on mint. */
export function LithicShortcut({ title, links, className }: LithicShortcutProps) {
  return (
    <section className={cn("bg-background px-gutter pt-12 lg:pt-20", className)}>
      <div className="relative isolate mx-auto flex max-w-[74rem] flex-col overflow-clip rounded-lg bg-secondary px-6 py-9 text-secondary-foreground lg:h-[7.75rem] lg:flex-row lg:items-center lg:justify-center lg:gap-[6.75rem] lg:p-0">
        <LithicContours shape="ellipse" gap={12} at="50% 50%" className="-z-10 inset-x-[20%] text-chart-2/40 lg:inset-x-[25%]" />
        <h2 className="max-w-[15rem] font-display text-xl/[1.4] font-medium tracking-[-0.01em] lg:max-w-none">{title}</h2>
        <ul className="mt-6 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <LithicArrowLink href={link.href} className="text-base">
                {link.label}
              </LithicArrowLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
