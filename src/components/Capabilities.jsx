import { Bot, Cpu, Globe, Layers, LineChart, Rocket } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Product Strategy",
    desc: "From 0→1 to 1→n. Narrative, positioning and roadmaps that win.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Polished UI kits, motion and brand systems that scale across platforms.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "RAG, agents and workflows that reduce cost and increase leverage.",
  },
  {
    icon: Globe,
    title: "Full‑stack Engineering",
    desc: "Web, mobile and cloud with reliability and performance baked in.",
  },
  {
    icon: LineChart,
    title: "Growth & GTM",
    desc: "Acquisition loops, onboarding and activation that compound.",
  },
  {
    icon: Bot,
    title: "3D & Interactions",
    desc: "Immersive 3D, WebGL and micro‑interactions that feel alive.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_70%_-10%,rgba(79,70,229,0.25),transparent),radial-gradient(800px_400px_at_20%_110%,rgba(168,85,247,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-fuchsia-300/80">Capabilities</p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">Make the leap</h2>
          <p className="text-slate-300/90 mt-4">We partner with founders and leaders to design, build and launch products that change the trajectory of their business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-fuchsia-400/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white grid place-items-center shadow-[0_10px_30px_rgba(99,102,241,0.35)]">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
              <p className="text-slate-300/90 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
