import { Play } from "lucide-react";
import { EzraButton } from "./ezra-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <EzraButton href="#">Reserve a scan</EzraButton>
      <EzraButton href="#" variant="outline" className="w-57">
        The full-body scan
      </EzraButton>
      <EzraButton href="#" variant="outline" icon={<Play aria-hidden className="size-4 fill-current" />} className="w-57">
        See the visit
      </EzraButton>
    </div>
  );
}
