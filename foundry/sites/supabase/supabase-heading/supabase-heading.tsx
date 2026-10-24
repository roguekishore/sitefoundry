import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SupabaseHeadingPart {
  /** the words of this phrase */
  text: ReactNode;
  /** strong: ink · muted: grey · brand: the primary green */
  tone?: "strong" | "muted" | "brand";
}

export interface SupabaseHeadingProps {
  /** the phrases, in order; the site's titles pair one ink phrase with one grey (or green) one */
  parts: SupabaseHeadingPart[];
  /** the element: h1 for the page title, h2 for sections */
  as?: "h1" | "h2";
  /** title: 34px → 46px (hero) · large: 34px everywhere · section: 22px on phones → 34px */
  size?: "title" | "large" | "section";
  /** where each phrase starts a new line: always, from desktop up, on phones only, or never */
  stack?: "always" | "desktop" | "phone" | "never";
  className?: string;
}

const sizes = {
  title: "text-[2.125rem] leading-[1.11] lg:text-[2.875rem] lg:leading-[1.1]",
  large: "text-[2.125rem] leading-[1.11]",
  section: "text-[1.375rem] leading-[1.33] lg:text-[2.125rem] lg:leading-[1.11]",
};

const tones = {
  strong: "text-foreground",
  muted: "text-muted-foreground",
  brand: "text-primary",
};

const stacks = {
  always: "block",
  desktop: "lg:block",
  phone: "block lg:inline",
  never: "",
};

/** The site's two-tone title: phrases in ink, grey or green, stacked or flowing. */
export function SupabaseHeading({ parts, as: Tag = "h2", size = "section", stack = "desktop", className }: SupabaseHeadingProps) {
  return (
    <Tag className={cn("font-display font-medium text-balance", sizes[size], className)}>
      {parts.map((part, i) => (
        <span key={i} className={cn(tones[part.tone ?? "strong"], stacks[stack])}>
          {part.text}
          {i < parts.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
