import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { OuraringButton, OuraringRoundButton } from "./ouraring-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-10 text-foreground">
      <div className="flex flex-wrap items-center gap-4">
        <OuraringButton tone="blue" href="#">Shop the Loop</OuraringButton>
        <OuraringButton href="#">Why Tessel</OuraringButton>
        <OuraringRoundButton tone="bare" icon={<ArrowLeft strokeWidth={1.5} />} label="Previous" />
        <OuraringRoundButton icon={<ArrowRight strokeWidth={1.5} />} label="Next" />
      </div>
      <div className="dark flex flex-wrap items-center gap-4 rounded-lg bg-background p-8">
        <OuraringButton tone="inverse" href="#" icon={<ArrowUpRight strokeWidth={1.5} />}>Read the story</OuraringButton>
        <OuraringRoundButton tone="quiet" icon={<ArrowUpRight strokeWidth={1.5} />} label="Open article" />
      </div>
    </div>
  );
}
