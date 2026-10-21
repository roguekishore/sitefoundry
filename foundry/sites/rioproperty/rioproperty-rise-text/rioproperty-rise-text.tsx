import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./rioproperty-rise-text.css";

export interface RiopropertyRiseTextProps {
  /** the text; with split "words" every word rises from its own mask */
  text: string;
  /** the element to render: h2 by default */
  as?: ElementType;
  /** "words": each word rises out of a mask, a ripple from left to right (headings);
      "block": the whole text fades and rises 30px (paragraphs) */
  split?: "words" | "block";
  /** how many px of scroll, after the text enters the window, the rise takes */
  distance?: number;
  className?: string;
}

export function RiopropertyRiseText({ text, as: Tag = "h2", split = "words", distance = 360, className }: RiopropertyRiseTextProps) {
  const style = { "--rioproperty-rise-text-distance": `${distance}px` } as CSSProperties;
  if (split === "block") {
    return (
      <Tag className={cn("rioproperty-rise-text-block", className)} style={style}>
        {text}
      </Tag>
    );
  }
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <Tag className={className} style={style}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="rioproperty-rise-text-mask">
            <span className="rioproperty-rise-text-word" style={{ "--rioproperty-rise-text-i": i } as CSSProperties}>
              {word}
            </span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
