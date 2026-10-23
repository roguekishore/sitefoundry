import { SlashTools, type SlashToolsProps } from "./slash-tools";

export const toolsSample: SlashToolsProps = {
  heading: ["Paired with ", { italic: "clever" }, " tools"],
  sub: "Handle any money task in a handful of clicks.",
  rows: [
    {
      mediaHeight: "16.75rem",
      cards: [
        { title: "Sub-accounts.", body: "Split cash into named pots so every budget keeps its own balance.", weight: 323 },
        { title: "Spend insight.", body: "See where money goes, live, broken down by card, vendor and team.", weight: 482 },
        { title: "Auto top-ups.", body: "Refill an account the moment it runs low.", weight: 323 },
      ],
    },
    {
      mediaHeight: "19.5rem",
      cards: [
        { title: "Pull approvals.", body: "Cap what each vendor may draw from your account and hear about anything unexpected." },
        { title: "Team permissions.", body: "Give each person their own limits, card groups and sign-in rules." },
      ],
    },
  ],
};

export default function Demo() {
  return <SlashTools {...toolsSample} />;
}
