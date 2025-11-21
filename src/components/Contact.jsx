import { Send, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950/95">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-fuchsia-300/80">Contact</p>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">Let's make a quantum leap</h2>
            <p className="text-slate-300/90 mt-4 max-w-xl">Tell us about your goals and constraints. We'll come back with a plan and a path to results.</p>

            <div className="mt-6 grid gap-3 text-slate-300/90">
              <div className="flex items-center gap-3"><Mail className="text-fuchsia-300" /> hello@quantumleap.studio</div>
              <div className="flex items-center gap-3"><Phone className="text-fuchsia-300" /> +1 (555) 012-3456</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-200 text-sm">Name</label>
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Ada Lovelace" required />
              </div>
              <div>
                <label className="text-slate-200 text-sm">Email</label>
                <input type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="you@company.com" required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-slate-200 text-sm">What are you building?</label>
                <textarea className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 h-32 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="A short brief..." required />
              </div>
            </div>

            <button disabled={status!=="idle"} className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white disabled:opacity-60">
              <Send className="h-4 w-4" /> {status==="sent"?"Sent! We'll be in touch":"Send request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
