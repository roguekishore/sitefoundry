import { PrenuvoTestimonial, type PrenuvoTestimonialProps } from "./prenuvo-testimonial";

export const testimonialSample: PrenuvoTestimonialProps = {
  id: "stories",
  title: "The choice of 150,000 members and counting",
  quote: "Honestly, it was the best hour I spent all year, and I'm already booked for the next one. I finally stopped wondering.”",
  name: "Marisol",
  role: "Oriel member",
  cta: { label: "Member stories", href: "#stories" },
};

export default function Demo() {
  return (
    <div className="dark bg-background pt-16">
      <PrenuvoTestimonial {...testimonialSample} />
    </div>
  );
}
