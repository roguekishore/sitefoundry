import { AnchorageButton } from "./anchorage-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-background p-10">
      <AnchorageButton href="#">Talk to us</AnchorageButton>
      <AnchorageButton href="#" variant="inverse">
        Talk to us
      </AnchorageButton>
      <AnchorageButton variant="outline" size="md">
        Submit
      </AnchorageButton>
    </div>
  );
}
