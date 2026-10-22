// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpFooter, type WarpFooterProps } from "./warp-footer";

const l = (label: string) => ({ label, href: "#" });

export const footerSample: WarpFooterProps = {
  mark: { name: "lathe", href: "#" },
  tagline: "The open floor for agent-built software.",
  columns: [
    { heading: "product", links: ["get the app", "plans", "teams", "release notes", "docs", "source", "uptime"].map(l) },
    { heading: "learn", links: ["journal", "questions", "forum", "help", "recipes", "glossary"].map(l) },
    { heading: "company", links: ["about", "how we build", "jobs", "media", "contact"].map(l) },
    { heading: "legal", links: ["privacy", "terms", "security", "cookies", "data processing terms", "your privacy settings"].map(l) },
    { heading: "elsewhere", links: ["mastodon", "github", "video", "discord", "newsletter"].map(l) },
  ],
  legal: "© 2026 Lathe Systems. All rights reserved.",
};

export default function Demo() {
  return <WarpFooter {...footerSample} />;
}
