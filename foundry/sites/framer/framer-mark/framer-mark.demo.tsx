import { Hexagon } from "lucide-react";
import { FramerMark } from "./framer-mark";

export default function Demo() {
  return (
    <div className="flex items-center gap-8 bg-background p-8">
      <FramerMark brand="Tessel" mark={<Hexagon fill="currentColor" strokeWidth={0} />} />
      <FramerMark brand="Tessel" mark={<Hexagon fill="currentColor" strokeWidth={0} />} hideName />
    </div>
  );
}
