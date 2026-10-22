import { AspensearchCityTime, AspensearchClockFace } from "./aspensearch-city-time";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 text-foreground">
      <p className="text-sm tracking-[-0.04em]">
        <AspensearchCityTime timeZone="America/Chicago" fallback="09:00 AM" /> CHI
      </p>
      <div className="flex items-center gap-4">
        <AspensearchClockFace timeZone="Europe/London" fallback="03:00 PM" />
        <div>
          <p className="text-base/tight tracking-[-0.04em]">LDN</p>
          <AspensearchCityTime timeZone="Europe/London" fallback="03:00 PM" className="font-mono text-xs text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
