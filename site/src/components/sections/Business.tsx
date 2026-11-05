'use client';

import { business } from '@/data/content';
import iconMap from '@/components/icons/ServiceIcons';
import RevealSection from '@/components/animations/RevealSection';
import styles from './Business.module.scss';

export default function Business() {
  return (
    <section id="business" className={styles.business}>
      <div className={styles.inner}>
        <RevealSection>
          <p className={styles.chapter} data-reveal>04 — Business & Services</p>
          <h2 className={styles.title} data-reveal>
            What I can <span className={styles.exp}>do for you</span>
          </h2>
          <p className={styles.subtitle} data-reveal>Creative, technical, and engineering services</p>
          <p className={styles.intro} data-reveal>{business.intro}</p>
        </RevealSection>

        <RevealSection className={styles.subsection}>
          <h3 className={styles.subsectionTitle} data-reveal>Services & Capabilities</h3>
          <div className={styles.servicesGrid}>
            {business.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
              <div key={service.title} className={styles.serviceCard} data-reveal>
                <span className={styles.serviceIcon} aria-hidden="true">
                  {Icon ? <Icon size={28} /> : null}
                </span>
                <h4 className={styles.serviceTitle}>
                  {service.title}
                  <span className={`${styles.statusBadge} ${service.status === 'developing' ? styles.developing : ''}`}>
                    {service.status === 'active' ? 'Active' : 'Developing'}
                  </span>
                </h4>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>
              );
            })}
          </div>
        </RevealSection>

        <RevealSection className={styles.subsection}>
          <h3 className={styles.subsectionTitle} data-reveal>Creator Collaborations</h3>
          {business.collaborations.map((collab) => (
            <div key={collab.name} className={styles.collabCard} data-reveal>
              <div className={styles.collabIcon}>{collab.name[0]}</div>
              <div className={styles.collabContent}>
                <h4>{collab.name}</h4>
                <p>{collab.work}</p>
              </div>
            </div>
          ))}
        </RevealSection>

        <RevealSection className={styles.subsection}>
          <h3 className={styles.subsectionTitle} data-reveal>Ventures</h3>
          {business.ventures.map((v) => (
            <div key={v.name} className={styles.ventureCard} data-reveal>
              <div className={styles.collabIcon}>Z</div>
              <div className={styles.collabContent}>
                <h4>{v.name}</h4>
                <p>{v.description}</p>
              </div>
            </div>
          ))}
        </RevealSection>

        <RevealSection className={styles.subsection}>
          <h3 className={styles.subsectionTitle} data-reveal>Working Together</h3>
          <div className={styles.processGrid}>
            {[
              { num: '01', title: 'Enquiry', desc: 'Tell me what you need' },
              { num: '02', title: 'Discussion', desc: 'We align on scope and goals' },
              { num: '03', title: 'Delivery', desc: 'I deliver quality work' },
              { num: '04', title: 'Support', desc: 'Revisions and follow-up' },
            ].map((step) => (
              <div key={step.num} className={styles.processStep} data-reveal>
                <span className={styles.stepNum}>{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className={styles.cta}>
          <p data-reveal>Have a project or opportunity? Let&apos;s discuss what you need, your timeline, and the deliverables.</p>
          <a href="#contact" className={styles.ctaBtn} data-reveal>
            Get in Touch <span aria-hidden="true">&rarr;</span>
          </a>
        </RevealSection>
      </div>
    </section>
  );
}
