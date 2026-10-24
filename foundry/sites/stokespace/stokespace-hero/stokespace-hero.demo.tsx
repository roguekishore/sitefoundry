// Sample content (gallery only).
import { StokespaceHero, type StokespaceHeroProps } from "./stokespace-hero";

export const heroSample: StokespaceHeroProps = {
  title: "Reliable rides to orbit and home again, every week",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StokespaceHero {...heroSample} />
    </div>
  );
}
