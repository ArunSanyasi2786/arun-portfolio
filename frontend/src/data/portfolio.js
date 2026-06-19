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
import aiHealthKiosk from '../assets/projects/ai-generated/ai-health-monitoring-kiosk.webp';
import aiDamControl from '../assets/projects/ai-generated/ai-plc-dam-control.webp';
import aiElectricalSystems from '../assets/projects/ai-generated/ai-industrial-electrical-systems.webp';
import aiVehicleDetector from '../assets/projects/ai-generated/ai-smart-vehicle-accident-detector.webp';
import aiReceiptDigitization from '../assets/projects/ai-generated/ai-receipt-digitization-app.webp';
import aiSmartGrid from '../assets/projects/ai-generated/ai-smart-grid-case-studies.webp';

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
  line: 'PLC | SCADA | DCS | Electrical Control Systems | Industrial Automation',
  intro:
    'Engineering graduate focused on PLC/SCADA systems, industrial instrumentation, electrical control systems, switchgear protection, drives, sensor networks and reliable plant automation.',
  profileImage
};

export const orbitTags = ['PLC', 'SCADA', 'DCS', 'HMI', 'Switchgear', 'Protection', 'MCC', 'VFD', 'Sensors', 'Power Systems'];

export const aboutHighlights = [
  'Instrumentation and Control Engineering graduate from College of Science and Technology, Royal University of Bhutan.',
  'Hands-on exposure to PLC/SCADA commissioning, hydropower automation, ferro-alloy plant electrical systems, switchyard operation, MCC panels and capacitor bank safety.',
  'Project experience across biomedical instrumentation, PLC dam control, road-safety detection, handwritten bill digitization, material handling, conveyor logic and electrical analysis case studies.',
  'Focused on practical engineering roles where automation, instrumentation, electrical troubleshooting and safe plant operation must work together.'
];

export const education = [
  {
    degree: 'B.E. in Instrumentation and Control Engineering',
    institution: 'College of Science and Technology, Royal University of Bhutan',
    location: 'Phuentsholing, Bhutan',
    period: '2022 - 2026',
    result: '68.21% till 7th semester',
    focus: 'PLC, SCADA, DCS, process control, instrumentation, electrical control, sensor networks and final-year project development.',
    highlights: ['Industrial automation coursework', 'Biomedical and sensor-based project work', 'Student Research Meet participation']
  },
  {
    degree: 'Class XII - Higher Secondary Education',
    institution: 'Karmaling Higher Secondary School',
    location: 'Bhutan',
    period: '2020 - 2021',
    result: '70.2%',
    focus: 'Science foundation with mathematics and applied technical interest.',
    highlights: ['STEM foundation', 'Engineering preparation']
  },
  {
    degree: 'Class X - BCSE',
    institution: 'Bhutan Certificate of Secondary Education',
    location: 'Bhutan',
    period: '2019',
    result: '78.14%',
    focus: 'Secondary education foundation.',
    highlights: ['Academic discipline', 'Technical interest foundation']
  }
];

