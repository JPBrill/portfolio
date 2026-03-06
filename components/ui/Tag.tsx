import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/5 text-text-secondary border border-white/10 ${className}`}>
      {children}
    </span>
  );
}
