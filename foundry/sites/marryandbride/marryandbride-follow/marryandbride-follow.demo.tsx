import { MarryandbrideFollow, type MarryandbrideFollowProps } from "./marryandbride-follow";

export const followSample: MarryandbrideFollowProps = {
  title: "Follow the studio",
  links: [
    { label: "Instagram", href: "#instagram" },
    { label: "Threads", href: "#threads" },
    { label: "Pinterest", href: "#pinterest" },
  ],
};

export default function Demo() {
  return <MarryandbrideFollow {...followSample} />;
}
