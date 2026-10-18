// Rebuilt from React Bits' src/demo/Animations/ElectricBorderDemo.jsx: the component with the props its preview uses.
import ElectricBorder from "./ElectricBorder"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ElectricBorder style={{ width: "100%", maxWidth: 520 }}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </ElectricBorder>
    </div>
  )
}
