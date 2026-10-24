import { ReflectMedia } from "./reflect-media";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-2">
      <ReflectMedia tone="glow" label="Glow video" className="aspect-video rounded-2xl" />
      <ReflectMedia tone="rise" label="Light rising" className="aspect-video rounded-2xl" />
      <ReflectMedia tone="fall" label="Light falling" className="aspect-video rounded-2xl" />
      <ReflectMedia tone="panel" label="Screenshot" className="aspect-video rounded-2xl" />
    </div>
  );
}
