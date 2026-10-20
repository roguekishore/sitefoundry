import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";
import { MessagesSquare } from "lucide-react";
import type { TypesomethingV2FooterProps } from "./typesomething-v2-footer";
import { TypesomethingV2Footer } from "./typesomething-v2-footer";

export const footerSample: TypesomethingV2FooterProps = {
  brand: { lead: "Quiet", tail: "page", href: "#", mark: <MessagesSquare strokeWidth={1.75} /> },
  tagline: "Say it once. It's live.",
  details: ["quietpage.example", "made by Lantern & Fold Studio Ltd."],
  socialLabel: "Find us",
  social: [
    { label: "Instagram", href: "#", icon: <IconBrandInstagram stroke={1.75} /> },
    { label: "Facebook", href: "#", icon: <IconBrandFacebook stroke={1.75} /> },
    { label: "X", href: "#", icon: <IconBrandX stroke={1.75} /> },
    { label: "TikTok", href: "#", icon: <IconBrandTiktok stroke={1.75} /> },
    { label: "LinkedIn", href: "#", icon: <IconBrandLinkedin stroke={1.75} /> },
  ],
  columns: [
    { title: "Studio", links: [{ label: "Who we are", href: "#" }, { label: "Plans", href: "#" }] },
    { title: "Learn", links: [{ label: "How it runs", href: "#" }, { label: "Sites we made", href: "#" }] },
    { title: "Reach us", links: [{ label: "Send a note", href: "#" }] },
  ],
  copyright: "© 2026 Quietpage. Every right kept.",
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Cookie choices", href: "#" },
  ],
  badge: { label: "Made with", lead: "Quiet", tail: "page", href: "#", mark: <MessagesSquare strokeWidth={1.75} /> },
  top: { label: "Back to top", href: "#" },
};

export default function Demo() {
  return <TypesomethingV2Footer {...footerSample} />;
}
