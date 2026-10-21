import { MarryandbrideLink } from "./marryandbride-link";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-10 text-foreground">
      <div className="flex gap-6 font-sans text-[0.863rem] tracking-[0.07em] uppercase">
        <MarryandbrideLink href="#">Discover</MarryandbrideLink>
        <MarryandbrideLink href="#">Journal</MarryandbrideLink>
      </div>
      <p className="max-w-xl font-display text-[1.63rem] leading-[1.5]">
        Slip a <MarryandbrideLink href="#">mohair shrug</MarryandbrideLink> over bare shoulders when the evening turns cool.
      </p>
    </div>
  );
}
