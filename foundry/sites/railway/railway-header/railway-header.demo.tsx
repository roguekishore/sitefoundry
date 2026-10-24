// Sample content (gallery only). "Halyard" is a made-up company.
import { Sailboat } from "lucide-react";
import { RailwayHeader, type RailwayHeaderProps } from "./railway-header";

export const headerSample: RailwayHeaderProps = {
  brand: { name: "Halyard", mark: <Sailboat strokeWidth={2.25} />, href: "#" },
  nav: [
    { label: "Platform", links: [{ label: "Launch", href: "#" }, { label: "Wiring", href: "#" }, { label: "Watchtower", href: "#" }] },
    { label: "Builders", links: [{ label: "Guides", href: "#" }, { label: "Starter kits", href: "#" }, { label: "Release log", href: "#" }] },
    { label: "Teams", links: [{ label: "Security", href: "#" }, { label: "Dedicated hosts", href: "#" }] },
    { label: "About", links: [{ label: "Story", href: "#" }, { label: "Jobs", href: "#" }] },
    { label: "Plans", href: "#" },
  ],
  actions: [
    { label: "Log in", href: "#" },
    { label: "Talk to us", href: "#" },
  ],
  menuLabel: "Open menu",
};

export default function Demo() {
  return <RailwayHeader {...headerSample} />;
}
