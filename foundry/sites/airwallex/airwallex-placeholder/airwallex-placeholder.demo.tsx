import { AirwallexPlaceholder } from "./airwallex-placeholder";

export default function Demo() {
  return (
    <div className="grid gap-6 bg-background p-8 sm:grid-cols-4">
      <AirwallexPlaceholder className="aspect-[3/2] rounded-2xl" />
      <div className="grid place-items-center p-4">
        <AirwallexPlaceholder tone="shot" className="aspect-[4/3] w-full rounded-md" />
      </div>
      <div className="flex items-end rounded-2xl bg-linear-135 from-highlight to-chart-1 px-4 pt-16">
        <AirwallexPlaceholder tone="frost" className="aspect-[4/3] w-full rounded-t-md" />
      </div>
      <div className="dark grid place-items-center rounded-2xl bg-background p-4">
        <AirwallexPlaceholder tone="dim" className="aspect-[1/2] w-24 rounded-[2rem]" />
      </div>
    </div>
  );
}
