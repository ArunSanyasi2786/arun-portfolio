'use client';

import { siteConfig } from '@/data/content';
import RevealSection from '@/components/animations/RevealSection';
import styles from './Contact.module.scss';

const socials = [
  { label: 'GH', href: siteConfig.github, title: 'GitHub' },
  { label: 'LI', href: siteConfig.linkedin, title: 'LinkedIn' },
  { label: 'YT', href: siteConfig.youtube, title: 'YouTube' },
  { label: 'IG', href: siteConfig.instagram, title: 'Instagram' },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <RevealSection>
          <p className={styles.chapter} data-reveal>05 — Let&apos;s Connect</p>
          <h2 className={styles.title} data-reveal>
            Start a <span className={styles.exp}>conversation</span>
          </h2>
          <p className={styles.subtitle} data-reveal>
            Whether it&apos;s a project, a collaboration, or just a hello — I&apos;d love to hear from you.
          </p>
        </RevealSection>

        <RevealSection className={styles.grid}>
          <div className={styles.info} data-reveal>
            <h3>Get in Touch</h3>

            <div className={styles.contactItem}>
              <span className={styles.icon} aria-hidden="true">@</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.icon} aria-hidden="true">T</span>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.icon} aria-hidden="true">P</span>
              <span>{siteConfig.location}</span>
            </div>

            <div className={styles.socials}>
              <h4>Find me elsewhere</h4>
              <div className={styles.socialLinks}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={s.title}
                    aria-label={s.title}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formSide} data-reveal>
            <h3>Send a Message</h3>
            <form
              className={styles.form}
              action={`https://formspree.io/f/placeholder`}
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                className={styles.textarea}
              />
              <button type="submit" className={styles.submitBtn}>
                Send Message <span aria-hidden="true">&rarr;</span>
              </button>
            </form>
          </div>
        </RevealSection>

        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Arun Sanyasi. Built with intention.</p>
        </footer>
      </div>
    </section>
  );
}
