import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import type { ReflectAcademyProps } from "./reflect-academy";
import { ReflectAcademy } from "./reflect-academy";

const k = { strokeWidth: 3, "aria-hidden": true } as const;

export const academySample: ReflectAcademyProps = {
  eyebrow: "Night school",
  title: "Learn to keep notes\nthat keep you",
  lead: "Short, free lessons on writing things down so they're there when you need them.",
  action: { label: "Start lesson one", href: "#" },
  mediaLabel: "A falling-blocks game you can play",
  hints: [
    { label: "Play with the arrow keys:", keys: [<ChevronLeft key="l" {...k} />, <ChevronUp key="u" {...k} />, <ChevronDown key="d" {...k} />, <ChevronRight key="r" {...k} />] },
    { label: "Turn", keys: [<ChevronUp key="u" {...k} />] },
    { label: "Drop:", keys: [<ChevronDown key="d" {...k} />] },
  ],
};

export default function Demo() {
  return <ReflectAcademy {...academySample} />;
}
