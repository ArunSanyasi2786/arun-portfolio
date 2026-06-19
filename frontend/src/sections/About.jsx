import { motion } from 'framer-motion';
import { CircuitBoard, Gauge, ShieldCheck, Waves } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { aboutHighlights, education } from '../data/portfolio.js';

const pillars = [
  { icon: CircuitBoard, title: 'Automation Mindset', text: 'PLC, HMI, SCADA and commissioning workflows connected to field devices and panels.' },
  { icon: Gauge, title: 'Instrumentation Focus', text: 'Sensors, transducers, loop checks, I/O validation and measurement reliability.' },
  { icon: ShieldCheck, title: 'Industrial Discipline', text: 'Safety, shutdown/startup awareness, documentation and maintenance follow-up.' },
  { icon: Waves, title: 'Embedded Systems', text: 'Raspberry Pi, ESP32, PyQt6 kiosk UI, serial communication and QR reporting.' }
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="about-title">
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
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              {aboutHighlights.map((item) => (
                <p key={item} className="border-l border-cyan-300/30 pl-4">{item}</p>
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card rounded-3xl p-6"
                >
                  <Icon className="h-8 w-8 text-cyan-300" />
                  <h4 className="mt-4 font-display text-xl font-bold text-white">{pillar.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{pillar.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
        <div className="mt-6 glass-card rounded-[2rem] p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold text-white">Education</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
