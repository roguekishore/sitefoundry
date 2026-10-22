import { AspensearchTestimonials, type AspensearchTestimonialsProps } from "./aspensearch-testimonials";

export const testimonialsSample: AspensearchTestimonialsProps = {
  id: "testimonials",
  label: "In their words",
  quoteMark: "“",
  prevLabel: "Previous story",
  nextLabel: "Next story",
  items: [
    {
      quote:
        "Dana cut my list down to the three desks that actually fit how I like to work, two of which I'd never heard of. Every call came with something useful — comp ranges, team history, who I'd sit next to. Quick to answer, never pushy, and never a 7am phone call. I'd go back to her in a heartbeat.",
      name: "Felix Andersen",
      role: "Quant developer",
      facts: [
        { label: "Position", value: "Quant developer" },
        { label: "Company", value: "Kepler Systematic" },
      ],
    },
    {
      quote:
        "I'd spent my whole career in consumer tech and had no idea how differently trading firms interview. They prepared me round by round, so I walked into every loop calm.\n\nThe offer arrived the evening of my final onsite.",
      name: "Ines Okoro",
      role: "Senior software engineer",
      facts: [
        { label: "Position", value: "Platform engineer" },
        { label: "Company", value: "Halcyon Quant" },
      ],
    },
    {
      quote:
        "Straight answers about money, about the team, about the risks of the move. Nobody else gave me that, and it's the reason I said yes.",
      name: "Tomas Reyes",
      role: "ML researcher",
      facts: [
        { label: "Position", value: "Research scientist" },
        { label: "Company", value: "Vellum AI" },
      ],
    },
  ],
};

export default function Demo() {
  return <AspensearchTestimonials {...testimonialsSample} />;
}
