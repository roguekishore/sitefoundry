import { OuraringMedia } from "./ouraring-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-10 sm:grid-cols-2">
      <OuraringMedia className="aspect-[4/5] rounded-lg" />
      <OuraringMedia tone="deep" className="aspect-[4/5] rounded-lg" />
    </div>
  );
}
