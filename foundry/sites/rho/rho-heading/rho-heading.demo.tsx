import { RhoHeading } from "./rho-heading";

export default function Demo() {
  return (
    <div className="flex flex-col gap-10 bg-background px-gutter py-section">
      <RhoHeading text="Open in an afternoon, ready for a decade." className="max-w-[36rem]" />
      <RhoHeading as="h1" size="hero" text="Finance ops for teams that ship" reveal={false} className="max-w-[44rem]" />
    </div>
  );
}
