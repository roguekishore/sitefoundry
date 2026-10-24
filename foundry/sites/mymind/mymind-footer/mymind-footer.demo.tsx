// Sample content lives here (gallery only); the page reuses it. All names are made up.
import { Feather } from "lucide-react";
import { MymindFooter, type MymindFooterProps } from "./mymind-footer";

export const footerSample: MymindFooterProps = {
  brand: "nook",
  mark: <Feather strokeWidth={1.75} />,
  slogan: "Keep it quiet.",
  feature: { title: "Take the tour", text: "short nook films", href: "#" },
  primaryLinks: [
    { label: "Why people stay with nook", href: "#" },
    { label: "What it costs", href: "#" },
    { label: "Take the tour", href: "#" },
    { label: "nook for busy minds", href: "#" },
  ],
  columns: [
    { title: "The apps", links: [{ label: "Phone app", href: "#" }, { label: "Tablet app", href: "#" }, { label: "Browser add-on", href: "#" }, { label: "Desktop app", href: "#" }] },
    { title: "Who we are", links: [{ label: "What we believe", href: "#" }, { label: "Our word", href: "#" }, { label: "The reading room", href: "#" }, { label: "Conversations", href: "#" }] },
    {
      title: "Help & hello",
      links: [{ label: "nook on social", href: "#" }, { label: "Guides & contact", href: "#" }, { label: "Short films", href: "#" }],
      extra: [{ label: "Sign in to nook", href: "#" }, { label: "Make an account", href: "#" }],
    },
  ],
  copyright: "© nook studio 2026",
  madeIn: "Made slowly in Lisbon and Leeds",
  legal: [{ label: "Terms", href: "#" }, { label: "Privacy", href: "#" }, { label: "Questions", href: "#" }],
};

export default function Demo() {
  return <MymindFooter {...footerSample} />;
}
