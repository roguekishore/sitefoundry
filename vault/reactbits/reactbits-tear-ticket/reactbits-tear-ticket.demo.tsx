// Rebuilt from React Bits' src/demo/Micro/TearTicketDemo.jsx: the component with the props its preview uses.
import TearTicket from "./TearTicket"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <TearTicket image={"https://images.unsplash.com/photo-1604852961945-155837ffebe2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} imageAlt="Visitors in a walkway of coloured glass" orientation={"horizontal"} scrim={false} width={460} height={250} stubSize={150} radius={16} holes={12} holeSize={6} notch={3} roughness={0} tearAngle={30} stretch={30} resistance={0.45} rotate={4} tilt={true} tiltMax={9} tiltReach={260} parallax={6} perspective={1000} background={"#f6f6f6"} color={"#18181b"} border={true} borderColor={""} borderWidth={1} recenter={true} disabled={false}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </TearTicket>
    </div>
  )
}
