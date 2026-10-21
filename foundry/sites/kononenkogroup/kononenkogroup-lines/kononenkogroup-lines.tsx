import { Fragment, type CSSProperties, type ElementType } from "react";
import { cn } from "@foundry/foundry-utils";
import "./kononenkogroup-lines.css";

export interface KononenkogroupLinesProps {
  /** the text, split into words that each rise from their own mask; pass a list to force
      line breaks (each item becomes its own line) */
  text: string | string[];
  /** the element to render: p by default */
  as?: ElementType;
  /** "scroll": words rise as they come into view (CSS scroll-driven); "load": they rise once
      when the page loads, for text in the first screen */
  trigger?: "scroll" | "load";
  /** load only: delay before the rise, in ms */
  delay?: number;
  className?: string;
}

function Words({ text }: { text: string }) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="kononenkogroup-lines-mask">
            <span className="kononenkogroup-lines-word">{word}</span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}

/**
 * Text whose lines rise into place from behind their own masks, the way every line of the
 * original moves. CSS only: without scroll-driven animations, or with reduced motion, the text
 * simply stands.
 */
export function KononenkogroupLines({ text, as: Tag = "p", trigger = "scroll", delay = 0, className }: KononenkogroupLinesProps) {
  return (
    <Tag
      data-trigger={trigger}
      className={cn("kononenkogroup-lines", className)}
      style={delay ? ({ "--kononenkogroup-lines-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {Array.isArray(text)
        ? text.map((line, i) => (
            <span key={i} className="block">
              <Words text={line} />
            </span>
          ))
        : <Words text={text} />}
    </Tag>
  );
}
