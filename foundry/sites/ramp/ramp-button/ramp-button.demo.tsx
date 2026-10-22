import { RampButton } from "./ramp-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <RampButton href="#">Move over in a week</RampButton>
      <RampButton variant="secondary" href="#">
        Book a walkthrough
      </RampButton>
      <RampButton variant="solid" size="sm" href="#">
        Start free
      </RampButton>
      <span className="rounded-lg bg-muted-foreground p-4">
        <RampButton variant="glass" size="sm">
          Play film
        </RampButton>
      </span>
      <RampButton variant="link" href="#">
        Read the field study
      </RampButton>
    </div>
  );
}
