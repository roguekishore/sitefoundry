import { PlumeformV2Pricing, type PlumeformV2PricingProps } from "./plumeform-v2-pricing";

const plans: PlumeformV2PricingProps["plans"] = [
  {
    name: "Free",
    price: { value: "$0", description: "150 replies every month. No card and no time limit." },
    features: [
      "150 replies / month",
      "As many questionnaires as you like",
      "20 question types, feature pairs included",
      "Both reply modes",
      "Skip and jump branches",
      "Embed on your own site",
      "Cross-tabs, drop-off and quality flags",
      "Participant IDs, finish codes, one reply per person",
      "Reports with a share link",
      "CSV export",
      "The standard look",
      "Email alerts to one address",
    ],
    cta: { label: "Try it free", href: "#start" },
  },
  {
    name: "Plus",
    featured: true,
    price: { value: "$12", suffix: "/mo", description: "$12 a month. Early members keep this price." },
    yearly: { value: "$9", suffix: "/mo", description: "$108 billed once a year. Early members keep this price." },
    cta: { label: "Go Plus", href: "#plus" },
    ctaNote: "Cancel from the billing page whenever you like.",
    features: [
      "8,000 replies / month",
      "Drafts from a prompt and summaries of written replies",
      "Research kit: consent, minimum times, trap questions, shuffling, screens and quotas",
      "Bot protection: block suspect replies and flag them for review",
      "Significance tests, groups, weights and one tidy set",
      "Panel payouts: bonus and reject lists, codes per condition",
      "Several languages with drafted translations",
      "Repeat studies: waves and linked exports",
      "Team seats: up to 5 people",
      "No Murmur badge on your questionnaires",
      "Five more layouts: Journal, Ribbed, Split, Showcase and Chat",
      "Your own look: themes, typefaces, gradients, photos and logo",
      "Spreadsheet, chat and CRM connections · webhooks · results API",
      "Excel, codebook and stats-script exports",
      "Research question types and file uploads",
    ],
    footnote: "A share of every Plus payment goes to carbon removal projects.",
  },
];

export const pricingSample: PlumeformV2PricingProps = {
  eyebrow: "Plans",
  title: "Free for small studies. Plus when you outgrow it.",
  link: { label: "Every plan detail & FAQ", href: "#plans" },
  plansLabel: "The plans",
  periods: { monthly: "Monthly", yearly: "Yearly" },
  plans,
};

export const pricingPageSample: PlumeformV2PricingProps = {
  size: "page",
  eyebrow: "Plans",
  title: "Two plans. Simple sums.",
  body: "Begin with 150 replies a month on Free. Plus includes 8,000 replies and up to five team members for $12 a month.",
  periods: { monthly: "Monthly", yearly: "Yearly" },
  plans,
};

export default function Demo() {
  return <PlumeformV2Pricing {...pricingSample} />;
}
