import { Fragment } from "react";
import { cn } from "@foundry/foundry-utils";
import { MrcresidencesbocaratonUnderlineLink } from "@foundry/mrcresidencesbocaraton-underline-link";

export interface MrcresidencesbocaratonFooterItem {
  /** plain text before the link (or the whole item when there is no href) */
  lead?: string;
  /** the link's label */
  label?: string;
  href?: string;
}

export interface MrcresidencesbocaratonFooterProps {
  /** items at the left (a column on phones) */
  start: MrcresidencesbocaratonFooterItem[];
  /** items at the right (the second column on phones) */
  end: MrcresidencesbocaratonFooterItem[];
  className?: string;
}

function Row({ items }: { items: MrcresidencesbocaratonFooterItem[] }) {
  return (
    <ul className="flex flex-col gap-[19px] lg:flex-row lg:items-center lg:gap-0">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <li aria-hidden className="hidden h-3 w-px bg-current lg:mx-2.5 lg:block" />}
          <li className="leading-[1.2]">
            {item.lead && <span className="block lg:inline">{item.lead} </span>}
            {item.label && item.href && (
              <MrcresidencesbocaratonUnderlineLink href={item.href} lineClassName="-bottom-[3px]" className="font-bold">
                {item.label}
              </MrcresidencesbocaratonUnderlineLink>
            )}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export function MrcresidencesbocaratonFooter({ start, end, className }: MrcresidencesbocaratonFooterProps) {
  return (
    <footer
      className={cn(
        "relative grid grid-cols-2 gap-x-6 bg-primary px-[25px] pt-6 pb-[60px] text-[14px] text-primary-foreground lg:flex lg:h-[37px] lg:items-center lg:justify-between lg:px-[55px] lg:py-0 lg:text-[11px]",
        className,
      )}
    >
      <Row items={start} />
      <Row items={end} />
    </footer>
  );
}
