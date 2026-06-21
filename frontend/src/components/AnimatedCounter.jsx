import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function AnimatedCounter({ end, suffix = '', label, detail }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(reduced ? end : 0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setValue(end);
      return undefined;
    }

    let frame;
    const start = performance.now();
    const duration = 1050;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - ((1 - progress) ** 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, inView, reduced]);

  return (
    <div ref={ref} className="counter-panel rounded-3xl p-5">
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">
        {value}{suffix}
      </p>
      <p className="mt-2 font-display text-sm font-bold text-amber-100">{label}</p>
      <p className="mt-1 text-xs leading-5 text-neutral-500">{detail}</p>
    </div>
  );
}

