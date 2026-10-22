import { SharplinkFaq, type SharplinkFaqProps } from "./sharplink-faq";

export const faqSample: SharplinkFaqProps = {
  title: "Questions",
  label: "Still curious?",
  cta: { label: "Contact us", href: "#contact" },
  items: [
    { question: "Where does Ferrowell trade?", answer: "Ferrowell shares trade on the Northgate Exchange under the ticker FRWL, in regular market hours." },
    { question: "What is a network treasury company?", answer: "A listed company whose main reserve asset is a network token, held and put to work on behalf of its shareholders." },
    { question: "How is this different from holding LMN myself?", answer: "We run custody, staking and risk for you at institutional scale, and report every position openly." },
    { question: "How is it different from a fund that tracks LMN?", answer: "Our reserves are staked and earn rewards, and we can raise capital to grow the amount of LMN behind each share." },
    { question: "What does growing LMN per share mean?", answer: "It is the yardstick we manage to: the amount of LMN backing each outstanding share, measured every day." },
    { question: "Do you run any other businesses?", answer: "No. Ferrowell is focused entirely on its treasury and the infrastructure that supports it." },
    { question: "Where can I follow updates?", answer: "Read the journal, join the mailing list in the footer, or visit the shareholder center for filings." },
  ],
};

export default function Demo() {
  return <SharplinkFaq {...faqSample} />;
}
