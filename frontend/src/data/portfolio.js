import profileImage from '../assets/profile/arun-sanyasi-profile.jpg';
import kioskMachine from '../assets/projects/bhms-kiosk-machine.webp';
import measuringAssistant from '../assets/projects/bhms-measuring-assistant.webp';
import resultsInterface from '../assets/projects/bhms-results-interface.webp';
import qrInterface from '../assets/projects/bhms-qr-interface.webp';
import sensorChart from '../assets/projects/sensor-reference-chart.webp';
import sampleOutput from '../assets/projects/bhms-sample-output.webp';
import reportPreview from '../assets/projects/final-report-preview.webp';
import extractedPptDevice from '../assets/projects/extracted-basic-health-monitoring-station-02.webp';
import extractedDashboard from '../assets/projects/extracted-group-3-basic-health-monitoring-station-01.webp';

export const contact = {
  email: 'sanyasiarun220@gmail.com',
  phone: '+975 77694520',
  location: 'Samdrup Jongkhar, Bhutan',
  github: 'https://github.com/ArunSanyasi2786',
  linkedin: 'Add your LinkedIn URL'
};

export const hero = {
  name: 'Arun Sanyasi',
  role: 'Instrumentation and Control Engineer',
  line: 'PLC | SCADA | DCS | Industrial Automation | Control Systems',
  intro:
    'Engineering graduate focused on industrial automation, PLC/SCADA commissioning, instrumentation, embedded systems and reliable electrical control systems.',
  profileImage
};

export const orbitTags = ['PLC', 'SCADA', 'DCS', 'HMI', 'ESP32', 'Raspberry Pi', 'Sensors', 'Automation', 'Control Systems'];

export const aboutHighlights = [
  'Instrumentation and Control Engineering graduate from College of Science and Technology, Royal University of Bhutan.',
  'Hands-on exposure to PLC/SCADA commissioning, hydropower gate-control workflows, switchyard systems, MCCs and industrial electrical maintenance.',
  'Built and documented final-year engineering projects involving health monitoring, embedded sensors, HMI workflows, QR reporting and industrial automation logic.',
  'Interested in solving real industrial problems using automation, control technologies, instrumentation and safe electrical operation practices.'
];

export const skills = [
  { title: 'PLC Programming', group: 'Automation', items: ['Ladder Logic', 'Interlocks', 'Auto/Manual Modes', 'PID Concepts'] },
  { title: 'Siemens TIA Portal', group: 'PLC Tools', items: ['S7-1200 Concepts', 'Tag Structure', 'Logic Testing'] },
  { title: 'SCADA Systems', group: 'Visualization', items: ['SCALA 250', 'WinCC Concepts', 'Alarm Views', 'Status Dashboards'] },
  { title: 'DCS Concepts', group: 'Control', items: ['Process Monitoring', 'Operator Displays', 'Control Architecture'] },
  { title: 'HMI Design', group: 'Interface', items: ['Touch UI', 'Operator Flow', 'Alarm Feedback', 'Kiosk UX'] },
  { title: 'Industrial Automation', group: 'Systems', items: ['Commissioning', 'Loop Checks', 'I/O Validation', 'Troubleshooting'] },
  { title: 'Instrumentation', group: 'Field Devices', items: ['Sensors', 'Transducers', 'Signal Tracing', 'Calibration'] },
  { title: 'Sensors and Transducers', group: 'Hardware', items: ['MAX30102', 'Temperature', 'Pulse', 'Biomedical Sensors'] },
  { title: 'ESP32', group: 'Embedded', items: ['Serial Data', 'Sensor Input', 'Wi-Fi Concepts'] },
  { title: 'Raspberry Pi', group: 'Embedded UI', items: ['PyQt6 Kiosk', 'Touchscreen', 'Data Logging'] },
  { title: 'Motor Control', group: 'Electrical', items: ['MCCs', 'Control Wiring', 'VFD Wiring', 'Protection Awareness'] },
  { title: 'Industrial Communication', group: 'Networks', items: ['Modbus RTU/TCP', 'PROFINET', 'PROFIBUS', 'Networking Basics'] },
  { title: 'Python / PyQt6 Basics', group: 'Software', items: ['GUI Logic', 'SQLite', 'QR Reports', 'Testing'] },
  { title: 'AutoCAD / Electrical Drawing Basics', group: 'Design', items: ['SLD Reading', 'Panel Wiring', 'EPLAN Electric P8'] }
];

