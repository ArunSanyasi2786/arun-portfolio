'use client';

import { about, experience, leadership } from '@/data/content';
import RevealSection from '@/components/animations/RevealSection';
import styles from './Story.module.scss';

export default function Story() {
  return (
    <section id="story" className={styles.story}>
      <div className={styles.inner}>
        <RevealSection>
          <p className={styles.chapter} data-reveal>02 — The Person</p>
          <h2 className={styles.title} data-reveal>
            The Person <span className={styles.exp}>behind the work</span>
          </h2>
          <p className={styles.subtitle} data-reveal>Engineer, creator, and lifelong learner from Bhutan</p>
        </RevealSection>

        <RevealSection className={styles.grid}>
          <div className={styles.text} data-reveal>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.sidebar} data-reveal>
            {about.highlights.map((h) => (
              <div key={h.label} className={styles.highlight}>
                <p className={styles.hlLabel}>{h.label}</p>
                <p className={styles.hlValue}>{h.value}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className={styles.experience}>
          <h3 className={styles.expTitle} data-reveal>Experience</h3>
          <div className={styles.timeline}>
            {experience.map((exp, i) => (
              <div key={i} className={styles.timelineItem} data-reveal>
                <div className={styles.timeMeta}>
                  <p className={styles.period}>{exp.period}</p>
                  <p className={styles.org}>{exp.org}</p>
                </div>
                <div className={styles.timeContent}>
                  <h4 className={styles.role}>{exp.role}</h4>
                  <p className={styles.focus}>{exp.focus}</p>
                  <ul>
                    {exp.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className={styles.experience}>
          <h3 className={styles.expTitle} data-reveal>Leadership & Achievements</h3>
          <div className={styles.leadershipGrid}>
            {leadership.map((item) => (
              <div key={item.title} className={styles.leaderCard} data-reveal>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
