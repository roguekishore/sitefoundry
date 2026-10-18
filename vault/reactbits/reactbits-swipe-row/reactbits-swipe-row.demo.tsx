// Rebuilt from React Bits' src/demo/Micro/SwipeRowDemo.jsx: the component with the props its preview uses.
import SwipeRow from "./SwipeRow"

export default function Demo() {
  return (
    <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden">
      <SwipeRow actions={[{"id":"delete","label":"Delete"},{"id":"archive","label":"Archive","dismiss":true}]} actionColor={"#e5484d"} drawerColor={"#e4e4e7"} rowColor={"#f6f6f6"} textColor={"#18181b"} height={64} radius={16} actionWidth={80} direction={"left"} snapBounce={0.2} resistance={0.55} collapseMs={200} commitAt={0.6} fullSwipe={true} disabled={false} style={{ marginBottom: 8 }}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </SwipeRow>
    </div>
  )
}