export const courses = [
  {
    title: 'CAS - Process Control',
    code: 'CAS403',
    source: 'Semester 7 process control notes',
    summary: 'Control-loop thinking for industrial processes, final control elements and tuning decisions.',
    highlights: ['Process dynamics and feedback control', 'SISO and MIMO control structures', 'PID/controller tuning concepts', 'Control valves, sizing and final control elements', 'Multiloop control and interaction awareness']
  },
  {
    title: 'Industrial Automation and PLC Systems',
    code: 'CAS402',
    source: 'Semester 7 industrial automation notes',
    summary: 'PLC architecture, I/O processing, industrial equipment and SCADA/HMI fundamentals.',
    highlights: ['PLC hardware, I/O modules and addressing', 'Ladder, FBD, SFC, IL and structured text concepts', 'Timers, counters, internal relays and data handling', 'Control panel fundamentals and field I/O devices', 'Integrated automation and SCADA overview']
  },
  {
    title: 'Industrial Drives',
    code: 'Drive Systems',
    source: 'Coursework and VFD training',
    summary: 'Motor drive selection, speed control, protection and wiring practices for industrial loads.',
    highlights: ['VFD operating principles and wiring techniques', 'Motor starting and speed-torque control', 'Drive protection and fault diagnosis', 'Control wiring, interlocks and safe isolation', 'Maintenance mindset for driven equipment']
  },
  {
    title: 'Industrial Networking',
    code: 'Automation Networks',
    source: 'Fuzzy Automation and automation coursework',
    summary: 'Network configuration and troubleshooting for automation and digitization workflows.',
    highlights: ['IP addressing and device configuration', 'Modbus RTU/TCP, PROFIBUS and PROFINET concepts', 'Communication checks and connection troubleshooting', 'Device-to-system data flow validation', 'Basic cyber hygiene and documentation']
  },
  {
    title: 'Switchgear and Protection',
    code: 'CAS404',
    source: 'Semester 8 switchgear/controlgear/protection notes',
    summary: 'Protection equipment, relay logic and safe operation of industrial power systems.',
    highlights: ['Circuit breakers, isolators and protective relays', 'CT/PT concepts and protection measurement', 'Busbar protection and fault isolation', 'Protection coordination and power-system safety', 'Switchyard and capacitor bank awareness']
  },
  {
    title: 'Biomedical Instrumentation',
    code: 'CIE405',
    source: 'Semester 8 biomedical instrumentation notes',
    summary: 'Medical measurement systems and sensor principles applied in the health-monitoring project.',
    highlights: ['ECG and biopotential measurement basics', 'Patient monitoring and safety considerations', 'Biomedical sensors and signal acquisition', 'Hematology and diagnostic instrumentation awareness', 'Health-kiosk measurement workflow design']
  },
  {
    title: 'Hydraulics and Pneumatics',
    code: 'Fluid Power',
    source: 'Instrumentation/control coursework',
    summary: 'Fluid-power components and control logic used in industrial actuation systems.',
    highlights: ['Pumps, compressors, valves and actuators', 'Hydraulic and pneumatic circuit reading', 'Solenoid valve and cylinder sequencing', 'Electro-pneumatic control concepts', 'Fault finding in pressure/flow systems']
  },
  {
    title: 'Sensor Network',
    code: 'MIS402',
    source: 'Semester 7 sensor network notes',
    summary: 'Networked sensing fundamentals for low-power monitoring and industrial data acquisition.',
    highlights: ['Sensor node architecture and energy constraints', 'Networking sensor data and routing basics', 'Infrastructure establishment for sensor networks', 'Sensor network platforms and tools', 'Monitoring reliability and field deployment thinking']
  },
  {
    title: 'Wireless Sensor Technology',
    code: 'MIS402',
    source: 'Wireless sensor network notes',
    summary: 'Wireless communication concepts for distributed sensing applications.',
    highlights: ['Wireless sensor network protocols and architectures', 'Energy-efficient routing ideas', 'Gateway and topology concepts', 'Deployment tradeoffs for range, power and reliability', 'Applications in monitoring and automation']
  },
  {
    title: 'Industrial Sensor Network',
    code: 'Industrial IIoT',
    source: 'Automation and sensor coursework',
    summary: 'Linking field instruments to PLC/SCADA and monitoring systems.',
    highlights: ['Field sensors, transmitters and signal conditioning', 'Loop checks and I/O verification', 'Alarm, event and trend monitoring concepts', 'Industrial communication and data mapping', 'Troubleshooting sensor-to-panel issues']
  },
  {
    title: 'Electrical Machines',
    code: 'Electrical Core',
    source: 'Electrical engineering coursework and plant exposure',
    summary: 'Machine behavior and maintenance awareness for industrial electrical systems.',
    highlights: ['Transformers and induction-machine fundamentals', 'Motor control, testing and protection basics', 'Load behavior, efficiency and fault symptoms', 'MCC and starter circuit awareness', 'Maintenance checks for rotating equipment']
  },
  {
    title: 'Distributed Control System',
    code: 'DCS Concepts',
    source: 'Control systems coursework',
    summary: 'Plant-wide control architecture and operator supervision concepts.',
    highlights: ['Controller, operator station and engineering station roles', 'Loop control, alarms and trends', 'Redundancy and reliability concepts', 'Historian and reporting awareness', 'DCS versus PLC/SCADA application thinking']
  }
];

