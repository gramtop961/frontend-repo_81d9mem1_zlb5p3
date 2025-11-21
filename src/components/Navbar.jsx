import { Menu, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center shadow-[0_0_30px_rgba(168,85,247,0.45)]">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm text-fuchsia-300/80">Quantum</p>
            <p className="text-lg font-semibold tracking-tight">Leap Labs</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <button onClick={() => scrollTo("about")} className="hover:text-white/90">About</button>
          <button onClick={() => scrollTo("capabilities")} className="hover:text-white/90">Capabilities</button>
          <button onClick={() => scrollTo("work")} className="hover:text-white/90">Work</button>
          <button onClick={() => scrollTo("process")} className="hover:text-white/90">Process</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white/90">Contact</button>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact")}} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)]">
            <Sparkles className="h-4 w-4" /> Start a Project
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="px-6 py-4 grid gap-3 text-slate-200">
            <button onClick={() => scrollTo("about")} className="text-left py-2">About</button>
            <button onClick={() => scrollTo("capabilities")} className="text-left py-2">Capabilities</button>
            <button onClick={() => scrollTo("work")} className="text-left py-2">Work</button>
            <button onClick={() => scrollTo("process")} className="text-left py-2">Process</button>
            <button onClick={() => scrollTo("contact")} className="text-left py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
