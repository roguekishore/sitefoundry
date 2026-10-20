import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./growthbook-v2-panel.css";

export interface GrowthbookV2PanelProps {
  /** the wash: violet (default), mint, sky, navy or teal */
  tone?: "violet" | "mint" | "sky" | "navy" | "teal";
  /** faint hairline guides near the edges, as on the original's product frames */
  grid?: boolean;
  /** a real image or video; replaces the wash when given */
  media?: ReactNode;
  /** things placed on top of the wash (e.g. a screenshot frame) */
  children?: ReactNode;
  className?: string;
}

const guides = ["inset-y-0 left-[6%] w-px", "inset-y-0 right-[6%] w-px", "inset-x-0 top-[21%] h-px", "inset-x-0 bottom-[21%] h-px"];

export function GrowthbookV2Panel({ tone = "violet", grid, media, children, className }: GrowthbookV2PanelProps) {
  return (
    <div className={cn("relative isolate overflow-clip rounded-xl", !media && `growthbook-v2-panel-${tone}`, className)}>
      {media ? (
        <div className="absolute inset-0 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover">{media}</div>
      ) : (
        grid && guides.map((g) => <span key={g} aria-hidden className={cn("absolute -z-10 bg-card/25", g)} />)
      )}
      {children}
    </div>
  );
}
