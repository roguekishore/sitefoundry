import { Coffee, Compass, LayoutGrid, Mail, MessageSquareText, PenLine, Sparkles, Star, Timer, FileSearch, Inbox, Wand2, Boxes, Workflow } from "lucide-react";
import { SuperhumanMark } from "@foundry/superhuman-mark";
import { SuperhumanPilot, type SuperhumanPilotProps } from "./superhuman-pilot";

export const pilotSample: SuperhumanPilotProps = {
  heading: {
    mark: <SuperhumanMark brand="Wayfinder" product="Pilot" icon={<Compass />} />,
    title: "Get help from assistants where you work",
    description: "Pilot is the AI helper inside the tools you already use. Start typing and ideas show up.",
    primary: { label: "Try Pilot", href: "#" },
    secondary: { label: "Learn more", href: "#" },
  },
  wide: { eyebrow: "Live hints", title: "As you write, assistants flag what needs a second look. Mid-sentence. Mid-thought. Mid-slip." },
  left: { eyebrow: "Side conversation", title: "Ask about whatever is on screen and keep Pilot beside you." },
  right: { eyebrow: "Pilot window", title: "Start several jobs at once and watch them all from one spot." },
  tabs: [
    {
      label: "Featured",
      icon: <Star />,
      cards: [
        { icon: <Wand2 />, tint: "mint", title: "Tidy your prose", titleRest: "with Polish", description: "Tell Polish which edits you value and it will only underline the ones that count." },
        { icon: <Mail />, tint: "rose", title: "Run your inbox on autopilot", titleRest: "with the Post helper", description: "Drafts replies, clears the noise and makes sure nothing slips through." },
        { icon: <Coffee />, tint: "periwinkle", title: "Open each morning", titleRest: "with Daily Briefs", description: "Pilot gathers deadlines, promises and meetings into one calm view." },
      ],
    },
    {
      label: "Prep for meetings",
      icon: <MessageSquareText />,
      cards: [
        { icon: <Timer />, tint: "mint", title: "Walk in ready", titleRest: "with agenda notes", description: "Pilot reads the invite and pulls the last thread so you start on time." },
        { icon: <FileSearch />, tint: "rose", title: "Skip the digging", titleRest: "with instant context", description: "See past decisions and open questions for every guest." },
        { icon: <Sparkles />, tint: "periwinkle", title: "Close the loop", titleRest: "with follow-ups", description: "Action items become tasks before the call even ends." },
      ],
    },
    {
      label: "Write and edit",
      icon: <PenLine />,
      cards: [
        { icon: <Wand2 />, tint: "mint", title: "Find your tone", titleRest: "with style checks", description: "Match the voice of your team in every paragraph." },
        { icon: <Sparkles />, tint: "rose", title: "Shorten anything", titleRest: "with one click", description: "Trim long drafts down without losing the point." },
        { icon: <FileSearch />, tint: "periwinkle", title: "Back up claims", titleRest: "with sources", description: "Every suggested fact links to where it came from." },
      ],
    },
    {
      label: "Automate your emails",
      icon: <Inbox />,
      cards: [
        { icon: <Mail />, tint: "mint", title: "Sort the noise", titleRest: "with smart rules", description: "Receipts, newsletters and alerts file themselves." },
        { icon: <Timer />, tint: "rose", title: "Nudge for you", titleRest: "with reminders", description: "Unanswered threads resurface at the right moment." },
        { icon: <Wand2 />, tint: "periwinkle", title: "Reply faster", titleRest: "with ready drafts", description: "Every message gets a first draft in your voice." },
      ],
    },
    {
      label: "Build assistants",
      icon: <LayoutGrid />,
      cards: [
        { icon: <Boxes />, tint: "mint", title: "Start from a template", titleRest: "in minutes", description: "Pick a pattern, add your sources and publish." },
        { icon: <Workflow />, tint: "rose", title: "Chain the steps", titleRest: "visually", description: "Connect tools without writing code." },
        { icon: <Sparkles />, tint: "periwinkle", title: "Share with the team", titleRest: "safely", description: "Control who can run, edit and see each assistant." },
      ],
    },
  ],
};

export default function Demo() {
  return <SuperhumanPilot {...pilotSample} />;
}
