import { HelionenergyButton } from "./helionenergy-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="bg-background p-8 text-foreground">
        <HelionenergyButton href="#">All news</HelionenergyButton>
      </div>
      <div className="dark bg-background p-8 text-foreground">
        <HelionenergyButton href="#" reveal>
          See open roles
        </HelionenergyButton>
      </div>
    </div>
  );
}
