// Rebuilt from React Bits' src/demo/Animations/MagnetDemo.jsx: the component with the props its preview uses.
import Magnet from "./Magnet"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <Magnet maxOffset={10}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </Magnet>
    </div>
  )
}
