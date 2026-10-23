// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { UltrahumanBattery, type UltrahumanBatteryProps } from "./ultrahuman-battery";

export const batterySample: UltrahumanBatteryProps = {
  title: "A charge that keeps going",
  before: "Up to",
  value: "12",
  unit: "Days",
  after: "Per charge",
  mediaLabel: "Close-up render of the band's inner shell",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[70vh]" />
      <UltrahumanBattery {...batterySample} />
      <div className="h-[40vh]" />
    </div>
  );
}
