// Sample content (gallery only). "Halyard" is a made-up company.
import { Cloud, Eye, GitBranch, Network, TrendingUp } from "lucide-react";
import { RailwayHero, type RailwayHeroProps } from "./railway-hero";

export const heroSample: RailwayHeroProps = {
  title: "Launch code without the noise",
  lead: (
    <>
      The calm, all-in-one cloud for{" "}
      <a href="#" className="underline decoration-foreground/60 underline-offset-4 transition-colors duration-150 hover:text-foreground">
        busy
      </a>{" "}
      product teams
    </>
  ),
  actions: [
    { label: "Launch →", href: "#" },
    { label: "Copilots", href: "#" },
  ],
  tabs: [
    { label: "Launch", icon: <Cloud /> },
    { label: "Wire", icon: <Network /> },
    { label: "Grow", icon: <TrendingUp /> },
    { label: "Watch", icon: <Eye /> },
    { label: "Branch", icon: <GitBranch /> },
  ],
  tabsLabel: "What Halyard does",
};

export default function Demo() {
  return <RailwayHero {...heroSample} />;
}
