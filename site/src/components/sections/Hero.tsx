'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { hero } from '@/data/content';
import styles from './Hero.module.scss';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = el.querySelectorAll('[data-hero]');
    const glow = el.querySelector('[data-glow]');

    gsap.fromTo(items,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
    );

    if (glow) {
      gsap.fromTo(glow,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out', delay: 0.3 }
      );
    }
  }, []);

  return (
    <section id="home" className={styles.hero} ref={sectionRef}>
      <div className={styles.gradientOrb} data-glow aria-hidden="true" />
      <HeroScene />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.tag} data-hero>
            <span className={styles.dot} />
            Available for opportunities
          </p>
          <h1 className={styles.name} data-hero>
            {hero.name.split(' ')[0]}
            <br />
            <span className={styles.lastName}>{hero.name.split(' ')[1]}</span>
          </h1>
          <p className={styles.role} data-hero>{hero.role}</p>
          <p className={styles.tagline} data-hero>
            Engineer. <span className={styles.exp}>Creator.</span> Entrepreneur.
          </p>
          <p className={styles.intro} data-hero>{hero.intro}</p>
          <div className={styles.actions} data-hero>
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

      <div className={styles.scrollLine} data-hero>
        <span>Scroll</span>
        <div className={styles.line} />
      </div>
    </section>
  );
}
