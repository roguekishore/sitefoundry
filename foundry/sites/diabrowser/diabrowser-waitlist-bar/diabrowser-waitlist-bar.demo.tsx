import { DiabrowserWaitlistBar, type DiabrowserWaitlistBarProps } from "./diabrowser-waitlist-bar";

export const waitlistBarSample: DiabrowserWaitlistBarProps = {
  cta: { label: "Get early access", href: "#", phoneLabel: "Email me the installer" },
  note: "Runs on macOS and Windows",
};

export default function Demo() {
  return (
    <div className="bg-linear-to-b from-highlight to-glow pt-40">
      <DiabrowserWaitlistBar {...waitlistBarSample} />
    </div>
  );
}
