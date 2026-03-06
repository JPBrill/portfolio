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
        
        {project.sections.map((section) => (
          <StorySection key={section.id} section={section} theme={project.theme} />
        ))}

        <ProjectNavigation currentProject={project} allProjects={projects} />
      </MainColumn>
    </AppShell>
  );
}
