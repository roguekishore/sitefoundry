// Rebuilt from React Bits' src/demo/Components/FlexCarouselDemo.jsx: the component with the props its preview uses.
import FlexCarousel from "./FlexCarousel"

export default function Demo() {
  return (
    <div className="relative flex h-[540px] w-full items-center justify-center overflow-hidden">
      <FlexCarousel preset={"liquid"} intro={"rise"} fit={"natural"} cardHeight={0.5} gap={12} radius={0} squeeze={0.2} focusOnClick={true} autoplay={false} interval={4} captions={true} captureWheel={true} />
    </div>
  )
}
