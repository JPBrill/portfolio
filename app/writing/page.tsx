import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function Writing() {
  return (
    <AppShell>
      <MainColumn>
        <SectionHeader title="Writing" subtitle="Thoughts, essays, and explorations on AI and design." />
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary leading-relaxed">
            Coming soon. I am currently working on a series of essays about agentic workflows and
            the future of software interfaces.
          </p>
        </div>
      </MainColumn>
    </AppShell>
  );
}
