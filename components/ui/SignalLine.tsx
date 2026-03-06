// components/ui/SignalLine.tsx
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-30">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle" />
        
        {/* Section markers */}
        <div className="relative flex flex-col gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex items-center justify-end gap-3"
            >
              {/* Label (shows on hover) */}
              <span className="text-xs font-mono text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {section.label}
              </span>
              
              {/* Dot */}
              <motion.div
                className="w-2 h-2 rounded-full border-2 transition-all duration-200"
                style={{
                  borderColor: activeSection === section.id ? accentColor : 'var(--color-border-subtle)',
                  backgroundColor: activeSection === section.id ? accentColor : 'transparent',
                }}
                animate={{
                  scale: activeSection === section.id ? 1.2 : 1,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
