// Rebuilt from React Bits' src/demo/Backgrounds/IridescenceDemo.jsx: the component with the props its preview uses.
import Iridescence from "./Iridescence"

export default function Demo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <Iridescence color={"#8099cc"} hueShift={0} saturation={1} brightness={1.5} contrast={1} speed={1} scale={1} detail={8} warp={1} rotation={0} mouseReact={true} amplitude={0.1} stir={0.5} sheen={0.3} clickSwirl={true} grain={0} fade={0} />
    </div>
  )
}
