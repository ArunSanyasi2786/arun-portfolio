import { motion } from 'framer-motion';
import { Download, Send, Sparkles } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { GhostButton, PrimaryButton } from '../components/Buttons.jsx';
import ProfileOrbit from '../components/ProfileOrbit.jsx';
import { hero, stats } from '../data/portfolio.js';

const ThreeHeroCanvas = lazy(() => import('../components/ThreeHeroCanvas.jsx'));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8" aria-labelledby="hero-title">
      <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.16),transparent_44%)]" />}>
        <ThreeHeroCanvas />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/20 to-ink" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Graduate Engineer - Industrial Automation Portfolio
          </div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">Instrumentation + Control</p>
          <h1 id="hero-title" className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.name}
            <span className="block text-gradient">{hero.role}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{hero.intro}</p>
          <p className="mt-4 max-w-3xl font-mono text-sm uppercase tracking-[0.18em] text-cyan-100/90">{hero.line}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#projects">View Projects</PrimaryButton>
            <GhostButton href="#resume"><span className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> Download CV</span></GhostButton>
            <GhostButton href="#contact"><span className="inline-flex items-center gap-2"><Send className="h-4 w-4" /> Contact Me</span></GhostButton>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-3xl p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">{stat.label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="relative">
          <ProfileOrbit image={hero.profileImage} />
        </div>
      </div>
    </section>
  );
}
