// Sample content lives here (gallery only); the page reuses it.
import { RoveiaV2Faq, type RoveiaV2FaqProps } from "./roveia-v2-faq";

export const faqSample: RoveiaV2FaqProps = {
  heading: "Questions We Hear Often",
  items: [
    { question: "How do you charge for the work?", answer: "A flat monthly retainer sized to the channels we run, agreed up front. No percentage of spend and no long lock-in." },
    { question: "Have you worked in a field like mine?", answer: "Almost certainly: virtual clinics, supplements, care software and wellness goods make up nearly all of our client list." },
    { question: "Can you make the ads as well?", answer: "Yes. Our studio writes, shoots and edits the creative, and checks every piece against platform health policies before it runs." },
    { question: "How big does our ad budget need to be?", answer: "Most clients start between $20k and $60k a month in media; we will tell you honestly if a smaller test makes more sense first." },
    { question: "How soon will we see results?", answer: "Early signals arrive within two to three weeks; steady, plannable growth usually shows by the end of the second month." },
    { question: "Who will be on our team?", answer: "A lead strategist, a media buyer, a creative producer and an analyst, with one person you can always call." },
  ],
};

export default function Demo() {
  return <RoveiaV2Faq {...faqSample} />;
}
