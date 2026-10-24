// The whole Reflect recreation (as "Nocturne", a made-up night-sky notebook), built only from
// this site's blocks with each block's demo content. Dark is the faithful mode.
import { ReflectFeatures } from "@foundry/reflect-features";
import { ReflectHeader } from "@foundry/reflect-header";
import { ReflectHero } from "@foundry/reflect-hero";
import { featuresSample } from "./reflect-features/reflect-features.demo";
import { headerSample } from "./reflect-header/reflect-header.demo";
import { heroSample } from "./reflect-hero/reflect-hero.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <ReflectHeader {...headerSample} />
      <main>
        <ReflectHero {...heroSample} />
        <ReflectFeatures {...featuresSample} />
      </main>
    </div>
  );
}
