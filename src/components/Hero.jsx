import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_-20%,rgba(168,85,247,0.35),transparent),radial-gradient(600px_300px_at_80%_120%,rgba(79,70,229,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-fuchsia-200 text-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Quantum-grade product studio
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] drop-shadow-[0_10px_40px_rgba(99,102,241,0.25)]">
            We craft quantum leaps for ambitious companies
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            Strategy, design and engineering for web, mobile and AI. We help you make non-linear moves that compound.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_20px_40px_rgba(99,102,241,0.35)]">Start a project</a>
            <a href="#work" className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/10">See our work</a>
          </div>
        </motion.div>

        <div className="relative mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Products shipped', value: '120+' },
            { label: 'AI launches', value: '35+' },
            { label: 'Client NPS', value: '72' },
            { label: 'Avg. ROI', value: '4.6x' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl py-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-slate-300/80 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
