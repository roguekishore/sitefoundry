// Sample content lives here (gallery only); the page reuses it. Kite and its features are made up.
import { DiabrowserFeatures, type DiabrowserFeaturesProps } from "./diabrowser-features";

export const featuresSample: DiabrowserFeaturesProps = {
  heading: "Shaped around how your week runs",
  cards: [
    {
      label: "Spaces",
      body: "Keep client work, side projects and home life apart, each with its own tabs, sign-ins and assistant. Flick between them with two fingers.",
      wide: true,
    },
    {
      label: "Pinned apps",
      body: "Kite keeps the tools your team lives in (trackers, docs, chat) one click away in the sidebar, opening straight onto the ticket or draft you need.",
    },
    {
      label: "Calls",
      body: "Every meeting opens with its agenda, notes and shared files laid out, plus a quiet countdown so you're never the one joining late.",
    },
    {
      label: "Side by side",
      body: "Put a call on one half and the doc on the other without dragging windows around. Kite remembers the setup for next week's standup.",
      wide: true,
      mediaAspect: "558 / 350",
    },
    {
      label: "Slides",
      body: "Ask Kite for slides and your loose notes become a real deck, with titles, structure and a flow you can present as it is.",
      wide: true,
      mediaAspect: "558 / 381",
    },
    {
      label: "Tab groups",
      body: "Gather related tabs into named groups, so the sidebar says “Launch review” or “Hiring” instead of twenty identical little icons.",
      mediaAspect: "278 / 350",
    },
  ],
};

export default function Demo() {
  return <DiabrowserFeatures {...featuresSample} />;
}
