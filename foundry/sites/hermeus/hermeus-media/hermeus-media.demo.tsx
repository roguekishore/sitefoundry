// Gallery only: the three empty looks side by side.
import { HermeusMedia } from "./hermeus-media";

export default function Demo() {
  return (
    <div className="grid gap-5 bg-background p-gutter sm:grid-cols-3">
      <HermeusMedia label="Hangar photo" className="aspect-square" />
      <HermeusMedia look="deep" label="Flight film" className="aspect-video" />
      <div className="bg-secondary">
        <HermeusMedia look="soft" label="Aircraft render" className="aspect-[2.58/1]" />
      </div>
    </div>
  );
}
