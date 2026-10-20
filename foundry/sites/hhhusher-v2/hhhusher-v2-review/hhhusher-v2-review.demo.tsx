import { HhhusherV2Review } from "./hhhusher-v2-review";

export default function Demo() {
  return (
    <div className="grid gap-16 bg-secondary px-gutter py-section text-secondary-foreground lg:grid-cols-2">
      <HhhusherV2Review quote="First session with the hood on and the snare finally sounds like a snare. I stopped gating it." name="Okonkwo B." />
      <HhhusherV2Review quote="It took two minutes to fit and it hasn't moved through a month of gigs." name="tessa.drums" size="md" nameCase="as-written" step={1} />
    </div>
  );
}
