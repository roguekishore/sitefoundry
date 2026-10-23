import type { ReactNode } from "react";
import { Hexagon } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GalaxyPostCard, type GalaxyPostCardProps } from "@foundry/galaxy-post-card";

export interface GalaxyFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface GalaxyFooterGroup {
  /** the small uppercase heading */
  title: string;
  /** the links under it */
  links: GalaxyFooterLink[];
}

export interface GalaxyFooterSocial {
  /** the network's name, for screen readers */
  label: string;
  /** the profile link */
  href: string;
  /** the icon */
  icon: ReactNode;
}

/** A run of legal text; a part with href becomes a white link. */
export interface GalaxyFooterLegalPart {
  /** the words */
  text: string;
  /** make these words a link */
  href?: string;
}

export interface GalaxyFooterProps {
  /** the brand's mark, top left; a lucide hexagon when empty */
  mark?: ReactNode;
  /** screen-reader name for the mark's link */
  brandLabel: string;
  /** where the mark links */
  brandHref?: string;
  /** link groups; the first sits beside the mark on desktop, the rest flow two to a row */
  groups: GalaxyFooterGroup[];
  /** social profile links */
  socials?: GalaxyFooterSocial[];
  /** the heading over the article cards */
  postsTitle?: string;
  /** two article cards */
  posts?: GalaxyPostCardProps[];
  /** the heading over the podcast row */
  podcastTitle?: string;
  /** one card shown as a row with a square cover */
  podcast?: GalaxyPostCardProps;
  /** the copyright line */
  copyright: string;
  /** an underlined link after the copyright (e.g. cookie settings) */
  copyrightLink?: GalaxyFooterLink;
  /** legal paragraphs, each a list of parts */
  legal?: GalaxyFooterLegalPart[][];
  className?: string;
}

const linkHover = "transition-colors duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] hover:text-muted-foreground motion-reduce:transition-none";
const kicker = "text-xs leading-[1.5] tracking-[0.1em] uppercase lg:text-sm lg:leading-5";

export function GalaxyFooter({
  mark,
  brandLabel,
  brandHref = "#",
  groups,
  socials,
  postsTitle,
  posts,
  podcastTitle,
  podcast,
  copyright,
  copyrightLink,
  legal,
  className,
}: GalaxyFooterProps) {
  return (
    <footer className={cn("bg-background pt-6 pb-16 text-foreground lg:pt-12 lg:pb-20", className)}>
      <div className="mx-auto grid max-w-page gap-x-8 px-gutter lg:grid-cols-2">
        {/* left: mark + groups + socials */}
        <div>
          <div className="grid grid-cols-[3.5rem_1fr] gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
            <a href={brandHref} aria-label={brandLabel} className="row-start-1 size-8 transition-opacity duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] hover:opacity-60 motion-reduce:transition-none [&_svg]:size-full">
              {mark ?? <Hexagon aria-hidden strokeWidth={2.25} />}
            </a>
            {groups.map((group, i) => (
              <div key={group.title} className={cn("col-start-2 lg:col-start-auto", i === 0 && "row-start-1")}>
                <h2 className={cn(kicker, "lg:pt-0.5")}>{group.title}</h2>
                <ul className="mt-4 flex flex-col">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={cn("text-base leading-7", linkHover)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {socials && socials.length > 0 && (
            <ul className="mt-12 flex items-center gap-4 max-lg:pl-14 lg:mt-20">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label} className={cn("grid size-[1.625rem] place-items-center [&_svg]:size-5", linkHover)}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* right: latest posts + podcast */}
        <div className="mt-10 lg:mt-0">
          {postsTitle && <h2 className={kicker}>{postsTitle}</h2>}
          {posts && posts.length > 0 && (
            <div className="mt-4 grid gap-7 sm:grid-cols-2 lg:mt-6 lg:gap-x-[2.375rem]">
              {posts.map((post) => (
                <GalaxyPostCard key={post.title} framed {...post} />
              ))}
            </div>
          )}
          {podcastTitle && <h2 className={cn(kicker, "mt-8 lg:mt-14")}>{podcastTitle}</h2>}
          {podcast && <GalaxyPostCard framed {...podcast} layout="row" className="mt-6 lg:mt-12" />}
        </div>

        {/* bottom row: copyright | legal */}
        <p className="mt-10 text-xs leading-[1.5] tracking-[0.1em] uppercase lg:mt-12 lg:text-sm lg:leading-5">
          {copyright}{" "}
          {copyrightLink && (
            <a href={copyrightLink.href} className={cn("underline underline-offset-2", linkHover)}>
              {copyrightLink.label}
            </a>
          )}
        </p>
        {legal && legal.length > 0 && (
          <div className="mt-8 flex flex-col gap-6 text-xs leading-[1.5] lg:text-sm lg:leading-5 tracking-[0.1em] text-muted-foreground uppercase lg:mt-12 lg:gap-6 [&>p:last-child]:mt-5">
            {legal.map((paragraph, i) => (
              <p key={i}>
                {paragraph.map((part, j) =>
                  part.href ? (
                    <a key={j} href={part.href} className={cn("text-foreground", linkHover)}>
                      {part.text}
                    </a>
                  ) : (
                    <span key={j}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
