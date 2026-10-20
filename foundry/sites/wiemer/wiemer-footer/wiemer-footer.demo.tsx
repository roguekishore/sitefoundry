import { teaserSample } from "../wiemer-teaser-card/wiemer-teaser-card.demo";
import { WiemerFooter, type WiemerFooterProps } from "./wiemer-footer";

export const footerSample: WiemerFooterProps = {
  brand: "Grundform",
  homeHref: "#",
  tagline: "Quiet furniture in steel and aluminium. Made by hand in Saxony.",
  columns: [
    { title: "Follow", links: [{ label: "Instagram", href: "#" }, { label: "Pinterest", href: "#" }, { label: "YouTube", href: "#" }] },
    {
      title: "Small print",
      links: [
        { label: "Imprint", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Right to cancel", href: "#" },
      ],
    },
    { title: "Help", links: [{ label: "Write to us", href: "#contact" }, { label: "Returns", href: "#" }] },
  ],
  card: teaserSample,
  copyright: "© Grundform 2027",
  credit: "A label of Kantwerk Studio GmbH",
};

export default function Demo() {
  return <WiemerFooter {...footerSample} />;
}
