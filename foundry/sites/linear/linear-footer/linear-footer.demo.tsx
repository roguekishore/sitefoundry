// Sample content lives here (gallery only); the page reuses it.
import { Bird } from "lucide-react";
import { LinearFooter, type LinearFooterProps } from "./linear-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: `#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` }));

export const footerSample: LinearFooterProps = {
  brand: "Kestrel",
  mark: <Bird aria-hidden strokeWidth={2.25} />,
  groups: [
    { title: "Product", links: links("Capture", "Roadmaps", "Agents", "Review", "Plans", "Trust") },
    { title: "Features", links: links("Asks", "Agent sessions", "Requests", "Reports", "Phone app", "Connections", "What's new") },
    { title: "Company", links: links("About", "Stories", "Jobs", "Lately", "Our method", "Craft", "Press kit") },
    { title: "Resources", links: links("Moving over", "Get the app", "Docs", "API", "Uptime", "Large teams", "New companies") },
    { title: "Connect", links: links("Talk to us", "Forum", "Bluesky", "Source", "Videos") },
  ],
  legal: { title: "Legal", links: links("Privacy", "Terms", "Data terms", "Fair use") },
};

export default function Demo() {
  return <LinearFooter {...footerSample} />;
}
