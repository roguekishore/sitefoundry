import { RollersFooter, type RollersFooterProps } from "./rollers-footer";

export const footerSample: RollersFooterProps = {
  brand: "Stonebank",
  homeHref: "#",
  tagline: ["Booked.", "Built.", "Back."],
  groups: [
    {
      title: "Get around",
      links: [
        { label: "Home", href: "#", current: true },
        { label: "Our story", href: "#story" },
        { label: "The yard", href: "#yard" },
        { label: "Guides", href: "#guides" },
        { label: "Work with us", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "The yard",
      links: [
        { label: "Smooth-drum compactors", href: "#yard" },
        { label: "Sheepsfoot compactors", href: "#yard" },
        { label: "Pneumatic-tyred rollers", href: "#yard" },
        { label: "Water tankers", href: "#yard" },
        { label: "Graders", href: "#yard" },
        { label: "Walk-behind rollers", href: "#yard" },
        { label: "Sweepers & brooms", href: "#yard" },
        { label: "Site cabins", href: "#cabins" },
        { label: "Density gauges", href: "#yard" },
      ],
    },
    {
      title: "Paperwork",
      links: [
        { label: "Machine data sheets", href: "#guides" },
        { label: "Chain of custody", href: "#guides" },
        { label: "Quality statement", href: "#guides" },
        { label: "Safety plan", href: "#guides" },
      ],
    },
    {
      title: "Training",
      links: [
        { label: "Operator courses", href: "#training" },
        { label: "Compaction method", href: "#training" },
      ],
    },
  ],
  depots: [
    { town: "Ashford Vale", lines: ["14 Quarry Road\nAshford Vale 2871", "PO Box 410, Ashford Vale 2871", "(02) 5550 1180"] },
    { town: "Merrin Creek", lines: ["3 Siding Street\nMerrin Creek 2894", "PO Box 77, Merrin Creek 2894", "(02) 5550 2264"] },
    { town: "Tallow Flat", lines: ["88 Saleyards Lane\nTallow Flat 4459", "PO Box 912, Tallow Flat 4459", "(07) 5550 3390"] },
    { town: "Coolabah Rise", lines: ["21 Depot Drive\nCoolabah Rise 4731", "(07) 5550 4417"] },
    { town: "Kerrin Downs", lines: ["6 Bore Track\nKerrin Downs 4722", "PO Box 58, Kerrin Downs 4722", "(07) 5550 5523"] },
  ],
  legal: "© 2026 Stonebank Plant Hire | Privacy",
  credit: { label: "Terms of hire", href: "#terms" },
};

export default function Demo() {
  return <RollersFooter {...footerSample} />;
}
