// Sample content lives here (gallery only); the page reuses it.
import { RoveiaFaq, type RoveiaFaqProps } from "./roveia-faq";

export const faqSample: RoveiaFaqProps = {
  heading: "Questions We Hear Often",
  items: [
    { question: "How do you charge for your work?", answer: "A flat monthly fee for strategy and creative, agreed up front, with media spend paid straight to the platforms. No percentage-of-spend surprises." },
    { question: "Have you worked in my corner of care?", answer: "Most likely. We work only with virtual clinics, wellness goods and care software, so the review rules and buying habits are familiar ground." },
    { question: "Do you make the ads as well?", answer: "Yes. Our studio writes, shoots and edits statics, motion and short video, and runs creator content end to end." },
    { question: "What budgets do you usually manage?", answer: "Anything from a first test of a few thousand a month to large always-on programmes. We size the plan to what the numbers can carry." },
    { question: "How soon will we see results?", answer: "Early signals arrive within the first two to three weeks; dependable trends usually take one to two months of testing." },
    { question: "How large is the team?", answer: "Around forty people across media, creative, lifecycle and analytics, with one lead who stays your main contact." },
  ],
};

export default function Demo() {
  return <RoveiaFaq {...faqSample} />;
}
