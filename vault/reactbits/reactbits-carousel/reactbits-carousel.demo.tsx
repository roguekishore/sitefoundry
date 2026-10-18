// Rebuilt from React Bits' src/demo/Components/CarouselDemo.jsx: the component with the props its preview uses.
import Carousel from "./Carousel"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <Carousel baseWidth={300} aspectRatio={1.25} peek={0} gap={16} radius={12} frame={true} effect={"tilt"} indicator={"dots"} arrows={false} autoplay={false} autoplayDelay={3000} pauseOnHover={false} loop={false} draggable={true} round={false} theme={"light"} />
    </div>
  )
}
