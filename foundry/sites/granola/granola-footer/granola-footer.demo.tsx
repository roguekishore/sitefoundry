import { AtSign, Briefcase, CirclePlay } from "lucide-react";
import { GranolaFooter, type GranolaFooterProps } from "./granola-footer";

export const footerSample: GranolaFooterProps = {
  brand: "tidemark",
  groups: [
    {
      heading: "Features",
      links: [
        { label: "Notebook", href: "#notebook" },
        { label: "Ask", href: "#ask" },
        { label: "Phone app", href: "#phone" },
      ],
    },
    {
      heading: "Product",
      links: [
        { label: "Plans", href: "#plans" },
        { label: "For teams", href: "#teams" },
        { label: "Connections", href: "#connections" },
        { label: "Notebook vs recorder", href: "#versus" },
        { label: "Call assistant", href: "#assistant" },
        { label: "For sales", href: "#sales" },
        { label: "For product teams", href: "#product" },
        { label: "Connect API", href: "#api" },
        { label: "Browse all…", href: "#all" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Customers", href: "#customers" },
        { label: "Jobs", href: "#jobs" },
        { label: "Press", href: "#press" },
        { label: "Events", href: "#events" },
        { label: "Startups", href: "#startups" },
        { label: "Students", href: "#students" },
        { label: "Nonprofits", href: "#nonprofits" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Journal", href: "#journal" },
        { label: "Trust centre", href: "#trust" },
        { label: "Openness report", href: "#openness" },
        { label: "Help", href: "#help" },
        { label: "Uptime", href: "#uptime" },
        { label: "Partners", href: "#partners" },
        { label: "Contact", href: "#contact" },
        { label: "Terms", href: "#terms" },
        { label: "Privacy", href: "#privacy" },
        { label: "Licences", href: "#licences" },
      ],
    },
  ],
  socials: [
    { label: "Tidemark on Workfeed", href: "#workfeed", icon: <Briefcase /> },
    { label: "Tidemark on Chirp", href: "#chirp", icon: <AtSign /> },
    { label: "Tidemark on Reelhouse", href: "#reelhouse", icon: <CirclePlay /> },
  ],
  legal: "© Tidemark Ltd. 2026",
};

export default function Demo() {
  return <GranolaFooter {...footerSample} reveal={false} />;
}
