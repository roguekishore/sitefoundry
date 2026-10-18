// Rebuilt from React Bits' src/demo/Components/BounceCardsDemo.jsx: the component with the props its preview uses.
import BounceCards from "./BounceCards"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <BounceCards images={["https://images.unsplash.com/photo-1724152312974-d4d48b8b36fd?w=480&h=480&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1762846818262-33c197852fa8?w=480&h=480&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1721407964262-f9864b562453?w=480&h=480&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?w=480&h=480&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1763440519433-5467759054fc?w=480&h=480&q=80&auto=format&fit=crop"]} containerWidth={500} containerHeight={320} cardSize={200} spread={85} rotation={10} arc={0} pushDistance={160} hoverScale={1.06} bounciness={0.6} animationDelay={0.5} animationStagger={0.06} borderWidth={5} borderColor={"#ffffff"} radius={25} shadow={true} enableHover={true} />
    </div>
  )
}
