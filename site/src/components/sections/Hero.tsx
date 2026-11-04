'use client';

import dynamic from 'next/dynamic';
import { hero } from '@/data/content';
import styles from './Hero.module.scss';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.gradientOrb} aria-hidden="true" />
      <HeroScene />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={`${styles.tag} ${styles.fadeUp}`} style={{ animationDelay: '0.1s' }}>
            <span className={styles.dot} />
            Available for opportunities
          </p>
          <h1 className={`${styles.name} ${styles.fadeUp}`} style={{ animationDelay: '0.2s' }}>
            {hero.name.split(' ')[0]}
            <br />
            <span className={styles.lastName}>{hero.name.split(' ')[1]}</span>
          </h1>
          <p className={`${styles.role} ${styles.fadeUp}`} style={{ animationDelay: '0.35s' }}>{hero.role}</p>
          <p className={`${styles.tagline} ${styles.fadeUp}`} style={{ animationDelay: '0.45s' }}>
            Engineer. <span className={styles.exp}>Creator.</span> Entrepreneur.
          </p>
          <p className={`${styles.intro} ${styles.fadeUp}`} style={{ animationDelay: '0.55s' }}>{hero.intro}</p>
          <div className={`${styles.actions} ${styles.fadeUp}`} style={{ animationDelay: '0.65s' }}>
            <a
              href={hero.cta1.href}
              className={styles.btnPrimary}
              onClick={(e) => { e.preventDefault(); handleScroll(hero.cta1.href); }}
            >
              {hero.cta1.label}
              <span className={styles.arrow} aria-hidden="true">&rarr;</span>
            </a>
            <a
              href={hero.cta2.href}
              className={styles.btnGhost}
              onClick={(e) => { e.preventDefault(); handleScroll(hero.cta2.href); }}
            >
              {hero.cta2.label}
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.scrollLine} ${styles.fadeUp}`} style={{ animationDelay: '0.8s' }}>
        <span>Scroll</span>
        <div className={styles.line} />
      </div>
    </section>
  );
}
