'use client';

import { Project } from '@/lib/types';
import { Tag } from '../ui/Tag';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="mb-16 md:mb-24 w-full block">
      <div
        className="w-16 h-1 rounded-full mb-8"
        style={{ backgroundColor: project.theme.accent }}
      />

      {/* block + w-full prevents title from shrinking to intrinsic width */}
      <h1 className="block w-full text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary leading-tight">
        {project.title}
      </h1>

      <p className="block w-full text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
        {project.oneLiner}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div>
          <div className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-1">Role</div>
          <div className="text-sm text-text-secondary">{project.role}</div>
        </div>
        <div>
          <div className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-1">Timeline</div>
          <div className="text-sm text-text-secondary">{project.timeframe}</div>
        </div>
        {project.outcomes.map((outcome) => (
          <div key={outcome.label}>
            <div className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-1">{outcome.label}</div>
            <div className="text-2xl font-bold" style={{ color: project.theme.accent }}>
              {outcome.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map(tech => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </section>
  );
}
