import { motion } from 'framer-motion';
import { revealText, revealViewport } from '../utils/motion.js';

export default function SectionHeading({ eyebrow, title, children, align = 'left' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={revealText}
      className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}
    >
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.35em] text-amber-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-8 text-neutral-300 sm:text-lg">{children}</p> : null}
    </motion.div>
  );
}
