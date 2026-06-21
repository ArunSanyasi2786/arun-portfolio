import { motion } from 'framer-motion';
import { orbitTags } from '../data/portfolio.js';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function ProfileOrbit({ image }) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto aspect-square w-full max-w-[430px]"
    >
      <div className="absolute inset-[-18px] rounded-full border border-amber-300/10 bg-amber-300/[0.025] blur-[1px]" />
      <div className="orbit-track absolute inset-[-8px] hidden rounded-full border border-dashed border-amber-300/20 sm:block" />
      <div className="conic-halo absolute inset-0 rounded-full blur-[1px]" />
      <div className="absolute inset-4 rounded-full bg-neutral-950" />
      <div className="absolute inset-7 overflow-hidden rounded-full border border-amber-200/30 bg-neutral-950 shadow-cobalt">
        <img src={image} alt="Arun Sanyasi profile portrait" className="h-full w-full object-cover" loading="lazy" />
        <div className="scanline absolute inset-x-0 top-0 h-1/3" />
      </div>
      <motion.div
        className="absolute inset-0 hidden sm:block"
        aria-hidden="true"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={reduced ? undefined : { duration: 42, ease: 'linear', repeat: Infinity }}
      >
        {orbitTags.map((tag, index) => {
          const angle = (360 / orbitTags.length) * index;
          return (
            <span
              key={tag}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translate(215px) rotate(-${angle}deg)` }}
            >
              <motion.span
                animate={reduced ? undefined : { rotate: -360 }}
                transition={reduced ? undefined : { duration: 42, ease: 'linear', repeat: Infinity }}
                className="orbit-chip block whitespace-nowrap rounded-full border border-amber-200/30 bg-neutral-950/88 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-100 shadow-neon backdrop-blur"
              >
                {tag}
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
