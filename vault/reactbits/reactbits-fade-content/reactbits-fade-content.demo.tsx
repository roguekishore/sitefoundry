// Rebuilt from React Bits' src/demo/Animations/FadeContentDemo.jsx: the component with the props its preview uses.
import FadeContent from "./FadeContent"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <FadeContent container={null} style={{ textAlign: "center" }}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </FadeContent>
    </div>
  )
}
