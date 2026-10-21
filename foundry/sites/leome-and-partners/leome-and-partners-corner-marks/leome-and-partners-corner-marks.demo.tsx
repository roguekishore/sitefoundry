import { LeomeAndPartnersCornerMarks } from "./leome-and-partners-corner-marks";

export default function Demo() {
  return (
    <div className="relative h-96 bg-muted">
      <LeomeAndPartnersCornerMarks />
      <LeomeAndPartnersCornerMarks edge="bottom" />
    </div>
  );
}
