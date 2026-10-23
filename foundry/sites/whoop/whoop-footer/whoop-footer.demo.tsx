import { WhoopFooter, type WhoopFooterProps } from "./whoop-footer";

export const footerSample: WhoopFooterProps = {
  groups: [
    {
      heading: "Join Kairos",
      links: [
        { label: "Get Kairos", href: "#" },
        { label: "Bands & add-ons", href: "#" },
        { label: "Teams & clubs", href: "#" },
        { label: "Our story", href: "#" },
        { label: "Site map", href: "#" },
        { label: "Journal", href: "#" },
      ],
    },
    {
      heading: "Help",
      links: [
        { label: "Questions", href: "#" },
        { label: "Track an order", href: "#" },
        { label: "Setup & care", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of sale", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Delivery, returns & refunds", href: "#" },
        { label: "Monthly payment terms", href: "#" },
        { label: "Band terms of use", href: "#" },
      ],
    },
  ],
  brand: "Kairos",
  mission: "Kairos exists to help people stay strong, rested and well for longer.",
};

export default function Demo() {
  return <WhoopFooter {...footerSample} />;
}
