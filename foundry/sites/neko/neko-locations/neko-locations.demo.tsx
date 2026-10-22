// Sample content lives here (gallery only); the page reuses it. Ardent Health and its clinics are made up.
import { NekoLocations, type NekoLocationsProps } from "./neko-locations";

export const locationsSample: NekoLocationsProps = {
  label: "Visit us",
  title: "Find a clinic",
  locations: [
    { city: "Leeds", name: "Park Row", address: "14 Park Row", href: "#leeds" },
    { city: "Bristol", name: "Harbourside", address: "2 Canon's Way", href: "#bristol" },
    { city: "Manchester", name: "Ancoats", address: "31 Murray Street", href: "#manchester" },
    { city: "Edinburgh", name: "Leith Shore", address: "8 Shore Place", href: "#edinburgh" },
    { city: "York", name: "Micklegate", address: "52 Micklegate", href: "#york" },
    { city: "Bath", name: "Milsom Quarter", address: "6 Quiet Street", href: "#bath" },
  ],
};

export default function Demo() {
  return (
    <div className="pb-section">
      <NekoLocations {...locationsSample} />
    </div>
  );
}
