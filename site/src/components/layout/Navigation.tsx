'use client';

import { useState, useEffect } from 'react';
import { navItems } from '@/data/content';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); handleClick('#home'); }}>
            Arun<span>.</span>
          </a>

          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.link}
                  onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
