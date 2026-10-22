// Sample content lives here (gallery only); the page reuses it. All people and companies are made up.
import { Bird, Sprout, Waves } from "lucide-react";
import { IncreaseDevelopers, type IncreaseDevelopersProps } from "./increase-developers";

export const developersSample: IncreaseDevelopersProps = {
  lead: "A decade of running payments at scale shaped how Cairn is built.",
  rest: "We wrote a banking core from the ground up and wired it straight to the networks, with no processors in the middle.",
  action: { label: "Browse the docs", href: "#docs" },
  rows: [
    {
      lead: "Small primitives",
      rest: "you can snap together into exactly the product you need.",
      link: { label: "How the core is put together", href: "#core" },
      quote: {
        quote: "Cairn changed how quickly we decide things. We try an idea on Monday and our customers have it by Friday, and the business has grown with that pace.",
        name: "Priya Anand",
        role: "CEO at Swiftly",
        mark: <span className="grid size-full place-items-center bg-foreground text-background"><Bird strokeWidth={2.5} /></span>,
      },
    },
    {
      lead: "Redundant by default",
      rest: "so the integration you ship is one you can stop worrying about.",
      link: { label: "Our approach to uptime", href: "#uptime" },
      quote: {
        quote: "Our payouts run faster and cost less, and we've added two products on top of the same accounts. Every month we move more, and nothing about the setup has had to change.",
        name: "Jonas Ekberg",
        role: "Co-founder at Tidepool",
        mark: <span className="grid size-full place-items-center bg-glow text-primary-foreground"><Waves strokeWidth={2.5} /></span>,
      },
    },
    {
      lead: "Open, readable APIs",
      rest: "expose the network data behind every single transfer.",
      link: { label: "Why we design APIs this way", href: "#design" },
      quote: {
        quote: "No other partner handed us the raw rails and an engineering team to talk to, or let us build what our customers asked for instead of what fit their roadmap.",
        name: "Malia Fonoti",
        role: "VP Product at Greenrow",
        mark: <span className="grid size-full place-items-center bg-card text-primary"><Sprout strokeWidth={2.5} /></span>,
      },
    },
  ],
};

export default function Demo() {
  return <IncreaseDevelopers {...developersSample} />;
}
