import { ClerkArrowLink } from "./clerk-arrow-link";

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="bg-background p-8">
        <ClerkArrowLink label="See how sessions work" href="#sessions" />
      </div>
      <div className="dark bg-background p-8">
        <ClerkArrowLink label="Browse every SDK" href="#sdks" />
      </div>
    </div>
  );
}
