import type { CursorFooterProps } from "./cursor-footer";
import { CursorFooter } from "./cursor-footer";

const links = (...labels: string[]) => labels.map((label) => ({ label, href: "#" }));

export const footerSample: CursorFooterProps = {
  columns: [
    { title: "Product", links: links("Agents", "Teams", "Companies", "Plans", "Reviews", "Shell", "Hosted agents", "Models", "Plugins") },
    { title: "Resources", links: links("Install", "Release notes", "Guides", "Courses", "Forum", "Support", "Events", "Status") },
    { title: "Company", links: links("Jobs", "Journal", "People", "Education", "Press kit", "Manifesto", "Fernwork Labs") },
    { title: "Legal", links: links("Terms", "Fair use", "Helper terms", "Subscription terms", "Privacy", "Cookies", "Data handling", "Trust", "Your choices") },
    { title: "Follow", links: links("Mastodon", "Bluesky", "Video channel") },
  ],
  copyright: "© 2026 Fernwork Labs, Inc.",
  compliance: "SOC 2 | ISO 27001 | ISO 42001 certified",
  modeLabels: ["Match system", "Light", "Dark"],
  language: "English",
};

export default function Demo() {
  return <CursorFooter {...footerSample} />;
}
