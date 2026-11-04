import {
  siteConfig, hero, about, experience, projects, skills,
  business, leadership, education,
} from '@/data/content';

interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['who', 'about', 'yourself', 'introduce', 'tell me about', 'arun'],
    response: `Arun Sanyasi is an Instrumentation & Control Engineer from ${siteConfig.location}. ${hero.intro} He graduated with a ${about.highlights[0].value} in ${about.highlights[1].value}.`,
  },
  {
    keywords: ['education', 'study', 'degree', 'university', 'college', 'school', 'qualification', 'cst'],
    response: `Arun holds a ${education[0].degree} from ${education[0].institution} (${education[0].period}). Before that, he completed ${education[1].degree} from ${education[1].institution} (${education[1].period}). He speaks ${about.highlights[2].value}.`,
  },
  {
    keywords: ['experience', 'work history', 'internship', 'intern', 'job', 'career', 'trainee', 'employment'],
    response: `Arun has three professional experiences:\n\n• **${experience[0].role}** at ${experience[0].org} (${experience[0].period}) — ${experience[0].focus}\n• **${experience[1].role}** at ${experience[1].org} (${experience[1].period}) — ${experience[1].focus}\n• **${experience[2].role}** at ${experience[2].org} (${experience[2].period}) — ${experience[2].focus}`,
  },
  {
    keywords: ['bhutan automation', 'bael', 'dagachhu', 'tala', 'hydropower', 'scada', 'sicam'],
    response: `At ${experience[0].org}, Arun worked on ${experience[0].project} for ${experience[0].period}. He ${experience[0].points[0]} He also ${experience[0].points[1].toLowerCase()}`,
  },
  {
    keywords: ['dwal', 'druk wang', 'alloy', 'ferro'],
    response: `At ${experience[1].org}, Arun interned from ${experience[1].period} on ${experience[1].project}. He ${experience[1].points[0]} He also ${experience[1].points[1].toLowerCase()}`,
  },
  {
    keywords: ['fuzzy', 'digitization', 'receipt'],
    response: `At ${experience[2].org} (${experience[2].period}), Arun worked on ${experience[2].project}. He ${experience[2].points[0]} He also ${experience[2].points[1].toLowerCase()}`,
  },
  {
    keywords: ['project', 'built', 'portfolio', 'health', 'kiosk', 'monitoring'],
    response: `Arun's featured projects include:\n\n• **${projects[0].title}** — ${projects[0].description}\n• **${projects[1].title}** — ${projects[1].description}\n• **${projects[2].title}** — ${projects[2].description}\n• **${projects[3].title}** — ${projects[3].description}\n• **${projects[4].title}** — ${projects[4].description}`,
  },
  {
    keywords: ['plc', 'dam', 'water level', 'gate control', 'ladder logic'],
    response: `${projects[1].title}: ${projects[1].description} Technologies used: ${projects[1].tech.join(', ')}.`,
  },
  {
    keywords: ['skill', 'technology', 'tech stack', 'tools', 'know', 'programming', 'software'],
    response: `Arun's technical skills span multiple domains:\n\n• **Automation:** ${skills.automation.slice(0, 6).join(', ')}\n• **Instrumentation:** ${skills.instrumentation.slice(0, 5).join(', ')}\n• **Electrical:** ${skills.electrical.slice(0, 5).join(', ')}\n• **Software:** ${skills.software.join(', ')}\n• **Design:** ${skills.design.slice(0, 4).join(', ')}\n• **Creative:** ${skills.creative.join(', ')}`,
  },
  {
    keywords: ['service', 'business', 'offer', 'hire', 'freelance', 'work with', 'help'],
    response: `Arun offers these services:\n\n${business.services.filter(s => s.status === 'active').map(s => `• **${s.title}** — ${s.description}`).join('\n')}\n\nHe's also developing: ${business.services.filter(s => s.status === 'developing').map(s => s.title).join(', ')}.`,
  },
  {
    keywords: ['video', 'editing', 'content', 'youtube', 'creator'],
    response: `Arun provides professional video & content editing services — ${business.services[0].description} He also manages social media for Bhutanese creators and businesses.`,
  },
  {
    keywords: ['logo', 'design', 'banner', 'brand', 'identity', 'visual'],
    response: `Arun creates visual identity packages — ${business.services[1].description} He collaborated with ${business.collaborations[0].name}: ${business.collaborations[0].work}`,
  },
  {
    keywords: ['zumthruel', 'venture', 'startup', 'vr', 'virtual reality', 'gaming'],
    response: `Arun founded **Zumthruel** — ${business.ventures[0].description} He also won a Business Idea Competition at college level and represented at the national level.`,
  },
  {
    keywords: ['leadership', 'achievement', 'award', 'club', 'extracurricular'],
    response: `Arun's leadership and achievements:\n\n${leadership.map(l => `• **${l.title}** — ${l.detail}`).join('\n')}`,
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'hire'],
    response: `You can reach Arun at:\n\n• **Email:** ${siteConfig.email}\n• **Phone:** ${siteConfig.phone}\n• **Location:** ${siteConfig.location}\n• **GitHub:** [ArunSanyasi2786](${siteConfig.github})\n• **LinkedIn:** [Arun Sanyasi](${siteConfig.linkedin})\n\nOr use the contact form in the Contact section below!`,
  },
  {
    keywords: ['location', 'where', 'country', 'city', 'bhutan', 'based'],
    response: `Arun is based in ${siteConfig.location}. He graduated from the College of Science and Technology in Phuentsholing, Bhutan. He's open to international teams, remote collaboration, and working across time zones.`,
  },
  {
    keywords: ['language', 'speak', 'dzongkha', 'hindi', 'spanish', 'english'],
    response: `Arun speaks ${about.highlights[2].value}. His multilingual ability makes him well-suited for international and cross-cultural collaboration.`,
  },
  {
    keywords: ['autocad', 'eplan', 'solidworks', 'fusion', 'blender', '3d', 'cad', 'drawing'],
    response: `Arun has design & CAD skills in: ${skills.design.join(', ')}. He offers Civil AutoCAD Drawings and 3D Modelling & Visualization as developing services using Blender and Fusion 360.`,
  },
  {
    keywords: ['electrical', 'wiring', 'boq', 'panel', 'motor', 'vfd', 'protection'],
    response: `Arun has electrical engineering expertise in: ${skills.electrical.join(', ')}. He offers professional electrical house-wiring BOQ preparation for residential projects and has experience with multi-storey buildings.`,
  },
  {
    keywords: ['python', 'pyqt', 'arduino', 'esp32', 'raspberry', 'sqlite', 'code', 'program'],
    response: `Arun's software skills include: ${skills.software.join(', ')}. His Health Monitoring Station project showcases his Python/PyQt6 and embedded systems expertise with ESP32 and Raspberry Pi.`,
  },
  {
    keywords: ['ieee', 'paper', 'research', 'manuscript', 'publication'],
    response: `Arun submitted an IEEE manuscript on his **Basic Health Monitoring Station** project — a Python/PyQt6 health-screening kiosk for Raspberry Pi with ESP32 sensor integration.`,
  },
  {
    keywords: ['yamu', 'collaboration', 'client'],
    response: `Arun collaborated with **${business.collaborations[0].name}** — ${business.collaborations[0].work} He's open to more creator collaborations.`,
  },
  {
    keywords: ['social media', 'instagram', 'manage'],
    response: `Arun offers end-to-end social media management — ${business.services[2].description}\n\nFind him on:\n• Instagram: @man_on_a_protocol\n• YouTube: @aaronZ-z8k`,
  },
];

