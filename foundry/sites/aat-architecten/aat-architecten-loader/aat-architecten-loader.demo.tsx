import { AatArchitectenLoader } from "./aat-architecten-loader";

// Reload the preview to see it again.
export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <AatArchitectenLoader duration={2.4} />
      <div className="mx-auto grid max-w-page grid-cols-2 gap-10 px-gutter py-section">
        <div className="aspect-[0.76] bg-muted" />
        <div className="aspect-[0.76] bg-muted" />
      </div>
    </div>
  );
}
