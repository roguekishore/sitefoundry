import { ArrowRight } from "lucide-react";
import { DiabrowserButton } from "./diabrowser-button";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-background p-10 text-foreground">
      <DiabrowserButton size="lg" href="#" className="w-full max-w-[443px]">
        Get early access
      </DiabrowserButton>
      <DiabrowserButton tone="soft" size="sm" href="#" icon={<ArrowRight strokeWidth={1.75} />}>
        Read how Kite handles privacy
      </DiabrowserButton>
      <DiabrowserButton tone="outline" href="#">
        Get early access
      </DiabrowserButton>
    </div>
  );
}
