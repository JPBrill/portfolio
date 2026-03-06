'use client';

import { Project } from '@/lib/types';
import { Tag } from '../ui/Tag';
import { motion } from 'motion/react';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="py-12 md:py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span 
            className="w-3 h-3 rounded-full animate-pulse" 
            style={{ backgroundColor: project.theme.accent }}
          />
          <span className="text-sm font-mono text-text-secondary uppercase tracking-widest">
            {project.timeframe}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-text-primary leading-[1.1] max-w-3xl mb-6">
          {project.title}
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-12">
          {project.oneLiner}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
          <div className="md:col-span-1">
            <div className="text-xs font-mono text-text-secondary/70 uppercase tracking-widest mb-2">Role</div>
            <div className="text-sm text-text-primary">{project.role}</div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-mono text-text-secondary/70 uppercase tracking-widest mb-2">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
