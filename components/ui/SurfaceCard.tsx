import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function SurfaceCard({ children, className = '', hoverable = false }: SurfaceCardProps) {
  const baseClasses = "bg-bg-elevated border border-white/5 rounded-base p-6";
  const hoverClasses = hoverable 
    ? "transition-all duration-220 hover:-translate-y-1 hover:border-white/10 hover:shadow-lg hover:shadow-black/50 cursor-pointer" 
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
