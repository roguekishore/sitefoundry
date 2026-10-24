import { ArrowDownToLine } from "lucide-react";
import { FramerButton } from "./framer-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 bg-background p-8">
      <FramerButton href="#">Start building free</FramerButton>
      <FramerButton href="#" variant="secondary" icon={<ArrowDownToLine strokeWidth={2} />}>
        Get the app
      </FramerButton>
      <FramerButton href="#" size="sm">
        Sign up
      </FramerButton>
      <FramerButton variant="secondary">Meet the agent</FramerButton>
    </div>
  );
}
