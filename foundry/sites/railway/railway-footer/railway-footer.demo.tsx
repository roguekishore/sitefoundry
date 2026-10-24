// Sample content (gallery only). "Halyard" is a made-up company.
import { Sailboat } from "lucide-react";
import { RailwayFooter, type RailwayFooterProps } from "./railway-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: RailwayFooterProps = {
  featuredLabel: "Featured",
  featured: [
    {
      title: "A quieter way to ship software",
      accent: "has a film",
      text: "Know a developer who has lost the calm? Is it you? Here is how to get it back.",
      link: { label: "Watch it →", href: "#" },
    },
    {
      title: "Halyard for phones",
      accent: "is out on iOS and Android",
      text: "Launch, watch and look after your services from anywhere. The whole workspace, in your pocket.",
      link: { label: "Get the app →", href: "#" },
    },
  ],
  groups: [
    { title: "Platform", links: links(["Overview", "Phone app", "Plans", "Copilots", "Sandboxes", "Release log", "Starter kits", "Kit rewards"]) },
    { title: "Compare", links: links(["Cloudcourt", "Nimbus", "Ridgeline", "Hexa"]) },
    { title: "Reach us", links: links(["Social", "Code", "Email"]) },
    { title: "Learn", links: links(["Stories", "Teams", "Docs", "Community", "Journal", "Partners", "Referrals"]) },
    { title: "Company", links: links(["About", "Beliefs", "Jobs", "Store", "Trust", "Brand", "Status"]) },
    { title: "Legal", links: links(["Data terms", "Fair use", "Privacy", "Terms", "Team agreement", "Bug bounty", "Cookies"]) },
  ],
  badges: [
    <span key="a" className="rounded-full border border-current px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.08em] uppercase">Health-data ready</span>,
    <span key="b" className="rounded-full border border-current px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.08em] uppercase">Audited</span>,
  ],
  mark: <Sailboat strokeWidth={2} />,
  status: { label: "All systems normal", href: "#" },
  copyright: "© 2026 Halyard Labs. All rights reserved.",
};

export default function Demo() {
  return <RailwayFooter {...footerSample} className="bg-background" />;
}
