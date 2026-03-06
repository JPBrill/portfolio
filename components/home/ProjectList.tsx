import { projects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from '../ui/SectionHeader';

export function ProjectList() {
  return (
    <section className="mb-32">
      <SectionHeader 
        title="Selected Work" 
        subtitle="A collection of case studies focusing on AI-native experiences, from initial concept to shipped product." 
      />
      
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
