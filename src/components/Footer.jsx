export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
        <p>© {new Date().getFullYear()} Quantum Leap Labs. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white/80">About</a>
          <a href="#capabilities" className="hover:text-white/80">Capabilities</a>
          <a href="#work" className="hover:text-white/80">Work</a>
          <a href="#process" className="hover:text-white/80">Process</a>
          <a href="#contact" className="hover:text-white/80">Contact</a>
        </div>
      </div>
    </footer>
  );
}
