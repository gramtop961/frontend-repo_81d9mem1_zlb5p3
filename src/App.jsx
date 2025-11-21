import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-fuchsia-300/80">About us</p>
              <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">A studio for quantum leaps</h2>
              <p className="text-slate-300/90 mt-4">We’re a small, senior team that blends strategy, design and engineering to help companies make asymmetric moves. We collaborate deeply, ship quickly and focus on outcomes.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {["Senior‑only team","Outcome‑driven","High‑leverage"].map((tag)=>(
                  <div key={tag} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200">{tag}</div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20 border border-white/10" />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-fuchsia-600/10 to-indigo-600/10 blur-2xl" />
            </div>
          </div>
        </section>
        <Capabilities />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
