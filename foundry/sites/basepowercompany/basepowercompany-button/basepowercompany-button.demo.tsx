import { ArrowRight, ChevronRight } from "lucide-react";
import { BasepowercompanyButton } from "./basepowercompany-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-6 bg-background p-8">
        <BasepowercompanyButton href="#pricing">See my rates</BasepowercompanyButton>
        <BasepowercompanyButton href="#start" variant="outline">
          Sign up
        </BasepowercompanyButton>
        <BasepowercompanyButton href="#area" variant="outline" trailingIcon={<ChevronRight />}>
          Check my street
        </BasepowercompanyButton>
        <BasepowercompanyButton href="#start" size="sm">
          Sign up
        </BasepowercompanyButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-6 bg-background p-8 text-foreground">
        <BasepowercompanyButton href="#start">Sign up</BasepowercompanyButton>
        <BasepowercompanyButton href="#story" variant="ghost" trailingIcon={<ArrowRight />}>
          Hear her story
        </BasepowercompanyButton>
      </div>
    </div>
  );
}
