// Rebuilt from React Bits' src/demo/Micro/PeekRatingDemo.jsx: the component with the props its preview uses.
import PeekRating from "./PeekRating"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <PeekRating value={3} count={5} shape={"star"} labels={["Poor","Fair","Good","Great","Superb"]} activeColor={"#f5b400"} idleColor={"#d4d4d8"} tipColor={"#18181b"} tipTextColor={"#ffffff"} size={40} lift={8} magnify={1.15} riseDuration={320} popScale={1.3} showTip={true} allowClear={true} readOnly={false} />
    </div>
  )
}
