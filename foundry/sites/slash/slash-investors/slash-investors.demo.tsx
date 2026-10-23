import { SlashInvestors, type SlashInvestorsProps } from "./slash-investors";

export const investorsSample: SlashInvestorsProps = {
  label: "Backed by long-term investors and banking partners",
  rows: [
    [
      { name: "Northgate", style: "caps" },
      { name: "Fieldstone", style: "serif" },
      { name: "arlo capital", style: "light" },
    ],
    [
      { name: "Tidewater Ventures", style: "light" },
      { name: "KILN", style: "caps" },
      { name: "Meridian Seed", style: "serif" },
      { name: "Calder Institute", style: "serif" },
    ],
  ],
};

export default function Demo() {
  return <SlashInvestors {...investorsSample} />;
}
