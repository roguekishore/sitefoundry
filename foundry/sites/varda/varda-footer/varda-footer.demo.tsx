// Sample content lives here (gallery only); the page reuses it. Halden Orbital Works and its
// address are made up.
import { AtSign, Camera, Orbit, Rss, Tv } from "lucide-react";
import type { VardaFooterProps } from "./varda-footer";
import { VardaFooter } from "./varda-footer";

export const footerSample: VardaFooterProps = {
  name: "Halden",
  icon: <Orbit strokeWidth={1.5} />,
  details: [
    { label: "Address", lines: ["1900 Hangar Row, Mojave Port,", "CA 93501"] },
    { label: "Contact", lines: ["hello@halden.example"], href: "mailto:hello@halden.example" },
  ],
  socials: [
    { label: "Updates", href: "#", icon: <AtSign strokeWidth={1.75} /> },
    { label: "Videos", href: "#", icon: <Tv strokeWidth={1.75} /> },
    { label: "Photos", href: "#", icon: <Camera strokeWidth={1.75} /> },
    { label: "Feed", href: "#", icon: <Rss strokeWidth={1.75} /> },
  ],
  columns: [
    [
      {
        title: "Company",
        links: [
          { label: "About Halden", href: "#" },
          { label: "Press room", href: "#" },
          { label: "Jobs", href: "#" },
          { label: "Store", href: "#" },
        ],
      },
    ],
    [
      {
        title: "Solutions",
        links: [
          { label: "Defense", href: "#" },
          { label: "Pharma", href: "#" },
          { label: "Research labs", href: "#" },
        ],
      },
      { title: "Platform", links: [{ label: "Meet the Kiln", href: "#" }] },
    ],
  ],
  copyright: "© 2026 Halden Orbital Works",
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Vendors", href: "#" },
  ],
};

export default function Demo() {
  return <VardaFooter {...footerSample} />;
}
