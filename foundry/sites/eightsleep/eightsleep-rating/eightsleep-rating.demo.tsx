import { EightsleepRating } from "./eightsleep-rating";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 bg-background p-10">
      <EightsleepRating score={4.6} caption="38,000+ reviews of the Mantle" label="4.6 out of 5 stars" />
      <div className="dark rounded-xl bg-background p-10">
        <EightsleepRating size="lg" score={4.6} caption="From 38,000+ reviews" label="4.6 out of 5 stars" />
      </div>
    </div>
  );
}
