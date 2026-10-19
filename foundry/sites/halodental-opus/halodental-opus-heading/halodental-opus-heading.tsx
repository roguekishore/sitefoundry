import { cn } from "@foundry/foundry-utils";

export interface HalodentalOpusHeadingProps {
  /** the heading text */
  title: string;
  /** the HTML element */
  as?: "h1" | "h2" | "h3";
  /**
   * section: 40px on phones, 64px on desktop · mega: 50px on phones, 100px on desktop ·
   * card: 25px → 28px (news titles, footer columns)
   */
  size?: "section" | "mega" | "card";
  /** paint the letters with the highlight → glow gradient (yellow to red) */
  gradient?: boolean;
  className?: string;
}

const sizes = {
  section: "text-[2.4375rem] leading-[1.1] md:text-[3.25rem] lg:text-[4rem] lg:leading-none",
  mega: "text-[3.125rem] leading-none md:text-[4.75rem] lg:text-[6.25rem] lg:leading-[0.95]",
  card: "text-[1.5625rem] leading-[1.1] lg:text-[1.75rem]",
};

/** Halo Dental's headings: one display face at regular weight, tight lines, no tracking. */
export function HalodentalOpusHeading({ title, as: Tag = "h2", size = "section", gradient, className }: HalodentalOpusHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-balance",
        sizes[size],
        gradient && "bg-linear-to-r from-highlight to-glow bg-clip-text pb-[0.08em] text-transparent",
        className,
      )}
    >
      {title}
    </Tag>
  );
}
