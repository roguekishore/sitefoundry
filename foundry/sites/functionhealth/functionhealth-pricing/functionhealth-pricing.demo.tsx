import { FunctionhealthPricing, type FunctionhealthPricingProps } from "./functionhealth-pricing";

export const pricingSample: FunctionhealthPricingProps = {
  title: ["What could cost you ", { accent: "$9,000", strike: true }, " is $420"],
  text: "Your health should not hinge on your coverage.",
  plan: {
    badge: "HSA/FSA eligible",
    name: "Tidewell Membership",
    price: "$1.15",
    unit: "/day",
    note: "Billed once a year at $420",
    cta: { label: "Join Tidewell", href: "#join" },
    features: [
      "140+ lab markers every year",
      "Two full draws, plus on-demand retests",
      "Insight from leading doctors and researchers",
      "One panel for your whole body",
      "Everything kept in one secure place",
      "Clinicians read every result and flag issues",
      "A personal protocol you can act on today",
      "Add MRI and CT whenever you like",
      "No insurance, plain pricing",
    ],
  },
  reviews: [
    "Tidewell blew me away. The experience, the price and the clinician notes are all excellent.",
    "The most complete lab testing I have ever had. I am excited to learn how to improve.",
    "The best money I have spent on my health.",
  ],
};

export default function Demo() {
  return <FunctionhealthPricing {...pricingSample} />;
}
