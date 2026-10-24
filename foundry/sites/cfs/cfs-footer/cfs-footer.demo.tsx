// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { Atom, AtSign, Briefcase, Camera, Play } from "lucide-react";
import { CfsFooter, type CfsFooterProps } from "./cfs-footer";

export const footerSample: CfsFooterProps = {
  call: "Help us light the grid",
  followLabel: "Follow along",
  socials: [
    { label: "Microblog", href: "#", icon: <AtSign strokeWidth={1.5} /> },
    { label: "Jobs network", href: "#", icon: <Briefcase strokeWidth={1.5} /> },
    { label: "Video channel", href: "#", icon: <Play strokeWidth={1.5} /> },
    { label: "Photo feed", href: "#", icon: <Camera strokeWidth={1.5} /> },
  ],
  cta: { label: "See open roles", href: "#" },
  mark: <Atom strokeWidth={1} />,
  address: ["Brightwater Fusion Works", "40 Millrace Way", "Harrow Falls, NH 03999"],
  legal:
    "© 2026 Brightwater Fusion Works. All rights reserved. Brightwater, Tidecore and Ridgeline Station are names used in this demo only.",
  contacts: [
    { label: "Press", link: { label: "press@brightwater.example", href: "#" } },
    { label: "General questions", link: { label: "hello@brightwater.example", href: "#" } },
    { label: "Partners", link: { label: "partners@brightwater.example", href: "#" } },
    { link: { label: "Get the monthly letter", href: "#" } },
  ],
  links: [
    { label: "About", href: "#" },
    { label: "Reactor", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Journal", href: "#" },
  ],
};

export default function Demo() {
  return <CfsFooter {...footerSample} />;
}
