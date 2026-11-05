'use client';

import Image from 'next/image';
import { projects, skills, certifications } from '@/data/content';
import { CertificateIcon } from '@/components/icons/ServiceIcons';
import { asset } from '@/lib/basePath';
import RevealSection from '@/components/animations/RevealSection';
import styles from './Work.module.scss';

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className={styles.work}>
      <div className={styles.inner}>
        <RevealSection>
          <p className={styles.chapter} data-reveal>03 — Selected Work</p>
          <h2 className={styles.title} data-reveal>
            Things I&apos;ve <span className={styles.exp}>built</span>
          </h2>
          <p className={styles.subtitle} data-reveal>Engineering projects, research, and practical systems</p>
        </RevealSection>

        <div className={styles.featured}>
          {featured.map((project) => (
            <RevealSection key={project.title} className={styles.projectCard}>
              <div className={styles.projectImage} data-reveal>
                {project.image && (
                  <Image src={asset(project.image)} alt={project.title} width={600} height={375} />
                )}
              </div>
              <div className={styles.projectContent} data-reveal>
                <p className={styles.category}>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Project <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </RevealSection>
          ))}
        </div>

        {others.length > 0 && (
          <RevealSection className={styles.otherProjects}>
            <h3 data-reveal>Other Projects</h3>
            <div className={styles.smallGrid}>
              {others.map((project) => (
                <div key={project.title} className={styles.smallCard} data-reveal>
                  <p className={styles.category}>{project.category}</p>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        )}

        <RevealSection className={styles.certs}>
          <h3 className={styles.skillsTitle} data-reveal>Certifications & Training</h3>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.certCard} data-reveal>
                <span className={styles.certIcon}><CertificateIcon size={20} /></span>
                <div>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  <p className={styles.certOrg}>{cert.org}{cert.detail ? ` — ${cert.detail}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className={styles.skills}>
          <h3 className={styles.skillsTitle} data-reveal>Technical Skills</h3>
          <div className={styles.skillGroups}>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className={styles.skillGroup} data-reveal>
                <h4>{group}</h4>
                <div className={styles.skillList}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
