// Gallery only: an empty dark band, showing the backdrop placeholder.
import { PlumeformBand } from "./plumeform-band";

export default function Demo() {
  return (
    <PlumeformBand>
      <div className="mx-auto max-w-page px-gutter py-section">
        <p className="text-sm text-muted-foreground">Backdrop slot · placeholder glow</p>
      </div>
    </PlumeformBand>
  );
}
