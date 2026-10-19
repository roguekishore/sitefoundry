import { NewhaloProductSubnav, type NewhaloProductSubnavProps } from "./newhalo-product-subnav";

export const subnavSample: NewhaloProductSubnavProps = {
  links: [
    { label: "Kit", href: "#kit" },
    { label: "Design", href: "#design" },
    { label: "Light", href: "#light" },
    { label: "Sensor", href: "#sensor" },
    { label: "Comfort", href: "#comfort" },
    { label: "App", href: "#app" },
    { label: "Care", href: "#care" },
    { label: "Questions", href: "#questions" },
  ],
  cta: { label: "Pre-order now", href: "#checkout" },
  menuLabel: "Product sections",
};

export default function Demo() {
  return (
    <div className="h-[300vh] bg-background">
      <NewhaloProductSubnav {...subnavSample} />
    </div>
  );
}
