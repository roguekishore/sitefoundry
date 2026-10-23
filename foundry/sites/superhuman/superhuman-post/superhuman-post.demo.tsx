import { Mail } from "lucide-react";
import { SuperhumanMark } from "@foundry/superhuman-mark";
import { SuperhumanPost, type SuperhumanPostProps } from "./superhuman-post";

export const postSample: SuperhumanPostProps = {
  heading: {
    mark: <SuperhumanMark brand="Wayfinder" product="Post" icon={<Mail />} />,
    title: "Reclaim 4+ hours weekly",
    muted: "from email and scheduling",
    breakAfterTitle: true,
    description: "Work together better and spend less time in your inbox with the quickest email app around.",
    primary: { label: "Get Post", href: "#" },
    secondary: { label: "Learn more", href: "#" },
  },
  main: { eyebrow: "Auto drafts", title: "Replies write themselves. Get ready drafts built from your inbox, calendar and the web." },
  topRight: { eyebrow: "Share availability", title: "No more double booking or back-and-forth. Booking links stay current." },
  bottomRight: { eyebrow: "Split inbox", title: "Focus on what matters most. Your inbox lifts important messages and quiets the rest, automatically." },
};

export default function Demo() {
  return <SuperhumanPost {...postSample} />;
}
