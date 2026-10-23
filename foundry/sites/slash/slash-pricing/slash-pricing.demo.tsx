import { SlashPricing, type SlashPricingProps } from "./slash-pricing";

const lines = (wire: string, ach: string, rtp: string) => [
  { label: "Deposit cover across partner banks" },
  { label: "Same-day transfers", value: `— ${ach}` },
  { label: "Domestic wires", value: `— ${wire}` },
  { label: "Instant payments", value: `— ${rtp}` },
  { label: "Unlimited virtual cards" },
  { label: "International wires", value: "— $20" },
  { label: "Card fee abroad", value: "— 1% (min $0.50)" },
];

export const pricingSample: SlashPricingProps = {
  heading: [{ italic: "Clear" }, " pricing, with plans that fit how you work"],
  plans: [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "The full set of banking basics, with nothing hidden.",
      cta: { label: "Start free", href: "#" },
      lines: lines("$5", "$1", "$4"),
    },
    {
      name: "Plus",
      price: "$30",
      period: "/month",
      description: "Grow faster with tools built for your industry.",
      cta: { label: "Get Plus", href: "#" },
      featured: true,
      lines: lines("$0", "$0", "$0"),
    },
  ],
};

export default function Demo() {
  return <SlashPricing {...pricingSample} />;
}
