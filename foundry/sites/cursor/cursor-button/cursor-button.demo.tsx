import { ArrowDown, ArrowRight } from "lucide-react";
import { CursorButton } from "./cursor-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <CursorButton href="#">
        Install for macOS <ArrowDown aria-hidden strokeWidth={1.75} />
      </CursorButton>
      <CursorButton href="#" variant="secondary">
        Book a walkthrough <ArrowRight aria-hidden strokeWidth={1.75} />
      </CursorButton>
      <CursorButton href="#" variant="outline" size="sm">Talk to us</CursorButton>
      <CursorButton href="#" size="sm">Install</CursorButton>
    </div>
  );
}
