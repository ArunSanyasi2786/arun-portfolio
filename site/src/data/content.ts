export const siteConfig = {
  name: 'Arun Sanyasi',
  title: 'Arun Sanyasi — Engineer, Creator, Entrepreneur',
  description: 'Instrumentation and Control Engineer based in Bhutan. Automation, content creation, and entrepreneurial services.',
  url: 'https://arunsanyasi2786.github.io/arun-portfolio',
  email: 'sanyasiarun220@gmail.com',
  phone: '+975 17914131',
  location: 'Samdrup Jongkhar, Bhutan',
  github: 'https://github.com/ArunSanyasi2786',
  linkedin: 'https://www.linkedin.com/in/arun-sanyasi-469ba8272/',
  youtube: 'https://www.youtube.com/@aaronZ-z8k',
  instagram: 'https://www.instagram.com/man_on_a_protocol/',
};

export const hero = {
  greeting: 'Hello, I\'m',
  name: 'Arun Sanyasi',
  role: 'Instrumentation & Control Engineer',
  tagline: 'Engineer. Creator. Entrepreneur.',
  intro: 'I build automation systems, create content for Bhutanese creators, and pursue entrepreneurial ventures — driven by curiosity and a commitment to practical impact.',
  cta1: { label: 'Explore My Work', href: '#work' },
  cta2: { label: 'Business Enquiries', href: '#contact' },
};

export const about = {
  title: 'The Person',
  subtitle: 'behind the work',
  paragraphs: [
    'I graduated with a B.E. in Instrumentation and Control Engineering from the College of Science and Technology, Royal University of Bhutan, in June 2026. My training spans hydropower automation, PLC/SCADA commissioning, and industrial electrical systems.',
    'Beyond engineering, I design logos, edit videos, and manage social media for Bhutanese creators. I founded Zumthruel, a virtual-reality gaming venture, and I\'m always exploring ways technology can serve communities.',
    'I\'m motivated by bigger opportunities — to learn, contribute, and grow across engineering, creative work, and management. I\'m open to international teams, remote collaboration, and working across time zones.',
  ],
  highlights: [
    { label: 'Education', value: 'B.E. in ICE, CST Royal University of Bhutan' },
    { label: 'Graduated', value: 'June 2026' },
    { label: 'Languages', value: 'English, Dzongkha, Hindi, Basic Spanish' },
    { label: 'Based in', value: 'Bhutan' },
  ],
};

export const experience = [
  {
    role: 'Graduate Engineer Trainee',
    org: 'Bhutan Automation and Engineering Limited',
    project: 'Dagachhu Hydropower / Tala Panel Works',
    period: '12 weeks',
    focus: 'Hydropower automation, SCADA integration, commissioning',
    points: [
      'Developed inlet, outlet and flushing-gate logic with manual, automatic, remote and local modes on Siemens SICAM A8000.',
      'Built SCALA 250 operator screens, mapped signals and supported testing, field verification and commissioning.',
      'Contributed to ACB/MCCB installation, internal wiring, busbars, controller-card uploads and final inspection.',
    ],
  },
  {
    role: 'Instrumentation & Electrical Automation Intern',
    org: 'Druk Wang Alloys Limited (DWAL)',
    project: 'Ferro-alloy Plant Systems',
    period: 'Dec 2024 – Jan 2025',
    focus: 'Electrical systems, protection, motor control, field instrumentation',
    points: [
      'Gained exposure to switchyard, HT/LT substations, PLC, GCP, MCC, hydraulics and pumphouse systems.',
      'Reviewed differential, overcurrent, under/overvoltage, earth fault and restricted earth fault protection.',
      'Studied DOL, Star-Delta, Forward-Reverse wiring, soft starters, VFDs, RTDs, thermocouples, flow and pressure devices.',
    ],
  },
  {
    role: 'Automation & Digitization Intern',
    org: 'Fuzzy Automation',
    project: 'Receipt Digitization & Facility Support',
    period: 'July 2025',
    focus: 'Receipt digitization, CCTV, networking, device configuration',
    points: [
      'Supported handwritten bill and receipt digitization with structured storage and searchable digital records.',
      'Contributed to capture-to-storage validation, device configuration and troubleshooting.',
      'Assisted hotel CCTV connectivity, equipment checks and task reporting.',
    ],
  },
];

export const projects = [
  {
    title: 'Basic Health Monitoring Station',
    category: 'Biomedical Instrumentation',
    description: 'A Python/PyQt6 health-screening kiosk for Raspberry Pi with ESP32 sensor integration. Measures height, weight, BMI, temperature, pulse, SpO2, and respiratory rate with QR-based report handoff.',
    tech: ['Python', 'PyQt6', 'ESP32', 'Raspberry Pi', 'SQLite'],
    link: 'https://github.com/ArunSanyasi2786/cst_health_kiosk',
    image: '/images/projects/extracted-group-3-basic-health-monitoring-station-01.webp',
    featured: true,
  },
  {
    title: 'PLC-Based Dam Water Level & Gate Control',
    category: 'Industrial Automation',
    description: 'Automated dam gate control system using PLC ladder logic for water-level monitoring and multi-mode gate operation with safety interlocks.',
    tech: ['PLC', 'Ladder Logic', 'SICAM A8000', 'SCALA 250'],
    image: '/images/projects/ai-generated/ai-plc-dam-control.webp',
    featured: true,
  },
  {
    title: 'HVAC Automation & Control',
    category: 'Building Automation',
    description: 'Conceptual HVAC automation system design covering temperature, humidity, and airflow control with energy optimization strategies.',
    tech: ['SCADA', 'PLC', 'Sensors', 'HMI'],
    image: '/images/projects/ai-generated/ai-industrial-electrical-systems.webp',
    featured: false,
  },
  {
    title: 'Vehicle Accident Detection System',
    category: 'IoT & Safety',
    description: 'A concept for detecting vehicle accidents on Bhutanese roads using sensor fusion and automatic emergency alert systems.',
    tech: ['Arduino', 'GPS', 'GSM', 'Accelerometer'],
    image: '/images/projects/ai-generated/ai-smart-vehicle-accident-detector.webp',
    featured: false,
  },
  {
    title: 'Smart Grid & Power System Case Studies',
    category: 'Power Systems',
    description: 'Research on solar microgrids, EV battery management, and solid-state transformers for modern power distribution.',
    tech: ['MATLAB', 'Power Systems', 'Renewable Energy'],
    image: '/images/projects/ai-generated/ai-smart-grid-case-studies.webp',
    featured: false,
  },
];

