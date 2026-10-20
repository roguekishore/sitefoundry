// Sample content (gallery only); the page reuses it. Fernlight is a made-up company.
import { AtSign, Code, Play, Users } from "lucide-react";
import { GrowthbookV2Footer, type GrowthbookV2FooterProps } from "./growthbook-v2-footer";
import { FernlightMark } from "../growthbook-v2-header/growthbook-v2-header.demo";

const l = (label: string, badge?: string) => ({ label, href: "#", badge });

export const footerSample: GrowthbookV2FooterProps = {
  brand: <FernlightMark large />,
  blurb: "Fernlight is the warehouse-first platform for experiments, release flags and product analytics, used by 2,400+ product teams and the agents that work with them.",
  socials: [
    { label: "Video channel", href: "#", icon: <Play /> },
    { label: "Source code", href: "#", icon: <Code /> },
    { label: "Community", href: "#", icon: <Users /> },
    { label: "Social feed", href: "#", icon: <AtSign /> },
  ],
  badges: [
    { label: "Security audited", lines: ["AUDIT", "TYPE 2"] },
    { label: "Privacy compliant", lines: ["PRIVACY", "READY"] },
  ],
  columns: [
    { title: "Platform", links: [l("Release flags"), l("Experiments"), l("Analytics"), l("Agent server"), l("Integrations"), l("Agent toolkit"), l("Visual editor", "New"), l("Plans")] },
    { title: "Teams", links: [l("Engineers"), l("Data analysts"), l("Product leads"), l("Growth"), l("Finance apps"), l("Health apps"), l("Learning apps"), l("AI products")] },
    { title: "Deploy", links: [l("Warehouse-first"), l("Self-hosted"), l("Security"), l("Comparisons"), l("Why Fernlight")] },
    { title: "Learn", links: [l("Docs"), l("Journal"), l("Podcast"), l("Meetups"), l("Community chat"), l("Insights"), l("Customer stories"), l("Start for free")] },
    { title: "Company", links: [l("About"), l("Jobs"), l("Contact"), l("Shop"), l("Help"), l("Legal")] },
  ],
  copyright: "©2026 Fernlight Labs",
  legal: [l("Terms"), l("Privacy")],
};

export default function Demo() {
  return <GrowthbookV2Footer {...footerSample} />;
}
