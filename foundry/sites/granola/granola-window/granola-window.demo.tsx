import { GranolaWindow } from "./granola-window";

export default function Demo() {
  return (
    <div className="bg-background p-8">
      <GranolaWindow className="max-w-xl">
        <div className="px-6 pt-10 pb-12 lg:px-12">
          <h3 className="font-display text-4xl leading-none">Monday planning</h3>
          <p className="mt-4 text-muted-foreground">Three agenda points, two owners, one decision left open.</p>
        </div>
      </GranolaWindow>
    </div>
  );
}
