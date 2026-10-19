// Sample content lives here (gallery only); the page reuses it.
import { HalodentalOpusAbout, type HalodentalOpusAboutProps } from "./halodental-opus-about";

export const aboutSample: HalodentalOpusAboutProps = {
  title: "Rethinking the checkup",
  text: "A dental visit can be a bright spot in someone's week. We build tools that make it feel that way. Meet the people behind the light.",
  cta: { label: "Our story", href: "#" },
};

export default function Demo() {
  return <HalodentalOpusAbout {...aboutSample} />;
}
