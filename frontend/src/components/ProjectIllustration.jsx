const GOLD = '#F5C542';
const DEEP_GOLD = '#D99A00';
const PAPER = '#F8F8F5';
const INK = '#050505';

function Node({ x, y, active = false, label }) {
  return (
    <g>
      <circle cx={x} cy={y} r={active ? 9 : 6} fill={active ? GOLD : INK} stroke={active ? PAPER : GOLD} strokeWidth="3" />
      {label ? <text x={x} y={y + 27} textAnchor="middle" className="project-svg-label">{label}</text> : null}
    </g>
  );
}

function HealthVisual() {
  return (
    <g>
      <rect x="122" y="70" width="205" height="275" rx="24" className="project-svg-panel" />
      <rect x="150" y="100" width="149" height="94" rx="12" className="project-svg-screen" />
      <path d="M164 151h21l10-23 18 49 14-30h31l9-18 15 22" className="project-svg-signal" />
      <circle cx="224" cy="255" r="34" fill="none" stroke={GOLD} strokeWidth="9" />
      <path d="M224 232v46M201 255h46" stroke={PAPER} strokeWidth="9" strokeLinecap="round" />
      <path d="M328 144h92v-44h100M328 262h70v67h126" className="project-svg-trace" />
      <Node x="520" y="100" active label="SpO2" />
      <Node x="524" y="329" active label="TEMP" />
      <Node x="420" y="144" label="PULSE" />
      <text x="432" y="230" className="project-svg-title">HEALTH DATA</text>
      <text x="432" y="257" className="project-svg-copy">Measure. Validate. Report.</text>
    </g>
  );
}

function DamVisual() {
  return (
    <g>
      <path d="M90 294h216l78-142h100l72 142h84" fill="none" stroke={PAPER} strokeWidth="11" strokeLinejoin="round" />
      <path d="M96 314c42-17 76 17 118 0s76 17 118 0 76 17 118 0 76 17 118 0" fill="none" stroke={GOLD} strokeWidth="8" strokeLinecap="round" />
      <rect x="397" y="119" width="74" height="175" rx="8" fill="#171717" stroke={GOLD} strokeWidth="4" />
      <path d="M434 137v137" stroke={PAPER} strokeWidth="5" strokeDasharray="8 10" />
      <rect x="92" y="72" width="178" height="118" rx="16" className="project-svg-panel" />
      <text x="116" y="108" className="project-svg-title">PLC LEVEL</text>
      <rect x="116" y="126" width="114" height="12" rx="6" fill="#353535" />
      <rect x="116" y="126" width="81" height="12" rx="6" fill={GOLD} />
      <circle cx="130" cy="162" r="8" fill={GOLD} />
      <text x="150" y="168" className="project-svg-copy">AUTO GATE</text>
      <path d="M270 132h70v80h57" className="project-svg-trace" />
      <Node x="340" y="132" active label="LEVEL" />
    </g>
  );
}

function HvacVisual() {
  return (
    <g>
      <rect x="72" y="82" width="212" height="240" rx="22" className="project-svg-panel" />
      <circle cx="178" cy="202" r="66" fill="#0b0b0b" stroke={GOLD} strokeWidth="6" />
      {[0, 90, 180, 270].map((angle) => (
        <path key={angle} d="M178 190c26-42 51-30 44-5-6 22-26 28-44 17z" fill={angle % 180 ? PAPER : GOLD} opacity="0.92" transform={`rotate(${angle} 178 202)`} />
      ))}
      <circle cx="178" cy="202" r="13" fill={INK} stroke={PAPER} strokeWidth="4" />
      <text x="178" y="297" textAnchor="middle" className="project-svg-label">SUPPLY FAN</text>

      <path d="M284 141h121v-50h190v115h-74v112H405v-63H284" fill="none" stroke={PAPER} strokeWidth="18" strokeLinejoin="round" />
      <path d="M302 141h95M421 91h155M521 225v76M421 255v47" className="project-svg-trace" />
      <Node x="405" y="141" active label="TEMP" />
      <Node x="595" y="91" label="AIRFLOW" />
      <Node x="521" y="318" active label="ALARM" />

      <rect x="405" y="162" width="116" height="73" rx="13" className="project-svg-screen" />
      <text x="463" y="190" textAnchor="middle" className="project-svg-copy">VFD 42 Hz</text>
      <path d="M425 214h19l9-18 12 31 13-25h23" className="project-svg-signal" />
      <text x="405" y="363" className="project-svg-title">HVAC CONTROL</text>
      <text x="405" y="388" className="project-svg-copy">COMFORT / AIRFLOW / ENERGY</text>
    </g>
  );
}

