import { motion, useScroll, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function ScrollProgress() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 125, damping: 28, mass: 0.22 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200 shadow-[0_0_18px_rgba(245,197,66,0.8)]"
      style={{ scaleX: reduced ? scrollYProgress : smoothProgress }}
    />
  );
}

