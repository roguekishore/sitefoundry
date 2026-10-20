import { WiemerV2PromoCard, type WiemerV2PromoCardProps } from "./wiemer-v2-promo-card";

export const promoSample: WiemerV2PromoCardProps = {
  tag: "Pre-order",
  text: "Put your name down and hear first when Ilse is ready to ship.",
  link: { label: "Join the list", href: "#reserve" },
};

export default function Demo() {
  return (
    <div className="bg-muted p-8">
      <WiemerV2PromoCard {...promoSample} className="max-w-[28rem]" />
    </div>
  );
}
