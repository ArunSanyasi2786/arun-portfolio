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

  if (q.includes('cv') || q.includes('resume') || q.includes('download')) {
    return 'Use the Download Portfolio PDF button on the website. Add the PDF at frontend/public/files/arun-portfolio.pdf and the button will enable automatically.';
  }

  if (q.includes('education') || q.includes('college') || q.includes('graduate')) {
    const edu = knowledge.education[0];
    return `${knowledge.name} is a ${knowledge.title} graduate from ${edu.institution}, ${edu.location}. Degree: ${edu.degree}. Academic note: ${edu.note}.`;
  }

  if (q.includes('scada') || q.includes('hmi')) {
    return 'Arun has SCADA/HMI exposure from Bhutan Automation at Dagachhu Hydropower Plant, where he built SCALA 250 screens for equipment status, alarms and gate visualization. He also has TIA Portal, WinCC and HMI learning exposure.';
  }

  if (q.includes('plc') || q.includes('ladder') || q.includes('tia')) {
    return 'Arun has PLC exposure with Siemens SICAM A8000, Siemens S7-1200 concepts, ladder logic, interlocks, auto/manual control, PID-based water-level control concepts, CODESYS, Factory I/O and PLC simulator training.';
  }

  if (q.includes('sensor') || q.includes('esp32') || q.includes('raspberry') || q.includes('max30102')) {
    return 'Arun has worked with ESP32, Raspberry Pi, MAX30102 SpO2/pulse sensing, temperature sensors, biomedical sensors, serial communication and PyQt6 kiosk UI development through the Basic Health Monitoring Station.';
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
    return 'Arun is suitable for entry-level industrial automation, instrumentation, commissioning support, control systems and electrical maintenance roles because he has PLC/SCADA exposure, hydropower commissioning work, ferro-industry maintenance exposure, sensors, field signal tracing, embedded systems and documentation discipline.';
  }

  if (q.includes('skill')) {
    return `Arun's skills include:\n${skillText()}`;
  }

  return `${knowledge.name} is an Instrumentation and Control Engineering graduate focused on PLC, SCADA, DCS concepts, industrial automation, electrical control systems, instrumentation, sensors, ESP32, Raspberry Pi and project development. Ask about his projects, SCADA, PLC, sensors, education or experience.`;
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
    academicContributions: knowledge.academicContributions
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
          content: 'You are ArunBot, a concise portfolio assistant. Answer only using the provided Arun profile knowledge. Do not invent contact details, jobs, marks, publications or experience.'
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
