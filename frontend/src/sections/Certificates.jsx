import { AnimatePresence, motion } from 'framer-motion';
import { Award, BadgeCheck, BookOpen, Download, ExternalLink, FileCheck2, X } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications, supportingLearningDocuments } from '../data/portfolio.js';
import { fadeUp, revealViewport, scaleIn, staggerContainer } from '../utils/motion.js';

function withBase(href) {
  return `${import.meta.env.BASE_URL}${href}`;
}

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;
  const href = withBase(certificate.file);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[84] grid place-items-center bg-black/86 px-4 py-8 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${certificate.title} certificate`}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 230, damping: 24 }}
          className="glass-card max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] p-5 sm:p-7"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Verified credential</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{certificate.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{certificate.issuer} Â· {certificate.date}</p>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-amber-300/20 p-2 text-neutral-300 transition hover:bg-amber-300/10 hover:text-white" aria-label="Close certificate"><X className="h-5 w-5" /></button>
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-amber-300/20 bg-white shadow-2xl shadow-amber-950/20">
            <iframe src={`${href}#toolbar=0&navpanes=0`} title={`${certificate.title} certificate`} loading="lazy" className="h-[58vh] min-h-[390px] w-full bg-white" />
          </div>
          <a href={href} target="_blank" rel="noreferrer" className="premium-cta mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 font-display text-sm font-bold text-black shadow-neon transition hover:bg-white">
            <Download className="h-4 w-4" /> Open certificate PDF
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <motion.section id="certificates" initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer} className="section-light relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="certificates-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Verified Learning" title="Credentials backed by uploaded evidence." align="center">
          Only completed credentials with an available source PDF are shown as verified. Duplicate uploads were removed, and ongoing learning is labelled separately.
        </SectionHeading>

        <motion.div variants={scaleIn} className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-300/15 px-4 py-2 text-sm font-bold text-neutral-900"><BadgeCheck className="h-4 w-4 text-amber-700" /> {certifications.length} verified credentials</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-bold text-neutral-700"><BookOpen className="h-4 w-4 text-amber-700" /> Continuous professional learning</span>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.article key={certificate.title} variants={fadeUp} whileHover={{ y: -8 }} className="certificate-card group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
              <div className="certificate-visual relative h-36 overflow-hidden bg-neutral-950 p-5">
                <div className="certificate-grid absolute inset-0" />
                <div className="relative flex h-full items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">Certificate {String(index + 1).padStart(2, '0')}</p>
                    <Award className="mt-4 h-10 w-10 text-amber-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110" />
                  </div>
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-amber-300/30 bg-amber-300/10 shadow-neon">
                    <BadgeCheck className="h-9 w-9 text-amber-200" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold text-neutral-500">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
                <h3 id={index === 0 ? 'certificates-title' : undefined} className="mt-3 font-display text-xl font-bold text-neutral-950">{certificate.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{certificate.focus}</p>
                <button type="button" onClick={() => setActiveCertificate(certificate)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 font-display text-sm font-bold text-white transition hover:bg-amber-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500">
                  View credential <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-100 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-300 text-black"><BookOpen className="h-6 w-6" /></div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700">Learning in progress</p>
              <h3 className="font-display text-xl font-bold text-neutral-950">Project management supporting documents</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {supportingLearningDocuments.map((document) => (
              <a key={document.title} href={withBase(document.file)} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
                <div>
                  <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800">{document.status}</span>
                  <p className="mt-3 font-display font-bold text-neutral-950">{document.title}</p>
                  <p className="mt-1 text-xs text-neutral-500">{document.issuer}</p>
                </div>
                <FileCheck2 className="h-5 w-5 flex-none text-amber-700 transition group-hover:scale-110" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <CertificateModal certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />
    </motion.section>
  );
}
