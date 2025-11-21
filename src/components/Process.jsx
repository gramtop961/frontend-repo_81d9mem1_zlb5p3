import { ArrowRight, Brain, Cog, FlaskConical, Rocket } from "lucide-react";

const steps = [
  { icon: Brain, title: "Discover", desc: "Deep dive on goals, constraints and leverage points." },
  { icon: FlaskConical, title: "Design", desc: "Narratives, prototypes and systems that align teams." },
  { icon: Cog, title: "Build", desc: "Ship in tight loops with quality gates and telemetry." },
  { icon: Rocket, title: "Scale", desc: "Optimize, automate and compound what works." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-fuchsia-300/80">Our process</p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">From idea to impact</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white grid place-items-center">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">{i + 1}. {title}</h3>
              <p className="text-slate-300/90 mt-2">{desc}</p>
              {i < steps.length - 1 && (
                <div className="mt-4 text-fuchsia-300/70 flex items-center gap-2 text-sm">
                  <ArrowRight className="h-4 w-4" /> Next up
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
