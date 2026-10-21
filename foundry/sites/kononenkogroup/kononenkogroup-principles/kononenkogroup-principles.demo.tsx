import { KononenkogroupPrinciples, type KononenkogroupPrinciplesProps } from "./kononenkogroup-principles";

export const principlesSample: KononenkogroupPrinciplesProps = {
  rays: ["01", "02", "03", "04", "05", "06", "07", "08"],
  first: ["Calm & Precise", "Always"],
  second: ["Light, Mass", "& Restraint"],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[50svh]" />
      <KononenkogroupPrinciples {...principlesSample} desktopOnly={false} />
      <div className="dark h-svh bg-background" />
    </div>
  );
}
