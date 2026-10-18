// Rebuilt from React Bits' src/demo/Animations/ImageTrailDemo.jsx: the component with the props its preview uses.
import ImageTrail from "./ImageTrail"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ImageTrail items={["https://picsum.photos/id/287/300/300", "https://picsum.photos/id/1001/300/300", "https://picsum.photos/id/1025/300/300", "https://picsum.photos/id/1026/300/300", "https://picsum.photos/id/1027/300/300", "https://picsum.photos/id/1028/300/300", "https://picsum.photos/id/1029/300/300", "https://picsum.photos/id/1030/300/300"]} size={190} radius={15} threshold={80} lifetime={0.4} appearScale={1} zoom={1} flash={0} exitScale={0.2} drift={0} rotation={0} sizeVariance={0} alignToMotion={false} stack={0} tilt={0} />
    </div>
  )
}
