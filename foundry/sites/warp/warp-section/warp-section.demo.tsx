import { WarpButton } from "@foundry/warp-button";
import { WarpSection } from "./warp-section";

export default function Demo() {
  return (
    <WarpSection
      tag="Config"
      status="live"
      title="A section frame, typed in as it arrives."
      lead="Hairline and ticks on top, guides down the page, a dotted margin and a mono heading."
      action={<WarpButton href="#" variant="outline" arrow>Read more</WarpButton>}
    >
      <div className="h-48 border border-border bg-card" />
    </WarpSection>
  );
}
