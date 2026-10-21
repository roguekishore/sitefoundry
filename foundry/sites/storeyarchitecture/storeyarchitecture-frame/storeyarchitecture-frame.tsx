import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./storeyarchitecture-frame.css";

export interface StoreyarchitectureFrameProps {
  /** the image or video; empty shows a placeholder surface */
  media?: ReactNode;
  /** width / height as a CSS aspect-ratio, e.g. "4 / 3" */
  ratio: string;
  /** the ratio from 640px up, when the desktop frame has another shape */
  ratioWide?: string;
  /** the small label that follows the pointer on hover ("Explore project") */
  label?: string;
  /** makes the whole frame a link */
  href?: string;
  className?: string;
}

// Keep the label's top-left a little below-right of the pointer.
function follow(event: PointerEvent<HTMLElement>) {
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--storeyarchitecture-frame-x", `${event.clientX - box.left + 12}px`);
  event.currentTarget.style.setProperty("--storeyarchitecture-frame-y", `${event.clientY - box.top + 12}px`);
}

export function StoreyarchitectureFrame({ media, ratio, ratioWide, label, href, className }: StoreyarchitectureFrameProps) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onPointerMove={label ? follow : undefined}
      className={cn(
        "storeyarchitecture-frame group/frame relative block aspect-(--storeyarchitecture-frame-ratio) overflow-clip sm:aspect-(--storeyarchitecture-frame-ratio-wide)",
        className,
      )}
      style={{ "--storeyarchitecture-frame-ratio": ratio, "--storeyarchitecture-frame-ratio-wide": ratioWide ?? ratio } as CSSProperties}
    >
      <div className="storeyarchitecture-frame-media absolute inset-x-0 top-[-16%] h-[116%] bg-muted [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
        {media}
      </div>
      <div aria-hidden className="storeyarchitecture-frame-veil pointer-events-none absolute inset-0 bg-foreground" />
      {label && (
        <span
          aria-hidden
          className="storeyarchitecture-frame-label pointer-events-none absolute top-0 left-0 bg-background px-[2vw] py-[1.4vw] text-[3.6vw] leading-none tracking-[-0.02em] whitespace-nowrap text-foreground opacity-0 transition-opacity duration-200 group-hover/frame:opacity-100 sm:px-[0.7vw] sm:py-[0.5vw] sm:text-[1.1vw]"
        >
          {label}
        </span>
      )}
    </Tag>
  );
}
