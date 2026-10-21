import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureNoteCard, type StoreyarchitectureNoteCardProps } from "@foundry/storeyarchitecture-note-card";
import "./storeyarchitecture-footer.css";

export interface StoreyarchitectureFooterLink {
  label: string;
  href: string;
}

export interface StoreyarchitectureFooterGroup {
  /** the medium heading */
  title: string;
  /** the small links (or plain lines when href is empty) under it */
  links: StoreyarchitectureFooterLink[];
}

export interface StoreyarchitectureFooterProps {
  /** the two link columns: site index, legal */
  groups: StoreyarchitectureFooterGroup[];
  /** the contact block under them */
  contact: StoreyarchitectureFooterGroup;
  /** the plain wordmark beside the contact block */
  brand: string;
  /** the wide photo at the right (object-cover); empty shows a placeholder */
  media?: ReactNode;
  /** the small tilted note pinned over the photo */
  note?: StoreyarchitectureNoteCardProps;
  /** what shows in the strip under the footer; empty shows a soft fade */
  scene?: ReactNode;
  className?: string;
}

function Group({ group, className }: { group: StoreyarchitectureFooterGroup; className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-[8vw] leading-none sm:text-[2.2vw]">{group.title}</h2>
      <ul className="mt-[2.5vw] text-[4.3vw] leading-[1.4] sm:mt-[1.2vw] sm:text-[1.1vw] sm:leading-[1.55]">
        {group.links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a href={link.href} className="transition-opacity duration-200 hover:opacity-60">
                {link.label}
              </a>
            ) : (
              link.label
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StoreyarchitectureFooter({ groups, contact, brand, media, note, scene, className }: StoreyarchitectureFooterProps) {
  return (
    <footer className={cn("storeyarchitecture-footer overflow-clip bg-foreground font-[450] text-background", className)}>
      <div className="storeyarchitecture-footer-panel grid grid-cols-6 gap-x-gutter px-gutter pt-[10vw] tracking-[-0.02em] sm:grid-cols-12 sm:pt-[10vw]">
        <div className="col-span-6 grid grid-cols-6 gap-x-gutter gap-y-[11vw] sm:row-start-1 sm:gap-y-[5vw] sm:self-start">
          {groups.map((group) => (
            <Group key={group.title} group={group} className="col-span-6 sm:col-span-3" />
          ))}
          <Group group={contact} className="col-span-6 sm:col-span-3" />
          <p className="col-span-6 text-[8vw] leading-none sm:col-span-3 sm:text-[2.2vw]">{brand}</p>
        </div>

        <div className="relative col-span-6 -mx-gutter mt-[9vw] sm:col-start-7 sm:row-start-1 sm:mt-0 sm:ml-0 sm:pt-[0.2vw]">
          <div className="aspect-[1.6] overflow-clip bg-muted [&>*]:size-full [&>*]:object-cover">{media}</div>
          {note && <StoreyarchitectureNoteCard {...note} className="absolute top-[0.5vw] left-[-1.4vw] rotate-[4deg] text-[0.82vw] sm:top-0" />}
        </div>
      </div>
      <div aria-hidden={!scene} className="h-[20vw] bg-linear-to-b from-background/75 to-background [&>*]:size-full [&>*]:object-cover">
        {scene}
      </div>
    </footer>
  );
}
