import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MrcresidencesbocaratonPattern } from "@foundry/mrcresidencesbocaraton-pattern";
import { MrcresidencesbocaratonUnderlineLink } from "@foundry/mrcresidencesbocaraton-underline-link";
import "./mrcresidencesbocaraton-split.css";

export interface MrcresidencesbocaratonSplitProps {
  /** the head, one string per line */
  title: string[];
  /** the paragraph under it */
  body: string;
  /** the underlined link at the bottom */
  link?: { label: string; href: string };
  /** primary: a primary band with light text. soft: the page colour with primary text */
  tone?: "primary" | "soft";
  /** replaces the line pattern of the side panel (bottom strip on phones) */
  pattern?: ReactNode;
  /** an id for in-page links */
  id?: string;
  className?: string;
}

export function MrcresidencesbocaratonSplit({ title, body, link, tone = "primary", pattern, id, className }: MrcresidencesbocaratonSplitProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex flex-col overflow-clip lg:grid lg:grid-cols-[43.4%_1fr]",
        tone === "primary" ? "bg-primary text-primary-foreground" : "bg-background text-primary dark:text-foreground",
        className,
      )}
    >
      <div className="order-last h-[106px] lg:order-none lg:h-auto">
        {pattern ?? <MrcresidencesbocaratonPattern className="size-full" />}
      </div>

      <div className="flex items-center px-gutter pt-section pb-[60px] lg:pr-gutter lg:pb-section lg:pl-[8.05vw]">
        <div className="max-w-[33rem]">
          <h2 className="mrcresidencesbocaraton-split-reveal text-[22px] leading-[1.15] font-normal uppercase lg:text-[36px]">
            {title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mrcresidencesbocaraton-split-reveal mt-[22px] text-[12px] leading-[1.6] tracking-[0.02em] lg:mt-[29px] lg:text-[14px]">
            {body}
          </p>
          {link && (
            <div className="mrcresidencesbocaraton-split-reveal mt-[42px] lg:mt-[45px]">
              <MrcresidencesbocaratonUnderlineLink
                href={link.href}
                lineClassName="-bottom-1.5"
                className="text-[16px] leading-none font-semibold tracking-[0.07em] uppercase lg:text-[14.4px]"
              >
                {link.label}
              </MrcresidencesbocaratonUnderlineLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
