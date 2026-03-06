// components/project/StorySection.tsx
'use client';

import { ProjectSection, ProjectTheme } from '@/lib/types';

interface StorySectionProps {
  section: ProjectSection;
  theme: ProjectTheme;
}

export function StorySection({ section, theme }: StorySectionProps) {
  return (
    <section id={section.id} className="mb-20 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-1 h-8 rounded-full" 
          style={{ backgroundColor: theme.accent }}
        />
        <h2 className="text-2xl font-semibold text-text-primary">
          {section.label}
        </h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        {typeof section.content === 'string' ? (
          <p className="text-text-secondary leading-relaxed text-lg">
            {section.content}
          </p>
        ) : (
          section.content
        )}
      </div>
    </section>
  );
}
