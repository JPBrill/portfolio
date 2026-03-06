'use client';

import { Project } from '@/lib/types';
import { SurfaceCard } from '../ui/SurfaceCard';
import { Tag } from '../ui/Tag';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <SurfaceCard hoverable className="relative overflow-hidden">
          {/* Accent Glow */}
          <div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ backgroundColor: project.theme.accent }}
          />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
      <div 
        className="w-1 h-6 rounded-full" 
        style={{ backgroundColor: project.theme.accent }}
      />
      <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
        {project.title}
      </h3>
    </div>
              
              <p className="text-text-secondary text-base mb-6 max-w-xl leading-relaxed">
                {project.oneLiner}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1 text-sm font-mono text-text-secondary/70">
              <span>{project.timeframe}</span>
              <span>{project.role}</span>
            </div>
          </div>
        </SurfaceCard>
      </Link>
    </motion.div>
  );
}
