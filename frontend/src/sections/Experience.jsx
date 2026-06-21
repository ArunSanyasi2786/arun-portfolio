import { AnimatePresence, motion } from 'framer-motion';
import { BriefcaseBusiness, ExternalLink, FileCheck2, GraduationCap, ShieldCheck, Wrench, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { experiences } from '../data/portfolio.js';
import { revealViewport, slideLeft, slideRight, staggerContainer } from '../utils/motion.js';

function withBase(href) {
  return `${import.meta.env.BASE_URL}${href}`;
}

function ExperienceModal({ item, onClose }) {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[82] grid place-items-center bg-black/86 px-4 py-8 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.role} details`}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 26, scale: 0.95 }}
          className="glass-card w-full max-w-3xl rounded-[2rem] p-6 sm:p-8"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-300">{item.tag}</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">{item.role}</h3>
              <p className="mt-2 text-sm font-semibold text-neutral-300">{item.company}</p>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-amber-300/20 p-2 text-neutral-300 hover:bg-amber-300/10 hover:text-white" aria-label="Close experience details"><X className="h-5 w-5" /></button>
          </div>
          <p className="mt-5 inline-flex rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-xs font-bold text-amber-100">{item.period}</p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
            {item.details.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />{detail}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tools.map((tool) => <span key={tool} className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">{tool}</span>)}
          </div>
          {item.documents?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {item.documents.map((doc) => (
                <a key={doc.href} href={withBase(doc.href)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 px-4 py-2 text-sm font-bold text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-300/10">
                  <FileCheck2 className="h-4 w-4" /> {doc.label}
                </a>
              ))}
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const readiness = [
  { icon: Wrench, title: 'Hands-on systems', text: 'PLC logic, SCADA screens, loop checks, MCCs, switchgear, motor control and sensor signal paths.' },
  { icon: ShieldCheck, title: 'Safety mindset', text: 'PPE awareness, capacitor discharge, controlled shutdown/startup and careful electrical verification.' },
  { icon: BriefcaseBusiness, title: 'Plant context', text: 'Exposure across hydropower automation, ferro-alloy electrical systems and digitization workflows.' },
  { icon: GraduationCap, title: 'Research discipline', text: 'Final-year engineering project work and participation in a Student Research Meet organised by RUB.' }
];

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);

  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer} className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience and Training" title="Industrial exposure with automation depth.">
          Arun's background combines hydropower commissioning, ferro-industry electrical maintenance exposure, digitization app work and professional engineering practice.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <motion.article key={item.role} variants={slideLeft} whileHover={{ y: -6 }} className="glass-card rounded-[2rem] p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">{item.tag}</p>
                    <h3 id={index === 0 ? 'experience-title' : undefined} className="mt-2 font-display text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-neutral-300">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-xs font-bold text-amber-100">{item.period}</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-300">
                  {item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-300" />{point}</li>)}
                </ul>
                <button type="button" onClick={() => setActiveExperience(item)} className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/30 px-4 py-2 font-display text-sm font-bold text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200">
                  View More Detail <ExternalLink className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>
          <motion.aside variants={slideRight} className="glass-card neon-border rounded-[2rem] p-6">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">Engineering readiness</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">What the industrial exposure adds</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {readiness.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-amber-300/10 bg-black/35 p-4 transition hover:border-amber-300/30 hover:bg-amber-300/[0.05]">
                  <Icon className="h-6 w-6 text-amber-300" />
                  <p className="mt-3 font-display font-bold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
      <ExperienceModal item={activeExperience} onClose={() => setActiveExperience(null)} />
    </motion.section>
  );
}
