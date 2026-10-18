// Rebuilt from React Bits' src/demo/TextAnimations/CircularTextDemo.jsx: the component with the props its preview uses.
import CircularText from "./CircularText"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <CircularText text={"REACT*BITS*COMPONENTS*"} onHover={"speedUp"} direction={"clockwise"} spinDuration={20} draggable={true} hoverTilt={20} tilt={0} size={200} fontSize={24} fontWeight={900} letterSpacing={0} startAngle={0} repeat={1} fill={true} ring={false} color={""} ringColor={""}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </CircularText>
    </div>
  )
}
