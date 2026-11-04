'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { hero } from '@/data/content';
import styles from './Hero.module.scss';

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
    gsap.set(items, { opacity: 0, y: 30 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2,
    });

    const portrait = el.querySelector('[data-portrait]');
    if (portrait) {
      gsap.set(portrait, { opacity: 0, scale: 0.92 });
      gsap.to(portrait, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
      });
    }
  }, []);

  return (
    <section id="home" className={styles.hero} ref={sectionRef}>
      <div className={styles.bg} aria-hidden="true">ARUN</div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.chapter} data-hero>01 — Introduction</p>
          <h1 className={styles.name} data-hero>{hero.name}</h1>
          <p className={styles.role} data-hero>{hero.role}</p>
          <p className={styles.tagline} data-hero>
            Engineer. <span className={styles.exp}>Creator.</span> Entrepreneur.
          </p>
          <p className={styles.intro} data-hero>{hero.intro}</p>
          <div className={styles.actions} data-hero>
            <a
              href={hero.cta1.href}
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={(e) => { e.preventDefault(); handleScroll(hero.cta1.href); }}
            >
              {hero.cta1.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href={hero.cta2.href}
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={(e) => { e.preventDefault(); handleScroll(hero.cta2.href); }}
            >
              {hero.cta2.label}
            </a>
          </div>
        </div>

        <div className={styles.portrait} data-portrait>
          <div className={styles.imageFrame}>
            <Image
              src="/images/profile/arun-sanyasi-profile.jpg"
              alt="Arun Sanyasi — Instrumentation and Control Engineer"
              width={420}
              height={560}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>Scroll</span>
        <div className={styles.arrow} />
      </div>
    </section>
  );
}
