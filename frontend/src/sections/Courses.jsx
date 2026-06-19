import { AnimatePresence, motion } from 'framer-motion';
import { BookOpenCheck, ChevronRight, Layers3 } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { courses } from '../data/portfolio.js';

export default function Courses() {
  const [active, setActive] = useState(0);
  const course = courses[active];

  return (
    <section id="courses" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="courses-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Courses Learned" title="Academic modules connected to industrial practice." align="center">
          Click a course to see the major module highlights Arun can discuss in interviews across control, drives, networks, protection, biomedical instrumentation and electrical systems.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {courses.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.04 }}
                className={`group relative overflow-hidden rounded-3xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 ${
                  active === index
                    ? 'border-cyan-200/70 bg-cyan-300/[0.12] shadow-neon'
                    : 'border-cyan-300/12 bg-white/[0.035] hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-300/[0.07]'
                }`}
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">{item.code}</p>
                <h3 id={index === 0 ? 'courses-title' : undefined} className="mt-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{item.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-cyan-100">
                  View module highlights <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </motion.button>
            ))}
          </div>
          <motion.article
            layout
            className="glass-card neon-border sticky top-24 h-fit overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 shadow-neon">
                <BookOpenCheck className="h-7 w-7" />
              </div>
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">{course.code}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{course.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{course.summary}</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-300/10 bg-slate-950/45 p-4">
              <div className="flex items-center gap-2 text-cyan-200">
                <Layers3 className="h-4 w-4" />
                <p className="font-display text-sm font-bold">Module highlights</p>
              </div>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={course.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 space-y-3 text-sm leading-7 text-slate-300"
                >
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300 shadow-neon" />
                      {highlight}
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
            <p className="mt-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.05] px-4 py-3 text-xs font-semibold leading-6 text-cyan-100">
              Source context: {course.source}. Highlights are summarized for portfolio readability.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}