// Sample content (gallery only).
import { StokespaceHeading } from "./stokespace-heading";

export default function Demo() {
  return (
    <div className="space-y-10 bg-background p-gutter py-12 text-foreground">
      <StokespaceHeading as="h1" size="hero">Round trips to orbit</StokespaceHeading>
      <StokespaceHeading size="section">Every stage comes home</StokespaceHeading>
      <StokespaceHeading size="compact">A cadence measured in days</StokespaceHeading>
    </div>
  );
}
