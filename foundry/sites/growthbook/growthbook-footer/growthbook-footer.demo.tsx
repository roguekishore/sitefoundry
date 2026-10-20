// Sample content (gallery only); the page reuses it. Northvane is a made-up company.
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import { Navigation } from "lucide-react";
import { GrowthbookFooter, type GrowthbookFooterProps } from "./growthbook-footer";

const l = (label: string, tag?: string) => ({ label, href: "#", tag });

export const footerSample: GrowthbookFooterProps = {
  brand: "Northvane",
  brandIcon: <Navigation strokeWidth={2.25} />,
  blurb: "Northvane is the warehouse-first platform for split tests, gradual rollouts and usage insights, used by product teams at 2,400+ companies.",
  socials: [
    { label: "YouTube", href: "#", icon: <IconBrandYoutube stroke={1.5} /> },
    { label: "GitHub", href: "#", icon: <IconBrandGithub stroke={1.5} /> },
    { label: "LinkedIn", href: "#", icon: <IconBrandLinkedin stroke={1.5} /> },
    { label: "X", href: "#", icon: <IconBrandX stroke={1.5} /> },
  ],
  badges: [
    { label: "Audited security controls", lines: ["SECURITY", "AUDITED"] },
    { label: "Privacy compliant", lines: ["PRIVACY", "READY"] },
  ],
  columns: [
    { title: "Platform", links: [l("Rollouts"), l("Split tests"), l("Insights"), l("Assistant"), l("Integrations"), l("Agent toolkit"), l("Page editor", "NEW"), l("Plans")] },
    { title: "Use cases", links: [l("Engineers"), l("Analysts"), l("Product leads"), l("Growth"), l("Banking"), l("Health"), l("Learning"), l("AI apps")] },
    { title: "Hosting", links: [l("Warehouse-first"), l("Your servers"), l("Trust centre"), l("Comparisons"), l("Why Northvane")] },
    { title: "Learn", links: [l("Docs"), l("Journal"), l("Podcast"), l("Meetups"), l("Community chat"), l("Reports"), l("Customer stories"), l("Try it free")] },
    { title: "Company", links: [l("About"), l("Jobs"), l("Contact"), l("Merch"), l("Help"), l("Legal")] },
  ],
  copyright: "©2026 Northvane Labs",
  legal: [l("Terms"), l("Privacy")],
};

export default function Demo() {
  return <GrowthbookFooter {...footerSample} />;
}
