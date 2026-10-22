// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { NekoPhotoGrid, type NekoPhotoGridProps } from "./neko-photo-grid";

export const photoGridSample: NekoPhotoGridProps = {
  label: "Prevention",
  photos: [{ label: "Engineering" }, { label: "People" }, { label: "Clinicians" }],
  title: "Precise machines, warm hands",
  body: "We design, build and calibrate our scanners in our own Leeds workshop, so the people caring for you always have tools made for the job.",
  link: { label: "Our story", href: "#story" },
};

export default function Demo() {
  return (
    <div className="pb-section">
      <NekoPhotoGrid {...photoGridSample} />
    </div>
  );
}
