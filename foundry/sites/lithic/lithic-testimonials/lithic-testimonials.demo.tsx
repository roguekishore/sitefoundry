import { LithicTestimonials, type LithicTestimonialsProps } from "./lithic-testimonials";

export const testimonialsSample: LithicTestimonialsProps = {
  title: "Hear it from the teams we power",
  text: "From two-person start-ups to listed companies, builders everywhere run their cards on Corvane to make money simpler for their customers.",
  previousLabel: "Previous quote",
  nextLabel: "Next quote",
  testimonials: [
    {
      company: "HALVARD",
      companyVariant: "caps",
      quote: "Corvane went beyond what we hoped for. It carries tens of millions in card spend for us each month without a hiccup, and their team knows cards better than anyone we’ve worked with.",
      name: "Priya Lindqvist",
      role: "Director of Card Partnerships",
    },
    {
      company: "plinth",
      companyVariant: "heavy",
      quote: "Switching to Corvane made our card program feel effortless. We now issue thousands of cards a year through the API and barely think about it.",
      name: "Tomas Okafor",
      role: "Co-founder and CTO",
    },
    {
      company: "Sablewood",
      companyVariant: "plain",
      quote: "We launched in six weeks instead of six months. Their sandbox meant our engineers were building on day one, not waiting on paperwork.",
      name: "Mara Chen",
      role: "Head of Product",
    },
  ],
};

export default function Demo() {
  return <LithicTestimonials {...testimonialsSample} />;
}
