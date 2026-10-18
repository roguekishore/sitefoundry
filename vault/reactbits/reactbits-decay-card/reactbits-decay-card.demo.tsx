// Rebuilt from React Bits' src/demo/Components/DecayCardDemo.jsx: the component with the props its preview uses.
import DecayCard from "./DecayCard"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <DecayCard width={300} height={400} intensity={0.5} sensitivity={0.5} hoverDecay={0.05} recovery={0.6} idle={0.35} grain={0.25} detail={5} pattern={4} flow={0} chroma={0} travel={50} tilt={10} scope={"window"} radius={0} grayscale={false} image={"https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=900&q=80&auto=format&fit=crop"}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </DecayCard>
    </div>
  )
}
