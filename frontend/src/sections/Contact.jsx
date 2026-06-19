import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { contact } from '../data/portfolio.js';

function apiBase() {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL.replace(/\/$/, '');
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return '';
  return null;
}

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const base = apiBase();
    setStatus('sending');
    try {
      if (base !== null) {
        await fetch(`${base}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }
      setStatus('sent');
      event.currentTarget.reset();
    } catch {
      setStatus('offline');
    }
  }

  const links = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: Github, label: 'GitHub', value: 'ArunSanyasi2786', href: contact.github },
    { icon: Linkedin, label: 'LinkedIn', value: contact.linkedin, href: '#' },
    { icon: MapPin, label: 'Location', value: contact.location, href: '#' }
  ];

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Ready for industrial automation opportunities.">
          Use the contact form or reach out directly for instrumentation, automation, control systems, trainee engineer, commissioning, or electrical maintenance roles.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="glass-card flex items-center gap-4 rounded-3xl p-5 transition hover:border-cyan-200/40 hover:bg-cyan-300/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Icon className="h-5 w-5" /></span>
                  <span>
                    <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">{item.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-200">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card neon-border rounded-[2rem] p-6 sm:p-8"
          >
            <h3 id="contact-title" className="font-display text-2xl font-bold text-white">Send a message</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-300">
                Name
                <input name="name" required className="mt-2 w-full rounded-2xl border border-cyan-300/15 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300" placeholder="Your name" />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Email
                <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-cyan-300/15 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold text-slate-300">
              Subject
              <input name="subject" className="mt-2 w-full rounded-2xl border border-cyan-300/15 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300" placeholder="Industrial automation opportunity" />
            </label>
            <label className="mt-4 block text-sm font-semibold text-slate-300">
              Message
              <textarea name="message" required rows="5" className="mt-2 w-full resize-none rounded-2xl border border-cyan-300/15 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300" placeholder="Tell me about the role or project..." />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-slate-950 shadow-neon transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">
              <Send className="h-4 w-4" /> {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="mt-4 text-sm font-semibold text-cyan-200">Message captured successfully. Backend email delivery can be connected later.</p>}
            {status === 'offline' && <p className="mt-4 text-sm font-semibold text-amber-200">Backend is offline, but the form UI is ready. Deploy the API to collect messages.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
