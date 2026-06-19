import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import TiltCard from '../components/TiltCard.jsx';
import { projects } from '../data/portfolio.js';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/80 px-4 py-8 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 28 }}
          transition={{ duration: 0.25 }}
          className="glass-card max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] p-5 sm:p-8"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">{project.subtitle}</p>
              <h3 className="mt-2 font-display text-3xl font-bold text-white">{project.title}</h3>
            </div>
            <button type="button" onClick={onClose} className="rounded-full border border-cyan-300/20 p-2 text-slate-300 transition hover:bg-cyan-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200" aria-label="Close project details">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <img key={image} src={image} alt={`${project.title} visual ${index + 1}`} className="h-48 w-full rounded-2xl border border-cyan-300/10 object-cover" loading="lazy" />
              ))}
            </div>
            <div>
              <p className="text-base leading-8 text-slate-300">{project.description}</p>
              <div className="mt-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4">
                <p className="font-display font-bold text-white">Engineering impact</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{project.impact}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected Projects" title="Project work shaped for engineering interviews." align="center">
          Each card combines a concise engineering story, technologies used and visual evidence extracted from local project materials.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
            >
              <TiltCard className="glass-card group h-full overflow-hidden rounded-[2rem] hover:border-cyan-200/40 hover:shadow-neon">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={`${project.title} project preview`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-200">{project.subtitle}</p>
                    <h3 id={index === 0 ? 'projects-title' : undefined} className="mt-2 font-display text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-[11px] font-bold text-cyan-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button type="button" onClick={() => setActiveProject(project)} className="mt-5 inline-flex rounded-full border border-cyan-300/30 px-4 py-2 font-display text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
                    View Details
                  </button>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
