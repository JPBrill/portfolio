import { ReactNode } from 'react';

export function MainColumn({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-3xl mx-auto px-6 py-12 md:py-24 ${className}`}>
      {children}
    </div>
  );
}
