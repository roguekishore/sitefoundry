import { EightsleepExpandCards } from "./eightsleep-expand-cards";

export default function Demo() {
  return (
    <div className="bg-muted px-gutter py-section lg:px-16">
      <EightsleepExpandCards
        phoneCaption="below"
        openLabel="Show more"
        closeLabel="Show less"
        items={[
          { tag: "Layer", title: "A climate layer for your mattress", text: "Cools or warms each side on its own, and reads your sleep as you rest." },
          { tag: "Core", title: "Run by the Core unit", text: "Small enough for under the bed, quick enough to change course mid-night." },
          { tag: "App", title: "Tuned to you in the app", text: "Pick your temperatures, connect your training data, wake to a morning summary." },
        ]}
      />
    </div>
  );
}
