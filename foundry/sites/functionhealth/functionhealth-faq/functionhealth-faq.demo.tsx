import { FunctionhealthFaq, type FunctionhealthFaqProps } from "./functionhealth-faq";

export const faqSample: FunctionhealthFaqProps = {
  title: ["Questions, answered"],
  items: [
    { question: "What is Tidewell?", answer: "A yearly membership that bundles a full blood panel, clinician-written results and a plan you can act on." },
    { question: "Why was Tidewell started?", answer: "Because most people only learn about a problem once it hurts, and routine checkups look at very little." },
    { question: "Will my results come with explanations?", answer: "Yes. Every marker is explained in plain words, with what to do about it and what to retest." },
    { question: "Do my markers change over time?", answer: "They do, which is why we test twice a year and show your trend rather than one snapshot." },
    { question: "How often do I test with Tidewell?", answer: "Two full draws a year are included, and you can add targeted retests whenever you want." },
  ],
  link: { label: "Read every question", href: "#faq" },
};

export default function Demo() {
  return <FunctionhealthFaq {...faqSample} />;
}
