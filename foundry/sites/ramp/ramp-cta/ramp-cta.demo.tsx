// Sample content lives here (gallery only); the page reuses it.
import { RampCta, type RampCtaProps } from "./ramp-cta";

export const ctaSample: RampCtaProps = {
  title: "Less admin. More runway.",
  form: { fieldLabel: "Work email", placeholder: "Your work email", buttonLabel: "Start free today" },
};

export default function Demo() {
  return (
    <div>
      <RampCta {...ctaSample} />
      <div className="dark -mt-10 h-28 bg-background" />
    </div>
  );
}
