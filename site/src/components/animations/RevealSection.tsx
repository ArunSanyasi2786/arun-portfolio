'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './RevealSection.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function RevealSection({ children, className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = `${styles.reveal} ${visible ? styles.visible : ''} ${className || ''}`;

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cls}>
      {children}
    </div>
  );
}
