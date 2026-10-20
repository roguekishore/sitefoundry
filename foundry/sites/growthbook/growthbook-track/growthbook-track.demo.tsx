import { GrowthbookTrack } from "./growthbook-track";

const slides = ["Holdout groups", "Sequential tests", "Guardrail metrics", "Staged rollouts", "Kill switches"];

export default function Demo() {
  return (
    <div className="space-y-12 bg-background px-gutter py-12">
      <GrowthbookTrack
        label="Example cards"
        autoplay={4000}
        slideClassName="w-72"
        trackClassName="gap-5"
        items={slides.map((s) => (
          <div key={s} className="dark flex h-72 items-start rounded-lg bg-card p-6 text-lg text-card-foreground">{s}</div>
        ))}
      />
      <GrowthbookTrack
        label="Example quotes"
        dimInactive
        prevLabel="Previous"
        nextLabel="Next"
        arrowsClassName="mb-8"
        slideClassName="w-80"
        trackClassName="gap-14"
        items={slides.map((s) => (
          <p key={s} className="text-xl leading-relaxed text-foreground">“{s} changed how our team ships every week.”</p>
        ))}
      />
    </div>
  );
}
