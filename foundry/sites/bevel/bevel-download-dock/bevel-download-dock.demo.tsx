// Sample content (gallery only); the page reuses it. Juniper is a made-up health app.
import { BevelDownloadDock, type BevelDownloadDockProps } from "./bevel-download-dock";

export const downloadDockSample: BevelDownloadDockProps = {
  qrTitle: "Get Juniper on iPhone",
  qrText: "Scan to start free, in under a minute.",
  appName: "Juniper",
  appTagline: "Everyday health companion",
  rating: 4.5,
  ratingLabel: "31.2K",
  cta: { label: "Get", href: "#" },
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-linear-to-b from-accent to-background p-10 text-muted-foreground">
      <BevelDownloadDock {...downloadDockSample} />
    </div>
  );
}
