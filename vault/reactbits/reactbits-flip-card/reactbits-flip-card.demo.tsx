// Rebuilt from React Bits' src/demo/Micro/FlipCardDemo.jsx: the component with the props its preview uses.
import FlipCard from "./FlipCard"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <FlipCard axis={"y"} flipOnClick={true} draggable={true} dragDistance={0} tilt={true} tiltMax={12} glare={true} glareOpacity={0.22} hoverScale={1.03} perspective={1100} stiffness={170} damping={20} width={300} height={400} radius={22} background={"#f6f6f6"} color={"#18181b"} shadow={true} shadowColor={"#000000"} shadowOpacity={0.2} disabled={false} />
    </div>
  )
}
