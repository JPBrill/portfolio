import { ReactNode } from 'react';

export function MainColumn({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    // pr-14 on mobile, pr-16 on md+ ensures content never slides under the fixed SignalLine dots on the right
    <div className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pr-14 md:pr-16 pt-10 pb-24 md:pt-20 md:pb-48 ${className}`}>
      {children}
    </div>
  );
}