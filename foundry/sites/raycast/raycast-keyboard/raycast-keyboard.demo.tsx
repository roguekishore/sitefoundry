import { Clock, Command } from "lucide-react";
import { RaycastKeyboard, type RaycastKeyboardRow } from "./raycast-keyboard";

export const keyboardSample: RaycastKeyboardRow[] = [
  { keys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O"].map((label) => ({ label })), offset: 0 },
  {
    keys: [
      { label: "A" },
      { label: "S" },
      { tile: { icon: <Clock />, lead: "Quick.", text: "Answers before you blink." }, width: 1.75 },
      { label: "F" },
    ],
    offset: 0.4,
  },
  {
    keys: [
      { label: "control", modifier: true },
      { label: "option", modifier: true },
      { label: "command", modifier: true, top: <Command />, lit: true },
      { label: "", width: 3.5, lit: true },
    ],
  },
];

export default function Demo() {
  return (
    <div className="relative h-[26rem] overflow-clip bg-background">
      <RaycastKeyboard rows={keyboardSample} />
    </div>
  );
}
