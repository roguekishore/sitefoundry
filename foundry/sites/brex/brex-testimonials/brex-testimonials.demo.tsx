import { BrexTestimonials, type BrexTestimonialsProps } from "./brex-testimonials";

export const testimonialsSample: BrexTestimonialsProps = {
  stories: [
    {
      tab: "Parcelo",
      logo: "Parcelo",
      quote: "Kiln took our travel and expense chaos and made it boring. People finally know where and how to spend, and nobody emails finance to ask.",
      person: "Ines Calder",
      role: "VP of Finance, Parcelo",
      link: { label: "Read the case study", href: "#" },
    },
    {
      tab: "Tidemark",
      logo: "Tidemark",
      quote: "We went from a three-week close to three days. The cards and the ledger finally agree with each other without anyone babysitting them.",
      person: "Owen Takata",
      role: "Controller, Tidemark",
      link: { label: "Read the case study", href: "#" },
    },
    {
      tab: "Fennel",
      logo: "Fennel",
      quote: "Rolling out cards to forty countries used to be a quarter-long project. With Kiln it took an afternoon and a short checklist.",
      person: "Sana Okafor",
      role: "Head of Operations, Fennel",
      link: { label: "Read the case study", href: "#" },
    },
  ],
};

export default function Demo() {
  return <BrexTestimonials {...testimonialsSample} />;
}
