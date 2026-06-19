import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import TiltCard from '../components/TiltCard.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="skills-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Technical Skills" title="Control systems, instrumentation and industrial automation toolkit." align="center">
          Animated skill cards organized around the technologies Arun can discuss in interviews and apply in engineering support roles.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
            >
              <TiltCard className="glass-card h-full rounded-3xl p-5 hover:border-cyan-200/40 hover:shadow-neon">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">{skill.group}</p>
                <h3 id={index === 0 ? 'skills-title' : undefined} className="mt-3 font-display text-xl font-bold text-white">{skill.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
