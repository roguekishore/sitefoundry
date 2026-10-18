// Sample content lives here (gallery only); the page reuses it.
import { DoorOpen, Headphones, UserPlus } from "lucide-react";
import { HulyOffice, type HulyOfficeProps } from "./huly-office";

export const officeSample: HulyOfficeProps = {
  title: ["Meet like you share", "a hallway."],
  text: "Give every team and event its own room, with crisp voice and video built in.",
  call: {
    title: "Monday kickoff",
    subtitle: "4 people",
    speaker: { name: "Ana Ruiz", initials: "AR" },
    people: [
      { name: "Milo Kerr", initials: "MK", speaking: true },
      { name: "Lena Tan", initials: "LT" },
      { name: "Jon Silva", initials: "JS", speaking: true },
    ],
  },
  lead: "Remote teams drop into a room the way they'd walk to a desk. Talk in real time inside the workspace you already have open, with nothing extra to install.",
  features: [
    { icon: DoorOpen, title: "Rooms for every team", text: "Set up offices and meeting rooms that match how your people work." },
    { icon: Headphones, title: "Voice and video", text: "Clear calls that start in one click from any room or task." },
    { icon: UserPlus, title: "Bring in guests", text: "Invite clients and partners in without making them sign up." },
  ],
};

export default function Demo() {
  return <HulyOffice {...officeSample} />;
}
