import { HhhusherReview } from "./hhhusher-review";

export default function Demo() {
  return (
    <div className="grid gap-16 bg-secondary px-gutter py-section text-secondary-foreground lg:grid-cols-2">
      <HhhusherReview quote="First session with it on and the snare finally sounded like a snare, not a ride." author="Odalys P." ratingLabel="5 out of 5 stars" />
      <HhhusherReview quote="Took two minutes to fit. Saved me an hour of gating." author="tomas.records" ratingLabel="5 out of 5 stars" authorStyle="plain" size="md" />
    </div>
  );
}
