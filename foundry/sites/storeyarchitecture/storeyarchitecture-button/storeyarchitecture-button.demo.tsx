import { StoreyarchitectureButton } from "./storeyarchitecture-button";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-8 bg-background p-10 text-foreground">
      <StoreyarchitectureButton href="#work">See the houses</StoreyarchitectureButton>
      <div className="bg-glow p-8">
        <StoreyarchitectureButton href="#work" variant="light">
          Meet the studio
        </StoreyarchitectureButton>
      </div>
      <div className="flex gap-4">
        <StoreyarchitectureButton href="#notes" size="sm">
          All notes
        </StoreyarchitectureButton>
        <StoreyarchitectureButton size="sm" variant="grey" type="submit">
          Send
        </StoreyarchitectureButton>
      </div>
    </div>
  );
}
