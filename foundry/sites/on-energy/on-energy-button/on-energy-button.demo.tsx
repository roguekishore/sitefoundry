import { OnEnergyButton } from "./on-energy-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <OnEnergyButton>Read the test report</OnEnergyButton>
        <OnEnergyButton>Tour the sites</OnEnergyButton>
      </div>
      <div className="flex flex-wrap gap-4 bg-foreground p-6">
        <OnEnergyButton variant="solid">Hear the story</OnEnergyButton>
      </div>
      <div className="flex flex-wrap gap-4 bg-primary p-6">
        <OnEnergyButton variant="ink">Talk to us</OnEnergyButton>
      </div>
    </div>
  );
}
