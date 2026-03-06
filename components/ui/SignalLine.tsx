'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface SignalLineProps {
  sections: { id: string; label: string }[];
  accentColor?: string;
}

export function SignalLine({ sections, accentColor = '#15F4D1' }: SignalLineProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      // Check if we're at the bottom of the page
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      const isBottom = window.innerHeight + window.scrollY >= scrollHeight - 50;
      
      if (isBottom && sections.length > 0) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= scrollPos) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    handleScroll(); // Call immediately on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Don't render if no sections
  if (sections.length === 0) return null;

  return (
    <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      <div className="relative">
        {/* Vertical line */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-border-subtle" 
        />
        
        {/* Section markers */}
        <div className="relative flex flex-col gap-6">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  const top = element.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="group relative flex items-center justify-end gap-3 cursor-pointer"
              aria-label={`Jump to ${section.label}`}
            >
              {/* Label (shows on hover) */}
              <span className="hidden md:block text-xs font-mono text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {section.label}
              </span>
              
              {/* Dot */}
              <motion.div
                className="w-3 h-3 rounded-full border-2 transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: activeSection === section.id ? accentColor : 'var(--color-border-subtle)',
                  backgroundColor: activeSection === section.id ? accentColor : 'transparent',
                }}
                animate={{
                  scale: activeSection === section.id ? 1.3 : 1,
                }}
                whileHover={{ scale: 1.4 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
