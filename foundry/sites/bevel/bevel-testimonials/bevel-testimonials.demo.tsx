// Sample content (gallery only); the page reuses it. All reviewers are made up.
import { BevelTestimonials, type BevelTestimonialsProps } from "./bevel-testimonials";

export const testimonialsSample: BevelTestimonialsProps = {
  title: (
    <>
      Made with patience
      <br />
      Kept by thousands
    </>
  ),
  lead: "No need to trust us on it. Here is what people around the world say after a few months of feeling better and training smarter.",
  reviews: [
    {
      title: "Finally one place for everything",
      byline: "marlow_runs, March 3, 2026",
      quote: "“I used to juggle three apps. Now my sleep, lifting and meals sit side by side and the morning summary tells me what to do with them.”",
    },
    {
      title: "Polished from day one",
      byline: "Teodora K., February 21, 2026",
      quote: "“It feels finished in a way most new apps don't. Every update has added something I actually use.”",
    },
    {
      title: "The coach I didn't know I needed",
      byline: "quietmiles,",
      quote: "“Am I recovered? Am I overdoing it? Juniper answers before I ask. The readiness score has changed how I plan my week, and my watch finally feels useful.”",
    },
    {
      title: "Worth every minute",
      byline: "J. Abara, January 30, 2026",
      quote: "“Clear, calm and honest about what the numbers mean. I check it every morning with my coffee.”",
    },
    {
      title: "Better than my old tracker",
      byline: "sunday_strider, January 12, 2026",
      quote: "“The sleep breakdown is the best I've seen, and the lab results section saved me a folder of paper.”",
    },
  ],
};

export default function Demo() {
  return <BevelTestimonials {...testimonialsSample} />;
}
