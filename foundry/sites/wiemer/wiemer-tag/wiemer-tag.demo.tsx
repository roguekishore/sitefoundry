import { WiemerTag } from "./wiemer-tag";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-4 bg-background p-8">
      <WiemerTag>Arriving 2028</WiemerTag>
      <WiemerTag>Write to us</WiemerTag>
      <span className="rounded-lg bg-muted p-4">
        <WiemerTag tone="plain">Founder Ida Brenner</WiemerTag>
      </span>
    </div>
  );
}