export const skills = {
  automation: ['PLC Programming', 'Ladder Logic', 'Structured Text', 'SICAM A8000', 'S7-1200', 'SCALA 250', 'TIA Portal', 'WinCC', 'DCS', 'HMI Design', 'CODESYS', 'Factory I/O'],
  instrumentation: ['RTDs', 'Thermocouples', 'Flow Monitors', 'Pressure Transmitters', 'Loop Checks', 'I/O Verification', 'Biomedical Sensors', 'Signal Tracing'],
  electrical: ['HT/LT Panels', 'MCCs', 'ACB/MCCB', 'Motor Control', 'VFDs', 'Protection Systems', 'Switchgear'],
  software: ['Python', 'PyQt6', 'C/C++', 'Arduino IDE', 'SQLite', 'ESP32', 'Raspberry Pi'],
  design: ['AutoCAD Electrical', 'EPLAN Electric P8', 'SolidWorks', 'Fusion 360', 'Blender', 'Proteus'],
  creative: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator', 'Video Editing', 'Logo Design'],
};

export const business = {
  title: 'Business & Services',
  subtitle: 'What I can do for you',
  intro: 'I support creators and businesses through video editing, visual design, social-media management, and technical services. My engineering background adds a unique edge to creative and technical projects alike.',
  services: [
    {
      title: 'Video & Content Editing',
      icon: '🎬',
      description: 'Professional editing for YouTube and social-media content. Color grading, transitions, effects, and delivery tailored to each creator\'s brand.',
      status: 'active',
    },
    {
      title: 'Logos, Banners & Channel Assets',
      icon: '🎨',
      description: 'Visual identity packages including logos, banners, YouTube intros and outros that help creators present a consistent channel identity.',
      status: 'active',
    },
    {
      title: 'Social Media Management',
      icon: '📱',
      description: 'End-to-end social media page management — content planning, scheduling, engagement, and analytics for Bhutanese creators and businesses.',
      status: 'active',
    },
    {
      title: 'Electrical House Wiring & BOQ',
      icon: '⚡',
      description: 'Professional electrical house-wiring BOQ preparation for residential projects. Experienced with multi-storey buildings for consultancy firms.',
      status: 'active',
    },
    {
      title: 'Civil AutoCAD Drawings',
      icon: '📐',
      description: 'Housing drawings and civil drafting support using AutoCAD for residential and commercial projects.',
      status: 'developing',
    },
    {
      title: '3D Modelling & Visualization',
      icon: '🧊',
      description: 'Project-based 3D modelling using Blender and Fusion 360 to visualize designs, products, and architectural concepts.',
      status: 'developing',
    },
    {
      title: 'Content Writing',
      icon: '✍️',
      description: 'Written content for creators and businesses — scripts, descriptions, articles, and marketing copy with a Bhutanese perspective.',
      status: 'developing',
    },
    {
      title: 'Bhutan-Focused Content Ideas',
      icon: '🏔️',
      description: 'Content planning and creative concepts shaped around Bhutanese audiences, communities, culture, and businesses.',
      status: 'developing',
    },
  ],
  collaborations: [
    {
      name: 'Yamu Universe',
      work: 'Brand identity package with five design directions, logos, banners, brand guidelines, and YouTube intro/outro assets.',
    },
  ],
  ventures: [
    {
      name: 'Zumthruel',
      description: 'A virtual-reality gaming venture exploring immersive entertainment opportunities in Bhutan.',
    },
  ],
};

export const leadership = [
  { title: 'Class Representative', detail: 'B.E. cohort during Year 1 and Year 2' },
  { title: 'Public Address Councilor', detail: 'College-wide communication and event coordination' },
  { title: 'Business Idea Competition Winner', detail: 'College level winner, national-level representation' },
  { title: 'Founder — Zumthruel', detail: 'Virtual reality gaming venture' },
  { title: 'IEEE Manuscript', detail: 'Submitted on Basic Health Monitoring Station' },
  { title: 'Student Clubs', detail: 'Entrepreneur Club, GovTech Satellite, Vocational Club, Integrity Club' },
];

export const education = [
  {
    degree: 'B.E. in Instrumentation and Control Engineering',
    institution: 'College of Science and Technology, Royal University of Bhutan',
    period: '2022 – 2026',
    location: 'Phuentsholing, Bhutan',
  },
  {
    degree: 'Class XII — Higher Secondary Education',
    institution: 'Karmaling Higher Secondary School',
    period: '2020 – 2022',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Business', href: '#business' },
  { label: 'Contact', href: '#contact' },
];
