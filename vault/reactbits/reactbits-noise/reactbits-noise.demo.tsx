// Rebuilt from React Bits' src/demo/Animations/NoiseDemo.jsx: the component with the props its preview uses.
import Noise from "./Noise"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Noise opacity={0.2} size={1} fps={24} blendMode={"overlay"} contrast={0.6} colored={false} dust={0} scratches={0} scanlines={0} flicker={0} />
    </div>
  )
}
