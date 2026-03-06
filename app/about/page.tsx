import { AppShell } from '@/components/layout/AppShell';
import { MainColumn } from '@/components/layout/MainColumn';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <AppShell>
      <MainColumn>
        <section className="mb-16">
          <div className="w-16 h-1 rounded-full mb-8 bg-accent-primary" />
          
          <h1 className="text-5xl font-bold mb-6 text-text-primary">
            About Me
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              I build AI-native applications that feel inevitable, not artificial. My approach combines 
              psychological UX thinking with modern AI tools to create experiences that naturally please users.
            </p>

            <SectionHeader 
              title="Philosophy" 
              description="How I approach building with AI"
            />
            
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg mb-12">
              <p>
                Most AI interfaces feel like they're shouting at you—constant popups, aggressive suggestions, 
                overwhelming options. I believe AI should act as a calm instrument: powerful when you need it, 
                invisible when you don't.
              </p>
              
              <p>
                I work with tools like Perplexity for research, Google AI Studio for development, and deploy 
                everything on Vercel. This entire workflow happens online—no local IDE, no complex setups. 
                Just focused building with AI as a collaborative partner.
              </p>
              
              <p>
                Every project follows three principles: opinionated defaults, reversible decisions, and 
                psychological consideration in every interaction. The goal isn't just to build functional 
                tools—it's to create experiences that feel right.
              </p>
            </div>

            <SectionHeader 
              title="Background" 
              description="Experience and skills"
            />
            
            <div className="text-text-secondary leading-relaxed text-lg mb-12">
              <p className="mb-4">
                Based in Margate, South Africa, I specialize in:
              </p>
              
              <ul className="space-y-2 list-disc list-inside">
                <li>Building AI-native applications with React, Next.js, and TypeScript</li>
                <li>Designing psychological UX patterns that reduce cognitive load</li>
                <li>Integrating modern AI APIs (OpenAI, Claude, Gemini) into production systems</li>
                <li>Creating design systems that serve as visual signatures across projects</li>
              </ul>
            </div>

            <SectionHeader 
              title="Currently" 
              description="What I'm working on now"
            />
            
            <div className="text-text-secondary leading-relaxed text-lg">
              <p>
                Exploring new interaction paradigms for AI interfaces, building this portfolio as a living 
                example of the AIRA design language, and researching how color psychology can create unique 
                project identities within a cohesive system.
              </p>
            </div>
          </div>
        </section>
      </MainColumn>
    </AppShell>
  );
}
