import { WhoopPlaceholder } from "@foundry/whoop-placeholder";
import { WhoopSnapTrack } from "./whoop-snap-track";

const cards = Array.from({ length: 5 }, (_, i) => (
  <WhoopPlaceholder key={i} tone="photo" className="aspect-[333/446] rounded-lg" />
));

export default function Demo() {
  return (
    <div className="space-y-16 bg-background py-12">
      <WhoopSnapTrack slides={cards} slideClassName="w-[20.8rem]" label="Sample cards" dotLabel="Show card" />
      <div className="bg-foreground py-12 dark:bg-card">
        <WhoopSnapTrack
          slides={cards}
          slideClassName="w-[20rem]"
          align="center"
          start={1}
          tone="dark"
          label="Sample cards, centred"
          dotLabel="Show card"
        />
      </div>
    </div>
  );
}
