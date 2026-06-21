import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function TiltCard({ children, className = '' }) {
  const reduced = usePrefersReducedMotion();

  function handleMove(event) {
    if (reduced || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / rect.height) * 8);
    event.currentTarget.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--shine-x', `${((x / rect.width) * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty('--shine-y', `${((y / rect.height) * 100).toFixed(1)}%`);
  }

  function reset(event) {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  }

  return (
    <div onPointerMove={handleMove} onPointerLeave={reset} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
}
