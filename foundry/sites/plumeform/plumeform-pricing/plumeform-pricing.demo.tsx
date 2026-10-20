// Sample content lives here (gallery only); the pages reuse it. Tidewell and every tool in
// the table are made up.
import { PlumeformPricing, type PlumeformCompareTable, type PlumeformPlan, type PlumeformPricingProps } from "./plumeform-pricing";

export const plansSample: PlumeformPlan[] = [
  {
    name: "Free",
    description: "150 student answers every month. No card, no time limit.",
    prices: [{ amount: "$0" }],
    cta: { label: "Try it free", href: "#start" },
    features: [
      "150 answers / month",
      "As many quizzes as you like",
      "19 answer types, matching and ordering among them",
      "Card-at-a-time and whole-sheet modes",
      "Hints and skip logic",
      "Quizzes on your own class page",
      "Class comparisons, drop-off and honesty flags",
      "Class codes, finishing codes and one attempt per student",
      "Reports with a share link",
      "CSV export",
      "The default quiz look",
      "Email alerts to one address",
    ],
  },
  {
    name: "Plus",
    featured: true,
    prices: [
      { label: "Monthly", amount: "$12", suffix: "/mo", note: "$12 a month. Early teachers keep this price for good." },
      { label: "Yearly", amount: "$9", suffix: "/mo", note: "$108 once a year, the same as nine months." },
    ],
    cta: { label: "Go Plus", href: "#plus" },
    ctaNote: "Cancel from your billing page whenever you like.",
    features: [
      "8,000 answers / month",
      "AI: draft a quiz from a topic, sum up written answers",
      "Exam pack: time limits, question pools, seat caps, shuffling and honesty questions",
      "Cheat guard: block suspicious attempts and flag them for a look",
      "Real-gap checks, groups, weighting and a tidy gradebook",
      "Quizzes in several languages, with drafted translations",
      "Termly tracking: repeat a quiz and link the results",
      "Staff seats: up to 4 teachers, editors and viewers",
      "Remove the Tidewell badge from quizzes and the end screen",
      "Show / hide logic, answer echoes and repeated sections",
      "Five more layouts: Notebook, Frosted, Side by side, Picture board and Chat",
      "Your crest and school name on every quiz",
      "Custom look: palettes, fonts, gradients, pictures and corners",
      "Spreadsheets, staff chat and gradebook · webhooks · Marks API",
      "XLSX, mark scheme and report-card exports",
      "Deeper answer types: timed recall, drag to sort, hotspots, working out, sketches and spoken answers",
      "File-upload questions",
    ],
    footnote: (
      <>
        2% of every Plus payment buys books for a school library, through <a href="#libraries">Open Shelves</a>.
      </>
    ),
  },
];

export const compareTableSample: PlumeformCompareTable = {
  eyebrow: "How we stack up",
  columns: ["Tool", "Free answers", "Cheapest paid", "What that buys"],
  rows: [
    { cells: ["Tidewell", "150 / mo", "$12 / mo", "8,000 answers / mo"], ours: true },
    { cells: ["Quizzard", "20 / mo", "$32 / mo", "200 answers / mo"] },
    { cells: ["Classpoll", "30 / quiz", "$119 / mo", "1,500 answers / mo"] },
    { cells: ["Markwise", "100 / mo", "$45 / mo", "1,000 attempts / mo"] },
    { cells: ["Slatebox", "Unlimited", "$24 / mo", "Crest & own address"] },
  ],
  oursMark: "← us",
  note: "List prices when billed monthly, checked October 2026; yearly billing costs less everywhere, ours too ($9/mo). Classpoll's free plan counts 30 answers per quiz. Quizzard charges $96/mo for the 8,000 answers Tidewell includes at $12.",
};

export const pricingSample: PlumeformPricingProps = {
  eyebrow: "Pricing",
  title: "Free for small classes. Plus when you need more.",
  sideLink: { label: "Every price & question", href: "#pricing-page" },
  plansLabel: "The plans",
  plans: plansSample,
  compare: compareTableSample,
};

export default function Demo() {
  return <PlumeformPricing {...pricingSample} />;
}
