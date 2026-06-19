import { ArrowUpRight } from 'lucide-react';

export function PrimaryButton({ href, children, onClick, download = false }) {
  const className = 'group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-display text-sm font-bold text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200';
  if (href) {
    return (
      <a className={className} href={href} onClick={onClick} download={download}>
        {children}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick} type="button">
      {children}
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}

export function GhostButton({ href, children, onClick, download = false }) {
  const className = 'inline-flex items-center justify-center rounded-full border border-cyan-300/30 px-6 py-3 font-display text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200';
  if (href) {
    return <a className={className} href={href} onClick={onClick} download={download}>{children}</a>;
  }
  return <button className={className} onClick={onClick} type="button">{children}</button>;
}
