'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ProfileImage.module.scss';

const CHARS = '01';

export default function ProfileImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 280;
    const H = 340;
    canvas.width = W;
    canvas.height = H;

    const fontSize = 11;
    const cols = Math.floor(W / (fontSize * 0.7));
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * (H / fontSize));
    const speeds: number[] = Array(cols).fill(0).map(() => 0.3 + Math.random() * 0.7);

    let animId: number;
    const draw = () => {
      const isHovered = hoveredRef.current;
      const fadeAlpha = isHovered ? 0.03 : 0.06;
      ctx.fillStyle = `rgba(6, 6, 6, ${fadeAlpha})`;
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * (fontSize * 0.7);
        const y = drops[i] * fontSize;

        if (isHovered) {
          const brightness = Math.random();
          if (brightness > 0.85) {
            ctx.fillStyle = 'rgba(240, 68, 50, 0.9)';
          } else if (brightness > 0.5) {
            ctx.fillStyle = `rgba(240, 240, 240, ${0.4 + Math.random() * 0.4})`;
          } else {
            ctx.fillStyle = `rgba(240, 240, 240, ${0.1 + Math.random() * 0.2})`;
          }
          ctx.fillText(char, x, y);
        } else {
          if (Math.random() > 0.7) {
            ctx.fillStyle = `rgba(240, 240, 240, ${0.05 + Math.random() * 0.08})`;
            ctx.fillText(char, x, y);
          }
        }

        if (y > H && Math.random() > (isHovered ? 0.95 : 0.98)) {
          drops[i] = 0;
        }
        drops[i] += speeds[i] * (isHovered ? 1.5 : 0.5);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${styles.frame} ${hovered ? styles.hovered : ''}`}>
        <img
          src={`${process.env.NODE_ENV === 'production' ? '/arun-portfolio' : ''}/images/profile/arun-sanyasi-profile.jpg`}
          alt="Arun Sanyasi"
          className={styles.photo}
          width={280}
          height={340}
        />
        <canvas ref={canvasRef} className={styles.matrix} aria-hidden="true" />
        <div className={styles.scanline} aria-hidden="true" />
        <div className={styles.glitchLine} aria-hidden="true" />
        <div className={styles.border} aria-hidden="true" />
        <div className={styles.cornerTL} aria-hidden="true" />
        <div className={styles.cornerBR} aria-hidden="true" />
      </div>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.label}>
        <span className={styles.labelDot} />
        <span>SYS:ACTIVE</span>
      </div>
    </div>
  );
}
