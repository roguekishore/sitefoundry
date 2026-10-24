import { Fragment, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendPlaceholder } from "@foundry/resend-placeholder";

export interface ResendHeadingProps {
  /** the title; a list sets where the lines break on wide screens */
  title: string | string[];
  /** words after the title that glow in the accent colour ("…tonight") */
  accent?: string;
  /** the lead under the title; a list sets its desktop line breaks */
  text?: ReactNode | ReactNode[];
  /** show the 170px app-icon slot above the title */
  tile?: boolean;
  /** what fills the icon slot (a looping video, an img); empty shows a placeholder tile */
  media?: ReactNode;
  align?: "center" | "start";
  /** h2 for sections, h1 when it opens a page */
  as?: "h1" | "h2";
  className?: string;
  /** extra classes for the lead (e.g. its width) */
  textClassName?: string;
}

/** Joins lines with breaks that only apply on wide screens. */
function Lines({ lines }: { lines: ReactNode[] }) {
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          {" "}
          <br className="max-lg:hidden" />
        </>
      )}
      {line}
    </Fragment>
  ));
}

export function ResendHeading({
  title,
  accent,
  text,
  tile = false,
  media,
  align = "center",
  as: Tag = "h2",
  className,
  textClassName,
}: ResendHeadingProps) {
  const center = align === "center";
  return (
    <div className={cn("flex flex-col", center ? "items-center text-center" : "items-start", className)}>
      {(tile || media) && (
        <div className="relative mb-2.5 size-[10.625rem] shrink-0">
          {media ?? <ResendPlaceholder shape="tile" className="absolute inset-3" />}
        </div>
      )}
      <Tag
        className={cn(
          "font-display text-5xl leading-[1.2] font-normal tracking-[-0.05em] text-balance lg:text-[3.5rem]",
          "bg-linear-to-br from-foreground from-30% to-foreground/50 bg-clip-text pb-1 text-transparent",
        )}
      >
        <Lines lines={Array.isArray(title) ? title : [title]} />
        {accent && (
          <>
            {" "}
            <span className="bg-linear-to-br from-highlight from-20% to-highlight/70 bg-clip-text text-transparent">{accent}</span>
          </>
        )}
      </Tag>
      {text && (
        <p
          className={cn(
            "mt-3 max-w-[40rem] text-base leading-6 text-pretty text-muted-foreground lg:text-lg lg:leading-[1.5]",
            textClassName,
          )}
        >
          <Lines lines={Array.isArray(text) ? text : [text]} />
        </p>
      )}
    </div>
  );
}
