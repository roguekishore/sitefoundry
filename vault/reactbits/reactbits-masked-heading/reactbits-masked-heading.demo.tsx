// Rebuilt from React Bits' src/demo/TextAnimations/MaskedHeadingDemo.jsx: the component with the props its preview uses.
import MaskedHeading from "./MaskedHeading"

export default function Demo() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden">
      <MaskedHeading trigger={"view"} text={"Designed in the details"} mediaType={"video"} reveal={"scale"} duration={1.1} stagger={0.09} parallax={26} drift={18} hoverZoom={0} spotlight={false} spotlightRadius={180} align={"center"} fillScale={1.25} brightness={1} saturation={1} grayscale={false} outline={false} outlineWidth={1} weight={700} tracking={-0.03} lineHeight={1.06} textScale={0.115} tint={""} outlineColor={""} src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} />
    </div>
  )
}
