import { Project } from '@/lib/types';
import { AppShell } from '../layout/AppShell';
import { MainColumn } from '../layout/MainColumn';
import { ProjectHero } from './ProjectHero';
import { StorySection } from './StorySection';
import { SignalLine } from './SignalLine';
import { SurfaceCard } from '../ui/SurfaceCard';

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <AppShell theme={project.theme}>
      <MainColumn className="relative z-10">
        <SignalLine theme={project.theme} />
        
        <ProjectHero project={project} />
        
        <div className="mt-16 mb-32">
          {project.sections.map((section, index) => (
            <StorySection 
              key={section.id} 
              section={section} 
              theme={project.theme} 
              index={index} 
            />
          ))}
        </div>

        <section className="py-16 md:py-24 border-t border-white/5 relative z-10">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary mb-12">
            Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.outcomes.map((outcome, index) => (
              <SurfaceCard key={index} className="flex flex-col items-center justify-center text-center p-8 md:p-12">
                <div 
                  className="text-4xl md:text-5xl font-semibold mb-4" 
                  style={{ color: project.theme.accent }}
                >
                  {outcome.value}
                </div>
                <div className="text-sm font-mono text-text-secondary uppercase tracking-widest">
                  {outcome.label}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </section>
      </MainColumn>
    </AppShell>
  );
}
