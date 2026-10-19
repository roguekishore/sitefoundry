import { ArrowUpRight, PersonStanding, Play } from "lucide-react";
import { NewhaloButton } from "./newhalo-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3 bg-background p-8">
        <NewhaloButton label="See the instrument" href="#" />
        <NewhaloButton label="All coverage" variant="outline" href="#" />
        <NewhaloButton label="Count me in" disabled />
        <NewhaloButton label="Open story" variant="tile" iconOnly icon={<ArrowUpRight />} href="#" />
      </div>
      <div className="dark flex flex-wrap items-center gap-3 bg-background p-8">
        <NewhaloButton label="Pre-order" variant="light" href="#" />
        <NewhaloButton label="De" variant="quiet" href="#" />
        <NewhaloButton label="Accessibility" variant="quiet" iconOnly icon={<PersonStanding />} />
        <NewhaloButton label="Watch the film" icon={<Play />} />
      </div>
    </div>
  );
}
