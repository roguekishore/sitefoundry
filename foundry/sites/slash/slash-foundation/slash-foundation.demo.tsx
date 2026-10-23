import { SlashFoundation, type SlashFoundationProps } from "./slash-foundation";

export const foundationSample: SlashFoundationProps = {
  heading: ["A ", { italic: "steady" }, " financial footing"],
  sub: "Accounts that earn, cards that pay you back on Plus, and financing ready when the next big order lands.",
  cards: [
    {
      title: "Accounts and Treasury",
      body: "Free domestic transfers on Plus, up to 3.9% yield on idle cash, and cover spread across partner banks.",
      note: "2",
    },
    {
      title: "Revenue Financing",
      body: "Draw on term loans and credit lines from our lending partners, sized to what you actually sell.",
      note: "5",
    },
    {
      title: "Cards with rewards that add up",
      body: "Uncapped cash back, as many virtual and physical cards as you need, and limits you set per person.",
      wide: true,
      tiers: [
        { name: "Steel", value: "— $1M+" },
        { name: "Bronze", value: "— $10M+" },
        { name: "Onyx", value: "— $100M+" },
      ],
    },
  ],
  disclaimer:
    "Ferro is a financial technology company, not a bank. Accounts and cards are provided by our partner banks, members of their national deposit schemes. Ferro does not lend or make credit decisions; financing is offered by independent lending partners and subject to their approval.",
};

export default function Demo() {
  return <SlashFoundation {...foundationSample} />;
}
