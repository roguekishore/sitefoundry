// Gallery only: a title and a lead, revealed line by line.
import { CastelionLines } from "./castelion-lines";

export default function Demo() {
  return (
    <div className="space-y-8 bg-background px-gutter py-section text-foreground">
      <CastelionLines
        as="h2"
        lines={["Built to Fly,", "Built by the Thousand"]}
        className="font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.29] font-bold tracking-[0.02em]"
      />
      <CastelionLines
        variant="fade"
        startIndex={2}
        lines={["Every airframe we draw is drawn for the factory floor first,", "so the hundredth unit costs less than the first."]}
        className="max-w-2xl text-base/[1.4] font-medium"
      />
    </div>
  );
}
