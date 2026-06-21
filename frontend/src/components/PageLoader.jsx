import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduced ? 120 : 780);
    return () => window.clearTimeout(timeout);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduced ? 0.05 : 0.35 } }}
          className="fixed inset-0 z-[120] grid place-items-center bg-[#050505]"
          role="status"
          aria-label="Initializing portfolio interface"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[min(86vw,440px)] text-center"
          >
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-amber-300/40 bg-amber-300/10 font-display text-lg font-bold text-amber-100 shadow-neon">
              AS
            </div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-100">
              Initializing Automation Interface...
            </p>
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: reduced ? 0.08 : 0.72, ease: 'easeInOut' }}
                className="h-full w-2/3 bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-neon"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
