// Rebuilt from React Bits' src/demo/Micro/PulseHeartDemo.jsx: the component with the props its preview uses.
import PulseHeart from "./PulseHeart"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <PulseHeart count={1204} showCount={true} icon={"heart"} idleOutline={true} likedColor={"#ff4d6d"} idleColor={"#71717a"} pillColor={"#f0f0f2"} textColor={"#18181b"} size={40} corner={32} duration={560} dotSize={0.3} overshoot={1.7} beat={3} rollDuration={350} disabled={false} />
    </div>
  )
}
