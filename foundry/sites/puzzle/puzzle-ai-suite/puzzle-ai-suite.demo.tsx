import { ListChecks, MessageCircle } from "lucide-react";
import { PuzzleAiSuite, type PuzzleAiSuiteProps } from "./puzzle-ai-suite";

export const aiSuiteSample: PuzzleAiSuiteProps = {
  eyebrow: "The Oakbook assistant",
  title: "Ask a question. Oakbook drafts it. You sign off.",
  text: "The assistant lives inside your ledger: it answers questions about the business straight from your books, and its agents prepare the routine bookkeeping that usually swallows an afternoon.",
  cta: { label: "Meet the assistant", href: "#" },
  features: [
    {
      icon: <MessageCircle strokeWidth={2} />,
      tone: "violet",
      title: "Assistant",
      tag: "Ask",
      text: "Type a question and get the answer from your own ledger, in everyday words. No report builder, no exporting to a spreadsheet.",
      mediaRatio: 1.13,
      messages: [
        { from: "you", text: "Where is our cash heading, and how many months do we have left?" },
        {
          from: "reply",
          text: "You hold $1,264,300 today, 4% less than a month ago. At the last quarter's average spend of $96,500 a month, that lasts about 13 months.",
          figures: [
            { label: "Cash", value: "$1.26M" },
            { label: "Spend", value: "$96.5K/mo" },
            { label: "Runway", value: "13.1 mo" },
          ],
        },
        { from: "you", text: "Could we hire two more people?" },
      ],
    },
    {
      icon: <ListChecks strokeWidth={2} />,
      tone: "green",
      title: "Agents",
      tag: "Do",
      text: "Describe a chore once and an agent prepares it: pairing bills with payments, spotting forgotten subscriptions, chasing missing receipts. Nothing is final until you look.",
      mediaRatio: 1.4,
      messages: [{ from: "you", text: "List every tool subscription we still pay for." }],
      review: {
        summary: "11 subscriptions found · $7,420/mo",
        status: "Waiting for you",
        rows: [
          { name: "Design suite", note: "Renews 14 Dec", amount: "$960/mo" },
          { name: "Docs workspace", note: "Every month", amount: "$410/mo" },
          { name: "Video calls", note: "Unused for 45 days", amount: "$280/mo", flagged: true },
          { name: "Screen recorder", note: "Seats counted twice", amount: "$190/mo", flagged: true },
        ],
        actions: [
          { label: "Check and approve", href: "#" },
          { label: "Pass to my bookkeeper", href: "#" },
        ],
        footnote: "Your ledger stays as it is until you approve.",
      },
    },
  ],
  strip: {
    lead: "Already use an AI assistant?",
    text: "Link it to your ledger with Oakbook Connect.",
    actions: [
      { label: "How Connect works", href: "#" },
      { label: "Try the assistant free", href: "#" },
    ],
  },
};

export default function Demo() {
  return <PuzzleAiSuite {...aiSuiteSample} />;
}
