// Sample content lives here (gallery only); the page reuses it.
import { HulyMetabrain, type HulyMetabrainProps } from "./huly-metabrain";

export const metabrainSample: HulyMetabrainProps = {
  title: "Team memory",
  text: "Every task, thread and page links to the next, building a living knowledge base. Soon Tessel's assistant will turn it into answers: a second memory for your team.",
  cards: [
    {
      title: "Capture to-dos.",
      text: "Jot personal tasks and reminders.",
      visual: { kind: "tasks", items: [{ label: "Write release notes", done: true }, { label: "Record the walkthrough" }, { label: "Update the help centre" }] },
    },
    {
      title: "Plan the day.",
      text: "Lay your work out on a timeline.",
      drop: true,
      visual: { kind: "event", title: "Map out the Q1 roadmap themes", time: "09:30 – 10:00", people: ["AR", "MK", "LT"], more: "+3" },
    },
    {
      title: "Write it down.",
      text: "Pages that keep the team's know-how.",
      visual: {
        kind: "menu",
        heading: "Insert block",
        items: [
          { label: "Paragraph", hint: "Plain text to start writing" },
          { label: "Checklist", hint: "Track steps with checkboxes" },
          { label: "Linked page", hint: "Point to another document" },
        ],
      },
    },
    {
      title: "Talk it through.",
      text: "Direct messages and group threads.",
      drop: true,
      visual: {
        kind: "chat",
        placeholder: "Write a reply…",
        messages: [
          { mention: "@Priya", text: "the deck is ready for review", initials: "AR", mine: true },
          { mention: "@Dev", text: "can we move the demo to Friday?", initials: "MK" },
        ],
      },
    },
    {
      title: "Stay in sync.",
      text: "Hop on a call and follow progress as it happens.",
      span: "wide",
      visual: { kind: "voice", people: ["AR", "MK", "LT", "JS", "PN", "DV", "OB", "RC"] },
    },
    {
      title: "Run projects.",
      text: "Shape each space around how a team works.",
      span: "medium",
      visual: { kind: "project", title: "Growth", item: "Autumn launch campaign", members: "7 people", people: ["AR", "MK", "LT"], rows: ["Brief", "Discussion", "Files"] },
    },
  ],
};

export default function Demo() {
  return <HulyMetabrain {...metabrainSample} />;
}
