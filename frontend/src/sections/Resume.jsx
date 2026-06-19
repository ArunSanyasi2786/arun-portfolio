import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { documents } from '../data/portfolio.js';

function withBase(href) {
  return `${import.meta.env.BASE_URL}${href}`;
}

export default function Resume() {
  return (
    <section id="resume" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="resume-title">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="CV / Resume / Portfolio" title="Download Arun's application documents." align="center">
          The CV button now uses the uploaded Arun resume PDF. Portfolio, report and recommendation files are also wired so they can be replaced later without changing code.
        </SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card neon-border overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-neon">
            <FileText className="h-9 w-9" />
          </div>
          <h3 id="resume-title" className="mt-6 text-center font-display text-2xl font-bold text-white">Application Document Hub</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-slate-400">
            Use the CV for applications now. Replace placeholder portfolio, report, recommendation and certificate files later with final verified documents.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {documents.map((doc, index) => (
              <motion.a
                key={doc.href}
                href={withBase(doc.href)}
                download
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`group rounded-3xl border p-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 ${doc.primary ? 'border-cyan-200/60 bg-cyan-300/[0.12] shadow-neon' : 'border-cyan-300/15 bg-cyan-300/[0.045] hover:border-cyan-200/40 hover:bg-cyan-300/[0.08]'}`}
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">{doc.eyebrow}</p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-white">{doc.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-400 group-hover:text-slate-300">{doc.description}</p>
                  </div>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-cyan-300 text-slate-950 transition group-hover:bg-white">
                    <Download className="h-5 w-5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}