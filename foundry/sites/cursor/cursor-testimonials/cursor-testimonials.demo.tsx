// All people and companies are made up.
import type { CursorTestimonialsProps } from "./cursor-testimonials";
import { CursorTestimonials } from "./cursor-testimonials";

export const testimonialsSample: CursorTestimonialsProps = {
  title: "A calmer way to make software.",
  quotes: [
    {
      quote: "“We rolled it out to one squad on a Monday. By Friday every team had asked for seats, and the strongest engineers were the loudest about it.”",
      name: "Marisol Ekdahl",
      role: "VP Engineering, Tidewell",
    },
    {
      quote: "“Nine thousand of our developers now pair with Fernwork every day, and our release cadence has roughly doubled.”",
      name: "Jun Abernathy",
      role: "CTO, Copperline Systems",
    },
    {
      quote: "“The trick is letting you choose how much to delegate. Nudge a single line, or let it carry a whole feature from plan to merge.”",
      name: "Teodor Vance",
      role: "Founder, Lattice School",
    },
    {
      quote: "“It grew from a handful of curious engineers to most of the company in a quarter. We build a lot of software, and anything that makes that cheaper and steadier compounds quickly.”",
      name: "Priya Halvorsen",
      role: "Co-founder & CEO, Mintleaf",
    },
    {
      quote: "“The one tool I pay for out of my own pocket. It's quick, it finishes my thoughts, it respects my keybindings, and it lets me bring my own model.”",
      name: "Oskar Lindqvist",
      role: "Author of the Bramble UI kit",
    },
    {
      quote: "“Programming feels playful again. We're early, and tools like this are where new models get to show what they can really do.”",
      name: "Adaeze Morrow",
      role: "President, Northgate Research",
    },
  ],
};

export default function Demo() {
  return <CursorTestimonials {...testimonialsSample} />;
}
