// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionSplitStoryProps } from "./castelion-split-story";
import { CastelionSplitStory } from "./castelion-split-story";

export const splitStorySample: CastelionSplitStoryProps = {
  stories: [
    {
      title: ["Fast Flight,", "Fair Price,", "Fielded", "Sooner"],
      body: "At Pellworth, cost and pace are not traded against each other: both are the brief. We make our own engines, avionics and airframes so we can move quicker, carry less risk and keep the bill in check as volume grows. Each design is laid out for the line from its first sketch, which lets us change it often and build it in bulk. The world is not waiting, so neither are we.",
    },
    {
      title: ["Guarding the", "Open Sky"],
      body: "We believe a free world has to be defended on purpose, with real engineering, a clear head and the will to keep at it. By helping our allies out-build and out-think anyone who would test them, we mean to keep the peace for the people who come after us.",
    },
  ],
  backdropLabel: "Painting of two test vehicles climbing through orange clouds",
};

export default function Demo() {
  return <CastelionSplitStory {...splitStorySample} />;
}
