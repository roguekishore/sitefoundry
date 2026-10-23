import { ZettaJouleMark } from "./zetta-joule-mark";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 text-foreground">
      <ZettaJouleMark name="Hearthgrid" />
      <ZettaJouleMark name="Hearthgrid" icon={false} className="text-6xl" />
    </div>
  );
}
