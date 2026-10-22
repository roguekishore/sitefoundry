import { Vault } from "lucide-react";
import { MeowMark } from "./meow-mark";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <MeowMark name="tallyhold" icon={<Vault strokeWidth={2.5} />} href="#" />
      <div className="dark bg-background p-6">
        <MeowMark name="tallyhold" icon={<Vault strokeWidth={2.5} />} size="lg" />
      </div>
    </div>
  );
}
