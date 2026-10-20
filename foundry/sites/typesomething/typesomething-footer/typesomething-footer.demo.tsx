import { AtSign, BotMessageSquare, Briefcase, Camera, Music2, ThumbsUp } from "lucide-react";
import { TypesomethingFooter, type TypesomethingFooterProps } from "./typesomething-footer";

export const footerSample: TypesomethingFooterProps = {
  brand: { lead: "Paper", tail: "kite" },
  brandIcon: <BotMessageSquare strokeWidth={2} />,
  tagline: "Drop the dashboard. Just ask.",
  details: ["paperkite.site", "made by Northlane Studio Ltd."],
  socialLabel: "Follow us",
  socials: [
    { label: "Photos", href: "#photos", icon: <Camera /> },
    { label: "Community", href: "#community", icon: <ThumbsUp /> },
    { label: "Updates", href: "#updates", icon: <AtSign /> },
    { label: "Short videos", href: "#videos", icon: <Music2 /> },
    { label: "Careers", href: "#careers", icon: <Briefcase /> },
  ],
  columns: [
    { title: "Company", links: [{ label: "About us", href: "#about" }, { label: "Plans", href: "#plans" }] },
    { title: "Resources", links: [{ label: "The product", href: "#product" }, { label: "Sites we run", href: "#sites" }] },
    { title: "Contact", links: [{ label: "Write to us", href: "#contact" }] },
  ],
  copyright: "© 2026 Paperkite. All rights reserved.",
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Cookie settings", href: "#cookies" },
  ],
  badge: { label: "Made with Paperkite", href: "#" },
  top: { label: "Back to top", href: "#" },
};

export default function Demo() {
  return <TypesomethingFooter {...footerSample} />;
}
