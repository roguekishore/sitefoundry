// Rebuilt from React Bits' src/demo/Components/TiltedCardDemo.jsx: the component with the props its preview uses.
import TiltedCard from "./TiltedCard"
import { TiltedCardLayer } from "./TiltedCard"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlayIcon } from "@hugeicons/core-free-icons"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <TiltedCard imageSrc={"https://picsum.photos/seed/foundry-day-sky/1600/900"} altText="Open Sky album cover" captionText="Open Sky — Blue Hour" containerWidth="100%" containerHeight="100%" imageWidth="100%" imageHeight="100%" rotateAmplitude={12} scaleOnHover={1.05} perspective={800} smoothness={0.6} glare={0.5} glareColor={"#ffffff"} shadow={0.5} parallax={1} radius={15} axis={"both"} reverse={false} trackWindow={false} floating={false} showTooltip={true} flipOnClick={true} intro={true}>
      <span className="tcd-scrim" />
      <TiltedCardLayer depth={28}>
      <div className="tcd-album__meta">
      <strong>
      {"Open Sky"}
      </strong>
      <span>
      {"Blue Hour"}
      </span>
      </div>
      </TiltedCardLayer>
      <TiltedCardLayer depth={52}>
      <span className="tcd-album__play">
      <HugeiconsIcon icon={PlayIcon} size={18} strokeWidth={2} />
      </span>
      </TiltedCardLayer>
      </TiltedCard>
    </div>
  )
}
