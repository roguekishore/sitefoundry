import { Fragment, type CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rho-heading.css";

export interface RhoHeadingProps {
  /** the heading text; it is split into words for the reveal */
  text: string;
  /** which heading element to render */
  as?: "h1" | "h2" | "h3";
  /** section: 36px phones / 60px desktop · hero: 48px / 80px */
  size?: "section" | "hero";
  /** words rise into place on scroll (default true) */
  reveal?: boolean;
  className?: string;
}

const sizes = {
  section: "text-[2.25rem] leading-none lg:text-[3.75rem]",
  hero: "text-[3rem] leading-[1.1] lg:text-[5rem]",
};

export function RhoHeading({ text, as: Tag = "h2", size = "section", reveal = true, className }: RhoHeadingProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <Tag className={cn("font-display font-normal tracking-[-0.01em] text-balance text-foreground", sizes[size], className)}>
      {reveal ? (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {words.map((word, i) => (
              <Fragment key={i}>
                <span className="rho-heading-clip">
                  <span className="rho-heading-word" style={{ "--rho-word": i } as CSSProperties}>
                    {word}
                  </span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </span>
        </>
      ) : (
        text
      )}
    </Tag>
  );
}
