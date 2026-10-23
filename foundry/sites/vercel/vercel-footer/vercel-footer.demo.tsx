// Sample content (gallery only); the page reuses it. Product names are made up.
import { Hexagon } from "lucide-react";
import { VercelFooter, type VercelFooterProps } from "./vercel-footer";

const l = (label: string, badge?: string) => ({ label, href: "#", badge });

export const footerSample: VercelFooterProps = {
  brand: "Halyard",
  mark: <Hexagon fill="currentColor" strokeWidth={1.5} />,
  groups: [
    { title: "Agent Runtime", links: [l("Model Router"), l("Long-running Jobs"), l("Isolates"), l("Schedules"), l("Handoff", "New"), l("Keyring", "New"), l("Scout", "New")] },
    { title: "Platform", links: [l("Deploys"), l("Edge Network"), l("Elastic Compute"), l("Traces")] },
    { title: "Protection", links: [l("Platform Safety"), l("Traffic Shield"), l("Crawler Control"), l("Human Check")] },
    { title: "Tooling", links: [l("Drop Deploy"), l("Code Reviewer"), l("Editor Plugin"), l("Agent Recipes"), l("Domains"), l("Sketchpad")] },
    { title: "Frameworks", links: [l("Scout", "New"), l("Remix"), l("Astro"), l("Svelte"), l("Hono"), l("Vite"), l("Qwik"), l("Django"), l("All frameworks")] },
    { title: "Libraries", links: [l("Halyard SDK"), l("Jobs SDK"), l("Toggles SDK"), l("Chat SDK"), l("Queue SDK"), l("Streamkit")] },
    { title: "Use cases", links: [l("Assistants"), l("Web Apps"), l("Launch Sites"), l("Multi-tenant"), l("Storefronts"), l("Platform Teams"), l("Design Teams")] },
    { title: "Learn", links: [l("Docs"), l("Journal"), l("Release Notes"), l("Help Centre"), l("Courses"), l("Essays"), l("Forum"), l("Agent Ready")] },
    { title: "Explore", links: [l("Stories"), l("Integrations"), l("Starters"), l("Find a Partner"), l("Halyard + Clouds")] },
    { title: "Company", links: [l("About"), l("Jobs"), l("Newsroom"), l("Meetups"), l("Founders"), l("Built on Halyard"), l("Open Source Fund"), l("Teams"), l("Plans"), l("Support")] },
    { title: "Legal", links: [l("Privacy"), l("Terms"), l("Cookies"), l("Data Processing"), l("Fair Use"), l("All Policies"), l("Trust Portal"), l("Uptime")] },
    { title: "Social", links: [l("GitHub"), l("X"), l("LinkedIn"), l("YouTube"), l("Instagram")] },
  ],
  status: { label: "Everything is running.", href: "#" },
  appearanceLabels: ["Match system", "Light", "Dark"],
};

export default function Demo() {
  return <VercelFooter {...footerSample} />;
}
