import { HhhusherOverview, type HhhusherOverviewProps } from "./hhhusher-overview";

export const overviewSample: HhhusherOverviewProps = {
  tabs: [
    {
      index: "01",
      label: "Tracking",
      title: "Tracking",
      subtitle: "Finally, the rimshots sound like rimshots.",
      text: "Made for drummers who record: the Veil keeps cymbal wash off the snare mic for drier tracks, easier edits and a drum that sits where you put it. Hear the stick, not the room around it.",
      link: { label: "How it works", href: "#features" },
    },
    {
      index: "02",
      label: "Stage",
      title: "Stage",
      subtitle: "A cleaner snare channel every night.",
      text: "On loud stages the snare mic hears everything. The Veil narrows what it picks up, so the front-of-house mix needs less gating and less guesswork.",
      link: { label: "How it works", href: "#features" },
    },
    {
      index: "03",
      label: "Streaming",
      title: "Streaming",
      subtitle: "Two mics, one tidy kit sound.",
      text: "Small rigs and lesson streams live on a couple of microphones. The Veil keeps the snare forward without the cymbals swallowing the stream.",
      link: { label: "How it works", href: "#features" },
    },
  ],
  cards: [
    {
      title: "Form",
      text: "A curved inner wall breaks up reflections before they reach the capsule, so nothing rings inside the shield and the snare keeps its own voice.",
      link: { label: "How it works", href: "#features" },
    },
    {
      title: "Felt",
      text: "Dense wool felt over a closed-cell core soaks up the bright, splashy frequencies from above while the body of the drum passes straight through.",
      link: { label: "How it works", href: "#features" },
    },
    {
      title: "Two-Minute Fit",
      text: "A sprung rim clip goes on by hand, no tools, and fits 12″ to 14″ snares with metal or wooden hoops.",
      link: { label: "How it works", href: "#features" },
    },
  ],
};

export default function Demo() {
  return <HhhusherOverview {...overviewSample} className="pt-section" />;
}
