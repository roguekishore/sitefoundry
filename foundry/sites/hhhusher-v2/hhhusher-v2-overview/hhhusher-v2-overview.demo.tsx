import { HhhusherV2Overview, type HhhusherV2OverviewProps } from "./hhhusher-v2-overview";

export const overviewSample: HhhusherV2OverviewProps = {
  id: "overview",
  tagline: "Meet the Quello Hood. A felt-lined shield that clamps under the hats and keeps their wash out of the snare mic. A good mix starts with what the mic hears.",
  slides: [
    {
      tab: "Tracking",
      title: "Tracking",
      subtitle: "Every ghost stroke, finally on the snare track.",
      text: "Made for drummers who record: the hood keeps cymbal wash off the snare mic, so the close mics stay close and the mix needs less fixing later. Print the part you played.",
      link: { label: "Read more", href: "#tracking" },
    },
    {
      tab: "Stage",
      title: "Stage",
      subtitle: "A quieter wedge, a tighter front of house.",
      text: "On stage the hood keeps the hats out of every vocal and snare channel, so the engineer can push the kit without pushing the wash.",
      link: { label: "Read more", href: "#stage" },
    },
    {
      tab: "Streaming",
      title: "Streaming",
      subtitle: "Two mics, a small room, a clean feed.",
      text: "For lessons and live streams with only a pair of mics, the hood evens out a kit that would otherwise be all cymbals.",
      link: { label: "Read more", href: "#streaming" },
    },
  ],
};

export default function Demo() {
  return <HhhusherV2Overview {...overviewSample} className="pb-section" />;
}
