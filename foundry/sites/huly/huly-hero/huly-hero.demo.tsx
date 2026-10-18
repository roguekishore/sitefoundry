// Sample content lives here (gallery only); the page reuses it.
import { HulyWindow } from "@foundry/huly-window";
import { windowSample } from "../huly-window/huly-window.demo";
import { HulyHero, type HulyHeroProps } from "./huly-hero";

export const heroSample: HulyHeroProps = {
  title: ["One workspace", "for the whole crew"],
  text: "Tessel is an open workspace that brings your tasks, chat, calls and docs together, so nobody has to juggle five apps to get a week of work done.",
  cta: { label: "Take the tour", href: "#tour" },
  preview: <HulyWindow {...windowSample} />,
  strip: {
    label: "Everything a busy team leans on:",
    items: ["Planner", "Boards", "Live rooms", "Messages", "Docs", "Inbox"],
  },
};

export default function Demo() {
  return <HulyHero {...heroSample} />;
}
