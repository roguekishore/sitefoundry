// Sample content (gallery only); the page reuses it. Every person and company is made up.
import { GrowthbookV2Testimonials, type GrowthbookV2TestimonialsProps } from "./growthbook-v2-testimonials";
import { logoMarks } from "../growthbook-v2-logos/growthbook-v2-logos.demo";

export const testimonialsSample: GrowthbookV2TestimonialsProps = {
  testimonials: [
    {
      company: "Quarry",
      logo: logoMarks.quarry,
      quote: "“Fernlight gave us one place to test and release that matches how Quarry actually builds. We query our lake directly, roll changes out in careful steps, and support a dozen stacks without copying data around.”",
      name: "Dana Okafor",
      role: "Head of Platform, Quarry",
    },
    {
      company: "oakline",
      logo: logoMarks.oakline,
      quote: "Fernlight lets us run experiments the way an open archive should: self-hosted, private by default, and wired into the data tools we already maintain.",
      name: "Tomas Lindqvist",
      role: "Staff Engineer, oakline",
    },
    {
      company: "wren",
      logo: logoMarks.wren,
      quote: "“Testing our tutoring assistant used to slow every launch. Now experiments feel like part of shipping, not a gate in front of it.”",
      name: "Priya Raman, PhD",
      role: "Director of Learning Science, wren",
    },
    {
      company: "Harbourly",
      logo: logoMarks.harbourly,
      quote: "“We replaced two vendors and a pile of scripts. The guard metrics alone have saved us from three bad releases this year.”",
      name: "Jonah Mbeki",
      role: "VP Product, Harbourly",
    },
  ],
};

export default function Demo() {
  return <GrowthbookV2Testimonials {...testimonialsSample} />;
}
