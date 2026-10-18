// Rebuilt from React Bits' src/demo/Components/CounterDemo.jsx: the component with the props its preview uses.
import Counter from "./Counter"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <Counter value={42} direction={"down"} duration={0.7} bounce={0.2} stagger={0.04} fade={0} motionBlur={true} intro={true} minDigits={2} fontSize={64} fontWeight={600} gap={6} digitStyle={{ padding: "0.18em 0.14em", borderRadius: "0.18em", background: "var(--muted)", boxShadow: "inset 0 0 0 1px var(--border)" }} />
    </div>
  )
}
