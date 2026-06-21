import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { documents } from '../data/portfolio.js';
import { fadeUp, revealViewport, scaleIn, staggerContainer } from '../utils/motion.js';

function withBase(href) {
  return `${import.meta.env.BASE_URL}${href}`;
}

export default function Resume() {
  return (
    <motion.section id="resume" initial="hidden" whileInView="visible" viewport={revealViewport} variants={staggerContainer} className="section-light relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="resume-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="CV / Resume / Portfolio" title="Download Arun's application documents." align="center">
          The primary button uses Arun's finalized one-page resume, with a detailed four-page CV and supporting project documents available in the same hub.
        </SectionHeading>
        <motion.div
          variants={scaleIn}
          className="glass-card neon-border overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-amber-300/20 bg-amber-300/10 text-amber-200 shadow-neon">
            <FileText className="h-9 w-9" />
          </div>
          <h3 id="resume-title" className="mt-6 text-center font-display text-2xl font-bold text-white">Application Document Hub</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-neutral-400">
            Use the concise resume for job applications or the detailed CV when broader project and experience evidence is required.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {documents.map((doc) => (
              <motion.a
                key={doc.href}
                href={withBase(doc.href)}
                download
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`group rounded-3xl border p-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200 ${doc.primary ? 'border-amber-200/60 bg-amber-300/[0.12] shadow-neon' : 'border-amber-300/15 bg-amber-300/[0.045] hover:border-amber-200/40 hover:bg-amber-300/[0.08]'}`}
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">{doc.eyebrow}</p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-white">{doc.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-neutral-400 group-hover:text-neutral-300">{doc.description}</p>
                  </div>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-amber-300 text-neutral-950 transition group-hover:bg-white">
                    <Download className="h-5 w-5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
