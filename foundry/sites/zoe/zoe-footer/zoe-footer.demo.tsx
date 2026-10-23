import { Camera, Globe, PlaySquare, UsersRound } from "lucide-react";
import { ZoeFooter, type ZoeFooterProps } from "./zoe-footer";

const icon = "size-6";

export const footerSample: ZoeFooterProps = {
  followLabel: "Follow along",
  socials: [
    { label: "Tillwell on Snapgram", href: "#", icon: <Camera aria-hidden className={icon} strokeWidth={1.75} /> },
    { label: "Tillwell on Friendlink", href: "#", icon: <UsersRound aria-hidden className={icon} strokeWidth={1.75} /> },
    { label: "Tillwell on Viewtube", href: "#", icon: <PlaySquare aria-hidden className={icon} strokeWidth={1.75} /> },
  ],
  groups: [
    {
      title: "Company",
      links: [
        { label: "About Tillwell", href: "#" },
        { label: "Jobs", href: "#" },
      ],
      stackWithNext: true,
    },
    { title: "Find us", lines: ["12 Orchard Row", "Bristol, BS1 4QT"] },
    {
      title: "Legal",
      links: [
        { label: "Membership terms", href: "#" },
        { label: "Terms for food and supplements", href: "#" },
        { label: "Privacy notice", href: "#" },
        { label: "Cookie notice", href: "#" },
        { label: "Cookie settings", href: "#" },
      ],
    },
    {
      title: "Help & reading",
      links: [
        { label: "Support centre", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Journal", href: "#" },
        { label: "Study updates", href: "#" },
      ],
    },
  ],
  copyright: "©2026 Tillwell Ltd",
  region: { label: "United Kingdom", icon: <Globe aria-hidden className="size-4" strokeWidth={1.5} /> },
};

export default function Demo() {
  return <ZoeFooter {...footerSample} />;
}
