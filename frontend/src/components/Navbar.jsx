import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-slate-950/72 backdrop-blur-xl shadow-lg shadow-cyan-950/20' : 'bg-transparent'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 font-display font-bold text-cyan-200 shadow-neon">AS</span>
          <span className="hidden font-display text-sm font-bold tracking-[0.2em] text-white sm:block">ARUN SANYASI</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-cyan-300/10 bg-white/[0.03] p-1 backdrop-blur md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-cyan-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full border border-cyan-300/30 px-4 py-2 font-display text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
          Hire-ready
        </a>
      </nav>
    </motion.header>
  );
}
