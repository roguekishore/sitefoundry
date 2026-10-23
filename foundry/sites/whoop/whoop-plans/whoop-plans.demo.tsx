import { WhoopPlans, type WhoopPlansProps } from "./whoop-plans";

const shared = {
  priceNote: "Taxes included",
  perk: "12 months at no extra cost",
  buy: { label: "Get it", href: "#" },
  more: { label: "See details", href: "#" },
};

export const plansSample: WhoopPlansProps = {
  heading: "Pick your band",
  plans: [
    {
      ...shared,
      name: "Base",
      tagline: "The everyday essentials: sleep, effort and recovery, read around the clock.",
      price: "$199.00",
      was: "Was $229.00",
      instalment: { lead: "or", amount: "$17", text: "/month over 12", badge: "Pay monthly" },
      intro: { text: "Everything you need to start:" },
      features: ["Kairos sensor with 10-day battery", "Sleep stages and smart alarm", "Daily readiness score", "Workout and effort tracking"],
      buy: { label: "Get Base", href: "#" },
      tint: "silver",
    },
    {
      ...shared,
      name: "Apex",
      tagline: "Deeper health and longevity readings to help you stay ahead for longer.",
      price: "$329.00",
      was: "Was $359.00",
      instalment: { lead: "or", amount: "$28", text: "/month over 12", badge: "Pay monthly" },
      intro: { text: "Everything in", strong: "Base", after: ", and" },
      features: ["Kairos sensor with 14-day battery", "Body age and pace of ageing", "Heart rhythm alerts", "Live stress reading"],
      buy: { label: "Get Apex", href: "#" },
      tint: "sky",
    },
    {
      ...shared,
      name: "Aeon",
      tagline: "Clinical-grade readings and yearly reviews for the long game.",
      price: "$449.00",
      was: "Was $489.00",
      instalment: { lead: "or", amount: "$38", text: "/month over 12", badge: "Pay monthly" },
      intro: { text: "Everything in", strong: "Apex", after: ", and" },
      features: ["Blood-pressure trends", "On-demand heart trace", "Yearly review with a coach", "Priority member support"],
      buy: { label: "Get Aeon", href: "#" },
      tint: "aurora",
    },
  ],
  start: 1,
  labels: { track: "Kairos memberships", dot: "Show plan" },
};

export default function Demo() {
  return <WhoopPlans {...plansSample} />;
}
