import { IconBrandInstagram, IconBrandLinkedin, IconBrandThreads, IconBrandX, IconBrandYoutubeFilled } from "@tabler/icons-react";
import { Hexagon } from "lucide-react";
import type { FramerFooterLink, FramerFooterProps } from "./framer-footer";
import { FramerFooter } from "./framer-footer";

const links = (labels: string[]): FramerFooterLink[] =>
  labels.map((label) => (label.endsWith("*") ? { label: label.slice(0, -1), href: "#", badge: "new" } : { label, href: "#" }));

export const footerSample: FramerFooterProps = {
  brand: "Tessel",
  mark: <Hexagon fill="currentColor" strokeWidth={0} />,
  columns: [
    [{ title: "Product", links: links(["Agent", "Helpers", "Editor link*", "Canvas", "Teamwork", "Content", "Hosting", "Speed", "Search", "Recipes*", "Import", "Go live", "Changelog"]) }],
    [
      { title: "Library", links: links(["Starters", "Blocks", "Icons", "Add-ons", "Showcase", "Find a pro"]) },
      { title: "Business", links: links(["Move over*", "Teams", "Studios", "Startups", "Plans"]) },
    ],
    [{ title: "Learn", links: links(["Courses", "Desktop app", "Developers", "Partners", "Pros*", "Guides", "Journal", "Letters", "Stories", "Recipe index*", "Students", "Champions", "Help centre", "Meetups", "Contact"]) }],
    [{ title: "Use cases", links: links(["Designers", "Studios", "Marketers", "Growth", "Makers", "Engineers", "Web teams", "Founders", "AI site builder", "AI designer", "Site builder", "Launch pages", "Portfolios", "Interface design", "Design to code", "No code"]) }],
    [{ title: "Compare", links: links(["Pagecraft", "Sketchbook", "Siteloom", "Boxmaker", "Blogfront", "Folio", "Spinner", "Landfall", "Quickbuild", "Codepal", "Chatwise", "Draftline", "Headwind", "Stackpage", "Enterprise suite", "Replay", "Vee"]) }],
    [
      { title: "Company", links: links(["About*", "Jobs", "Security", "Brand kit", "Report abuse", "Legal", "Trust"]) },
      { title: "From Tessel", links: links(["Shop", "Shortcuts", "Score", "Free addresses", "Bench", "Web report", "Answer check", "Link preview"]) },
    ],
  ],
  language: "English",
  socials: [
    { label: "X", href: "#", icon: <IconBrandX stroke={2} /> },
    { label: "YouTube", href: "#", icon: <IconBrandYoutubeFilled /> },
    { label: "Instagram", href: "#", icon: <IconBrandInstagram stroke={2} /> },
    { label: "LinkedIn", href: "#", icon: <IconBrandLinkedin stroke={2} /> },
    { label: "Threads", href: "#", icon: <IconBrandThreads stroke={2} /> },
  ],
  badges: ["ISO", "GDPR", "SOC 2", "CCPA"],
  status: { label: "Everything is running", href: "#" },
  copyright: "Tessel © 2026",
};

export default function Demo() {
  return <FramerFooter {...footerSample} />;
}
