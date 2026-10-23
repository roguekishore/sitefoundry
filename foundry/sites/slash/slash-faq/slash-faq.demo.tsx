import { SlashFaq, type SlashFaqProps } from "./slash-faq";

export const faqSample: SlashFaqProps = {
  heading: ["Questions, often asked"],
  sub: "Not finding what you need?",
  link: { label: "Write to us", href: "#" },
  items: [
    { question: "What is Ferro?", answer: "A finance platform for businesses: accounts, cards, bill pay and books in one place, with banking from regulated partners." },
    { question: "Is there a cap on how much cash back I can earn?", answer: "No. Cash back on Plus has no ceiling; it is paid monthly into your main account." },
    { question: "Does Ferro charge account fees?", answer: "Starter is free. Plus is a flat monthly fee, with most transfers included." },
    { question: "Why pick Ferro over my current bank?", answer: "Faster payments, better controls for your team, and software that saves your finance lead hours each week." },
    { question: "Is my money safe with Ferro?", answer: "Deposits sit with regulated partner banks and are spread to extend your cover well past the usual limit." },
  ],
};

export default function Demo() {
  return <SlashFaq {...faqSample} />;
}
