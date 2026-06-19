import { motion } from 'framer-motion';
import { orbitTags } from '../data/portfolio.js';

export default function ProfileOrbit({ image }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto aspect-square w-full max-w-[380px]"
    >
      <div className="conic-halo absolute inset-0 rounded-full blur-[1px]" />
      <div className="absolute inset-3 rounded-full bg-slate-950" />
      <div className="absolute inset-5 overflow-hidden rounded-full border border-cyan-200/30 bg-slate-950 shadow-cobalt">
        <img src={image} alt="Arun Sanyasi profile portrait" className="h-full w-full object-cover" loading="lazy" />
        <div className="scanline absolute inset-x-0 top-0 h-1/3" />
      </div>
      <div className="absolute inset-0 hidden sm:block" aria-hidden="true">
        {orbitTags.map((tag, index) => {
          const angle = (360 / orbitTags.length) * index;
          return (
            <span
              key={tag}
              className="absolute left-1/2 top-1/2 rounded-full border border-cyan-200/30 bg-slate-950/80 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-100 shadow-neon backdrop-blur"
              style={{ transform: `rotate(${angle}deg) translate(185px) rotate(-${angle}deg)` }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}
