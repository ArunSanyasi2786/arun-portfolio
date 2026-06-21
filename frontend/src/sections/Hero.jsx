import { motion } from 'framer-motion';
import { Download, Send, Sparkles } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { GhostButton, PrimaryButton } from '../components/Buttons.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import ProfileOrbit from '../components/ProfileOrbit.jsx';
import { hero } from '../data/portfolio.js';
import { fadeUp, scaleIn, staggerContainer } from '../utils/motion.js';

const ThreeHeroCanvas = lazy(() => import('../components/ThreeHeroCanvas.jsx'));

const heroCounters = [
  { end: 8, suffix: '+', label: 'Engineering Projects', detail: 'Automation, instrumentation and electrical systems' },
  { end: 15, suffix: '+', label: 'Automation Skills', detail: 'PLC, SCADA, DCS, HMI, networks and control' },
  { end: 6, suffix: '+', label: 'Sensors Integrated', detail: 'Biomedical, temperature and measurement devices' },
  { end: 10, suffix: '+', label: 'Industrial Tools', detail: 'Engineering software, panels and commissioning tools' }
];

export default function Hero() {
  const cvUrl = `${import.meta.env.BASE_URL}files/arun-cv.pdf`;

  return (
    <motion.section id="home" initial="hidden" animate="visible" variants={staggerContainer} className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8" aria-labelledby="hero-title">
      <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,197,66,0.16),transparent_44%)]" />}>
        <ThreeHeroCanvas />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/20 to-ink" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100 backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Graduate Engineer - Industrial Automation Portfolio
          </div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.35em] text-amber-300">Instrumentation + Control</p>
          <h1 id="hero-title" className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.name}
            <span className="block text-gradient">{hero.role}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300 sm:text-xl">{hero.intro}</p>
          <p className="mt-4 max-w-3xl font-mono text-sm uppercase tracking-[0.18em] text-amber-100/90">{hero.line}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#projects">View Projects</PrimaryButton>
            <GhostButton href={cvUrl} download><span className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> Download CV</span></GhostButton>
            <GhostButton href="#contact"><span className="inline-flex items-center gap-2"><Send className="h-4 w-4" /> Contact Me</span></GhostButton>
          </div>
          <div className="hero-counters mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {heroCounters.map((counter) => <AnimatedCounter key={counter.label} {...counter} />)}
          </div>
        </motion.div>
        <motion.div variants={scaleIn} className="relative">
          <ProfileOrbit image={hero.profileImage} />
        </motion.div>
      </div>
    </motion.section>
  );
}
