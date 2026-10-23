import { EzraStories, type EzraStoriesProps } from "./ezra-stories";

export const storiesSample: EzraStoriesProps = {
  title: "Knowing sooner changes what comes next. A few members tell it best.",
  previousLabel: "Previous story",
  nextLabel: "Next story",
  stories: [
    {
      quote: "“My doctor said that without the scan, we might not have caught it for another six or seven years.",
      story:
        "I booked a scan in the spring after my brother’s diagnosis. I felt fine and expected nothing, so the call about a growth on my kidney stopped me cold. It was small, it was treatable, and it is gone now. I think about that morning a lot, and I’m grateful every time I do.”",
      name: "Marisol · 44",
    },
    {
      quote: "“I went in for peace of mind and came out with a plan I could actually follow.",
      story:
        "The report flagged early fatty liver. Nothing scary, but enough to change how I eat and how often I walk. My follow-up a year later showed it had gone back to normal, which no blood test had ever told me.”",
      name: "Theo · 52",
    },
    {
      quote: "“The scan was the calmest half hour of my week, and the most useful.",
      story:
        "My mother had a stroke at sixty, so I wanted to look at the vessels in my neck. The scan was clear, and for the first time in years I stopped worrying about it. The doctor walked me through every page.”",
      name: "Priya · 38",
    },
  ],
};

export default function Demo() {
  return <EzraStories {...storiesSample} />;
}
