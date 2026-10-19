// Sample content lives here (gallery only); the page reuses it.
import { HalodentalSonnetNews, type HalodentalSonnetNewsProps } from "./halodental-sonnet-news";

export const newsSample: HalodentalSonnetNewsProps = {
  title: "Latest news",
  action: { label: "View Media Room", href: "#" },
  items: [
    {
      title: "A small clinic unveils a camera mirror",
      text: "A young company has built a mirror that lets patients see what the dentist sees. It could change how teams explain care, one appointment at a time.",
      href: "#",
    },
    {
      title: "Gleam: the mirror that talks back",
      text: "This article describes how the mirror turns an ordinary exam into a shared picture, with a built-in camera and a wireless link to a nearby screen.",
      href: "#",
    },
    {
      title: "Gleam wins a national design prize",
      text: "The jury praised the mirror for bringing a calm, simple object into a room full of equipment, and for making the patient part of the exam.",
      href: "#",
    },
  ],
  more: { label: "View more", href: "#" },
};

export default function Demo() {
  return (
    <div className="bg-background">
      <HalodentalSonnetNews {...newsSample} />
    </div>
  );
}
