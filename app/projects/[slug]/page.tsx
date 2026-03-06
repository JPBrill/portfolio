// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';
import { ProjectHero } from '@/components/project/ProjectHero';
import { StorySection } from '@/components/project/StorySection';
import { SignalLine } from '@/components/ui/SignalLine';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
        <ProjectHero project={project} />
        
        {project.sections.map((section) => (
          <StorySection key={section.id} section={section} theme={project.theme} />
        ))}
      </MainColumn>
    </AppShell>
  );
}
