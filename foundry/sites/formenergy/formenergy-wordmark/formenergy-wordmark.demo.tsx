// Sample content (gallery only).
import { FormenergyWordmark } from "./formenergy-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-12 bg-background p-8 text-foreground">
      <FormenergyWordmark name="Tidewell" suffix="power" className="text-[1.6rem]" />
      <FormenergyWordmark name="Tidewell" suffix="power" href="#top" label="Tidewell Power home" className="text-[2.6rem]" />
    </div>
  );
}
