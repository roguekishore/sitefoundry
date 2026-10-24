import type { FramerPlatformProps } from "./framer-platform";
import { FramerPlatform } from "./framer-platform";

export const platformSample: FramerPlatformProps = {
  title: "More than a mood board,\na whole toolkit",
  subtitle: "All you want from a site studio, with content, hosting, stats, search and AI answers built in.",
  cells: [
    { label: "Speed", href: "#", size: "tall", fit: "inset", mediaLabel: "Page speed scores" },
    { label: "Content", href: "#", size: "wide", fit: "bleed", mediaLabel: "Content collections table" },
    { label: "Search", href: "#", size: "tall", fit: "bleed", mediaLabel: "Page settings form" },
    { label: "Teamwork", href: "#", size: "small", fit: "inset", mediaLabel: "Branch list" },
    { label: "Uptime", href: "#", size: "small", compact: true, fit: "full", mediaLabel: "Uptime figure" },
    { label: "Languages", href: "#", size: "small", fit: "inset", mediaLabel: "Language list" },
    { label: "Safety", href: "#", size: "small", compact: true, fit: "bleed", mediaLabel: "Address bar" },
    { label: "Stats", href: "#", size: "wide", fit: "bleed", mediaLabel: "Visitor chart" },
    { label: "Split tests", href: "#", size: "tall", fit: "bleed", mediaLabel: "Variant results" },
  ],
};

export default function Demo() {
  return <FramerPlatform {...platformSample} />;
}
