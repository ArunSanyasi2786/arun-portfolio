export default function TiltCard({ children, className = '' }) {
  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / rect.height) * 8);
    event.currentTarget.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
  }

  function reset(event) {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  }

  return (
    <div onMouseMove={handleMove} onMouseLeave={reset} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
}
