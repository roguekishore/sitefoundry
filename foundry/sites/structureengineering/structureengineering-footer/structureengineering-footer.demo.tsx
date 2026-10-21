import { StructureengineeringFooter, type StructureengineeringFooterProps } from "./structureengineering-footer";

export const footerSample: StructureengineeringFooterProps = {
  copyright: "©2026 Lintel Consulting Engineers",
  acknowledgement: "We work on the lands of the Turrbal and Yuggera peoples and pay our respects to their elders, past and present.",
  groups: [
    {
      title: "Explore",
      links: [
        { label: "Team", href: "#team" },
        { label: "Practice", href: "#practice" },
        { label: "Work", href: "#work" },
        { label: "Honours", href: "#honours" },
      ],
    },
    {
      title: "Elsewhere",
      links: [
        { label: "Instagram", href: "#instagram" },
        { label: "LinkedIn", href: "#linkedin" },
      ],
    },
    {
      title: "Talk to us",
      links: [
        { label: "studio@lintel.example", href: "mailto:studio@lintel.example", emphasis: true },
        { label: "(07) 5550 1182", href: "tel:0755501182" },
        { label: "Start a project", href: "#enquire" },
      ],
    },
    {
      title: "Small print",
      links: [{ label: "Privacy", href: "#privacy" }],
    },
  ],
  wordmark: "Lintel",
  credit: { label: "Site by a small studio", href: "#credit" },
};

export default function Demo() {
  return <StructureengineeringFooter {...footerSample} />;
}
