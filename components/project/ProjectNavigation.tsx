'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/lib/types';

interface ProjectNavigationProps {
  currentProject: Project;
  allProjects: Project[];
}

export function ProjectNavigation({ currentProject, allProjects }: ProjectNavigationProps) {
  const currentIndex = allProjects.findIndex(p => p.slug === currentProject.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  if (!prevProject && !nextProject) return null;

  return (
    <nav className="mt-24 pt-12 border-t border-border-subtle">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Previous project */}
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex-1 flex items-start gap-4 p-6 rounded-base border border-border-subtle hover:border-border-medium bg-bg-elevated hover:bg-bg-hover transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-text-tertiary mt-1 transition-transform duration-200 group-hover:-translate-x-1 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-1">
                Previous
              </div>
              <div className="text-base font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                {prevProject.title}
              </div>
              <div className="text-sm text-text-secondary mt-1 line-clamp-2">
                {prevProject.oneLiner}
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex-1 hidden md:block" />
        )}

        {/* Next project */}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex-1 flex items-start gap-4 p-6 rounded-base border border-border-subtle hover:border-border-medium bg-bg-elevated hover:bg-bg-hover transition-all duration-200"
          >
            <div className="flex-1 min-w-0 md:text-right">
              <div className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-1">
                Next
              </div>
              <div className="text-base font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
                {nextProject.title}
              </div>
              <div className="text-sm text-text-secondary mt-1 line-clamp-2">
                {nextProject.oneLiner}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-text-tertiary mt-1 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
          </Link>
        ) : (
          <div className="flex-1 hidden md:block" />
        )}
      </div>
    </nav>
  );
}
