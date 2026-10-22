// Sample content lives here (gallery only); the page reuses it.
import { limeCard } from "../increase-quote-card/increase-quote-card.demo";
import { IncreaseTestimonial, type IncreaseTestimonialProps } from "./increase-testimonial";

export const testimonialSample: IncreaseTestimonialProps = { card: limeCard };

export default function Demo() {
  return <IncreaseTestimonial {...testimonialSample} />;
}
