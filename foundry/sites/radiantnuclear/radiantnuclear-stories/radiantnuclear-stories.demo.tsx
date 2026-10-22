// Sample content lives here (gallery only); the page reuses it. Corvane Energy is made up.
import { RadiantnuclearStories, type RadiantnuclearStoriesProps } from "./radiantnuclear-stories";

export const storiesSample: RadiantnuclearStoriesProps = {
  lead: "Twelve Tessera units will let the Navy run its yards off the grid. Every hour they log feeds straight back into the commercial fleet we are building for ports, plants and data halls.",
  stories: [
    {
      title: "Built on a line, not in a lab",
      body: "Imani Okafor, Corvane's head of operations, walks the factory floor that turns the Keystone order into a weekly rhythm of finished cells, ready to ship.",
      cta: { label: "Play the film", href: "#film-line" },
    },
    {
      title: "From first unit to first fleet",
      body: "Our commercial lead, Dr. Henrik Saelens, explains how a dozen identical units cut the cost of every one that follows for the customers who come next.",
      cta: { label: "Play the film", href: "#film-fleet" },
    },
    {
      title: "Corvane: power that travels",
      body: "Small reactors built by the hundred mean steady power wherever it's needed: a fishing port, a mountain clinic, and one day a research base on the Moon.",
      cta: { label: "Play the film", href: "#film-travel" },
    },
  ],
};

export default function Demo() {
  return <RadiantnuclearStories {...storiesSample} />;
}
