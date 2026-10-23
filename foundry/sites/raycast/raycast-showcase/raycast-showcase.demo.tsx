import { Calculator, ClipboardList, LayoutGrid, Smile, Sparkles } from "lucide-react";
import { RaycastShowcase, type RaycastShowcaseProps } from "./raycast-showcase";

export const showcaseSample: RaycastShowcaseProps = {
  title: "Skip the detour.",
  subtitle: "One surface for everything you reach for.",
  items: [
    { label: "Pastebin", icon: <ClipboardList />, captionLead: "Keep it all.", caption: "Nothing you copy ever slips away: search, filter and paste it back from one list." },
    { label: "Ask", icon: <Sparkles />, captionLead: "Stay curious.", caption: "Got a question? Put it to the assistant right where your hands already are." },
    { label: "Symbols", icon: <Smile />, captionLead: "Say it better.", caption: "Find any emoji or symbol by name and drop it into whatever you are writing." },
    { label: "Math", icon: <Calculator />, captionLead: "Work it out.", caption: "Sums, units and currencies solved in the same box you launch apps from." },
    { label: "Layouts", icon: <LayoutGrid />, captionLead: "Tidy up.", caption: "Snap windows into halves, thirds and corners without touching the mouse." },
  ],
};

export default function Demo() {
  return <RaycastShowcase {...showcaseSample} />;
}
