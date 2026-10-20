import { WiemerV2Video, type WiemerV2VideoProps } from "./wiemer-v2-video";

export const videoSample: WiemerV2VideoProps = {
  label: "The Ilse base plate turning slowly while its rods and nuts fly into place",
};

export default function Demo() {
  return <WiemerV2Video {...videoSample} />;
}
