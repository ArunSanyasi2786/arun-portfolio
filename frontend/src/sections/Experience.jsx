import { AnimatePresence, motion } from 'framer-motion';
import { Award, BriefcaseBusiness, Download, ExternalLink, FileCheck2, GraduationCap, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications, experiences } from '../data/portfolio.js';

function withBase(href) {
  return `${import.meta.env.BASE_URL}${href}`;
}

function ExperienceModal({ item, onClose }) {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[82] grid place-items-center bg-slate-950/82 px-4 py-8 backdrop-blur-xl"
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
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">{item.tag}</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">{item.role}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-300">{item.company}</p>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-cyan-300/20 p-2 text-slate-300 hover:bg-cyan-300/10 hover:text-white" aria-label="Close experience details"><X className="h-5 w-5" /></button>
          </div>
          <p className="mt-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-xs font-bold text-cyan-100">{item.period}</p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
            {item.details.map((detail) => (
              <li key={detail} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />{detail}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tools.map((tool) => <span key={tool} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{tool}</span>)}
          </div>
          {item.documents?.length ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {item.documents.map((doc) => (
                <a key={doc.href} href={withBase(doc.href)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/10">
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

function CertificateModal({ cert, onClose }) {
  if (!cert) return null;
  const href = withBase(cert.file);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[83] grid place-items-center bg-slate-950/82 px-4 py-8 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${cert.title} certificate`}
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
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Certificate Preview</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">{cert.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{cert.focus}</p>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-cyan-300/20 p-2 text-slate-300 hover:bg-cyan-300/10 hover:text-white" aria-label="Close certificate preview"><X className="h-5 w-5" /></button>
          </div>
          <div className="mt-7 overflow-hidden rounded-3xl border border-cyan-300/15 bg-white p-6 text-slate-950">
            <div className="rounded-2xl border-2 border-cyan-500/70 p-8 text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Placeholder Certificate</p>
              <h4 className="mt-5 font-display text-2xl font-bold text-slate-950">{cert.title}</h4>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">This preview is a temporary placeholder. Upload the verified certificate PDF later using the same file name to replace it.</p>
            </div>
          </div>
          <a href={href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-display text-sm font-bold text-slate-950 shadow-neon transition hover:bg-white">
            <Download className="h-4 w-4" /> Open Certificate PDF
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);

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
                whileHover={{ y: -6 }}
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
                <button type="button" onClick={() => setActiveExperience(item)} className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 font-display text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
                  View More Detail <ExternalLink className="h-4 w-4" />
                </button>
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
                <button key={cert.title} type="button" onClick={() => setActiveCertificate(cert)} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4 text-left text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-300/[0.08] hover:text-white">
                  <span className="block text-white">{cert.title}</span>
                  <span className="mt-2 block text-xs leading-5 text-slate-400">{cert.focus}</span>
                </button>
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
      <ExperienceModal item={activeExperience} onClose={() => setActiveExperience(null)} />
      <CertificateModal cert={activeCertificate} onClose={() => setActiveCertificate(null)} />
    </section>
  );
}