function ConveyorVisual() {
  return (
    <g>
      <path d="M92 285h530" stroke={PAPER} strokeWidth="12" strokeLinecap="round" />
      {[128, 218, 308, 398, 488, 578].map((x) => <circle key={x} cx={x} cy="285" r="22" fill="#191919" stroke={GOLD} strokeWidth="6" />)}
      {[155, 270, 385].map((x, index) => <rect key={x} x={x} y={205 - index * 12} width="74" height={80 + index * 12} rx="10" fill={index === 1 ? GOLD : '#202020'} stroke={index === 1 ? PAPER : GOLD} strokeWidth="4" />)}
      <path d="M470 96v92M470 96h105v92" className="project-svg-trace" />
      <Node x="470" y="96" active label="S1" />
      <Node x="575" y="96" label="S2" />
      <rect x="84" y="66" width="238" height="90" rx="16" className="project-svg-panel" />
      <text x="110" y="103" className="project-svg-title">SEQUENCE 04</text>
      <path d="M111 126h46l14-15 23 27 21-36 31 24h46" className="project-svg-signal" />
      <text x="468" y="354" className="project-svg-copy">INTERLOCKED MATERIAL FLOW</text>
    </g>
  );
}

function ScadaVisual() {
  return (
    <g>
      <rect x="90" y="62" width="540" height="286" rx="25" className="project-svg-panel" />
      <rect x="118" y="92" width="484" height="220" rx="12" fill="#0B0B0B" stroke="#3A3A3A" strokeWidth="3" />
      <path d="M150 240l58-62 55 35 73-92 67 80 54-42 86 68" className="project-svg-signal" />
      {[150, 208, 263, 336, 403, 457, 543].map((x, index) => <circle key={x} cx={x} cy={[240,178,213,121,201,159,227][index]} r="7" fill={index % 2 ? PAPER : GOLD} />)}
      <rect x="145" y="115" width="95" height="36" rx="18" fill={GOLD} />
      <text x="192" y="139" textAnchor="middle" fill={INK} className="project-svg-label project-svg-label-dark">ONLINE</text>
      <text x="460" y="135" className="project-svg-title">SCADA</text>
      <text x="460" y="160" className="project-svg-copy">LOOPS / ALARMS / TRENDS</text>
      <circle cx="576" cy="84" r="8" fill={GOLD} />
      <path d="M196 348v22M524 348v22" stroke={PAPER} strokeWidth="9" />
    </g>
  );
}

function AccidentVisual() {
  return (
    <g>
      <path d="M72 331l124-182 116 92 111-157 225 247" fill="none" stroke="#343434" strokeWidth="46" strokeLinejoin="round" />
      <path d="M72 331l124-182 116 92 111-157 225 247" fill="none" stroke={PAPER} strokeWidth="4" strokeDasharray="16 18" />
      <path d="M243 245h115l32 51H224z" fill={GOLD} stroke={PAPER} strokeWidth="4" />
      <circle cx="251" cy="304" r="17" fill={INK} stroke={PAPER} strokeWidth="4" />
      <circle cx="363" cy="304" r="17" fill={INK} stroke={PAPER} strokeWidth="4" />
      <path d="M310 221v-62M279 172l31-31 31 31" className="project-svg-signal" />
      {[1,2,3].map((ring) => <circle key={ring} cx="310" cy="141" r={ring * 24} fill="none" stroke={GOLD} strokeWidth="3" opacity={1 - ring * 0.22} />)}
      <text x="430" y="111" className="project-svg-title">IMPACT ALERT</text>
      <text x="430" y="140" className="project-svg-copy">BHUTAN ROAD SAFETY</text>
    </g>
  );
}