export const technicalSkills = [
  { title: 'PLC Programming', group: 'Automation', items: ['Ladder Logic', 'Interlocks', 'Auto/Manual Modes', 'PID Concepts'] },
  { title: 'Siemens and Industrial PLC Tools', group: 'PLC Platforms', items: ['SICAM A8000', 'TIA Portal Concepts', 'CODESYS', 'Factory I/O'] },
  { title: 'SCADA and HMI Systems', group: 'Visualization', items: ['SCALA 250', 'WinCC Concepts', 'Alarm Views', 'Operator Dashboards'] },
  { title: 'DCS and Process Control', group: 'Control', items: ['Loop Control', 'SISO/MIMO', 'Controller Tuning', 'Final Control Elements'] },
  { title: 'Electrical Control Systems', group: 'Electrical', items: ['MCCs', 'Control Wiring', 'Starters', 'Panel Troubleshooting'] },
  { title: 'Switchgear and Protection', group: 'Power Systems', items: ['Relays', 'Breakers', 'Busbar Protection', 'Fault Isolation'] },
  { title: 'Industrial Drives and VFDs', group: 'Drives', items: ['VFD Wiring', 'Motor Control', 'Speed Control', 'Drive Faults'] },
  { title: 'Instrumentation', group: 'Field Devices', items: ['Sensors', 'Transducers', 'Signal Tracing', 'Calibration Awareness'] },
  { title: 'Industrial Communication', group: 'Networks', items: ['Modbus', 'PROFINET', 'PROFIBUS', 'IP Configuration'] },
  { title: 'Biomedical Sensors', group: 'Measurement', items: ['SpO2/Pulse', 'Temperature', 'BMI Workflow', 'Patient Monitoring'] },
  { title: 'Engineering Software', group: 'Tools', items: ['EPLAN Electric P8', 'AutoCAD Basics', 'Proteus', 'MS Office'] },
  { title: 'Python and Interface Basics', group: 'Software', items: ['PyQt6 GUI', 'SQLite', 'QR Reports', 'Testing Basics'] }
];

export const softSkills = [
  { title: 'Troubleshooting Discipline', items: ['Checks symptoms carefully', 'Verifies wiring and readings', 'Documents root causes'] },
  { title: 'Technical Reporting', items: ['Clear logs', 'Maintenance notes', 'Project documentation'] },
  { title: 'Team Communication', items: ['Coordinates with engineers', 'Asks for feedback', 'Shares progress clearly'] },
  { title: 'Safety Awareness', items: ['PPE mindset', 'Shutdown/startup care', 'Hazard identification'] },
  { title: 'Learning Agility', items: ['Adapts to new tools', 'Uses notes and manuals', 'Improves through practice'] },
  { title: 'Attention to Detail', items: ['Checks PLC logic', 'Reviews drawings', 'Validates sensor data'] }
];

