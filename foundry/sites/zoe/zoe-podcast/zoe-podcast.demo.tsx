import { AudioLines, CirclePlay, Headphones, Podcast } from "lucide-react";
import { ZoePodcast, type ZoePodcastProps } from "./zoe-podcast";

const icon = "size-full";

export const podcastSample: ZoePodcastProps = {
  eyebrow: "The Kitchen Table, a Tillwell podcast",
  title: "Tune in to the top food science podcast",
  platforms: [
    { label: "Listen on Sounder", href: "#", icon: <AudioLines aria-hidden className={icon} strokeWidth={1.75} /> },
    { label: "Watch on Viewtube", href: "#", icon: <CirclePlay aria-hidden className={icon} strokeWidth={1.75} /> },
    { label: "Listen on Tunebox", href: "#", icon: <Headphones aria-hidden className={icon} strokeWidth={1.75} /> },
    { label: "Listen on Podshelf", href: "#", icon: <Podcast aria-hidden className={icon} strokeWidth={1.75} /> },
  ],
};

export default function Demo() {
  return <ZoePodcast {...podcastSample} />;
}
