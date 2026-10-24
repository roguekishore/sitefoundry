import { ZoeResearch, type ZoeResearchProps } from "./zoe-research";

export const researchSample: ZoeResearchProps = {
  title: "We did the research. You get the results.",
  cards: [
    {
      title: "How our research works",
      summary:
        "We run one of the largest diet and microbiome studies anywhere, to find what really works for everyday eating and a thriving gut.",
      cta: { label: "Read more", href: "#" },
    },
    {
      title: "Trial: members ate twice the fibre in six weeks",
      summary:
        "We tested our own approach in a randomised trial against standard advice. The results backed up what members kept telling us.",
      cta: { label: "Read more", href: "#" },
    },
    {
      title: "Is toast for breakfast really that bad?",
      summary:
        "Bread gets a hard time. Our nutritionists look at which loaves help, which don’t, and what to put on top to keep you full until lunch.",
      cta: { label: "Read more", href: "#" },
    },
    {
      title: "What fermented foods do for you",
      summary: "Kefir, kimchi, miso: a plain guide to how they feed your microbes, and how much you need.",
      cta: { label: "Read more", href: "#" },
    },
  ],
  labels: { region: "Research articles", prev: "Previous article", next: "Next article" },
};

export default function Demo() {
  return <ZoeResearch {...researchSample} />;
}
