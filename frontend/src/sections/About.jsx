import { motion } from 'framer-motion';
import { CircuitBoard, Gauge, GraduationCap, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { aboutHighlights, education } from '../data/portfolio.js';
import { fadeUp, revealViewport, staggerContainer } from '../utils/motion.js';

const pillars = [
  { icon: CircuitBoard, title: 'Automation Mindset', text: 'PLC, HMI, SCADA, DCS concepts and commissioning workflows connected to field devices and panels.' },
  { icon: Gauge, title: 'Instrumentation Focus', text: 'Sensors, transducers, loop checks, I/O validation and measurement reliability.' },
  { icon: Zap, title: 'Electrical Control Depth', text: 'Switchgear, MCCs, motor-control wiring, capacitor banks, VFDs and protection awareness.' },
  { icon: ShieldCheck, title: 'Industrial Discipline', text: 'Safety, shutdown/startup awareness, documentation, maintenance follow-up and troubleshooting.' }
];

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer} className="section-light relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About Me" title="Engineering profile built around practical automation.">
          Arun combines instrumentation fundamentals, electrical control exposure and software-enabled project development for industrial roles.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="glass-card neon-border rounded-[2rem] p-6 sm:p-8"
          >
            <h3 id="about-title" className="font-display text-2xl font-bold text-white">Professional Profile</h3>
            <div className="mt-6 space-y-5 text-base leading-8 text-neutral-300">
              {aboutHighlights.map((item) => (
                <p key={item} className="border-l border-amber-300/30 pl-4 transition hover:border-amber-200 hover:text-white">{item}</p>
              ))}
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card group rounded-3xl p-6"
                >
                  <Icon className="h-8 w-8 text-amber-300 transition group-hover:scale-110 group-hover:text-white" />
                  <h4 className="mt-4 font-display text-xl font-bold text-white">{pillar.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-neutral-400 group-hover:text-neutral-300">{pillar.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 glass-card rounded-[2rem] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">Academic Foundation</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2 text-xs font-bold text-amber-100">
              <GraduationCap className="h-4 w-4" /> Reverse chronological focus
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-amber-300/10 bg-amber-300/[0.04] p-5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl transition group-hover:bg-amber-300/25" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">{item.period}</p>
                <h4 className="mt-3 font-display text-lg font-bold text-white">{item.degree}</h4>
                <p className="mt-2 text-sm font-semibold text-neutral-300">{item.institution}</p>
                <p className="mt-1 text-xs text-neutral-500">{item.location}</p>
                <p className="mt-4 inline-flex rounded-full border border-amber-300/20 bg-neutral-950/50 px-3 py-1 text-xs font-bold text-amber-100">{item.result}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{item.focus}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-amber-300/10 px-3 py-1 text-[11px] font-semibold text-amber-100">{highlight}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
