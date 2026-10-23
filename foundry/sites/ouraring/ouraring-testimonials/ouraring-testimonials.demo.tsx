// Sample content lives here (gallery only); the page reuses it. Tessel and its members are made up.
import { OuraringTestimonials, type OuraringTestimonialsProps } from "./ouraring-testimonials";

export const testimonialsSample: OuraringTestimonialsProps = {
  stories: [
    {
      tag: "Recovery",
      quote: "After the marathon I wanted to jump straight back in. The ring kept telling me to wait two more days, and those two days are why I'm still running.”",
      name: "Priya R.",
    },
    {
      tag: "Stress",
      quote: "[The evening check-ins] showed me how much my late meetings were costing my sleep. I moved them, and I feel like myself again.”",
      name: "Marcus D.",
    },
    {
      tag: "Cycle tracking",
      quote: "Seeing my temperature trend every morning took the guessing out of planning. We finally felt in control of the timing.”",
      name: "Lena & Jo K.",
    },
  ],
};

export default function Demo() {
  return <OuraringTestimonials {...testimonialsSample} />;
}
