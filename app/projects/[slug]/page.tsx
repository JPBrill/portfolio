import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';
import { ProjectHero } from '@/components/project/ProjectHero';
import { StorySection } from '@/components/project/StorySection';
import { SignalLine } from '@/components/ui/SignalLine';
import { BackButton } from '@/components/ui/BackButton';
import { ProjectNavigation } from '@/components/project/ProjectNavigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: project.title,
      description: project.oneLiner,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) notFound();

  const sections = project.sections.map(s => ({ id: s.id, label: s.label }));

  return (
    <AppShell theme={project.theme}>
      <SignalLine sections={sections} accentColor={project.theme.accent} />
      
      <MainColumn>
        <div className="mb-8">
          <BackButton fallbackUrl="/" />
        </div>

        <ProjectHero project={project} />
        
        <ProjectHero project={project} />

{/* Live Demo block — only renders if project has a live link */}
{project.links?.live && (
  <div className="my-10">
    <div
      className="flex items-center justify-between mb-3"
      style={{ color: project.theme.accent }}
    >
      <span className="text-xs uppercase tracking-widest font-medium opacity-70">
        Live Application
      </span>
      <div className="flex gap-3">
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest px-4 py-1.5 rounded border transition-all duration-200 hover:opacity-80"
          style={{
            borderColor: project.theme.accent,
            color: project.theme.accent,
          }}
        >
          Open ↗
        </a>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest px-4 py-1.5 rounded border border-white/10 text-white/40 hover:text-white/60 transition-all duration-200"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>

    {/* Iframe embed */}
    <div
      className="w-full rounded-lg overflow-hidden border"
      style={{ borderColor: `${project.theme.accent}30`, height: '560px' }}
    >
      <iframe
        src={project.links.live}
        className="w-full h-full"
        title={`${project.title} — Live Demo`}
        loading="lazy"
      />
    </div>
  </div>
)}

{project.sections.map((section) => (
  <StorySection key={section.id} section={section} theme={project.theme} />
))}


        {project.sections.map((section) => (
          <StorySection key={section.id} section={section} theme={project.theme} />
        ))}

        <ProjectNavigation currentProject={project} allProjects={projects} />
      </MainColumn>
    </AppShell>
  );
}
