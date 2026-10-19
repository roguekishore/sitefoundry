// Sample content lives here (gallery only); the page reuses it.
import { HalodentalOpusNews, type HalodentalOpusNewsProps } from "./halodental-opus-news";

export const newsSample: HalodentalOpusNewsProps = {
  title: "In the press",
  link: { label: "All stories", href: "#" },
  items: [
    {
      title: "A scope that lets patients see what you see",
      text: "Founded three years ago, the studio has built a lit, connected dental scope that helps clinicians work faster and explain treatment to the person in the chair.",
      href: "#",
      linkLabel: "Read: A scope that lets patients see what you see",
    },
    {
      title: "Lumo: small tool, big picture",
      text: "A long read on how one of the oldest instruments in the clinic got a camera, a light and a wireless link, and what that changes for everyday checkups.",
      href: "#",
      linkLabel: "Read: Lumo: small tool, big picture",
    },
    {
      title: "Lumo Oral Devices picks up a design prize for the Beacon",
      text: "The team behind the Beacon has been recognised by an international design jury for the scope's slim form and its single-gesture controls.",
      href: "#",
      linkLabel: "Read: Lumo Oral Devices picks up a design prize",
    },
    {
      title: "Why the next clinic upgrade fits in your hand",
      text: "A new category of chairside tools is arriving, and the Beacon is one of the first to ship to practices across the region.",
      href: "#",
      linkLabel: "Read: Why the next clinic upgrade fits in your hand",
    },
  ],
  more: { label: "Load more", href: "#" },
};

export default function Demo() {
  return <HalodentalOpusNews {...newsSample} />;
}
