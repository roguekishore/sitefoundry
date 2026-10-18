// Rebuilt from React Bits' src/demo/Animations/LogoLoopDemo.jsx: the component with the props its preview uses.
import LogoLoop from "./LogoLoop"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <LogoLoop logos={[{ node: <span className="text-2xl font-semibold">React</span>, title: "React", href: "https://react.dev", hoverColor: "#61dafb" }, { node: <span className="text-2xl font-semibold">Next.js</span>, title: "Next.js", href: "https://nextjs.org" }, { node: <span className="text-2xl font-semibold">TypeScript</span>, title: "TypeScript", href: "https://www.typescriptlang.org", hoverColor: "#3178c6" }, { node: <span className="text-2xl font-semibold">Tailwind CSS</span>, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#38bdf8" }, { node: <span className="text-2xl font-semibold">Vercel</span>, title: "Vercel", href: "https://vercel.com" }, { node: <span className="text-2xl font-semibold">GitHub</span>, title: "GitHub", href: "https://github.com" }, { node: <span className="text-2xl font-semibold">Docker</span>, title: "Docker", href: "https://www.docker.com", hoverColor: "#2496ed" }, { node: <span className="text-2xl font-semibold">Prisma</span>, title: "Prisma", href: "https://www.prisma.io" }, { node: <span className="text-2xl font-semibold">Supabase</span>, title: "Supabase", href: "https://supabase.com", hoverColor: "#3ecf8e" }, { node: <span className="text-2xl font-semibold">Stripe</span>, title: "Stripe", href: "https://stripe.com", hoverColor: "#635bff" }]} layout={"line"} direction={"left"} labels={"none"} speed={100} hoverSpeed={0} logoHeight={48} gap={56} bend={0.5} focus={0} magnify={0} muted={0} tiltX={0} tiltY={0} fadeOut={true} fadeOutWidth={0.12} scrollBoost={0} step={false} scaleOnHover={true} draggable={true} intro={true} ariaLabel="Our tech stack" />
    </div>
  )
}
