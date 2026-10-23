import { Grip, GripHorizontal, Shapes } from "lucide-react";
import { LevelsPlans, type LevelsPlansProps } from "./levels-plans";

const footer = { label: "Health-account eligible", link: { label: "Details", href: "#" } };
const perk = { title: "Pay pre-tax", text: "Most members save about a quarter", link: { label: "How it works", href: "#" } };

export const plansSample: LevelsPlansProps = {
  id: "plans",
  eyebrow: "Pick your path",
  title: "One way to steady your metabolism. Three places to begin.",
  lead: "Choose where you start: Starter if you want to mix and match, Steady for a ready-made bundle of the basics, or Whole for everything from the first day.",
  recommend: {
    eyebrow: "Not sure yet?",
    text: "Answer a few quick questions first and we will suggest the plan that fits before you pick one.",
    action: { label: "Find my plan", href: "#" },
  },
  plans: [
    {
      tone: "plain",
      icon: <Shapes />,
      badge: "Mix and match",
      name: "Starter",
      description: "Begin with the app, then add the testing and support you want.",
      price: "$12",
      period: "/mo",
      billing: "or $96 paid yearly",
      action: { label: "Choose Starter", href: "#" },
      groups: [
        {
          label: "What you get",
          items: [
            { text: "The Ballast app" },
            { text: "Meal logging" },
            { text: "Smart health insights" },
            { text: "Programmes that adapt" },
            { text: "Wearable sync" },
            { text: "Past lab uploads" },
          ],
        },
        { label: "Add any time", items: [{ text: "Glucose sensors" }, { text: "Basic or full lab panels" }, { text: "Dietitian sessions" }] },
      ],
      footer,
      perk,
    },
    {
      tone: "featured",
      icon: <Grip />,
      badge: "Most chosen",
      name: "Steady",
      description: "Glucose sensor, core lab work and a clinician who reviews it with you.",
      price: "$29",
      period: "/mo",
      billing: "$348 paid yearly",
      action: { label: "Choose Steady", href: "#" },
      groups: [
        {
          label: "What you get",
          items: [
            { text: "Two core lab panels, 30+ markers" },
            { text: "One month of live glucose readings" },
            { text: "Clinician review of your data", note: "twice a year" },
            { text: "The app, smart insights and adaptive programmes" },
            { text: "Unlimited past lab uploads" },
          ],
        },
        { label: "Add any time", items: [{ text: "Extra glucose sensors" }, { text: "Full lab panels" }, { text: "Dietitian sessions" }] },
      ],
      footer,
      perk,
    },
    {
      tone: "dark",
      icon: <GripHorizontal />,
      badge: "Full support",
      name: "Whole",
      description: "Glucose sensor, full lab work, clinician review and a personal concierge.",
      price: "$94",
      period: "/mo",
      billing: "$1,128 paid yearly",
      action: { label: "Choose Whole", href: "#" },
      groups: [
        {
          label: "What you get",
          items: [
            { text: "Two full lab panels, 90+ markers" },
            { text: "Two months of live glucose readings", note: "shipping included" },
            { text: "Clinician review of your data", note: "twice a year" },
            { text: "An hour with a nutrition coach" },
            { text: "A personal concierge" },
            { text: "The app, advanced insights and adaptive programmes" },
            { text: "Unlimited past lab uploads" },
          ],
        },
        { label: "Add any time", items: [{ text: "Extra glucose sensors" }, { text: "More lab testing" }, { text: "More dietitian sessions" }] },
      ],
      footer,
      perk,
    },
  ],
};

export default function Demo() {
  return <LevelsPlans {...plansSample} />;
}
