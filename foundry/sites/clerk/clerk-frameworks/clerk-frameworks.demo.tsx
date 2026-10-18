// Sample content lives here (gallery only); the page reuses it.
import { Atom, Bird, Cog, Database, Hexagon, Mountain, Rocket, Triangle, Waypoints } from "lucide-react";
import { ClerkFrameworks, type ClerkFrameworksProps } from "./clerk-frameworks";

export const frameworksSample: ClerkFrameworksProps = {
  id: "sdks",
  groups: [
    {
      heading: {
        eyebrow: "SDKs",
        eyebrowTone: "highlight",
        title: ["Libraries for the", "stacks you ship on"],
        text: "Latch keeps the developer side first-class, with SDKs for the frameworks you already use on web and mobile.",
        link: { label: "Browse every SDK", href: "#sdks" },
      },
      tiles: [
        { label: "React", icon: <Atom /> },
        { label: "Vue", icon: <Triangle className="rotate-180" /> },
        { label: "Svelte", icon: <Waypoints /> },
        { label: "Swift", icon: <Bird /> },
        { label: "Go", icon: <Cog /> },
        { label: "Rust", icon: <Hexagon /> },
      ],
    },
    {
      heading: {
        eyebrow: "Integrations",
        title: ["Plays well with", "the rest of your stack"],
        text: "Make Latch the single record of who your users are, and connect it to the tools you rely on.",
        link: { label: "See all integrations", href: "#integrations" },
      },
      tiles: [
        { label: "Postgres", icon: <Database /> },
        { label: "Deploys", icon: <Rocket /> },
        { label: "Edge", icon: <Mountain /> },
      ],
    },
  ],
};

export default function Demo() {
  return <ClerkFrameworks {...frameworksSample} />;
}
