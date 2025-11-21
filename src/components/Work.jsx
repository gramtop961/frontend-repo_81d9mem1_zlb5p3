import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Aurora OS",
    desc: "Developer platform for AI-native apps. Shipped v1 with 25k users.",
  },
  {
    title: "Neon Commerce",
    desc: "Headless storefront with 3D try-on and realtime inventory sync.",
  },
  {
    title: "Vortex Agent",
    desc: "Autonomous agent for claims processing. 68% cycle-time reduction.",
  },
  {
    title: "Spectra Cloud",
    desc: "Data lakehouse with semantic layers and column-level lineage.",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-950/95">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_30%_0%,rgba(99,102,241,0.25),transparent),radial-gradient(600px_300px_at_70%_120%,rgba(168,85,247,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-fuchsia-300/80">Selected work</p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">Leaps we've shipped</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-fuchsia-400/30 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-slate-300/90 mt-2">{p.desc}</p>
                </div>
                <button className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-white/80 group-hover:text-white">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
