'use client';

import { useEffect, useRef } from 'react';
import styles from './ProfileImage.module.scss';

const CHARS = '01アイウエオカキクケコサシスセソ';

export default function ProfileImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 280;
    const H = 340;
    canvas.width = W;
    canvas.height = H;

    const fontSize = 12;
    const cols = Math.floor(W / fontSize);
    const drops: number[] = Array(cols).fill(1);

    let animId: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(6, 6, 6, 0.08)';
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const brightness = Math.random();
        if (brightness > 0.7) {
          ctx.fillStyle = 'rgba(240, 68, 50, 0.7)';
        } else {
          ctx.fillStyle = `rgba(240, 240, 240, ${0.15 + Math.random() * 0.15})`;
        }

        ctx.fillText(char, x, y);

        if (y > H && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <img
          src={`${process.env.NODE_ENV === 'production' ? '/arun-portfolio' : ''}/images/profile/arun-sanyasi-profile.jpg`}
          alt="Arun Sanyasi"
          className={styles.photo}
          width={280}
          height={340}
        />
        <canvas ref={canvasRef} className={styles.matrix} aria-hidden="true" />
        <div className={styles.scanline} aria-hidden="true" />
        <div className={styles.border} aria-hidden="true" />
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </div>
  );
}
