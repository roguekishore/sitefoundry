// Rebuilt from React Bits' src/demo/Animations/CrystalizedBallDemo.jsx: the component with the props its preview uses.
import CrystalizedBall from "./CrystalizedBall"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <CrystalizedBall preset={"plasma"} size={0.7} speed={1} interactive={true} hoverStrength={0.7} intro={true} paused={false} theme={"light"} />
    </div>
  )
}
