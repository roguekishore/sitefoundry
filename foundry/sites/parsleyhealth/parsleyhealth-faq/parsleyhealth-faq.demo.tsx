import type { ParsleyhealthFaqProps } from "./parsleyhealth-faq";
import { ParsleyhealthFaq } from "./parsleyhealth-faq";

export const faqSample: ParsleyhealthFaqProps = {
  title: "Questions we hear often",
  openIndex: 0,
  items: [
    {
      question: "What does Full Circle Membership include?",
      answer: [
        "Full Circle is a twelve-month program built around steady progress. You get a care team of your own: a physician, a nutrition coach, a nurse care lead and a member guide who handles the scheduling.",
        "Over the year you have several long visits, blood work through your insurance and advanced panels when they help, plus messaging between visits. Your plan is rewritten as your results change, so you are never left guessing what to do next.",
      ],
    },
    {
      question: "Do you take my insurance, and what will I pay?",
      answer: ["Halden is in network with most major plans. Membership starts at $140 a month with coverage, or $260 a month without it."],
    },
    {
      question: "Will Halden replace my family doctor?",
      answer: ["It can. Many members use Halden as their main doctor; others keep their family doctor and add us for the deeper work."],
    },
    {
      question: "Which plan should I pick?",
      answer: ["Choose Full Circle for ongoing care, or start with a Lab Readout if you mainly want your recent results explained."],
    },
    {
      question: "Can I move to Full Circle after a Lab Readout?",
      answer: ["Yes. Join within 30 days of your readout and the visit fee is taken off your membership."],
    },
  ],
};

export default function Demo() {
  return <ParsleyhealthFaq {...faqSample} />;
}
