import { GalaxyPostCard } from "./galaxy-post-card";

export default function Demo() {
  return (
    <div className="grid gap-12 bg-background p-8 md:grid-cols-2">
      <GalaxyPostCard
        href="#"
        category="Research"
        date="October 09, 2026"
        title="What settlement finality costs a mid-size bank"
        tags={["Payments"]}
        mediaLabel="Article image"
      />
      <GalaxyPostCard href="#" layout="row" framed category="Podcasts" date="October 18, 2026" title="Ledgers & Lunch with Imogen Sato" mediaLabel="Podcast cover" />
    </div>
  );
}
