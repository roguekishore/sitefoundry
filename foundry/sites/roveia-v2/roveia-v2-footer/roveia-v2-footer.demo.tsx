// Sample content lives here (gallery only); the page reuses it. Halden Growth is made up.
import { AtSign, Mail, Rss } from "lucide-react";
import { RoveiaV2Footer, type RoveiaV2FooterProps } from "./roveia-v2-footer";

export const footerSample: RoveiaV2FooterProps = {
  heading: "Build the care brand people come back to",
  lead: "Let's build growth that stays review-safe as it scales.",
  cta: { label: "Book a call", href: "#" },
  brand: "Halden Growth",
  socials: [
    { label: "Newsletter", href: "#", icon: <Mail strokeWidth={1.75} /> },
    { label: "Social", href: "#", icon: <AtSign strokeWidth={1.75} /> },
    { label: "Field notes feed", href: "#", icon: <Rss strokeWidth={1.75} /> },
  ],
  legal: "© 2026 Halden Growth. All rights reserved.",
  columns: [
    { label: "Sectors:", links: [{ label: "Virtual care", href: "#" }, { label: "Wellness goods", href: "#" }, { label: "Care software", href: "#" }] },
    { label: "Explore:", links: [{ label: "Results", href: "#" }, { label: "Field notes", href: "#" }, { label: "Studio", href: "#" }, { label: "Join us", href: "#" }] },
    { label: "Legal:", links: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
  ],
};

export default function Demo() {
  return <RoveiaV2Footer {...footerSample} />;
}
