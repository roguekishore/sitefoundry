import { PlumeformV2Button } from "./plumeform-v2-button";

export default function Demo() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
        <PlumeformV2Button arrow>Try it free</PlumeformV2Button>
        <PlumeformV2Button variant="soft">Write to us</PlumeformV2Button>
        <PlumeformV2Button variant="link" href="#drafts" arrow>
          Browse every starter draft
        </PlumeformV2Button>
        <PlumeformV2Button size="sm">Try it free</PlumeformV2Button>
      </div>
      <div className="dark flex flex-wrap items-center gap-4 bg-background p-8 text-foreground">
        <PlumeformV2Button size="lg" arrow>
          Try it free
        </PlumeformV2Button>
        <PlumeformV2Button variant="link" href="#types" arrow>
          Picking the right question
        </PlumeformV2Button>
      </div>
    </div>
  );
}
