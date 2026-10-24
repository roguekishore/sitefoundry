// Sample content (gallery only); the page reuses it. The address is made up.
import { AtSign, MessageCircle, Rss, Tv } from "lucide-react";
import { ResendFooter, type ResendFooterProps } from "./resend-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: `#${label.toLowerCase().replace(/\W+/g, "-")}` }));

export const footerSample: ResendFooterProps = {
  address: ["418 Wharf Lane, Suite 12", "Harbourline, OR 97001"],
  socials: [
    { label: "Updates", href: "#updates", icon: <AtSign strokeWidth={1.75} /> },
    { label: "Community chat", href: "#chat", icon: <MessageCircle strokeWidth={1.75} /> },
    { label: "Feed", href: "#feed", icon: <Rss strokeWidth={1.75} /> },
    { label: "Videos", href: "#videos", icon: <Tv strokeWidth={1.75} /> },
  ],
  status: { label: "Every system running", href: "#status" },
  groups: [
    { title: "Product", links: links(["Workflows", "Audiences", "Campaigns", "Inbound mail", "Templates", "Event hooks", "Private IPs"]) },
    { title: "Learn", links: links(["Release notes", "Plans", "Large teams", "Trust", "Audits", "Privacy", "Brand kit"]) },
    { title: "About", links: links(["Story", "Journal", "Jobs", "Meetups", "Customers", "People", "Principles"]) },
    { title: "Support", links: links(["Help desk", "Uptime", "Switch to Tern", "Answers", "Legal"]) },
    { title: "Together", links: links(["Gatherings", "Early access", "Open code", "Backgrounds"]) },
  ],
};

export default function Demo() {
  return <ResendFooter {...footerSample} />;
}
