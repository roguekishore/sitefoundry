import { PlumeformV2Badge } from "./plumeform-v2-badge";

export default function Demo() {
  return (
    <div>
      <p className="flex items-center gap-2 bg-background p-8 text-sm font-semibold text-foreground">
        Shared sheets <PlumeformV2Badge>Plus</PlumeformV2Badge>
      </p>
      <p className="dark flex items-center gap-2 bg-background p-8 text-lg font-bold text-foreground">
        Answer quotas <PlumeformV2Badge>Plus</PlumeformV2Badge>
      </p>
    </div>
  );
}
