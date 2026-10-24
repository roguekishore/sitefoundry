import { CursorMedia } from "@foundry/cursor-media";
import { CursorSplitPanel } from "./cursor-split-panel";

export default function Demo() {
  return (
    <div className="grid gap-10 bg-background p-6">
      <CursorSplitPanel
        media={<CursorMedia label="Product window" className="size-full" />}
        mediaClassName="h-[26rem]"
      >
        <p className="text-[1.375rem] leading-[1.3] text-foreground">Plans that write themselves</p>
        <p className="text-[1.375rem] leading-[1.3] text-muted-foreground">Describe the change and watch a draft appear.</p>
      </CursorSplitPanel>
      <CursorSplitPanel
        mediaSide="left"
        media={<CursorMedia tone="plain" label="Photo" className="size-full" />}
        mediaClassName="aspect-[1.6]"
      >
        <p className="text-[1.375rem] leading-[1.3] text-foreground">Media on the left from desktop up.</p>
      </CursorSplitPanel>
    </div>
  );
}
