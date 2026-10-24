// Gallery only: a row of legal links.
import { ImpulsespaceSweepLink } from "./impulsespace-sweep-link";

export default function Demo() {
  return (
    <div className="flex gap-6 bg-secondary p-gutter">
      <ImpulsespaceSweepLink href="#">Terms</ImpulsespaceSweepLink>
      <ImpulsespaceSweepLink href="#">Privacy</ImpulsespaceSweepLink>
      <ImpulsespaceSweepLink href="#">Vendors</ImpulsespaceSweepLink>
    </div>
  );
}
