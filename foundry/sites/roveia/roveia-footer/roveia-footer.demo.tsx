// Sample content lives here (gallery only); the page reuses it. The company is made up.
import { AtSign, Briefcase, Camera, Plus } from "lucide-react";
import { RoveiaFooter, type RoveiaFooterProps } from "./roveia-footer";

export const footerSample: RoveiaFooterProps = {
  heading: "Care brands deserve growth that holds up",
  subheading: "Let's plan a careful, compounding growth engine.",
  cta: { label: "Book a call", href: "#" },
  brand: "Northvane",
  brandMark: <Plus strokeWidth={2} />,
  socials: [
    { label: "LinkedIn", href: "#", icon: <Briefcase strokeWidth={1.75} /> },
    { label: "Instagram", href: "#", icon: <Camera strokeWidth={1.75} /> },
    { label: "Threads", href: "#", icon: <AtSign strokeWidth={1.75} /> },
  ],
  copyright: "© 2026 Northvane Studio. All rights reserved.",
  columns: [
    { title: "Sectors:", links: [{ label: "Virtual Care", href: "#" }, { label: "Wellness Goods", href: "#" }, { label: "Care Software", href: "#" }] },
    { title: "Pages:", links: [{ label: "Results", href: "#" }, { label: "Library", href: "#" }, { label: "Studio", href: "#" }, { label: "Join us", href: "#" }] },
    { title: "Legal:", links: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
  ],
};

export default function Demo() {
  return <RoveiaFooter {...footerSample} />;
}