const greetings = [
  'hi', 'hello', 'hey', 'howdy', 'sup', 'yo', 'greetings', 'good morning',
  'good afternoon', 'good evening', 'what\'s up', 'namaste',
];

const farewells = [
  'bye', 'goodbye', 'see you', 'later', 'thanks', 'thank you', 'cheers',
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, '').trim();
}

function scoreMatch(query: string, keywords: string[]): number {
  const q = normalize(query);
  let score = 0;
  for (const kw of keywords) {
    if (q.includes(kw)) {
      score += kw.split(' ').length * 2;
    }
    for (const word of kw.split(' ')) {
      if (q.includes(word) && word.length > 2) {
        score += 1;
      }
    }
  }
  return score;
}

export function getResponse(userMessage: string): string {
  const q = normalize(userMessage);

  if (greetings.some(g => q.includes(g)) && q.split(' ').length <= 4) {
    return `Hey! I'm Arun's portfolio assistant. I can tell you about his engineering background, projects, skills, services, and more. What would you like to know?`;
  }

  if (farewells.some(f => q.includes(f)) && q.split(' ').length <= 5) {
    return `Thanks for visiting! If you'd like to work with Arun or discuss opportunities, head to the **Contact** section or email him at ${siteConfig.email}. Take care!`;
  }

  let bestScore = 0;
  let bestResponse = '';

  for (const entry of knowledgeBase) {
    const score = scoreMatch(userMessage, entry.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestResponse = entry.response;
    }
  }

  if (bestScore >= 2) {
    return bestResponse;
  }

  return `I can only answer questions about Arun Sanyasi — his education, experience, projects, skills, services, and contact info. Try asking something like:\n\n• "What are Arun's skills?"\n• "Tell me about his projects"\n• "What services does he offer?"\n• "How can I contact him?"`;
}

export const suggestedQuestions = [
  'Who is Arun?',
  'What are his skills?',
  'Tell me about his projects',
  'What services does he offer?',
  'How can I contact him?',
];
