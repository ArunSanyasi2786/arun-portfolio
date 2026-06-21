import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function AnimatedBackground() {
  const rootRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 24 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(245,197,66,0.10), transparent 72%)`;
  const particles = useMemo(() => Array.from({ length: 18 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 11) % 100}%`,
    top: `${(index * 53 + 17) % 100}%`,
    delay: (index % 6) * 0.7,
    duration: 7 + (index % 5)
  })), []);

  useEffect(() => {
    if (reduced) return undefined;
    let frame = null;
    const handleMove = (event) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      });
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mouseX, mouseY, reduced]);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_5%,rgba(245,197,66,0.14),transparent_27%),radial-gradient(circle_at_88%_16%,rgba(217,154,0,0.10),transparent_30%),linear-gradient(135deg,#050505_0%,#111111_50%,#050505_100%)]" />
      <div className="engineering-grid absolute inset-0 opacity-[0.085]" />
      <div className="technical-dots absolute inset-0 opacity-[0.18]" />
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      <svg className="circuit-traces absolute inset-0 h-full w-full opacity-[0.18]" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <motion.path d="M-40 180 H210 V310 H430 V220 H670" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 3.4, repeat: reduced ? 0 : Infinity, repeatType: 'reverse', repeatDelay: 1.2 }} />
        <motion.path d="M1480 570 H1210 V440 H1020 V660 H780" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 4, delay: 0.7, repeat: reduced ? 0 : Infinity, repeatType: 'reverse', repeatDelay: 1.4 }} />
        <path d="M80 780 H320 V690 H520" />
        <path d="M980 90 H1160 V180 H1390" />
        {[['210','180'],['430','310'],['1210','570'],['1020','440'],['320','780'],['1160','90']].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />)}
      </svg>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_12px_rgba(255,224,138,0.9)]"
          style={{ left: particle.left, top: particle.top }}
          animate={reduced ? undefined : { y: [0, -24, 0], x: [0, 9, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/[0.04] to-neutral-950/55" />
    </div>
  );
}
