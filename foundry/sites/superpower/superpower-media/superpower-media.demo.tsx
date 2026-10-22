import { SuperpowerMedia } from "./superpower-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <SuperpowerMedia label="Photo: a member at a sunny window" className="aspect-[3/2] rounded-lg" />
      <div className="dark">
        <SuperpowerMedia tone="warm" label="Photo: evening light on a face" className="aspect-[3/2] rounded-lg" />
      </div>
    </div>
  );
}
