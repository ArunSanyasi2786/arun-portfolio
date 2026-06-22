import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Download, MessageCircle, Send, X } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import knowledge from '../data/arun-profile.json';

function getApiBase() {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL.replace(/\/$/, '');
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return '';
  return null;
}

function list(items = []) {
  return items.map((item) => `- ${item}`).join('\n');
}

function flattenSkills() {
  return Object.entries(knowledge.skills)
    .map(([category, items]) => `${category}: ${items.join(', ')}`)
    .join('\n');
}

function localAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes('weakness') || q.includes('negative') || q.includes('bad thing') || q.includes('bad about')) {
    return knowledge.weaknessStatement;
  }

  if (q.includes('behaviour') || q.includes('behavior') || q.includes('personality') || q.includes('good thing') || q.includes('strength')) {
    return knowledge.positiveProfile;
  }

  if (q.includes('cv') || q.includes('resume') || q.includes('download')) {
    return 'Use the CV / Resume / Portfolio section to download Arun\'s new one-page application resume or his authoritative four-page detailed CV. Supporting project and experience documents are available in the same document hub.';
  }

  if (q.includes('education') || q.includes('college') || q.includes('graduate')) {
    return `${knowledge.name} is a ${knowledge.title} graduate from ${knowledge.education[0].institution}. His B.E. is in Instrumentation and Control Engineering, with ${knowledge.education[0].note}.`;
  }

  if (q.includes('scada') || q.includes('hmi')) {
    return 'During a 12-week OJT with Bhutan Automation and Engineering Limited, Arun worked with SICAM A8000 I/O, SCALA 250 SCADA/HMI screens, gate-control modes, interlocks and field verification at Dagachhu, plus HT/LT panel assembly and inspection support for Tala. He also has WinCC and TIA Portal learning exposure.';
  }

  if (q.includes('plc') || q.includes('ladder') || q.includes('tia')) {
    return 'Arun has PLC experience with Siemens SICAM A8000, Siemens S7-1200 concepts, ladder logic, interlocks, auto/manual modes, PID-based level control concepts, Factory I/O, CODESYS and PLC simulator training.';
  }

  if (q.includes('course') || q.includes('module') || q.includes('learned')) {
    return `Arun's course/module strengths include:\n${list(knowledge.courses)}`;
  }

  if (q.includes('sensor') || q.includes('max30102') || q.includes('biomedical')) {
    return 'Arun has worked with biomedical and industrial sensing through the Basic Health Monitoring Station and instrumentation coursework: pulse/SpO2 sensing, temperature sensing, height/weight measurement, sensor validation, PyQt6 interface workflow, SQLite storage and QR report generation.';
  }

  if (q.includes('hvac') || q.includes('facility') || q.includes('cctv')) {
    return 'Arun prepared an HVAC automation and control concept covering temperature and airflow monitoring, fan/VFD operation, sensors, alarms, comfort, energy awareness and safe facility operation. At Fuzzy Automation he also supported hotel CCTV connectivity, device checks, basic networking, troubleshooting, service follow-up and task reporting.';
  }

  if (q.includes('leadership') || q.includes('achievement') || q.includes('entrepreneur') || q.includes('zumthruel')) {
    return `Arun's leadership and initiative include:\n${list(knowledge.leadershipAchievements)}`;
  }

  if (q.includes('reference') || q.includes('referee')) {
    return `Arun's CV lists these professional references:\n${list(knowledge.references)}`;
  }

  if (q.includes('final') || q.includes('health') || q.includes('project')) {
    const project = knowledge.projects[0];
    return `${project.title}: ${project.description} Technologies include ${project.technologies.join(', ')}. The project covers hardware, embedded firmware, sensor calibration, GUI workflow, data handling and QR report generation.`;
  }

  if (q.includes('experience') || q.includes('intern') || q.includes('industry')) {
    return knowledge.experience.map((item) => `${item.organization}: ${item.focus}. ${item.points[0]}`).join('\n\n');
  }

  if (q.includes('automation') || q.includes('suitable') || q.includes('role')) {
    return 'Yes. Arun is suitable for entry-level industrial automation, instrumentation, commissioning, facility automation and electrical maintenance-support roles because he combines PLC/SCADA exposure, hydropower field and panel work, ferro-industry electrical maintenance, HVAC/control concepts, field signal tracing, sensors and disciplined technical reporting.';
  }

  if (q.includes('certification') || q.includes('training')) {
    return `Arun's certifications/training include:\n${list(knowledge.certifications)}`;
  }

  if (q.includes('skill')) {
    return `Arun's skill areas include:\n${flattenSkills()}`;
  }

  return `${knowledge.name} is an Instrumentation and Control Engineering graduate focused on PLC, SCADA, DCS concepts, industrial and facility automation, electrical control systems, instrumentation, switchgear/protection, sensors and project development. Ask about his projects, courses, experience, leadership, verified certificates, references or new CV.`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi, I am ArunBot. Ask me about Arun\'s projects, PLC/SCADA skills, courses, electrical exposure, soft skills, weakness answer or CV.' }
  ]);
  const inputRef = useRef(null);
  const suggestions = useMemo(() => knowledge.chatSuggestedPrompts, []);

  async function ask(text) {
    const question = text.trim();
    if (!question) return;
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setTyping(true);
    const base = getApiBase();
    try {
      if (base !== null) {
        const response = await fetch(`${base}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: question })
        });
        if (response.ok) {
          const data = await response.json();
          setMessages((prev) => [...prev, { role: 'bot', content: data.answer }]);
          setTyping(false);
          return;
        }
      }
      throw new Error('fallback');
    } catch {
      window.setTimeout(() => {
        setMessages((prev) => [...prev, { role: 'bot', content: localAnswer(question) }]);
        setTyping(false);
      }, 450);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const value = inputRef.current?.value || '';
    inputRef.current.value = '';
    ask(value);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[620px] max-h-[calc(100vh-7rem)] w-[min(92vw,390px)] flex-col overflow-hidden rounded-[2rem] border border-amber-300/20 bg-neutral-950/82 shadow-cobalt backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-amber-300/10 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-300/10 text-amber-300"><Bot className="h-5 w-5" /></div>
                <div>
                  <p className="font-display font-bold text-white">ArunBot</p>
                  <p className="text-xs text-amber-200">Portfolio assistant</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 text-neutral-300 hover:bg-amber-300/10 hover:text-white" aria-label="Close ArunBot">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'ml-auto max-w-[82%]' : 'mr-auto max-w-[88%]'}>
                  <div className={`whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'bg-amber-300 text-neutral-950' : 'bg-white/[0.06] text-neutral-200'}`}>
                    {message.content}
                  </div>
                </div>
              ))}
              {typing && <div className="mr-auto w-fit rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-amber-100">ArunBot is typing...</div>}
            </div>
            <div className="border-t border-amber-300/10 p-4">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {suggestions.slice(0, 4).map((prompt) => (
                  <button key={prompt} type="button" onClick={() => ask(prompt)} className="shrink-0 rounded-full border border-amber-300/20 px-3 py-1.5 text-xs font-semibold text-amber-100 hover:bg-amber-300/10">
                    {prompt}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input ref={inputRef} className="min-w-0 flex-1 rounded-full border border-amber-300/15 bg-neutral-950/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500" placeholder="Ask about Arun..." aria-label="Ask ArunBot" />
                <button type="submit" className="grid h-12 w-12 place-items-center rounded-full bg-amber-300 text-neutral-950 hover:bg-white" aria-label="Send message">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" onClick={() => setOpen((value) => !value)} className="group grid h-16 w-16 place-items-center rounded-full bg-amber-300 text-neutral-950 shadow-neon transition hover:scale-105 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200" aria-label="Open ArunBot chatbot">
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        {!open && <Download className="absolute -left-1 -top-1 h-4 w-4 rounded-full bg-neutral-950 p-0.5 text-amber-200 opacity-80" />}
      </button>
    </div>
  );
}
