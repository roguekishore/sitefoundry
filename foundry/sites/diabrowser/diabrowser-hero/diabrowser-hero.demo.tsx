// Sample content lives here (gallery only); the page reuses it. Kite is made up.
import { DiabrowserHero, type DiabrowserHeroProps } from "./diabrowser-hero";

export const heroSample: DiabrowserHeroProps = {
  headline: (
    <>
      Fewer tabs to chase. <br className="lg:hidden" />
      Calmer workdays.
    </>
  ),
  wordmark: "Kite",
  cta: { label: "Get early access", href: "#", phoneLabel: "Email me the installer" },
  note: "Runs on macOS and Windows",
};

export default function Demo() {
  return <DiabrowserHero {...heroSample} />;
}
