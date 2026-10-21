import { DaqWordmark } from "./daq-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background p-10 text-foreground">
      <DaqWordmark name="VEKTA" sub="Advisory" href="#top" animate />
      <DaqWordmark name="VEKTA" sub="Advisory" href="#top" />
    </div>
  );
}
