// Sample content lives here (gallery only); the page reuses it.
import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import { LatchLogo } from "../clerk-header/clerk-header.demo";
import { ClerkFooter, type ClerkFooterProps } from "./clerk-footer";

const link = (label: string) => ({ label, href: `#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` });

export const footerSample: ClerkFooterProps = {
  brand: "Latch",
  logo: <LatchLogo />,
  columns: [
    { title: "Product", links: ["Sign-in", "Teams", "Payments", "Command line", "Agents"].map(link) },
    { title: "SDKs", links: ["React", "Vue", "Swift", "All SDKs"].map(link) },
    { title: "Learn", links: ["Docs", "Updates", "Terms explained", "Ideas board", "For startups", "For students"].map(link) },
    { title: "About", links: ["Our story", "Jobs", "Journal", "Get in touch", "Press kit"].map(link) },
    { title: "Legal", links: ["Terms", "Privacy", "Site terms", "Trust center", "Cookie settings"].map(link) },
  ],
  copyright: "© 2026 Latch Labs",
  socials: [
    { label: "X", href: "#x", icon: <IconBrandX stroke={1.75} /> },
    { label: "LinkedIn", href: "#linkedin", icon: <IconBrandLinkedin stroke={1.75} /> },
    { label: "Discord", href: "#discord", icon: <IconBrandDiscord stroke={1.75} /> },
    { label: "GitHub", href: "#github", icon: <IconBrandGithub stroke={1.75} /> },
    { label: "YouTube", href: "#youtube", icon: <IconBrandYoutube stroke={1.75} /> },
  ],
};

export default function Demo() {
  return <ClerkFooter {...footerSample} />;
}
