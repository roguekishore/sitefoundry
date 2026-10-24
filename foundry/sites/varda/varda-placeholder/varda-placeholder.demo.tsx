// Gallery only: the slot empty, at the bento's video proportions, with a play button on top.
import { Play } from "lucide-react";
import { VardaPlaceholder } from "./varda-placeholder";

export default function Demo() {
  return (
    <div className="bg-background p-gutter">
      <VardaPlaceholder label="Launch footage" className="aspect-[2.1/1] w-full">
        <span className="grid size-12 place-items-center rounded-full bg-background text-primary">
          <Play className="ml-0.5 size-5 fill-current" />
        </span>
      </VardaPlaceholder>
    </div>
  );
}