function ReceiptVisual() {
  return (
    <g>
      <path d="M117 66h230v285l-18-13-20 13-20-13-20 13-20-13-20 13-20-13-20 13-22-13-30 13z" fill={PAPER} stroke={GOLD} strokeWidth="5" />
      <text x="154" y="111" fill={INK} className="project-svg-title">RECEIPT</text>
      {[142,174,206,238].map((y, index) => <path key={y} d={`M153 ${y}h${index % 2 ? 125 : 158}`} stroke={index === 2 ? DEEP_GOLD : '#8A8A8A'} strokeWidth="8" strokeLinecap="round" />)}
      <rect x="158" y="271" width="142" height="42" rx="8" fill={INK} />
      <text x="229" y="298" textAnchor="middle" fill={GOLD} className="project-svg-label">DIGITIZE</text>
      <path d="M347 158h78v-65h165v99h-98v98h98" className="project-svg-trace" />
      <Node x="425" y="158" active label="OCR" />
      <Node x="492" y="290" label="STORE" />
      <rect x="432" y="205" width="151" height="46" rx="12" className="project-svg-panel" />
      <text x="507" y="234" textAnchor="middle" className="project-svg-copy">SEARCHABLE RECORD</text>
    </g>
  );
}

function EnergyVisual() {
  return (
    <g>
      <circle cx="129" cy="102" r="34" fill={GOLD} />
      {[0,45,90,135].map((angle) => <path key={angle} d="M129 47v-20" stroke={GOLD} strokeWidth="5" transform={`rotate(${angle} 129 102)`} />)}
      <path d="M72 310l70-135 70 135z" fill="#171717" stroke={PAPER} strokeWidth="5" />
      <path d="M94 273h96M110 238h64M128 203h28" stroke={GOLD} strokeWidth="5" />
      <rect x="294" y="93" width="138" height="220" rx="18" className="project-svg-panel" />
      {[0,1,2,3].map((cell) => <rect key={cell} x="321" y={122 + cell * 42} width="84" height="24" rx="6" fill={cell < 3 ? GOLD : '#343434'} />)}
      <text x="363" y="288" textAnchor="middle" className="project-svg-label">EV BMS</text>
      <path d="M212 248h82M432 203h83v-77h106M432 250h83v77h106" className="project-svg-trace" />
      <Node x="515" y="203" active label="LOAD" />
      <Node x="621" y="126" label="GRID" />
      <Node x="621" y="327" active label="SST" />
    </g>
  );
}

function SensorVisual() {
  return (
    <g>
      <circle cx="360" cy="207" r="78" fill="#171717" stroke={GOLD} strokeWidth="6" />
      <circle cx="360" cy="207" r="31" fill={GOLD} />
      <text x="360" y="212" textAnchor="middle" fill={INK} className="project-svg-label project-svg-label-dark">PLC</text>
      {[[145,99,'TEMP'],[575,99,'FLOW'],[111,306,'PRESS'],[609,306,'LEVEL']].map(([x,y,label], index) => (
        <g key={label}>
          <path d={`M${index < 2 ? x + 12 : x + 12} ${y}L${index % 2 ? 307 : 413} ${index < 2 ? 167 : 247}`} className="project-svg-trace" />
          <Node x={x} y={y} active={index % 2 === 0} label={label} />
        </g>
      ))}
      <path d="M332 207h18l10-25 14 47 14-35h24" className="project-svg-signal" />
      <text x="360" y="330" textAnchor="middle" className="project-svg-copy">VALIDATE / SCALE / MONITOR</text>
    </g>
  );
}

const visuals = {
  health: HealthVisual,
  dam: DamVisual,
  hvac: HvacVisual,
  conveyor: ConveyorVisual,
  scada: ScadaVisual,
  accident: AccidentVisual,
  receipt: ReceiptVisual,
  energy: EnergyVisual,
  sensors: SensorVisual
};

export default function ProjectIllustration({ variant = 'sensors', title }) {
  const Visual = visuals[variant] || SensorVisual;
  return (
    <svg viewBox="0 0 720 420" role="img" aria-label={`${title} engineering illustration`} className="project-illustration h-full w-full">
      <defs>
        <pattern id={`grid-${variant}`} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke={GOLD} strokeWidth="0.7" opacity="0.13" />
        </pattern>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="46%" r="60%">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.16" />
          <stop offset="1" stopColor={INK} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="720" height="420" rx="28" fill={INK} />
      <rect width="720" height="420" rx="28" fill={`url(#grid-${variant})`} />
      <rect width="720" height="420" rx="28" fill={`url(#glow-${variant})`} />
      <path d="M0 34h52l19 19h102M720 386h-52l-19-19H547" className="project-svg-corner" />
      <Visual />
    </svg>
  );
}
