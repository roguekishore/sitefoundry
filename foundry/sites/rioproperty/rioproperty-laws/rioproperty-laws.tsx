import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RiopropertyRiseText } from "@foundry/rioproperty-rise-text";
import "./rioproperty-laws.css";

export interface RiopropertyLaw {
  /** the rule itself, in violet */
  rule: string;
  /** the grey follow-up line */
  aside: string;
}

export interface RiopropertyLawsProps {
  /** the big capital heading */
  heading: string;
  /** the violet capital line under it */
  subhead: string;
  /** the rules; a multiple of three fills the desktop grid */
  laws: RiopropertyLaw[];
  /** phones show this many, then a toggle for the rest */
  phoneCount?: number;
  /** the label of the phone toggle */
  moreLabel: string;
  className?: string;
}

export function RiopropertyLaws({ heading, subhead, laws, phoneCount = 6, moreLabel, className }: RiopropertyLawsProps) {
  const toggleId = useId();
  return (
    <section className={cn("group/laws bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <RiopropertyRiseText
          text={heading}
          className="font-display text-[clamp(2.19rem,1.8rem+1.61vw,3.25rem)] leading-[0.966] font-semibold uppercase lg:max-w-[64rem]"
        />
        <RiopropertyRiseText as="p" split="block" text={subhead} className="mt-6 text-lg leading-normal text-primary uppercase lg:mt-8 lg:text-2xl" />

        {/* a plain checkbox drives the phone toggle, so it works without JavaScript */}
        <input id={toggleId} type="checkbox" className="sr-only" />
        <ul className="mt-16 grid lg:mt-28 lg:grid-cols-3">
          {laws.map((law, i) => (
            <li
              key={law.rule}
              className={cn("relative px-0 py-7 lg:px-[1.125rem] lg:pt-6 lg:pb-10", i >= phoneCount && "hidden group-has-checked/laws:block lg:block")}
            >
              <RiopropertyRiseText as="p" text={law.rule} distance={240} className="leading-normal text-primary" />
              <RiopropertyRiseText as="p" text={law.aside} distance={240} className="mt-4 leading-normal text-muted-foreground" />
              {/* hairlines that draw in as the grid scrolls through: under each law, and down
                  between the desktop columns */}
              <span aria-hidden className="rioproperty-laws-hline absolute right-0 bottom-0 left-0 h-px bg-border lg:right-[1.125rem] lg:left-[1.125rem]" />
              {i % 3 !== 0 && <span aria-hidden className="rioproperty-laws-vline absolute top-0 bottom-0 left-0 hidden w-px bg-border lg:block" />}
            </li>
          ))}
        </ul>
        {laws.length > phoneCount && (
          <label
            htmlFor={toggleId}
            className="mt-10 flex cursor-pointer items-center justify-center gap-2 text-foreground uppercase transition-colors duration-500 hover:text-primary group-has-checked/laws:hidden lg:hidden"
          >
            {moreLabel}
            <ChevronDown aria-hidden className="size-4" strokeWidth={1.5} />
          </label>
        )}
      </div>
    </section>
  );
}
