// Sample content (gallery only); the page reuses it. Tern is a made-up mail API.
import { ResendHero, type ResendHeroProps } from "./resend-hero";

export const heroSample: ResendHeroProps = {
  badge: { label: "Catch up on Tern Summit '26", href: "#summit" },
  title: ["Letters", "that land"],
  text: ["An API and editor for product mail and campaigns,", "tuned so each message meets a person, not a filter."],
  primary: { label: "Start free", href: "#start" },
  secondary: { label: "Read the guides", href: "#guides" },
};

export default function Demo() {
  return <ResendHero {...heroSample} />;
}
