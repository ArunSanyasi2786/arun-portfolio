interface IconProps {
  size?: number;
  className?: string;
}

export function VideoIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 9L22 6V16L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function PaletteIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C12.83 22 13.5 21.33 13.5 20.5C13.5 20.12 13.36 19.78 13.12 19.53C12.89 19.27 12.75 18.94 12.75 18.56C12.75 17.73 13.42 17.06 14.25 17.06H16C19.31 17.06 22 14.37 22 11.06C22 6.06 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7.5" cy="11.5" r="1.5" fill="currentColor"/>
      <circle cx="10.5" cy="7.5" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="7.5" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="11" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export function PhoneIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="6" r="1" fill="currentColor"/>
    </svg>
  );
}

export function BoltIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4.5 13H12L11 22L19.5 11H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function BlueprintIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="9" y1="9" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="12" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
      <line x1="12" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
    </svg>
  );
}

export function CubeIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12L21 7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12L3 7" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function PenIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3L21 7L7 21H3V17L17 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="14" y1="6" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function MountainIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L20 20H4L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 15L10 11L13 14L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function CertificateIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 13V21L12 19L14 21V13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export function ProtocolIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 11L17 7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 13L17 17" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function ShieldIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L20 6V12C20 16.42 16.64 20.44 12 22C7.36 20.44 4 16.42 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  video: VideoIcon,
  palette: PaletteIcon,
  phone: PhoneIcon,
  bolt: BoltIcon,
  blueprint: BlueprintIcon,
  cube: CubeIcon,
  pen: PenIcon,
  mountain: MountainIcon,
  certificate: CertificateIcon,
  protocol: ProtocolIcon,
  shield: ShieldIcon,
};

export default iconMap;
