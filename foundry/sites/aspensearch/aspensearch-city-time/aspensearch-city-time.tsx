import { useEffect, useState } from "react";
import { cn } from "@foundry/foundry-utils";

/** The time in a city, as "hh:mm AM", plus the hour and minute for a clock face. */
interface ZonedTime {
  label: string;
  hours: number;
  minutes: number;
}

function readTime(timeZone: string): ZonedTime {
  const parts = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { label: `${get("hour")}:${get("minute")} ${get("dayPeriod")}`, hours: Number(get("hour")) % 12, minutes: Number(get("minute")) };
}

function parseFallback(fallback: string): ZonedTime {
  const m = /(\d{1,2}):(\d{2})/.exec(fallback);
  return { label: fallback, hours: m ? Number(m[1]) % 12 : 9, minutes: m ? Number(m[2]) : 0 };
}

/** Live time for a time zone; before the page runs JavaScript it is the fallback. */
function useZonedTime(timeZone: string, fallback: string): ZonedTime {
  const [time, setTime] = useState<ZonedTime>(() => parseFallback(fallback));
  useEffect(() => {
    const tick = () => setTime(readTime(timeZone));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
}

export interface AspensearchCityTimeProps {
  /** IANA time zone, e.g. "America/Chicago" */
  timeZone: string;
  /** what static HTML shows before the live time takes over, e.g. "09:00 AM" */
  fallback: string;
  className?: string;
}

/** The current time in a city as text ("01:06 PM"), updated every 15 seconds. */
export function AspensearchCityTime({ timeZone, fallback, className }: AspensearchCityTimeProps) {
  const { label } = useZonedTime(timeZone, fallback);
  return <time className={cn("tabular-nums", className)}>{label}</time>;
}

export interface AspensearchClockFaceProps {
  /** IANA time zone, e.g. "Europe/London" */
  timeZone: string;
  /** the time static HTML shows, e.g. "03:00 PM" */
  fallback: string;
  className?: string;
}

/** A thin round clock face whose two hands show the city's time (UI, drawn with hairlines). */
export function AspensearchClockFace({ timeZone, fallback, className }: AspensearchClockFaceProps) {
  const { hours, minutes } = useZonedTime(timeZone, fallback);
  const hourAngle = (hours + minutes / 60) * 30;
  const minuteAngle = minutes * 6;
  return (
    <svg aria-hidden viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" className={cn("size-10 shrink-0", className)}>
      <circle cx="20" cy="20" r="19" />
      <line x1="20" y1="20" x2="20" y2="10" transform={`rotate(${hourAngle} 20 20)`} />
      <line x1="20" y1="20" x2="20" y2="6" transform={`rotate(${minuteAngle} 20 20)`} />
    </svg>
  );
}
