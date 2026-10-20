import { ReckonerV2Button } from "./reckoner-v2-button";

export default function Demo() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 bg-background p-10">
        <ReckonerV2Button href="#">Read the approach</ReckonerV2Button>
        <ReckonerV2Button size="lg">Sign up</ReckonerV2Button>
      </div>
      <div className="flex flex-wrap items-center gap-4 bg-primary p-10">
        <ReckonerV2Button href="#" variant="outline">Our funds</ReckonerV2Button>
        <ReckonerV2Button href="#" variant="tint">How we invest</ReckonerV2Button>
        <ReckonerV2Button href="#" variant="light" size="sm">Get in touch</ReckonerV2Button>
      </div>
    </div>
  );
}
