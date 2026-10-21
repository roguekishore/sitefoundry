import { KononenkogroupFooter, type KononenkogroupFooterProps } from "./kononenkogroup-footer";

export const footerSample: KononenkogroupFooterProps = {
  wordmark: ["Aldermoor", "Spatial", "Practice"],
  homeHref: "#top",
  groups: [
    {
      label: "Navigation",
      runs: [
        [
          { text: "Index", href: "#top", active: true },
          { text: "Projects", href: "#projects" },
          { text: "Studio", href: "#studio" },
          { text: "Team", href: "#team" },
        ],
        [
          { text: "Contact", href: "#contact" },
          { text: "Start a project", href: "#brief" },
        ],
      ],
    },
    {
      label: "Elsewhere",
      runs: [
        [
          { text: "Instagram", href: "#instagram" },
          { text: "Pinterest", href: "#pinterest" },
          { text: "LinkedIn", href: "#linkedin" },
          { text: "Vimeo", href: "#vimeo" },
        ],
        [
          { text: "Phone", href: "#phone" },
          { text: "Email", href: "#email" },
          { text: "Newsletter", href: "#newsletter" },
        ],
      ],
    },
    {
      label: "Studios",
      runs: [
        [{ text: "Rua do Alecrim 52," }, { text: "1200-018 Lisboa" }, { text: "Portugal" }],
        [{ text: "Jægergårdsgade 140," }, { text: "8000 Aarhus" }, { text: "Denmark" }],
      ],
    },
    {
      label: "Open",
      runs: [
        [{ text: "Mon to Fri" }, { text: "9:00 AM", muted: true }, { text: "6:00 PM", muted: true }],
        [{ text: "Saturday" }, { text: "10:00 AM", muted: true }, { text: "2:00 PM", muted: true }],
      ],
    },
  ],
  monogram: "ALDR",
  meta: [
    { label: "All rights reserved" },
    { label: "Registration", values: ["PT-ARQ-2019-4471", "DK-AR-7720915"] },
    { label: "Site design", values: ["Hanne Lys"] },
    { label: "Site build", values: ["Northwind Code"] },
    { label: "Legal terms", href: "#legal" },
  ],
  copyright: "© 2026",
};

export default function Demo() {
  return <KononenkogroupFooter {...footerSample} />;
}
