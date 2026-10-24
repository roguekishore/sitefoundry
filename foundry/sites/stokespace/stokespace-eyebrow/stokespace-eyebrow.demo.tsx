// Sample content (gallery only).
import { StokespaceEyebrow } from "./stokespace-eyebrow";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-10 text-foreground">
      <StokespaceEyebrow label="Recovery" tone="primary" />
      <StokespaceEyebrow label="Vireo" tone="highlight" />
      <StokespaceEyebrow label="Join Orrery" tone="glow" />
    </div>
  );
}
