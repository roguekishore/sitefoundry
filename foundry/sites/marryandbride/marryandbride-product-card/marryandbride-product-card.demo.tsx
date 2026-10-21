import { MarryandbrideProductCard } from "./marryandbride-product-card";

export default function Demo() {
  return (
    <div className="grid max-w-3xl grid-cols-2 gap-2 bg-background p-6 text-foreground sm:grid-cols-3">
      <MarryandbrideProductCard name="Hazel cloud cardigan" kind="Cardigan" price="from 420 €" href="#" badge="New" hoverMedia={<div className="size-full bg-secondary" />} />
      <MarryandbrideProductCard name="Ivy rib pullover" kind="Pullover" price="from 390 €" href="#" />
      <MarryandbrideProductCard name="Wren cropped – silk" kind="Pullover" price="310 €" href="#" />
    </div>
  );
}
