import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Courses', '#courses'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Certificates', '#certificates'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavigate() {
    setMenuOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'border-amber-300/10 bg-neutral-950/72 shadow-lg shadow-amber-950/25 backdrop-blur-2xl'
          : 'border-transparent bg-neutral-950/10 backdrop-blur-sm'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" onClick={handleNavigate} className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-amber-300/40 bg-amber-300/10 font-display font-bold text-amber-200 shadow-neon">
            <span className="absolute inset-0 bg-gradient-to-br from-amber-200/15 to-amber-600/10 transition group-hover:scale-125" />
            <span className="relative">AS</span>
          </span>
          <span className="hidden font-display text-sm font-bold tracking-[0.2em] text-white sm:block">ARUN SANYASI</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-amber-300/10 bg-white/[0.035] p-1 shadow-inner shadow-white/[0.03] backdrop-blur xl:flex">
          {links.map(([label, href]) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                className={`nav-link relative rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200 lg:px-4 ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
              >
                {isActive && <motion.span layoutId="active-nav" className="absolute inset-0 rounded-full border border-amber-300/20 bg-amber-300/10 shadow-[0_5px_22px_rgba(245,197,66,0.16)]" transition={{ type: 'spring', stiffness: 320, damping: 30 }} />}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="animated-link hidden rounded-full border border-amber-300/30 px-4 py-2 font-display text-sm font-bold text-amber-100 transition hover:bg-amber-300/10 sm:inline-flex xl:hidden 2xl:inline-flex">
            Hire-ready
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-100 xl:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="absolute left-4 right-4 top-[calc(100%+0.45rem)] overflow-hidden rounded-3xl border border-amber-300/15 bg-neutral-950/94 p-3 shadow-cobalt backdrop-blur-2xl xl:hidden"
            >
              {links.map(([label, href], index) => {
                const isActive = active === href.slice(1);
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={handleNavigate}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-sm font-bold ${isActive ? 'bg-amber-300/12 text-amber-100' : 'text-neutral-300 hover:bg-white/[0.05] hover:text-white'}`}
                  >
                    {label}
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-amber-300 shadow-neon' : 'bg-neutral-700'}`} />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
