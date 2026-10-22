// Sample content (gallery only); the page reuses it.
import { ArrowRight, BookOpen, MessagesSquare } from "lucide-react";
import { ColumnCta, type ColumnCtaProps } from "./column-cta";

export const ctaSample: ColumnCtaProps = {
  title: "Begin with a request",
  lead: "Shape your own money products on your own terms, with nobody in the middle.",
  cards: [
    { icon: <BookOpen strokeWidth={1.75} />, title: "Guides", note: "Read the API reference", href: "#" },
    { icon: <ArrowRight strokeWidth={1.75} />, title: "Quickstart", note: "Your first payout in minutes", href: "#" },
    { icon: <MessagesSquare strokeWidth={1.75} />, title: "Talk to us", note: "Meet the partnerships team", href: "#" },
  ],
};

export default function Demo() {
  return <ColumnCta {...ctaSample} closed />;
}
