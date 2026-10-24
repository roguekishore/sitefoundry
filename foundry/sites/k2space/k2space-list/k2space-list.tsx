import { cn } from "@foundry/foundry-utils";
import { K2spaceButton } from "@foundry/k2space-button";
import "./k2space-list.css";

export interface K2spaceListItem {
  /** the row number as shown ("01") */
  number: string;
  /** the row title */
  title: string;
  /** one short paragraph */
  body: string;
}

export interface K2spaceListProps {
  /** the rows, in order */
  items: K2spaceListItem[];
  /** a quiet link under the list */
  link?: { label: string; href: string };
  className?: string;
}

/** Numbered rows in alternating near-black and black bands, paragraphs from two thirds across. */
export function K2spaceList({ items, link, className }: K2spaceListProps) {
  return (
    <section className={cn("bg-background text-foreground [font-stretch:var(--k2space-stretch,100%)]", className)}>
      <ol>
        {items.map((item, i) => (
          <li
            key={i}
            className={cn(
              "k2space-list-row px-gutter pt-[30px] pb-16 lg:grid lg:grid-cols-[8.06vw_1fr_30.8vw] lg:pt-[1.75vw] lg:pb-[8.8vw]",
              i % 2 === 0 ? "bg-secondary text-secondary-foreground" : "bg-background",
            )}
          >
            <p className="font-display text-[28px]/none font-[560] lg:contents lg:text-[3.307vw]/none">
              <span className="k2space-list-in inline-block lg:block">{item.number}</span>{" "}
              <span className="k2space-list-in ml-1.5 inline-block lg:ml-0 lg:block">{item.title}</span>
            </p>
            <p className="k2space-list-in mt-[38px] text-base/none font-[560] lg:mt-0 lg:max-w-[30vw] lg:text-[max(1rem,1.3227vw)]/none">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
      {link && (
        <div className="px-gutter pt-[27px] pb-[13px] lg:pt-[1.88vw] lg:pb-[0.8vw] lg:pl-[66.74vw]">
          <K2spaceButton variant="link" href={link.href}>
            {link.label}
          </K2spaceButton>
        </div>
      )}
    </section>
  );
}