export const projects = [
  {
    title: 'Basic Health Monitoring Station',
    subtitle: 'Final Year Major Project',
    category: 'Biomedical Instrumentation',
    image: aiHealthKiosk,
    gallery: [aiHealthKiosk, kioskMachine, measuringAssistant, extractedDashboard, reportPreview],
    description:
      'Biomedical kiosk that measures BMI, pulse rate, SpO2, respiratory rate, body temperature, height and weight, then generates digital reports and QR-based result handoff.',
    technologies: ['Biomedical Sensors', 'PyQt6', 'MAX30102', 'Temperature Sensor', 'SQLite', 'QR Reports'],
    details: ['Designed a guided health-check workflow from measurement to stored report.', 'Integrated sensor readings with a user-facing interface and output record.', 'Built project documentation for presentation, demonstration and research-style communication.'],
    impact: 'Converted multi-parameter health measurement into a guided kiosk workflow with real-time UI, storage and reporting.'
  },
  {
    title: 'PLC Based Dam Water Level Indicator and Control System',
    subtitle: 'PLC / SCADA Project',
    category: 'Hydropower Automation',
    image: aiDamControl,
    gallery: [aiDamControl, extractedPptDevice, sampleOutput, reportPreview],
    description:
      'Water-level monitoring and gate-control logic using PLC concepts, interlocks, alarms, auto/manual modes and PID-based control thinking.',
    technologies: ['PLC', 'SCADA', 'HMI', 'PID', 'Gate Control', 'Level Monitoring'],
    details: ['Modeled safe level monitoring with alarm and decision logic.', 'Applied gate-control thinking for inlet/outlet/flushing workflows.', 'Connected control logic to operator visibility through HMI/SCADA concepts.'],
    impact: 'Aligned instrumentation logic with safer dam level management and operator visibility.'
  },
  {
    title: 'Material Handling and Conveyor Automation',
    subtitle: 'Factory Automation Practice',
    category: 'Automation Logic',
    image: resultsInterface,
    gallery: [resultsInterface, qrInterface, sensorChart],
    description:
      'PLC and HMI practice around material handling, conveyor sequencing, sorting, filling, capping, storage and operator display logic.',
    technologies: ['CODESYS', 'Factory I/O', 'Ladder Logic', 'HMI', 'Conveyors'],
    details: ['Practiced sequence logic and interlocks for conveyor movement.', 'Structured HMI views for status and operator control.', 'Connected academic PLC logic with factory-style process flow.'],
    impact: 'Built confidence in automation sequencing and manufacturing-line logic.'
  },
  {
    title: 'SICAM A8000 Boiler Monitoring and SCADA Screens',
    subtitle: 'Industrial Monitoring',
    category: 'PLC / SCADA',
    image: aiElectricalSystems,
    gallery: [aiElectricalSystems, resultsInterface, sensorChart],
    description:
      'PLC/SCADA monitoring concept using SICAM Workbench and SCALA 250 for temperature, pressure and level loops with operator-facing screens.',
    technologies: ['SICAM A8000', 'SCALA 250', 'SCADA', 'Loop Checks', 'EPLAN'],
    details: ['Mapped monitored variables to operator display concepts.', 'Applied loop-check and point-to-point validation thinking.', 'Used drawing-based verification to connect field signals and panels.'],
    impact: 'Strengthened commissioning-style thinking for real industrial control systems.'
  },
  {
    title: 'Smart Vehicle Accident Detector for Bhutanese Road Systems',
    subtitle: 'Road Safety Concept',
    category: 'Electronics / Safety',
    image: aiVehicleDetector,
    gallery: [aiVehicleDetector, qrInterface, extractedPptDevice],
    description:
      'Accident detection and alerting concept designed around Bhutanese road conditions, embedded sensing and emergency-response thinking.',
    technologies: ['Embedded Sensing', 'Alert Logic', 'Road Safety', 'Signal Processing'],
    details: ['Focused on mountainous-road safety and emergency response context.', 'Used event-detection logic to trigger alert workflow concepts.', 'Connected electronics thinking with a local real-world safety problem.'],
    impact: 'Explored automation-driven safety response for local transport challenges.'
  },
  {
    title: 'Handwritten Bills and Receipt Digitization App',
    subtitle: 'Fuzzy Automation Internship',
    category: 'Digitization / Automation',
    image: aiReceiptDigitization,
    gallery: [aiReceiptDigitization, sampleOutput, extractedDashboard],
    description:
      'Application workflow for detecting handwritten bills and receipts, reviewing captured information and storing records in digital format.',
    technologies: ['OCR Workflow', 'Digital Records', 'Networking', 'Configuration', 'Troubleshooting'],
    details: ['Supported capture-to-storage workflow testing.', 'Worked on configuration, network checks and troubleshooting.', 'Connected automation thinking with business document digitization.'],
    impact: 'Improved understanding of practical software workflow testing and deployment support.'
  },
  {
    title: 'Electrical Analysis Case Studies',
    subtitle: 'Power and Energy Systems',
    category: 'Electrical Analysis',
    image: aiSmartGrid,
    gallery: [aiSmartGrid, sensorChart, reportPreview],
    description:
      'Case studies on solar microgrid with load management, AI-driven battery management systems for EVs and solid-state transformers for grid modernization.',
    technologies: ['Solar Microgrid', 'Load Management', 'EV BMS', 'SST', 'Power Systems'],
    details: ['Studied load management and smart-grid reliability concepts.', 'Explored AI-driven BMS ideas for electric vehicles.', 'Reviewed solid-state transformer relevance for grid modernization.'],
    impact: 'Expanded electrical engineering perspective beyond control panels into modern energy systems.'
  },
  {
    title: 'Instrumentation and Sensor Integration Practice',
    subtitle: 'Sensor Systems',
    category: 'Instrumentation',
    image: sensorChart,
    gallery: [sensorChart, aiHealthKiosk, qrInterface],
    description:
      'Work with biomedical sensors, temperature sensing, pulse sensing, signal validation, control hardware and interface feedback.',
    technologies: ['Sensors', 'Transducers', 'Signal Validation', 'Biomedical Measurement', 'Data Logging'],
    details: ['Compared sensor behavior against expected measurement ranges.', 'Practiced signal flow from device to user interface.', 'Built awareness of calibration, reliability and measurement context.'],
    impact: 'Integrated sensor signals into user-facing measurements and reports.'
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
    ],
    details: ['Supported desilter and dam-control automation work.', 'Worked around PLC logic, HMI/SCADA visualization, gate operation modes, interlocks and alarm thinking.', 'Gained commissioning discipline through I/O verification, field wiring review and drawing-based checks.'],
    tools: ['SICAM A8000', 'SCALA 250', 'EPLAN Electric P8', 'PLC/SCADA', 'Loop Checks'],
    documents: [{ label: 'Experience Letter', href: 'files/arun-experience-letter.pdf' }]
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
    ],
    details: ['Built a stronger hold in ferro-industry electrical systems and plant maintenance practices.', 'Observed switchyard equipment, capacitor banks, capacitor discharge safety and protection practices.', 'Learned how field devices, MCCs and motor-control wiring affect production reliability.'],
    tools: ['Switchyard', 'MCC', 'Motor Control Wiring', 'Capacitor Bank', 'Protection Relays'],
    documents: [{ label: 'Recommendation Placeholder', href: 'files/recommendation-letter-placeholder.pdf' }]
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
    ],
    details: ['Learned practical configuration and troubleshooting in a software-enabled automation environment.', 'Supported digitization workflow checks for handwritten bills and receipts.', 'Strengthened networking basics, record handling and deployment support mindset.'],
    tools: ['Workflow Testing', 'Networking', 'Configuration', 'Troubleshooting', 'Digital Records'],
    documents: [{ label: 'Project Report Placeholder', href: 'files/project-report-placeholder.pdf' }]
  }
];

