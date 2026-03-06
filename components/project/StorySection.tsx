'use client';

import { ProjectSection, ProjectTheme } from '@/lib/types';
import { motion } from 'motion/react';

interface StorySectionProps {
  section: ProjectSection;
  theme: ProjectTheme;
  index: number;
}

export function StorySection({ section, theme, index }: StorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-16 md:py-24 border-t border-white/5 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary mb-2">
              {section.label}
            </h2>
            <div 
              className="w-8 h-1 rounded-full mb-6" 
              style={{ backgroundColor: theme.accent }}
            />
            <span className="text-xs font-mono text-text-secondary/70 uppercase tracking-widest">
              0{index + 1} {'//'} {section.kind}
            </span>
          </div>
        </div>
        
        <div className="md:col-span-8 prose prose-invert md:prose-lg max-w-none">
          <p className="text-text-secondary leading-relaxed">
            {section.content}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
