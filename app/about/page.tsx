import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function About() {
  return (
    <AppShell>
      <MainColumn>
        <SectionHeader title="About" subtitle="A brief history of my work and philosophy." />
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary leading-relaxed">
            I am a product designer and engineer focused on building AI-native experiences.
            My work explores the intersection of machine learning, human-computer interaction,
            and generative UI.
          </p>
        </div>
      </MainColumn>
    </AppShell>
  );
}
