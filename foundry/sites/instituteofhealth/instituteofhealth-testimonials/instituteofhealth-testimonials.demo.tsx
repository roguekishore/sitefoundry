// Sample content (gallery only); the page reuses it. All names are made up.
import { InstituteofhealthTestimonials, type InstituteofhealthTestimonialsProps } from "./instituteofhealth-testimonials";

export const testimonialsSample: InstituteofhealthTestimonialsProps = {
  eyebrow: "However far off it seems today",
  heading: "You are closer than you think to the practitioner your clients are looking for",
  items: [
    { name: "Dr Amara Osei", role: "General Practitioner" },
    { name: "Tobias Lindqvist", role: "Strength Coach" },
    { name: "Priya Raman", role: "Midwife" },
    { name: "Marco Bellandi", role: "Physiotherapist" },
    { name: "Hannah Okafor", role: "Naturopath" },
    { name: "Jun Watanabe", role: "Sports Dietitian" },
  ],
};

export default function Demo() {
  return <InstituteofhealthTestimonials {...testimonialsSample} />;
}
