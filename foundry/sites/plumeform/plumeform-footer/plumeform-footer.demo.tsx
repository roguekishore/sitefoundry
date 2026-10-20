// Sample content lives here (gallery only); the pages reuse it. Tidewell is made up.
import { Waves } from "lucide-react";
import { PlumeformFooter, type PlumeformFooterProps } from "./plumeform-footer";

const l = (label: string) => ({ label, href: `#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` });

export const footerSample: PlumeformFooterProps = {
  brand: "tidewell",
  logo: <Waves strokeWidth={2.25} />,
  tagline: "Make a quiz, share it with your class, and see what they really know.",
  secondary: l("Talk to us"),
  cta: { label: "Try it free", href: "#start" },
  columns: [
    { title: "Product", links: ["Tour", "Pricing", "Sit a sample quiz", "Put a quiz on a page", "Hints & logic", "Marks & reports", "Made with Tidewell", "What's new", "Status"].map(l) },
    { title: "Classrooms", links: ["Primary", "Secondary", "Languages", "Sciences", "Maths", "Tutoring", "Homeschool", "Clubs", "Staff training"].map(l) },
    { title: "Templates", links: ["All quiz templates", "Exit tickets", "Unit tests", "Reading checks", "Class feedback", "Revision rounds"].map(l) },
    { title: "Connections", links: ["All connections", "Staff chat", "Gradebooks", "School sign-in", "Rosters", "Spreadsheets", "Webhooks", "Marks API"].map(l) },
    { title: "Learn", links: ["About Tidewell", "Teaching guides", "Blog", "Free classroom tools", "Assessment glossary", "Compare quiz tools", "Help pages"].map(l) },
  ],
  library: { title: "Browse the whole library", text: "Every guide, tool, template and comparison.", links: ["Guides", "Tools", "Templates", "Comparisons", "Glossary"].map(l) },
  copyright: "© 2026 Tidewell",
  legal: ["Security", "Accessibility", "Privacy", "Terms"].map(l),
  contact: { label: "hello@tidewell.example", href: "mailto:hello@tidewell.example" },
};

export default function Demo() {
  return <PlumeformFooter {...footerSample} />;
}
