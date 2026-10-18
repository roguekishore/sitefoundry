import { ArrowRight, MessagesSquare } from "lucide-react";
import { HulyButton } from "./huly-button";

export default function Demo() {
  return (
    <div className="dark flex flex-col items-start gap-5 bg-background p-8 text-foreground sm:flex-row sm:items-center">
      <HulyButton href="#" variant="glow">
        Start for free <ArrowRight className="size-4" strokeWidth={1.5} />
      </HulyButton>
      <HulyButton href="#" icon={<MessagesSquare />}>
        Join the forum
      </HulyButton>
      <HulyButton href="#" size="sm">
        Log in
      </HulyButton>
    </div>
  );
}