export const projects = [
  {
    title: 'Basic Health Monitoring Station',
    subtitle: 'Final Year Major Project',
    image: kioskMachine,
    gallery: [kioskMachine, measuringAssistant, extractedDashboard, reportPreview],
    description:
      'Biomedical kiosk that measures BMI, pulse rate, SpO2, respiratory rate, body temperature, height and weight, then generates digital reports and QR-based result handoff.',
    technologies: ['Raspberry Pi', 'ESP32', 'PyQt6', 'MAX30102', 'Temperature Sensors', 'SQLite', 'QR Reports'],
    impact: 'Converted multi-parameter health measurement into a guided kiosk workflow with real-time UI, storage and reporting.'
  },
  {
    title: 'PLC / SCADA / HMI Practice Projects',
    subtitle: 'Automation Logic and Visualization',
    image: resultsInterface,
    gallery: [resultsInterface, qrInterface, sensorChart],
    description:
      'Hands-on PLC and SCADA practice using Siemens concepts, ladder logic, HMI screens, alarms, motor-control workflows and automation sequencing.',
    technologies: ['Siemens TIA Portal', 'SCADA', 'HMI', 'Ladder Logic', 'Motor Control'],
    impact: 'Built confidence in industrial logic, operator displays and commissioning-style validation.'
  },
  {
    title: 'PLC Based Dam Water Level Indicator and Control System',
    subtitle: 'Hydropower Automation',
    image: extractedPptDevice,
    gallery: [extractedPptDevice, sampleOutput, reportPreview],
    description:
      'Water-level monitoring and gate-control logic using PLC concepts, interlocks, alarms, auto/manual modes and PID-based control thinking.',
    technologies: ['PLC', 'SCADA', 'HMI', 'PID', 'Gate Control', 'Level Monitoring'],
    impact: 'Aligned instrumentation logic with safer dam level management and operator visibility.'
  },
  {
    title: 'Industrial Automation and Control Learning',
    subtitle: 'Factory and Process Systems',
    image: measuringAssistant,
    gallery: [measuringAssistant, resultsInterface, sensorChart],
    description:
      'Learning portfolio across PLC, SCADA, DCS, sensors, factory automation, material handling, conveyor logic and industrial process control.',
    technologies: ['CODESYS', 'Factory I/O', 'DCS Concepts', 'Conveyors', 'SCADA'],
    impact: 'Connected academic control concepts with production-oriented workflows and troubleshooting.'
  },
  {
    title: 'Instrumentation and Sensor Integration',
    subtitle: 'Embedded and Biomedical Sensors',
    image: sensorChart,
    gallery: [sensorChart, qrInterface, extractedDashboard],
    description:
      'Work with biomedical sensors, temperature sensing, pulse sensing, SpO2 measurement, embedded hardware, data validation and interface feedback.',
    technologies: ['MAX30102', 'Temperature Sensors', 'ESP32', 'Raspberry Pi', 'Serial Communication'],
    impact: 'Integrated sensor signals into user-facing measurements and reports.'
  },
  {
    title: 'Smart Vehicle Accident Detector for Bhutanese Road Systems',
    subtitle: 'Road Safety Concept',
    image: qrInterface,
    gallery: [qrInterface, extractedPptDevice, sampleOutput],
    description:
      'Accident detection and alerting concept designed around Bhutanese road conditions, embedded sensing and emergency-response thinking.',
    technologies: ['Embedded Systems', 'Sensors', 'Alert Logic', 'Road Safety'],
    impact: 'Explored automation-driven safety response for real local transport challenges.'
  }
];

export const experiences = [
  {
    role: 'Graduate Engineer Trainee - Automation and Commissioning',
    company: 'Bhutan Automation and Engineering Limited, Dagachhu Hydropower Plant',
    period: '83 days',
    tag: 'Hydropower Automation',
    points: [
      'Developed ladder-logic control for inlet, outlet and flushing gates on Siemens SICAM A8000.',
      'Built SCALA 250 SCADA/HMI screens for status, alarms and gate visualization.',
      'Performed point-to-point I/O checks, loop checks and EPLAN-based wiring validation.'
    ]
  },
  {
    role: 'Instrumentation and Electrical Automation Intern',
    company: 'Druk Wang Alloys Limited (DWAL)',
    period: 'Dec 2024 - Jan 2025',
    tag: 'Ferro Industry Exposure',
    points: [
      'Traced field signals from sensors to control panels across process areas, MCCs and 33kV/11kV systems.',
      'Observed switchyard operations, switchgear/protection relay practices and capacitor bank systems.',
      'Reviewed motor-control wiring, preventive maintenance and CMMS-style maintenance records.'
    ]
  },
  {
    role: 'Automation and Digitization App Intern',
    company: 'Fuzzy Automation',
    period: 'Jul 2025',
    tag: 'Digitization and Networking',
    points: [
      'Supported an app for detecting handwritten bills and receipts and storing them as structured digital records.',
      'Helped test capture-to-storage workflows, detection review and searchable archiving.',
      'Worked on device configuration, networking basics and troubleshooting.'
    ]
  }
];

export const education = [
  'B.E. in Instrumentation and Control Engineering - College of Science and Technology, Royal University of Bhutan - 68.21% till 7th semester.',
  'Class XII - Karmaling Higher Secondary School - 70.2%.',
  'Class X - BCSE - 78.14%.'
];

export const certifications = [
  'Electrical Testing Equipment Techniques',
  'VFD Control Wiring Diagram Techniques - 179 lessons',
  'PLC Simulator Factory',
  'Oil and Gas Industry Fundamentals',
  'Robotic Process Automation for Developers',
  'Selenium with Python from Scratch',
  'AI Industry Analysis',
  'Business Entrepreneurship'
];

export const stats = [
  { label: 'Major Project', value: 'BHMS', detail: 'Biomedical kiosk and QR reports' },
  { label: 'Industrial Exposure', value: 'DWAL', detail: 'Ferro alloy plant systems' },
  { label: 'Hydropower Training', value: '83d', detail: 'Automation commissioning' },
  { label: 'Research', value: 'IEEE', detail: 'Health monitoring station paper' }
];
