// Sample content lives here (gallery only); the page reuses it. People and firms are made up.
import { RampStories, type RampStoriesProps } from "./ramp-stories";

export const storiesSample: RampStoriesProps = {
  lead: "Taught by 60,000 finance desks.",
  rest: "Built for teams that run on agents.",
  cta: { label: "Meet the agents", href: "#" },
  stories: [
    {
      lead: "Say hello to Kestrel Ledger.",
      rest: "A bookkeeping brain for teams who close in days, not weeks.",
      link: { label: "Tour Kestrel Ledger", href: "#" },
      watchLabel: "Play film",
      watchHref: "#",
      quote: "We finally stopped double-checking the robots. Ledger codes it right, every single time, and it shows its working.",
      name: "Imogen Price",
      role: "Managing Partner, Price & Holt Advisory",
      storyLink: { label: "How they did it", href: "#" },
    },
    {
      lead: "Give your team its afternoons back.",
      rest: "Agents chase the receipts.",
      link: { label: "See what agents do", href: "#" },
      watchLabel: "Play film",
      watchHref: "#",
      quote: "No more Friday receipt hunts or coding thousands of lines by hand. It happens quietly through the month while we work on the plan.",
      name: "Dario Mendes",
      role: "Head of Accounting, Fathom",
      storyLink: { label: "How they did it", href: "#" },
    },
    {
      lead: "Rules that learn from your people.",
      rest: "And sharpen with every team that joins.",
      link: { label: "Explore policy agents", href: "#" },
      quote: "We push thousands of card swipes a month and my manual fixes have almost disappeared. It gets better every week.",
      name: "Ayesha Rahman",
      role: "Fractional CFO, Sundial Group",
    },
  ],
};

export default function Demo() {
  return <RampStories {...storiesSample} />;
}
