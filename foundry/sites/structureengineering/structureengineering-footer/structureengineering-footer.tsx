import { cn } from "@foundry/foundry-utils";
import { StructureengineeringReveal } from "@foundry/structureengineering-reveal";

export interface StructureengineeringFooterGroup {
  /** the column's bold heading */
  title: string;
  /** its links; emphasis sets one as an ink box (the email on the original) */
  links: { label: string; href: string; emphasis?: boolean }[];
}

export interface StructureengineeringFooterProps {
  /** the copyright line */
  copyright: string;
  /** the longer line beside it (an acknowledgement or statement) */
  acknowledgement: string;
  /** up to four link columns */
  groups: StructureengineeringFooterGroup[];
  /** the giant wordmark along the bottom */
  wordmark: string;
  /** the small credit at the bottom right */
  credit: { label: string; href: string };
  className?: string;
}

// A paper footer edge to edge: a mono copyright and acknowledgement row, four ruled link
// columns (bold sans heading over mono links with hairlines), then a giant wordmark with a
// small credit at the right. Phones put the links first and the small print last. The columns
// rise 48px one after another.
export function StructureengineeringFooter({ copyright, acknowledgement, groups, wordmark, credit, className }: StructureengineeringFooterProps) {
  return (
    <footer className={cn("bg-background px-gutter pt-4 pb-10 text-foreground lg:pb-[5.5rem]", className)}>
      <div className="flex flex-col">
        <div className="order-3 mt-14 grid gap-7 font-mono text-base leading-[1.45] uppercase lg:order-none lg:mt-0 lg:grid-cols-2 lg:gap-4">
          <p>{copyright}</p>
          <p className="max-w-[40rem]">{acknowledgement}</p>
        </div>

        <div className="order-1 grid gap-12 lg:order-none lg:mt-40 lg:grid-cols-4 lg:gap-4">
          {groups.map((group, i) => (
            <StructureengineeringReveal key={group.title} step={i}>
              <p className="border-b border-foreground pb-2 text-base leading-tight font-semibold tracking-tight uppercase">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label} className="border-b border-border">
                    <a
                      href={link.href}
                      className={cn(
                        "block py-2 font-mono text-base leading-tight uppercase transition-colors duration-250 hover:bg-foreground hover:text-background",
                        link.emphasis && "bg-primary px-2 text-primary-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </StructureengineeringReveal>
          ))}
        </div>

        <div className="order-2 mt-9 flex flex-col gap-5 lg:order-none lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <p aria-hidden className="font-display text-[36vw] leading-[0.78] font-medium tracking-[-0.06em] lg:text-[15.5rem]">
            {wordmark}
          </p>
          <a href={credit.href} className="hidden pb-1 text-sm font-medium tracking-tight lg:block">
            {credit.label}
          </a>
        </div>

        <a href={credit.href} className="order-4 mt-8 text-sm font-medium tracking-tight lg:hidden">
          {credit.label}
        </a>
      </div>
    </footer>
  );
}
