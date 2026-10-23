import { SlashInsights, type SlashInsightsProps } from "./slash-insights";

const titles: [string, string][] = [
  ["Payments", "How online shops take card payments: methods, gateways and what to watch"],
  ["Opinion", "Cash back or yield? The quiet trade-off behind every business card"],
  ["Payments", "Paying suppliers on time, every time, without a spreadsheet"],
  ["Cards", "Choosing a company card when your team works across three countries"],
  ["Treasury", "Where idle cash should sit while you wait for the next round"],
  ["Guides", "Closing the books in two days: a checklist for small finance teams"],
  ["Product", "New this month: approvals in steps and smarter receipt matching"],
  ["Payments", "Instant payments explained for people who just want them to work"],
];

export const insightsSample: SlashInsightsProps = {
  heading: ["Notes on ", { italic: "modern" }, " money"],
  sub: "Payments, product news and ways to grow.",
  articles: titles.map(([category, title], i) => ({
    category,
    title,
    date: `Oct ${22 - i}, 2026`,
    readTime: `≈ ${3 + (i % 4)} minute read`,
    href: "#",
  })),
  prevLabel: "Previous articles",
  nextLabel: "Next articles",
};

export default function Demo() {
  return <SlashInsights {...insightsSample} />;
}