export const certifications = [
  { title: 'Electrical Testing Equipment Techniques', focus: 'Testing instruments, safety checks and electrical maintenance readiness.', file: 'files/certificates/electrical-testing-equipment-techniques.pdf' },
  { title: 'VFD Control Wiring Diagram Techniques', focus: '179 lessons covering VFD wiring, motor-control circuits and drive troubleshooting.', file: 'files/certificates/vfd-control-wiring-diagram-techniques.pdf' },
  { title: 'PLC Simulator Factory', focus: 'PLC simulation practice for factory automation logic.', file: 'files/certificates/plc-simulator-factory.pdf' },
  { title: 'Oil and Gas Industry Fundamentals', focus: 'Process-industry fundamentals and plant-operation awareness.', file: 'files/certificates/oil-and-gas-industry-fundamentals.pdf' },
  { title: 'Robotic Process Automation for Developers', focus: 'Automation workflow thinking and software process support.', file: 'files/certificates/robotic-process-automation-for-developers.pdf' },
  { title: 'Selenium with Python from Scratch', focus: 'Testing mindset, Python basics and browser automation fundamentals.', file: 'files/certificates/selenium-with-python-from-scratch.pdf' },
  { title: 'AI Industry Analysis', focus: 'Awareness of AI applications and industry impact.', file: 'files/certificates/ai-industry-analysis.pdf' },
  { title: 'Business Entrepreneurship', focus: 'Business initiative, value creation and professional communication.', file: 'files/certificates/business-entrepreneurship.pdf' }
];

export const documents = [
  { title: 'Download CV', eyebrow: 'Resume', description: 'One-page Arun Sanyasi resume uploaded for job applications.', href: 'files/arun-cv.pdf', primary: true },
  { title: 'Download Portfolio PDF', eyebrow: 'Portfolio', description: 'Placeholder portfolio PDF ready for replacement with the final combined portfolio.', href: 'files/arun-portfolio.pdf' },
  { title: 'Project Portfolio / Report', eyebrow: 'Project Evidence', description: 'Existing Arun project portfolio PDF with electronics, PLC/SCADA and electrical analysis highlights.', href: 'files/arun-project-portfolio.pdf' },
  { title: 'Experience / Letter PDF', eyebrow: 'Document', description: 'Uploaded scanned letter/experience document for reference.', href: 'files/arun-experience-letter.pdf' },
  { title: 'Recommendation Placeholder', eyebrow: 'Reference', description: 'Placeholder file to replace later with signed recommendation letter.', href: 'files/recommendation-letter-placeholder.pdf' }
];

export const stats = [
  { label: 'Major Project', value: 'BHMS', detail: 'Biomedical kiosk and QR reports' },
  { label: 'Industrial Exposure', value: 'DWAL', detail: 'Ferro alloy plant systems' },
  { label: 'Hydropower Training', value: '83d', detail: 'Automation commissioning' },
  { label: 'Courses', value: '12+', detail: 'Control, drives, networks and protection' }
];