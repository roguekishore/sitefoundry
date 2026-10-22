import { SharplinkPillars, type SharplinkPillarsProps } from "./sharplink-pillars";

export const pillarsSample: SharplinkPillarsProps = {
  label: "Principles",
  title: "Five Layers of a\nLasting Treasury",
  darkFrom: 1,
  items: [
    {
      label: "Stewardship",
      title: "Run by Seasoned\nOperators",
      body: "Our board and desk come from sovereign funds, exchange clearing and protocol research, bringing market discipline to an onchain balance sheet.",
    },
    {
      label: "Infrastructure",
      title: "Custody We Run\nOurselves",
      body: "Key management, execution and risk limits are operated in-house, so every decision moves at our pace and under our own controls.",
    },
    {
      label: "Capital",
      title: "The Listing\nas a Lever",
      body: "As a listed company we can raise, structure and time capital to grow LMN held per share whenever markets allow it.",
    },
    {
      label: "Disclosure",
      title: "Reporting You\nCan Check",
      body: "Holdings, rewards and risk exposure are published openly and reconciled against the chain every day.",
    },
    {
      label: "Alliances",
      title: "Built Alongside\nthe Network",
      body: "We work with validator operators, wallet teams and custodians across the Lumen ecosystem to reach better incentives and safer tooling.",
    },
  ],
};

export default function Demo() {
  return <SharplinkPillars {...pillarsSample} />;
}
