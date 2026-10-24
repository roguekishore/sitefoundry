// Sample content lives here (gallery only); the page reuses it. Halyard's fleet is made up.
import { ImpulsespaceVehicles, type ImpulsespaceVehiclesProps } from "./impulsespace-vehicles";

export const vehiclesSample: ImpulsespaceVehiclesProps = {
  title: "The fleet",
  id: "fleet",
  vehicles: [
    { name: "Corvus", role: "The long-haul tug. Heavy cargo to high orbits.", href: "#corvus", mediaLabel: "Corvus tug render" },
    { name: "Lumen", role: "The nimble one. Drop-offs and visits in low orbit.", href: "#lumen", mediaLabel: "Lumen craft render" },
    { name: "Shuttle Share", role: "A seat on a scheduled run, booked like freight.", href: "#shuttle", mediaLabel: "Shuttle Share carrier render" },
  ],
};

export default function Demo() {
  return <ImpulsespaceVehicles {...vehiclesSample} />;
}
