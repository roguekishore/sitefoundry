// Sample content (gallery only).
import { FormenergyButton } from "./formenergy-button";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-6 bg-secondary p-8 text-foreground">
      <FormenergyButton label="See the cell" href="#cell" />
      <FormenergyButton label="Tour the works" href="#works" className="w-full lg:w-auto" />
      <div className="dark w-full bg-background p-8 text-foreground">
        <FormenergyButton label="Apply now" href="#apply" />
      </div>
    </div>
  );
}
