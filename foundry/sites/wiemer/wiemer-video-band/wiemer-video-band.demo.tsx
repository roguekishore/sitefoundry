import { WiemerVideoBand, type WiemerVideoBandProps } from "./wiemer-video-band";

export const videoSample: WiemerVideoBandProps = { label: "The Raster's parts coming together" };

export default function Demo() {
  return <WiemerVideoBand {...videoSample} />;
}
