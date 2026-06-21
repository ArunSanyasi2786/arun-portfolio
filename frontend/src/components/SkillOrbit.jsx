const orbitSkills = ['PLC', 'SCADA', 'DCS', 'HMI', 'Sensors', 'ESP32', 'Raspberry Pi', 'Modbus', 'Control Systems'];

export default function SkillOrbit() {
  return (
    <div className="skill-orbit mx-auto" aria-label="Industrial automation skills orbit">
      <div className="skill-orbit-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-300">Core Domain</span>
        <strong className="mt-2 block font-display text-lg leading-tight text-white">Industrial<br />Automation</strong>
      </div>
      <div className="skill-orbit-ring" aria-hidden="true">
        {orbitSkills.map((skill, index) => {
          const angle = (360 / orbitSkills.length) * index;
          return (
            <span key={skill} className="skill-orbit-slot" style={{ '--orbit-angle': `${angle}deg` }}>
              <span className="skill-orbit-badge-inner">{skill}</span>
            </span>
          );
        })}
      </div>
      <div className="skill-orbit-axis skill-orbit-axis-one" />
      <div className="skill-orbit-axis skill-orbit-axis-two" />
    </div>
  );
}

