// Sample content lives here (gallery only); the page reuses it.
import { AtSign, Globe, Rss } from "lucide-react";
import { wordmarkSample } from "../apexspace-wordmark/apexspace-wordmark.demo";
import { ApexspaceFooter, type ApexspaceFooterProps } from "./apexspace-footer";

export const footerSample: ApexspaceFooterProps = {
  wordmark: wordmarkSample,
  contact: { label: "Talk to us", href: "#" },
  subscribe: {
    label: "Get flight updates",
    placeholder: "Your email address",
    submitLabel: "Subscribe",
    action: "#",
    consent: "Subscribing means you accept our",
    policy: { label: "Privacy Policy", href: "#" },
  },
  columns: [
    {
      heading: "Buses",
      links: [
        { label: "– Wren", href: "#" },
        { label: "– Heron", href: "#" },
        { label: "– Condor", href: "#" },
        { label: "Configurator", href: "#" },
        { label: "Compare buses", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "The Hangar", href: "#" },
        { label: "Second line", href: "#" },
        { label: "Fly a payload", href: "#" },
        { label: "About", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Shop", href: "#" },
      ],
    },
    {
      heading: "Journal",
      links: [
        { label: "Flight log", href: "#" },
        { label: "Press", href: "#" },
        { label: "Brand kit", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms of use", href: "#" },
        { label: "Terms of sale", href: "#" },
        { label: "Supplier terms and riders", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Orrery. All rights reserved.",
  socials: [
    { label: "Orrery on the web", href: "#", icon: <Globe strokeWidth={1.75} /> },
    { label: "Orrery by email", href: "#", icon: <AtSign strokeWidth={1.75} /> },
    { label: "Orrery news feed", href: "#", icon: <Rss strokeWidth={1.75} /> },
  ],
};

export default function Demo() {
  return <ApexspaceFooter {...footerSample} />;
}
