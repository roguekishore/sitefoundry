// Rebuilt from React Bits' src/demo/Components/CircularCarouselDemo.jsx: the component with the props its preview uses.
import CircularCarousel from "./CircularCarousel"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <CircularCarousel preset={"cylinder"} intro={"rise"} aspectRatio={1} cardWidth={220} gap={25} tilt={-5} curve={1} perspective={2500} autoplay={"drift"} speed={14} interval={3} direction={"left"} momentum={0.6} snap={true} pauseOnHover={true} focusOnClick={true} draggable={true} parallax={0.3} stretch={0.5} fadeColor={"#ffffff"} depthFade={0.55} innerShade={0.6} cornerRadius={12} captions={false} />
    </div>
  )
}
