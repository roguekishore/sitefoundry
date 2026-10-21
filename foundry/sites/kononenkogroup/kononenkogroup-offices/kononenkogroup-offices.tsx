import { ArrowUpRight } from "lucide-react";
import { KononenkogroupLines } from "@foundry/kononenkogroup-lines";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-offices.css";

export interface KononenkogroupOffice {
  /** e.g. "Main studio" */
  name: string;
  /** e.g. "Portugal, Lisbon" (grey) */
  place: string;
  /** street address (grey) */
  address: string;
  /** a map link; the row shows an arrow either way */
  href?: string;
}

export interface KononenkogroupOfficesProps {
  /** the big serif statement above the table (first line indented) */
  text: string;
  /** small serif label beside the table */
  label: string;
  offices: KononenkogroupOffice[];
  className?: string;
}

const small = "text-[3.733vw] leading-[1.2] tracking-[-0.02em] lg:text-[max(10px,0.833vw)]";

/**
 * A services statement in big serif (first line indented by a column), then a hairline table of
 * offices: name, place and address in tiny type with a small arrow at the end of each row. The
 * statement rises line by line; the rows rise and their hairlines draw in from the left.
 */
export function KononenkogroupOffices({ text, label, offices, className }: KononenkogroupOfficesProps) {
  return (
    <section className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <KononenkogroupLines
        as="h2"
        text={text}
        className="font-display text-[9.6vw] leading-[0.9] tracking-[-0.03em] indent-[10.8vw] lg:text-[6.146vw] lg:indent-[6.53vw]"
      />
      <div className="mt-[17vw] lg:mt-[6.4vw] lg:grid lg:grid-cols-15 lg:gap-x-[1.11vw]">
        <KononenkogroupLines text={label} className={cn(small, "font-display tracking-[-0.01em] lg:col-span-1 lg:col-start-5 lg:pt-[0.45vw]")} />
        <ul className="mt-[10vw] border-b border-border lg:col-span-7 lg:col-start-6 lg:mt-0">
          {offices.map((office, i) => {
            const Row = office.href ? "a" : "div";
            return (
              <li key={i} className="kononenkogroup-offices-row relative">
                <span aria-hidden className="kononenkogroup-offices-rule absolute inset-x-0 top-0 h-px origin-left bg-border" />
                <Row
                  {...(office.href ? { href: office.href } : {})}
                  className={cn(
                    "kononenkogroup-offices-cells grid grid-cols-[38.5vw_1fr_auto] gap-x-[2vw] py-[4.6vw] lg:grid-cols-7 lg:gap-x-[1.11vw] lg:py-[0.72vw]",
                    office.href && "transition-opacity duration-300 hover:opacity-60",
                  )}
                >
                  <span className={cn(small, "lg:col-span-2")}>{office.name}</span>
                  <span className={cn(small, "text-muted-foreground lg:col-span-2")}>{office.place}</span>
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1}
                    className="col-start-3 row-span-2 row-start-1 size-[4vw] text-muted-foreground lg:col-start-7 lg:row-span-1 lg:size-[max(10px,0.8vw)] lg:justify-self-end"
                  />
                  <span className={cn(small, "col-start-2 mt-[1.5vw] text-muted-foreground lg:col-span-2 lg:col-start-5 lg:row-start-1 lg:mt-0")}>
                    {office.address}
                  </span>
                </Row>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
