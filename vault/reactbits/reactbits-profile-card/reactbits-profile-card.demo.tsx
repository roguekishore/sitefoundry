// Rebuilt from React Bits' src/demo/Components/ProfileCardDemo.jsx: the component with the props its preview uses.
import ProfileCard from "./ProfileCard"

export default function Demo() {
  return (
    <div className="relative flex h-[640px] w-full items-center justify-center overflow-hidden">
      <ProfileCard name="Javi A. Torres" title="Software Engineer" handle="javicodes" status="Online" contactText="Contact" avatarUrl="https://picsum.photos/seed/foundry-person/900/1200" theme={"light"} holo={0.8} glare={0.5} tiltStrength={12} parallax={8} radius={16} enableTilt={true} intro={true} showUserInfo={true} enableMobileTilt={false} />
    </div>
  )
}
