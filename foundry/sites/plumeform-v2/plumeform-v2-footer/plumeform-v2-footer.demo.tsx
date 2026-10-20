import { MurmurLogo } from "../plumeform-v2-header/plumeform-v2-header.demo";
import { PlumeformV2Footer, type PlumeformV2FooterProps } from "./plumeform-v2-footer";

const links = (labels: string[]) => labels.map((label) => ({ label, href: `#${label.toLowerCase().replace(/[^a-z]+/g, "-")}` }));

export const footerSample: PlumeformV2FooterProps = {
  brand: "Murmur",
  logo: <MurmurLogo size="lg" />,
  tagline: "Write a questionnaire, send it to the people who matter, and learn from what they say.",
  secondary: { label: "Write to us", href: "#contact" },
  cta: { label: "Try it free", href: "#start" },
  columns: [
    { title: "Product", links: links(["What it does", "Plans", "Try a live form", "Embedding", "Branches & logic", "Reports", "Made with Murmur", "Changelog", "Uptime"]) },
    { title: "Uses", links: links(["Academic studies", "Product research", "Market research", "Programme reviews", "Staff surveys", "Course reviews", "Patient feedback", "Charities", "Event feedback"]) },
    { title: "Drafts", links: links(["Every draft", "Customers", "Market studies", "Staff & students", "Academic", "Community & events"]) },
    { title: "Connections", links: links(["All connections", "Team chat", "CRM", "Research panels", "Recruiting services", "Spreadsheets", "Webhooks", "Results API"]) },
    { title: "Learn", links: links(["About Murmur", "Research guides", "Journal", "Free tools", "Glossary", "Tool comparisons", "Help pages"]) },
  ],
  library: {
    title: "Browse the whole library",
    text: "Every guide, tool, draft and comparison.",
    links: links(["Writing good questions", "Sample sizes", "Rating scales", "Loyalty scores", "Bias in surveys", "Reply rates", "Pilot testing", "Open-ended questions", "Consent forms", "Data cleaning"]),
  },
  copyright: "© 2026 Murmur",
  legal: links(["Security", "Accessibility", "Privacy", "Terms"]),
  email: "hello@murmur.example",
};

export default function Demo() {
  return <PlumeformV2Footer {...footerSample} />;
}
