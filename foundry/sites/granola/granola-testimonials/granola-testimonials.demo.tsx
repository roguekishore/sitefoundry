import { Feather, Hexagon, Sprout } from "lucide-react";
import { GranolaTestimonials, type GranolaTestimonialsProps } from "./granola-testimonials";

export const testimonialsSample: GranolaTestimonialsProps = {
  heading: "Calmer days for crowded calendars",
  listLabel: "What customers say",
  items: [
    {
      company: "Brightloom",
      companyMark: <Sprout />,
      quote: "It slotted into my week on day one. No setup, nothing joining the call, just better notes than I ever took myself.",
      name: "Priya Natarajan",
      role: "Head of Operations, Brightloom",
    },
    {
      company: "Coldframe Ventures",
      companyMark: <Hexagon />,
      quote: "The first note tool our partners stopped grumbling about, then started recommending.",
      name: "Tomasz Wierzbicki",
      role: "Partner at Coldframe Ventures",
    },
    {
      company: "Saltmarsh",
      companyMark: <Feather />,
      quote: "My recap goes out before I've even left the room. That alone earns its place in the dock.",
      name: "Amara Okafor",
      role: "VP Sales, Saltmarsh",
    },
  ],
};

export default function Demo() {
  return <GranolaTestimonials {...testimonialsSample} />;
}
