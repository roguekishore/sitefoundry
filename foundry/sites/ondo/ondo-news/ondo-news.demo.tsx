import { OndoNews, type OndoNewsProps } from "./ondo-news";

export const newsSample: OndoNewsProps = {
  heading: "Recent news from Corvane",
  readMoreLabel: "Keep reading",
  labels: { prev: "Previous story", next: "Next story" },
  items: [
    {
      category: "Launch",
      date: "Oct 2, 2026",
      title: "Meet Corvane Baskets",
      excerpt:
        "Baskets bundle a researched mix of funds and equities into one onchain token you can hold, lend or move in seconds. The first four follow strategies drawn up with two long-standing allocators.",
      href: "#",
    },
    {
      category: "Partnership",
      date: "Sep 18, 2026",
      title: "Tidemark arrives on three new networks",
      excerpt:
        "Holders can now mint and redeem Tidemark directly on three more networks, with the same daily yield and the same reserve reporting.",
      href: "#",
    },
    {
      category: "Research",
      date: "Aug 29, 2026",
      title: "What settles overnight: a year of onchain treasuries",
      excerpt:
        "Our research desk looks back at twelve months of tokenized treasury flows, who held them and why redemptions stayed calm.",
      href: "#",
    },
  ],
  headlines: [
    "Ballast passes its fourth independent reserve review",
    "Corvane Equities now lists over 300 instruments",
    "Tidemark mints reopen after scheduled maintenance",
    "Corvane joins the Open Settlement Forum",
  ],
};

export default function Demo() {
  return <OndoNews {...newsSample} className="pb-16" />;
}
