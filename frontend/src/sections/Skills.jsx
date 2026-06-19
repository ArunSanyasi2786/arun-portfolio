import { motion } from 'framer-motion';
import { Handshake, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import TiltCard from '../components/TiltCard.jsx';
import { softSkills, technicalSkills } from '../data/portfolio.js';

function SkillGrid({ items, type = 'technical' }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
        >
          <TiltCard className="glass-card group h-full rounded-3xl p-5 hover:border-cyan-200/40 hover:shadow-neon">
            {type === 'technical' ? (
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">{skill.group}</p>
            ) : (
              <div className="mb-2 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100">Professional</div>
            )}
            <h3 id={index === 0 && type === 'technical' ? 'skills-title' : undefined} className="mt-3 font-display text-xl font-bold text-white">{skill.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-xs font-semibold text-slate-300 transition group-hover:border-cyan-200/30 group-hover:text-white">
                  {item}
                </span>
              ))}
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="skills-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Technical strength plus professional working habits." align="center">
          The skill set now covers automation, electrical systems, instrumentation, networking, reporting, teamwork and safety behavior for industrial roles.
        </SectionHeading>
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Wrench className="h-5 w-5" /></div>
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">Technical Skills</p>
            <h3 className="font-display text-2xl font-bold text-white">Automation, electrical and instrumentation toolkit</h3>
          </div>
        </div>
        <SkillGrid items={technicalSkills} />
        <div className="mb-7 mt-14 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Handshake className="h-5 w-5" /></div>
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">Soft Skills</p>
            <h3 className="font-display text-2xl font-bold text-white">How Arun works with teams and problems</h3>
          </div>
        </div>
        <SkillGrid items={softSkills} type="soft" />
      </div>
    </section>
  );
}