import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications, experiences } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience and Training" title="Industrial exposure with automation depth.">
          Arun's background combines hydropower commissioning, ferro-industry electrical maintenance exposure, digitization app work, academic projects and professional training.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-card rounded-[2rem] p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">{item.tag}</p>
                    <h3 id={index === 0 ? 'experience-title' : undefined} className="mt-2 font-display text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-300">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-xs font-bold text-cyan-100">{item.period}</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card neon-border rounded-[2rem] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">Training</p>
                <h3 className="font-display text-2xl font-bold text-white">Certifications and core strengthening</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4 text-sm font-semibold text-slate-300">
                  {cert}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/10 bg-slate-950/40 p-4">
                <BriefcaseBusiness className="h-6 w-6 text-cyan-300" />
                <p className="mt-3 font-display font-bold text-white">Industry-ready focus</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Electrical maintenance, field devices, panels, switchyards, control wiring and technical reporting.</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/10 bg-slate-950/40 p-4">
                <GraduationCap className="h-6 w-6 text-cyan-300" />
                <p className="mt-3 font-display font-bold text-white">Research contribution</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">IEEE-style health monitoring station work and participation in Student Research Meet organised by RUB.</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
