// Rebuilt from React Bits' src/demo/Micro/SlingButtonDemo.jsx: the component with the props its preview uses.
import SlingButton from "./SlingButton"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <SlingButton padColor={"#18181b"} iconColor={"#ffffff"} accentColor={"#18181b"} wellColor={"#f6f6f6"} bandColor={"#a1a1aa"} size={56} strokeWidth={3} armAt={48} maxPull={160} launchSpeed={2600} recoil={0.2} flight={120} particles={14} spread={60} axis={"any"} tapSends={true} disabled={false}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </SlingButton>
    </div>
  )
}
