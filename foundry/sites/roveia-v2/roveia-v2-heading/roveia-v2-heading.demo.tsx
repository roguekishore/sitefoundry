import { RoveiaV2Heading } from "./roveia-v2-heading";

export default function Demo() {
  return (
    <div className="space-y-12 bg-background p-10 text-foreground">
      <RoveiaV2Heading size="label">Who we partner with</RoveiaV2Heading>
      <RoveiaV2Heading as="h1" size="statement" accent="Wellness Teams" accentAt="before">
        Grow With Care, Not Guesswork
      </RoveiaV2Heading>
      <RoveiaV2Heading accent="in their words" accentAt="below" className="text-center">
        Founders we have grown
      </RoveiaV2Heading>
    </div>
  );
}
