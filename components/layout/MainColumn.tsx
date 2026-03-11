import { ReactNode } from 'react';

export function MainColumn({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    // max-w-4xl on large screens for breathing room; fluid px scaling across breakpoints
    <div className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-24 md:pt-20 md:pb-48 ${className}`}>
      {children}
    </div>
  );
}
