import { ReactNode } from 'react';

export function MainColumn({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-3xl mx-auto px-6 pt-12 pb-32 md:pt-24 md:pb-64 ${className}`}>
      {children}
    </div>
  );
}
