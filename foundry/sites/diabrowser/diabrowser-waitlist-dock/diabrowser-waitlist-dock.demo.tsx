// Sample content lives here (gallery only); the page reuses it. Kite is made up.
import { DiabrowserWaitlistDock, type DiabrowserWaitlistDockProps } from "./diabrowser-waitlist-dock";

export const waitlistDockSample: DiabrowserWaitlistDockProps = {
  heading: "Ready for an easier week?",
  cta: { label: "Get early access", href: "#", phoneLabel: "Email me the installer" },
  note: "Runs on macOS and Windows",
};

export default function Demo() {
  return (
    <DiabrowserWaitlistDock {...waitlistDockSample}>
      {/* stand-in page content for the bar to ride over */}
      <div className="h-[150svh] bg-linear-to-b from-highlight via-glow to-background" />
    </DiabrowserWaitlistDock>
  );
}
