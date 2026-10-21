import { LunchlineStory, type LunchlineStoryProps } from "./lunchline-story";

export const storySample: LunchlineStoryProps = {
  id: "story",
  heading: "it began in 2009 on the 7:10 ferry, two seats from the coffee counter.",
  paragraphs: [
    "a decade later we stopped advising owners and became owners ourselves, starting with one neglected corner of everyday life: childcare. A single nursery on the waterfront grew into Kestrel Early Years, now among the larger family-run groups in the country. Since then we have started, bought and rebuilt companies in several fields where hands-on work makes the difference. What we learned running a business ourselves is what we now bring to every founder and team we back.",
  ],
  caption: "pier 4, march 2009",
};

export default function Demo() {
  return <LunchlineStory {...storySample} />;
}
