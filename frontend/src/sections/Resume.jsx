import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Resume() {
  const [available, setAvailable] = useState(null);
  const fileUrl = `${import.meta.env.BASE_URL}files/arun-portfolio.pdf`;

  useEffect(() => {
    let mounted = true;
    fetch(fileUrl, { method: 'GET', cache: 'no-store' })
      .then((response) => {
        const contentType = response.headers.get('content-type') || '';
        mounted && setAvailable(response.ok && contentType.toLowerCase().includes('pdf'));
      })
      .catch(() => mounted && setAvailable(false));
    return () => {
      mounted = false;
    };
  }, [fileUrl]);

  return (
    <section id="resume" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="resume-title">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="CV / Resume" title="Download portfolio PDF when ready." align="center">
          Add your final CV or project portfolio PDF to `frontend/public/files/arun-portfolio.pdf` and this section will automatically enable the download button.
        </SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card neon-border overflow-hidden rounded-[2rem] p-8 text-center"
        >
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-neon">
            <FileText className="h-9 w-9" />
          </div>
          <h3 id="resume-title" className="mt-6 font-display text-2xl font-bold text-white">Arun Sanyasi - Portfolio PDF</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Keep the website lightweight, then attach the formal PDF resume or portfolio whenever you finalize it.
          </p>
          {available ? (
            <a href={fileUrl} download className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-slate-950 shadow-neon transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
              <Download className="h-4 w-4" /> Download Portfolio PDF
            </a>
          ) : (
            <div className="mt-7 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4 text-sm font-semibold text-cyan-100">
              Portfolio PDF will be available soon.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
