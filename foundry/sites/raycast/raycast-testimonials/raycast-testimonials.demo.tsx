import { Bookmark, ClipboardList, Sparkles, Timer } from "lucide-react";
import { RaycastTestimonials, type RaycastTestimonialsProps } from "./raycast-testimonials";

export const testimonialsSample: RaycastTestimonialsProps = {
  title: "Made for people who ship.",
  subtitle: "Trusted by relentlessly busy teams.",
  labels: { feature: "Favourite tool:", extension: "Best plug-in:" },
  people: [
    {
      name: "Mara Linden",
      handle: "@maralinden",
      role: "Founder",
      quote: { before: "Tessel quietly", highlight: "turned my laptop into a place where everything is one key away", after: "and I never want to go back." },
      feature: { icon: <Sparkles />, name: "Assistant", text: "Answers that live right where I work, no tab-hopping." },
      extension: { icon: <Bookmark />, name: "Reading list", text: "I extended it so saved links land straight in our team channel." },
    },
    {
      name: "Devon Okafor",
      handle: "@devonok",
      role: "Engineer",
      quote: { before: "I open it", highlight: "forty times before lunch", after: "and every single time it is already there." },
      feature: { icon: <ClipboardList />, name: "Pastebin", text: "Nothing I copy is ever lost, so I stopped worrying about it." },
      extension: { icon: <Timer />, name: "Focus timers", text: "A block of quiet time is one short command away." },
    },
    {
      name: "Sunita Rao",
      handle: "@sunitar",
      role: "Producer",
      quote: { before: "It feels like", highlight: "the computer finally listens", after: "instead of making me look for things." },
      feature: { icon: <Sparkles />, name: "Assistant", text: "Draft, tidy and reply without leaving the page I am on." },
      extension: { icon: <Bookmark />, name: "Reading list", text: "My whole research pile, searchable, from any app." },
    },
  ],
};

export default function Demo() {
  return <RaycastTestimonials {...testimonialsSample} />;
}
