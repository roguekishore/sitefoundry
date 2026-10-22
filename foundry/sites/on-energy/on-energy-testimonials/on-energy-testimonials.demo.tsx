// Sample content lives here (gallery only); the page reuses it. Every company, person and
// quote is made up.
import { OnEnergyTestimonials, type OnEnergyTestimonialsProps } from "./on-energy-testimonials";

export const testimonialsSample: OnEnergyTestimonialsProps = {
  title: "Field Reports",
  items: [
    {
      quote: "We put every buffer on the shortlist through the same fault tests. Keel was the one that cleared all of them, and the Sorrel crew made the build the smoothest we have had. We expect most new campuses to be wired this way within a few years.",
      company: "Halvane",
      name: "Rosa Ilwen",
      role: "Head of Campus Power",
      cta: { label: "Hear the story", href: "#" },
    },
    {
      quote: "Our utility signed off on the interconnect in weeks instead of quarters, because Keel takes the surges before they ever reach the line.",
      company: "Northwick Compute",
      name: "Dario Fenn",
      role: "VP, Infrastructure",
      cta: { label: "Hear the story", href: "#" },
    },
  ],
  previousLabel: "Previous quote",
  nextLabel: "Next quote",
};

export default function Demo() {
  return <OnEnergyTestimonials {...testimonialsSample} />;
}
