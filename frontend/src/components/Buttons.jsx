import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

function MagneticAction({ href, children, onClick, download = false, variant = 'primary' }) {
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const Component = href ? motion.a : motion.button;
  const classes = variant === 'primary'
    ? 'premium-cta premium-cta-primary group text-neutral-950 shadow-neon'
    : 'premium-cta premium-cta-ghost group text-amber-100';

  function handlePointerMove(event) {
    if (reduced || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    setOffset({ x, y });
  }

  const props = href
    ? { href, download }
    : { type: 'button' };

  return (
    <Component
      {...props}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.25 }}
      className={classes}
    >
      <span className="button-shine" aria-hidden="true" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === 'primary' && <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
    </Component>
  );
}

export function PrimaryButton(props) {
  return <MagneticAction {...props} variant="primary" />;
}

export function GhostButton(props) {
  return <MagneticAction {...props} variant="ghost" />;
}
