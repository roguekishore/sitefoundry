import { ClerkBand } from "./clerk-band";

export default function Demo() {
  return (
    <div>
      <div className="h-24 bg-card" />
      <ClerkBand edgeTop="card" edgeBottom="background">
        <div className="mx-auto max-w-page px-gutter py-24 text-center">
          <p className="font-display text-[2rem] leading-10 font-semibold tracking-[-0.015em]">A band with shoulders</p>
        </div>
      </ClerkBand>
      <div className="h-24 bg-background" />
    </div>
  );
}
