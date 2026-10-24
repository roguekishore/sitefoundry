// Sample content (gallery only). Every company, person and handle is made up.
import { RailwayTestimonials, type RailwayTestimonialsProps } from "./railway-testimonials";

const at = (handle: string) => <span className="text-highlight">{handle}</span>;

export const testimonialsSample: RailwayTestimonialsProps = {
  title: "Relied on by teams that ship",
  lead: "Halyard runs serious software for teams all over the map. Here is what a few of them say about building on it.",
  action: { label: "Read the field notes →", href: "#" },
  quotes: [
    {
      logo: <span className="font-sans text-[1.75rem] font-light tracking-[0.3em] uppercase">Quayside</span>,
      quote:
        "\"On our busiest morning of the quarter we served more than two thousand requests a second, almost all under forty milliseconds. Nobody on the team had to touch a thing, which still surprises us.\"",
      name: "Imogen Achterberg",
      role: "Platform Lead at Quayside",
    },
    {
      logo: <span className="font-sans text-[2.25rem] font-medium tracking-[-0.04em]">N/L</span>,
      quote:
        "\"Things that took a week to wire up elsewhere take an afternoon here. The networking just behaves. If you know what a port is, you are ready.\"",
      name: "Tobias Ferreira",
      role: "CTO at Northline Labs",
    },
    {
      logo: <span className="font-sans text-[2rem] font-bold tracking-[-0.03em]">◆ Tessel</span>,
      quote:
        "\"Halyard tidied up our whole operation. We can see every service at once and stand up self-hosted tools in minutes, which means more experiments and much shorter release cycles.\"",
      name: "Ruth Okonkwo-Lind",
      role: "Co-founder & CTO at Tessel",
    },
  ],
  postsTitle: "...and liked by builders",
  postsLink: { label: "Join three million builders on Halyard →", href: "#" },
  posts: [
    { name: "mira codes", handle: "@mirabuilds", text: <>i love how {at("halyard")} lets me show the whole setup to someone and the architecture explains itself.</> },
    { name: "Jonah Petrakis", handle: "@jpetrakis", text: <>Honestly smitten with {at("@halyard")}: two minutes to a server, a database, a volume and every variable in one project. Very tidy.</> },
    { name: "Sana Velasquez", handle: "@sanavq", text: <>First go with {at("@halyard")} and it is lovely. Zero config if you already have a Dockerfile. Checking back in a month on the bill.</> },
    { name: "kit", handle: "@kit_in_prod", text: <>Very into what {at("@halyard")} is doing. Their own hardware plus the new startup programme, let's see where it goes.</> },
    { name: "Arlo Benedetti", handle: "@arlob", text: <>Moved four side projects to {at("@halyard")} over a weekend. The canvas view alone is worth it.</> },
    { name: "Priya Mahadevan", handle: "@priyamaha", text: <>Preview environments per pull request on {at("@halyard")} changed how our team reviews. Nobody asks for screenshots anymore.</> },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pt-4">
      <RailwayTestimonials {...testimonialsSample} />
    </div>
  );
}
