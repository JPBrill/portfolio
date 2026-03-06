'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  fallbackUrl?: string;
  label?: string;
  className?: string;
}

export function BackButton({ 
  fallbackUrl = '/', 
  label = 'Back',
  className = ''
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // Fallback to home or specified URL if no history
      router.push(fallbackUrl);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-180 ${className}`}
      aria-label="Go back to previous page"
    >
      <ArrowLeft 
        className="w-4 h-4 transition-transform duration-180 group-hover:-translate-x-1" 
      />
      <span>{label}</span>
    </button>
  );
}
