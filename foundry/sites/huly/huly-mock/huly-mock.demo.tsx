// Sample content lives here (gallery only); other demos and the page reuse it.
import { HulyMock, type HulyMockProps } from "./huly-mock";

export const samples: HulyMockProps[] = [
  { kind: "command", placeholder: "Type a command…", label: "Suggestions", actions: [{ label: "Close current task", key: "C" }, { label: "Open my inbox", key: "I" }, { label: "Switch to board", key: "B" }] },
  { kind: "planner", heading: "Thursday", tasks: [{ tag: "Urgent", title: "Ship the onboarding checklist to beta users", meta: "Oct 23", people: ["AR", "MK"] }, { tag: "Normal", title: "Review the pricing page copy", meta: "Oct 24", people: ["JS"] }] },
  { kind: "schedule", action: "Join", events: [{ time: "10:00 – 10:45 · every Monday", title: "Sprint review and planning for the mobile app", note: "15 minutes before", people: ["AR", "MK", "LT"] }, { time: "13:30 – 14:00", title: "Hiring sync: design lead", people: ["JS", "PN"] }] },
  { kind: "bell", count: "12" },
  { kind: "tasks", items: [{ label: "Write release notes", done: true }, { label: "Record the product walkthrough" }, { label: "Update the help centre" }] },
  { kind: "event", title: "Map out the Q1 roadmap themes", time: "09:30 – 10:00", people: ["AR", "MK", "LT"], more: "+3" },
  { kind: "menu", heading: "Insert block", items: [{ label: "Paragraph", hint: "Plain text to start writing" }, { label: "Checklist", hint: "Track steps with checkboxes" }, { label: "Linked page", hint: "Point to another document" }] },
  { kind: "voice", people: ["AR", "MK", "LT", "JS", "PN", "DV", "OB", "RC"] },
  { kind: "chat", placeholder: "Write a reply…", messages: [{ mention: "@Priya", text: "the deck is ready for review", initials: "AR", mine: true }, { mention: "@Dev", text: "can we move the demo to Friday?", initials: "MK" }] },
  { kind: "project", title: "Growth", item: "Autumn launch campaign", members: "7 people", people: ["AR", "MK", "LT"], rows: ["Brief", "Discussion", "Files"] },
];

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-gutter sm:grid-cols-2 lg:grid-cols-3">
      {samples.map((s) => (
        <div key={s.kind} className="dark h-64 overflow-hidden rounded-2xl bg-background">
          <HulyMock {...s} />
        </div>
      ))}
    </div>
  );
}
