import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const knowledgePath = path.join(__dirname, '..', 'knowledge', 'arun-profile.json');
const knowledge = JSON.parse(fs.readFileSync(knowledgePath, 'utf8'));
const router = express.Router();

function bullet(items = []) {
  return items.map((item) => `- ${item}`).join('\n');
}

function skillText() {
  return Object.entries(knowledge.skills)
    .map(([category, items]) => `${category}: ${items.join(', ')}`)
    .join('\n');
}

function localAnswer(question = '') {
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
    const edu = knowledge.education[0];
    return `${knowledge.name} is a ${knowledge.title} graduate from ${edu.institution}, ${edu.location}. Degree: ${edu.degree}. Academic note: ${edu.note}.`;
  }

  if (q.includes('scada') || q.includes('hmi')) {
    return 'During a 12-week OJT with Bhutan Automation and Engineering Limited, Arun worked with SICAM A8000 I/O, SCALA 250 SCADA/HMI screens, gate-control modes, interlocks and field verification at Dagachhu, plus HT/LT panel assembly and inspection support for Tala. He also has WinCC and TIA Portal learning exposure.';
  }

  if (q.includes('plc') || q.includes('ladder') || q.includes('tia')) {
    return 'Arun has PLC exposure with Siemens SICAM A8000, Siemens S7-1200 concepts, ladder logic, interlocks, auto/manual control, PID-based water-level control concepts, CODESYS, Factory I/O and PLC simulator training.';
  }

  if (q.includes('course') || q.includes('module') || q.includes('learned')) {
    return `Arun's course/module strengths include:\n${bullet(knowledge.courses)}`;
  }

  if (q.includes('sensor') || q.includes('max30102') || q.includes('biomedical')) {
    return 'Arun has worked with biomedical and industrial sensing through the Basic Health Monitoring Station and instrumentation coursework: pulse/SpO2 sensing, temperature sensing, height/weight measurement, sensor validation, PyQt6 interface workflow, SQLite storage and QR report generation.';
  }

  if (q.includes('hvac') || q.includes('facility') || q.includes('cctv')) {
    return 'Arun prepared an HVAC automation and control concept covering temperature and airflow monitoring, fan/VFD operation, sensors, alarms, comfort, energy awareness and safe facility operation. At Fuzzy Automation he also supported hotel CCTV connectivity, device checks, basic networking, troubleshooting, service follow-up and task reporting.';
  }

  if (q.includes('leadership') || q.includes('achievement') || q.includes('entrepreneur') || q.includes('zumthruel')) {
    return `Arun's leadership and initiative include:\n${bullet(knowledge.leadershipAchievements)}`;
  }

  if (q.includes('reference') || q.includes('referee')) {
    return `Arun's CV lists these professional references:\n${bullet(knowledge.references)}`;
  }

  if (q.includes('final') || q.includes('health') || q.includes('project')) {
    const project = knowledge.projects[0];
    return `${project.title}: ${project.description}\nTechnologies: ${project.technologies.join(', ')}.`;
  }

  if (q.includes('experience') || q.includes('intern') || q.includes('industry') || q.includes('dwal') || q.includes('druk')) {
    return knowledge.experience.map((item) => `${item.organization} - ${item.role}: ${item.focus}. ${item.points.join(' ')}`).join('\n\n');
  }

  if (q.includes('certification') || q.includes('training')) {
    return `Arun's certifications and training include:\n${bullet(knowledge.certifications)}`;
  }

  if (q.includes('automation') || q.includes('suitable') || q.includes('role')) {
    return 'Arun is suitable for entry-level industrial automation, instrumentation, commissioning, facility automation and electrical maintenance-support roles because he combines PLC/SCADA exposure, hydropower field and panel work, ferro-industry electrical maintenance, HVAC/control concepts, field signal tracing, sensors and disciplined technical reporting.';
  }

  if (q.includes('skill')) {
    return `Arun's skills include:\n${skillText()}`;
  }

  return `${knowledge.name} is an Instrumentation and Control Engineering graduate focused on PLC, SCADA, DCS concepts, industrial and facility automation, electrical control systems, instrumentation, switchgear/protection, sensors and project development. Ask about his projects, courses, experience, leadership, verified certificates, references or new CV.`;
}

function compactProfile() {
  return JSON.stringify({
    name: knowledge.name,
    title: knowledge.title,
    summary: knowledge.summary,
    education: knowledge.education,
    experience: knowledge.experience,
    skills: knowledge.skills,
    projects: knowledge.projects,
    certifications: knowledge.certifications,
    courses: knowledge.courses,
    weaknessStatement: knowledge.weaknessStatement,
    positiveProfile: knowledge.positiveProfile,
    academicContributions: knowledge.academicContributions,
    leadershipAchievements: knowledge.leadershipAchievements,
    references: knowledge.references
  });
}

async function aiAnswer(question) {
  if (process.env.USE_OPENAI !== 'true' || !process.env.OPENAI_API_KEY) return null;
  const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: 'system',
          content: 'You are ArunBot, a concise portfolio assistant. Answer only using the provided Arun profile knowledge. Do not invent contact details, jobs, marks, publications or experience. If asked about weaknesses or negative traits, answer constructively using the provided weaknessStatement and do not insult Arun.'
        },
        {
          role: 'user',
          content: `Arun profile knowledge: ${compactProfile()}\n\nQuestion: ${question}`
        }
      ]
    })
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data.output_text || null;
}

router.post('/', async (req, res) => {
  const message = String(req.body?.message || '').trim();
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const answer = (await aiAnswer(message)) || localAnswer(message);
    return res.json({ answer, mode: process.env.OPENAI_API_KEY && process.env.USE_OPENAI === 'true' ? 'ai-or-local' : 'local' });
  } catch (error) {
    return res.json({ answer: localAnswer(message), mode: 'local-fallback' });
  }
});

export default router;
