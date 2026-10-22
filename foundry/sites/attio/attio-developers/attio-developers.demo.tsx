// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { AttioDevelopers, type AttioDevelopersProps } from "./attio-developers";

export const developersSample: AttioDevelopersProps = {
  lead: "Kits, hooks and endpoints.",
  rest: "Make Tessel do anything.",
  action: { label: "Read the docs", href: "#docs" },
  mediaLabel: "Line drawing of building blocks",
};

export default function Demo() {
  return <AttioDevelopers {...developersSample} />;
}
