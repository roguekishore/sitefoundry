// Sample content lives here (gallery only); the page reuses it. Aldervane and its address are made up.
import { AtSign, Film, Rss } from "lucide-react";
import type { HermeusFooterProps } from "./hermeus-footer";
import { HermeusFooter } from "./hermeus-footer";

export const footerSample: HermeusFooterProps = {
  name: "Aldervane",
  address: ["1180 Dry Lake Road,", "Rosamond Flats, CA 93599", "USA"],
  badgeLabel: "Flag",
  columns: [
    [
      { label: "Airframes", href: "#" },
      { label: "Engines", href: "#" },
      { label: "About", href: "#" },
      { label: "Jobs", href: "#" },
      { label: "Student roles", href: "#" },
    ],
    [
      { label: "Dispatch", href: "#" },
      { label: "Press desk", href: "#" },
      { label: "Brand kit", href: "#" },
      { label: "Store", href: "#" },
    ],
  ],
  socialTitle: "Follow us",
  socials: [
    { label: "Newsletter", href: "#", icon: <AtSign /> },
    { label: "Film channel", href: "#", icon: <Film /> },
    { label: "Feed", href: "#", icon: <Rss /> },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Supplier terms", href: "#" },
    { label: "Code of conduct", href: "#" },
  ],
  copyright: "© 2019 – 2026 Aldervane Aero. All rights reserved.",
};

export default function Demo() {
  return <HermeusFooter {...footerSample} />;
}
