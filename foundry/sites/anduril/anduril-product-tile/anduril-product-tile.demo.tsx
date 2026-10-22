import { AndurilProductTile } from "./anduril-product-tile";

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-6 md:grid-cols-2">
      <AndurilProductTile name="Tern" tagline="Light Strike, Long Reach" href="#" className="aspect-square" />
      <AndurilProductTile name="Gale" tagline="Wingman by Design" href="#" className="aspect-square md:aspect-auto" />
    </div>
  );
}
