import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';

export const metadata = {
  title: 'Writing',
};

export default function WritingPage() {
  return (
    <AppShell>
      <MainColumn>
        <section className="mb-16">
          <div className="w-16 h-1 rounded-full mb-8 bg-accent-primary" />
          
          <h1 className="text-5xl font-bold mb-6 text-text-primary">
            Writing
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
            Thoughts on building AI-native experiences, design patterns, and the intersection 
            of psychology and interfaces.
          </p>

          <div className="text-text-secondary">
            <p className="text-base">
              Coming soon. I&apos;m working on a collection of essays and notes about:
            </p>
            
            <ul className="mt-6 space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">→</span>
                <span>Why most AI interfaces feel overwhelming and how to fix it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">→</span>
                <span>Building with AI Studio and Perplexity as collaborative tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">→</span>
                <span>Designing psychological safety into AI interactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">→</span>
                <span>The case for opinionated defaults in modern UX</span>
              </li>
            </ul>
          </div>
        </section>
      </MainColumn>
    </AppShell>
  );
}
