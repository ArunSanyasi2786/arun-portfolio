'use client';

import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useGsap';

interface Props {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function RevealSection({ children, className, as: Tag = 'div' }: Props) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
